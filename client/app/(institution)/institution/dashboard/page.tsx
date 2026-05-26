"use client";
import { useAuth } from "@/components/providers/auth-provider";
import { InstitutionProfile } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function InstitutionDashboard() {
  const { user } = useAuth();
  const profile = user?.profile as InstitutionProfile | null;
  const institution = profile?.institution;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{institution?.name ?? "Medical Centre"}</h1>
          <p className="text-muted-foreground text-sm">{institution?.address}</p>
        </div>
        {institution?.approvalStatus && (
          <Badge variant={institution.approvalStatus === "approved" ? "success" : institution.approvalStatus === "rejected" ? "destructive" : "warning"} className="capitalize">
            {institution.approvalStatus}
          </Badge>
        )}
      </div>

      {institution?.approvalStatus === "pending" && (
        <Card className="border-yellow-200 bg-yellow-50 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-yellow-800">Centre pending review</CardTitle>
            <CardDescription className="text-yellow-700">Once approved, your centre will appear on the map and accept doctor affiliations.</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
