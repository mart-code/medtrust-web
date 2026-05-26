"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/providers/auth-provider";
import { LayoutDashboard, User, Stethoscope, Users, BookOpen, MessageSquare, Brain, Map, Bell, Settings, LogOut, ShieldCheck, Building2, ClipboardList } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

const NAV_ITEMS: Record<string, NavItem[]> = {
  patient: [
    { href: "/patient/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/patient/doctors", label: "Find Doctors", icon: Stethoscope },
    { href: "/patient/connections", label: "My Doctors", icon: Users },
    { href: "/patient/programmes", label: "Programmes", icon: BookOpen },
    { href: "/patient/messages", label: "Messages", icon: MessageSquare },
    { href: "/patient/ai/symptoms", label: "AI Analysis", icon: Brain },
    { href: "/patient/map", label: "Find Centres", icon: Map },
    { href: "/patient/notifications", label: "Notifications", icon: Bell },
    { href: "/patient/profile", label: "Profile", icon: User },
  ],
  doctor: [
    { href: "/doctor/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/doctor/patients", label: "My Patients", icon: Users },
    { href: "/doctor/connections", label: "Requests", icon: ClipboardList },
    { href: "/doctor/programmes", label: "Programmes", icon: BookOpen },
    { href: "/doctor/messages", label: "Messages", icon: MessageSquare },
    { href: "/doctor/notifications", label: "Notifications", icon: Bell },
    { href: "/doctor/profile", label: "Profile", icon: User },
  ],
  organisation: [
    { href: "/organisation/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/organisation/programmes", label: "Programmes", icon: BookOpen },
    { href: "/organisation/notifications", label: "Notifications", icon: Bell },
    { href: "/organisation/profile", label: "Profile", icon: Building2 },
  ],
  institution: [
    { href: "/institution/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/institution/doctors", label: "Our Doctors", icon: Stethoscope },
    { href: "/institution/notifications", label: "Notifications", icon: Bell },
    { href: "/institution/profile", label: "Profile", icon: Building2 },
  ],
  super_admin: [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/approvals/doctors", label: "Doctors", icon: Stethoscope },
    { href: "/admin/approvals/institutions", label: "Institutions", icon: Building2 },
    { href: "/admin/approvals/organisations", label: "Organisations", icon: Users },
    { href: "/admin/approvals/programmes", label: "Programmes", icon: BookOpen },
    { href: "/admin/users", label: "All Users", icon: ShieldCheck },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ],
};

interface SidebarProps {
  role: string;
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const items = NAV_ITEMS[role] ?? [];

  const handleLogout = async () => {
    await logout();
  };

  return (
    <aside className="flex h-full w-72 flex-col gap-1 border-r border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 py-5 shadow-[0_1px_0_rgba(148,163,184,0.08)]">
      <div className="px-3 py-2 mb-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 shadow-sm">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-lg font-semibold text-slate-900">MedTrust</span>
        </Link>
      </div>

      <div className="px-3 mb-3">
        <Badge variant="secondary" className="capitalize border border-sky-100 bg-sky-50 text-xs text-sky-700">
          {role.replace("_", " ")}
        </Badge>
        {user && "profile" in user && user.profile && <p className="text-xs text-muted-foreground mt-1 truncate">{(user.profile as { firstName?: string; name?: string }).firstName ?? (user.profile as { name?: string }).name ?? user.email}</p>}
      </div>

      <nav className="flex-1 space-y-0.5">
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link key={item.href} href={item.href}>
              <span className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors", active ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:bg-sky-50 hover:text-slate-900")}>
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
                {item.badge && (
                  <Badge variant="destructive" className="ml-auto text-xs px-1.5 py-0">
                    {item.badge}
                  </Badge>
                )}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-2 border-t">
        <Button variant="ghost" size="sm" className="w-full justify-start gap-3 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-600" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Sign out
        </Button>
      </div>
    </aside>
  );
}
