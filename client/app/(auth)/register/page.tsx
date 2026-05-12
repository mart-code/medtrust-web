'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Stethoscope, User, Building2, HeartPulse } from 'lucide-react';

const ROLES = [
  {
    id: 'patient',
    label: 'Patient',
    description: 'Find doctors, join health programmes, get AI-powered health insights.',
    icon: User,
  },
  {
    id: 'doctor',
    label: 'Doctor',
    description: 'Manage patients, join programmes, and collaborate with institutions.',
    icon: Stethoscope,
  },
  {
    id: 'organisation',
    label: 'Organisation',
    description: 'Create and manage health programmes for your community.',
    icon: HeartPulse,
  },
  {
    id: 'institution',
    label: 'Medical Centre',
    description: 'Register your clinic, hospital, or lab to appear on the map.',
    icon: Building2,
  },
] as const;

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Create your account</h2>
        <p className="text-muted-foreground text-sm mt-1">Choose how you want to use MedTrust</p>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {ROLES.map((role) => (
          <button
            key={role.id}
            onClick={() => router.push(`/register/${role.id}`)}
            className="flex items-center gap-4 rounded-lg border bg-card p-4 text-left transition-colors hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <role.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">{role.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{role.description}</p>
            </div>
          </button>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground pt-2">
        Already have an account?&nbsp;
        <Link href="/login" className="text-primary font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
