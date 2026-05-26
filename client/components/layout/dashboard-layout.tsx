"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "./sidebar";
import { useAuth } from "@/components/providers/auth-provider";
import { UserRole } from "@/types";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: UserRole;
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const { user, isAuthenticated, isLoading, verifyToken, getDashboardPath } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated || isLoading) {
      return;
    }

    verifyToken().then((verifiedUser) => {
      if (!verifiedUser) {
        router.push("/login");
      }
    });
  }, [isAuthenticated, isLoading, router, verifyToken]);

  useEffect(() => {
    if (user && user.role !== role) {
      router.push(getDashboardPath(user.role));
    }
  }, [getDashboardPath, role, router, user]);

  if (!user || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_100%)]">
        <div className="rounded-2xl border border-sky-100 bg-white px-6 py-4 text-sm text-slate-600 shadow-sm">
          Verifying your session...
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_50%,#f4f8fc_100%)]">
      <Sidebar role={role} />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
