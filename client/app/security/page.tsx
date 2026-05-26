import Navbar from "@/components/landing/Navbar";
import { RoutePage } from "@/components/layout/route-page";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <RoutePage
          eyebrow="Public Page"
          title="Security"
          description="Review the security posture, privacy commitments, and operational controls that support MedTrust."
        />
      </main>
    </div>
  );
}
