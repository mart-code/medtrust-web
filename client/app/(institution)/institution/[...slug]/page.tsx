import { RoutePage } from "@/components/layout/route-page";

const PAGE_CONTENT: Record<string, { title: string; description: string }> = {
  doctors: {
    title: "Our Doctors",
    description: "Review clinicians linked to your institution and prepare this area for staffing workflows.",
  },
  notifications: {
    title: "Notifications",
    description: "Track approval updates, doctor affiliation activity, and institution alerts.",
  },
  profile: {
    title: "Profile",
    description: "Maintain the institution profile, address details, and discovery information shown across MedTrust.",
  },
};

export default async function InstitutionRoutePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  const content = PAGE_CONTENT[key] ?? {
    title: slug.map((segment) => segment.replace(/-/g, " ")).join(" / "),
    description: "This institution dashboard route is now active and available for future feature work.",
  };

  return (
    <RoutePage
      eyebrow="Institution Workspace"
      title={content.title}
      description={content.description}
      ctaHref="/institution/dashboard"
      ctaLabel="Back to dashboard"
    />
  );
}
