'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stethoscope, Building2, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    { label: 'Pending Doctors', icon: Stethoscope, href: '/admin/approvals/doctors', count: '—' },
    { label: 'Pending Institutions', icon: Building2, href: '/admin/approvals/institutions', count: '—' },
    { label: 'Pending Organisations', icon: Users, href: '/admin/approvals/organisations', count: '—' },
    { label: 'Pending Programmes', icon: BookOpen, href: '/admin/approvals/programmes', count: '—' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground text-sm">Platform overview and approval queue</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <stat.icon className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-primary">{stat.count}</span>
              </div>
              <CardTitle className="text-sm mt-2">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link href={stat.href}>Review</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
