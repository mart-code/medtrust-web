"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "./sidebar";
import { useAuthStore } from "@/store/store";
import { UserRole } from "@/types";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: UserRole;
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const { user, isAuthenticated, fetchMe } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      fetchMe().then(() => {
        if (!useAuthStore.getState().isAuthenticated()) {
          router.push("/login");
        }
      });
    }
  }, [isAuthenticated, fetchMe, router]);

  useEffect(() => {
    if (user && user.role !== role) {
      const dashboards: Record<UserRole, string> = {
        patient: "/patient/dashboard",
        doctor: "/doctor/dashboard",
        organisation: "/organisation/dashboard",
        institution: "/institution/dashboard",
        super_admin: "/admin/dashboard",
      };
      router.push(dashboards[user.role]);
    }
  }, [user, role, router]);

  if (!user) return null;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar role={role} />
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
