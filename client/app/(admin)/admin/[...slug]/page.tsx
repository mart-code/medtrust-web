import { RoutePage } from "@/components/layout/route-page";

const PAGE_CONTENT: Record<string, { title: string; description: string }> = {
  "approvals/doctors": {
    title: "Doctor Approvals",
    description: "Review doctor onboarding requests, credentials, and approval decisions from the admin queue.",
  },
  "approvals/institutions": {
    title: "Institution Approvals",
    description: "Review new hospital and clinic applications before they appear across the platform.",
  },
  "approvals/organisations": {
    title: "Organisation Approvals",
    description: "Assess organisation registrations and confirm which groups can publish programmes.",
  },
  "approvals/programmes": {
    title: "Programme Approvals",
    description: "Moderate submitted programmes and move approved initiatives into the active catalogue.",
  },
  users: {
    title: "All Users",
    description: "Access the administrative entry point for user management, support, and audit workflows.",
  },
  settings: {
    title: "Settings",
    description: "Prepare platform-wide configuration, policy, and operational settings here.",
  },
};

export default async function AdminRoutePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  const content = PAGE_CONTENT[key] ?? {
    title: slug.map((segment) => segment.replace(/-/g, " ")).join(" / "),
    description: "This admin route is now active and ready for the next implementation milestone.",
  };

  return (
    <RoutePage
      eyebrow="Admin Workspace"
      title={content.title}
      description={content.description}
      ctaHref="/admin/dashboard"
      ctaLabel="Back to dashboard"
    />
  );
}
