import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MedTrust | Authentication",
  description: "Authentication Page",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen">{children}</main>;
}
