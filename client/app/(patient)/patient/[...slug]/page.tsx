import { RoutePage } from "@/components/layout/route-page";

const PAGE_CONTENT: Record<string, { title: string; description: string }> = {
  doctors: {
    title: "Find Doctors",
    description: "Search specialists, review availability, and connect with the right care team from your dashboard.",
  },
  connections: {
    title: "My Doctors",
    description: "Track your doctor relationships, open requests, and shared care history in one place.",
  },
  programmes: {
    title: "Programmes",
    description: "Browse active health programmes and discover options that match your goals and medical needs.",
  },
  messages: {
    title: "Messages",
    description: "Review secure conversations with doctors and care coordinators without leaving the patient workspace.",
  },
  "ai/symptoms": {
    title: "AI Analysis",
    description: "Start a guided symptom review and prepare the context you want to share with a clinician.",
  },
  map: {
    title: "Find Centres",
    description: "Explore nearby clinics, hospitals, and support centres from the patient map experience.",
  },
  notifications: {
    title: "Notifications",
    description: "Stay on top of programme updates, connection requests, and appointment-related activity.",
  },
  profile: {
    title: "Profile",
    description: "Manage your account details, health identity, and personal information from a single place.",
  },
};

export default async function PatientRoutePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  const content = PAGE_CONTENT[key] ?? {
    title: slug.map((segment) => segment.replace(/-/g, " ")).join(" / "),
    description: "This patient dashboard route is now active and ready for the next feature implementation.",
  };

  return (
    <RoutePage
      eyebrow="Patient Workspace"
      title={content.title}
      description={content.description}
      ctaHref="/patient/dashboard"
      ctaLabel="Back to dashboard"
    />
  );
}
