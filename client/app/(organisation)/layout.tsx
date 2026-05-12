import { DashboardLayout } from '@/components/layout/dashboard-layout';

export default function OrganisationLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role="organisation">{children}</DashboardLayout>;
}
