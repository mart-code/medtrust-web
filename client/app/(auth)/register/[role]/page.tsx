'use client';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { api, setTokens } from '@/lib/api';
import { useAuthStore } from '@/store/auth.store';

const baseSchema = {
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
};

const patientSchema = z
  .object({ ...baseSchema, firstName: z.string().min(1, 'Required'), lastName: z.string().min(1, 'Required') })
  .refine((d) => d.password === d.confirmPassword, { message: 'Passwords do not match', path: ['confirmPassword'] });

const doctorSchema = z
  .object({
    ...baseSchema,
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    specialisation: z.string().min(1, 'Required'),
    licenseNumber: z.string().min(1, 'Required'),
  })
  .refine((d) => d.password === d.confirmPassword, { message: 'Passwords do not match', path: ['confirmPassword'] });

const orgSchema = z
  .object({
    ...baseSchema,
    organisationName: z.string().min(1, 'Required'),
    registrationNumber: z.string().min(1, 'Required'),
  })
  .refine((d) => d.password === d.confirmPassword, { message: 'Passwords do not match', path: ['confirmPassword'] });

const institutionSchema = z
  .object({
    ...baseSchema,
    institutionName: z.string().min(1, 'Required'),
    institutionAddress: z.string().min(1, 'Required'),
    latitude: z.coerce.number().optional(),
    longitude: z.coerce.number().optional(),
  })
  .refine((d) => d.password === d.confirmPassword, { message: 'Passwords do not match', path: ['confirmPassword'] });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFormData = any;

const ROLE_CONFIG: Record<
  string,
  { title: string; description: string; schema: z.ZodType; roleId: string }
> = {
  patient: {
    title: 'Create Patient Account',
    description: 'Start finding doctors and health programmes.',
    schema: patientSchema,
    roleId: 'patient',
  },
  doctor: {
    title: 'Create Doctor Account',
    description: 'Your account will be reviewed by our admin team.',
    schema: doctorSchema,
    roleId: 'doctor',
  },
  organisation: {
    title: 'Register your Organisation',
    description: 'Create health programmes for your community.',
    schema: orgSchema,
    roleId: 'organisation',
  },
  institution: {
    title: 'Register Medical Centre',
    description: 'List your clinic or hospital on MedTrust.',
    schema: institutionSchema,
    roleId: 'institution',
  },
};

const ROLE_DASHBOARDS: Record<string, string> = {
  patient: '/patient/dashboard',
  doctor: '/doctor/dashboard',
  organisation: '/organisation/dashboard',
  institution: '/institution/dashboard',
};

export default function RegisterRolePage() {
  const { role } = useParams<{ role: string }>();
  const router = useRouter();
  const { fetchMe } = useAuthStore();
  const [serverError, setServerError] = useState('');

  const config = ROLE_CONFIG[role];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AnyFormData>({
    resolver: zodResolver((config?.schema ?? patientSchema) as any),
  });

  if (!config) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">
            Unknown role. <Link href="/register" className="text-primary">Go back</Link>
          </p>
        </CardContent>
      </Card>
    );
  }

  const onSubmit = async (data: AnyFormData) => {
    setServerError('');
    try {
      const { data: res } = await api.post('/auth/register', {
        ...data,
        role: config.roleId,
      });
      const { accessToken, refreshToken } = res.data ?? res;
      setTokens(accessToken, refreshToken);
      await fetchMe();
      router.push(ROLE_DASHBOARDS[role] ?? '/');
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { message?: string | string[] } } };
      const msg = axiosErr?.response?.data?.message;
      setServerError(Array.isArray(msg) ? msg.join(', ') : (msg ?? 'Registration failed.'));
    }
  };

  const err = errors as Record<string, { message?: string }>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{config.title}</CardTitle>
        <CardDescription>{config.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label>Email</Label>
            <Input type="email" placeholder="you@example.com" {...register('email')} />
            {err.email && <p className="text-xs text-destructive">{err.email.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label>Password</Label>
              <Input type="password" placeholder="Min. 8 chars" {...register('password')} />
              {err.password && <p className="text-xs text-destructive">{err.password.message}</p>}
            </div>
            <div className="space-y-1">
              <Label>Confirm</Label>
              <Input type="password" placeholder="Repeat password" {...register('confirmPassword')} />
              {err.confirmPassword && <p className="text-xs text-destructive">{err.confirmPassword.message}</p>}
            </div>
          </div>

          {(role === 'patient' || role === 'doctor') && (
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label>First name</Label>
                <Input {...register('firstName')} />
                {err.firstName && <p className="text-xs text-destructive">{err.firstName.message}</p>}
              </div>
              <div className="space-y-1">
                <Label>Last name</Label>
                <Input {...register('lastName')} />
                {err.lastName && <p className="text-xs text-destructive">{err.lastName.message}</p>}
              </div>
            </div>
          )}

          {role === 'doctor' && (
            <>
              <div className="space-y-1">
                <Label>Specialisation</Label>
                <Input placeholder="e.g. Cardiology, Dermatology" {...register('specialisation')} />
                {err.specialisation && <p className="text-xs text-destructive">{err.specialisation.message}</p>}
              </div>
              <div className="space-y-1">
                <Label>Medical License Number</Label>
                <Input placeholder="License / registration number" {...register('licenseNumber')} />
                {err.licenseNumber && <p className="text-xs text-destructive">{err.licenseNumber.message}</p>}
              </div>
            </>
          )}

          {role === 'organisation' && (
            <>
              <div className="space-y-1">
                <Label>Organisation Name</Label>
                <Input {...register('organisationName')} />
                {err.organisationName && <p className="text-xs text-destructive">{err.organisationName.message}</p>}
              </div>
              <div className="space-y-1">
                <Label>Registration Number</Label>
                <Input {...register('registrationNumber')} />
                {err.registrationNumber && <p className="text-xs text-destructive">{err.registrationNumber.message}</p>}
              </div>
            </>
          )}

          {role === 'institution' && (
            <>
              <div className="space-y-1">
                <Label>Institution Name</Label>
                <Input {...register('institutionName')} />
                {err.institutionName && <p className="text-xs text-destructive">{err.institutionName.message}</p>}
              </div>
              <div className="space-y-1">
                <Label>Address</Label>
                <Input placeholder="Full street address" {...register('institutionAddress')} />
                {err.institutionAddress && <p className="text-xs text-destructive">{err.institutionAddress.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Latitude <span className="text-muted-foreground">(optional)</span></Label>
                  <Input type="number" step="any" placeholder="e.g. 5.6037" {...register('latitude')} />
                </div>
                <div className="space-y-1">
                  <Label>Longitude <span className="text-muted-foreground">(optional)</span></Label>
                  <Input type="number" step="any" placeholder="e.g. -0.1870" {...register('longitude')} />
                </div>
              </div>
            </>
          )}

          {serverError && (
            <p className="text-sm text-destructive bg-destructive/10 rounded-md px-3 py-2">{serverError}</p>
          )}

          {(role === 'doctor' || role === 'institution' || role === 'organisation') && (
            <p className="text-xs text-muted-foreground bg-muted rounded-md px-3 py-2">
              Your account will be reviewed and approved by the MedTrust admin team before full access is granted.
            </p>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Creating account…' : 'Create account'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center text-sm text-muted-foreground">
        <Link href="/register" className="text-primary hover:underline">← Choose a different role</Link>
      </CardFooter>
    </Card>
  );
}
