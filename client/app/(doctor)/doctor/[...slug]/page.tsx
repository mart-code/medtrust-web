import { RoutePage } from "@/components/layout/route-page";

const PAGE_CONTENT: Record<string, { title: string; description: string }> = {
  patients: {
    title: "My Patients",
    description: "Review your patient list, context, and care relationships from the doctor workspace.",
  },
  connections: {
    title: "Requests",
    description: "Manage incoming patient connection requests and decide how to respond.",
  },
  programmes: {
    title: "Programmes",
    description: "See the programmes you participate in and the opportunities available through MedTrust.",
  },
  messages: {
    title: "Messages",
    description: "Open your secure communication channel for patient and programme conversations.",
  },
  notifications: {
    title: "Notifications",
    description: "Track review updates, account activity, and patient-related alerts.",
  },
  profile: {
    title: "Profile",
    description: "Keep your public doctor profile, credentials, and practice information current.",
  },
};

export default async function DoctorRoutePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  const content = PAGE_CONTENT[key] ?? {
    title: slug.map((segment) => segment.replace(/-/g, " ")).join(" / "),
    description: "This doctor dashboard route is now active and ready for production content.",
  };

  return (
    <RoutePage
      eyebrow="Doctor Workspace"
      title={content.title}
      description={content.description}
      ctaHref="/doctor/dashboard"
      ctaLabel="Back to dashboard"
    />
  );
}
