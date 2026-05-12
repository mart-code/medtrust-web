'use client';
import { useAuthStore } from '@/store/auth.store';
import { DoctorProfile } from '@/types';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DoctorDashboard() {
  const { user } = useAuthStore();
  const profile = user?.profile as DoctorProfile | null;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Dr. {profile?.firstName} {profile?.lastName}
          </h1>
          <p className="text-muted-foreground text-sm">{profile?.specialisation}</p>
        </div>
        {profile?.approvalStatus && (
          <Badge
            variant={
              profile.approvalStatus === 'approved'
                ? 'success'
                : profile.approvalStatus === 'rejected'
                ? 'destructive'
                : 'warning'
            }
            className="capitalize"
          >
            {profile.approvalStatus}
          </Badge>
        )}
      </div>

      {profile?.approvalStatus === 'pending' && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-yellow-800">Account pending review</CardTitle>
            <CardDescription className="text-yellow-700">
              Your account is being reviewed by the MedTrust admin team. You&apos;ll receive full access once approved.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      {profile?.approvalStatus === 'approved' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-1">
              <CardTitle className="text-3xl font-bold text-primary">0</CardTitle>
              <CardDescription>Active Patients</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-1">
              <CardTitle className="text-3xl font-bold text-primary">0</CardTitle>
              <CardDescription>Pending Requests</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-1">
              <CardTitle className="text-3xl font-bold text-primary">0</CardTitle>
              <CardDescription>Programmes Joined</CardDescription>
            </CardHeader>
          </Card>
        </div>
      )}
    </div>
  );
}
