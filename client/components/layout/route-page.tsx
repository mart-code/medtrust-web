import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface RoutePageProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function RoutePage({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
}: RoutePageProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Badge variant="secondary" className="bg-white text-sky-700 shadow-sm">
          {eyebrow}
        </Badge>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>

      <Card className="border-slate-200 bg-white/90 shadow-sm">
        <CardHeader>
          <CardTitle>Page Ready</CardTitle>
          <CardDescription>
            This navigation route now resolves correctly and is ready for feature-specific content.
          </CardDescription>
        </CardHeader>
        {(ctaHref || ctaLabel) && (
          <CardContent>
            <Button asChild>
              <Link href={ctaHref ?? "#"}>{ctaLabel ?? "Continue"}</Link>
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
