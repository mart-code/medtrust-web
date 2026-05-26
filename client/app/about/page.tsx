import Navbar from "@/components/landing/Navbar";
import { RoutePage } from "@/components/layout/route-page";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <RoutePage
          eyebrow="Public Page"
          title="About MedTrust"
          description="Learn more about the mission, product direction, and healthcare trust model behind MedTrust."
        />
      </main>
    </div>
  );
}
