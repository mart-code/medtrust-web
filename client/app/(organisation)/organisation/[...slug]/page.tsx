import { RoutePage } from "@/components/layout/route-page";

const PAGE_CONTENT: Record<string, { title: string; description: string }> = {
  programmes: {
    title: "Programmes",
    description: "Manage the lifecycle of your community health programmes from the organisation workspace.",
  },
  "programmes/new": {
    title: "New Programme",
    description: "Create a new programme record, define its goals, and prepare it for approval.",
  },
  notifications: {
    title: "Notifications",
    description: "Review updates about approvals, engagement, and programme operations.",
  },
  profile: {
    title: "Profile",
    description: "Maintain your organisation profile, registration data, and public presence.",
  },
};

export default async function OrganisationRoutePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  const content = PAGE_CONTENT[key] ?? {
    title: slug.map((segment) => segment.replace(/-/g, " ")).join(" / "),
    description: "This organisation dashboard route is now active and ready for the next implementation pass.",
  };

  return (
    <RoutePage
      eyebrow="Organisation Workspace"
      title={content.title}
      description={content.description}
      ctaHref="/organisation/dashboard"
      ctaLabel="Back to dashboard"
    />
  );
}
