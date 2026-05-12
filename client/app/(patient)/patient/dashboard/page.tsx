'use client';
import { useAuthStore } from '@/store/auth.store';
import { PatientProfile } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stethoscope, Brain, Map, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function PatientDashboard() {
  const { user } = useAuthStore();
  const profile = user?.profile as PatientProfile | null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          Welcome back{profile?.firstName ? `, ${profile.firstName}` : ''}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Here&apos;s your health overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader className="pb-2">
            <Stethoscope className="h-5 w-5 text-primary mb-1" />
            <CardTitle className="text-base">Find a Doctor</CardTitle>
            <CardDescription className="text-xs">Search by condition or specialisation</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm" className="w-full">
              <Link href="/patient/doctors">Search Doctors</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader className="pb-2">
            <Brain className="h-5 w-5 text-primary mb-1" />
            <CardTitle className="text-base">AI Health Analysis</CardTitle>
            <CardDescription className="text-xs">Describe symptoms or upload an image</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm" variant="outline" className="w-full">
              <Link href="/patient/ai/symptoms">Analyse Symptoms</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader className="pb-2">
            <BookOpen className="h-5 w-5 text-primary mb-1" />
            <CardTitle className="text-base">Health Programmes</CardTitle>
            <CardDescription className="text-xs">Join programmes suited to your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm" variant="outline" className="w-full">
              <Link href="/patient/programmes">Browse Programmes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader className="pb-2">
            <Map className="h-5 w-5 text-primary mb-1" />
            <CardTitle className="text-base">Nearby Centres</CardTitle>
            <CardDescription className="text-xs">Find medical centres near you</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm" variant="outline" className="w-full">
              <Link href="/patient/map">Open Map</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
