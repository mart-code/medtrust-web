"use client";
import { useAuth } from "@/components/providers/auth-provider";
import { OrganisationProfile } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Plus } from "lucide-react";

export default function OrganisationDashboard() {
  const { user } = useAuth();
  const profile = user?.profile as OrganisationProfile | null;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{profile?.name}</h1>
          <p className="text-muted-foreground text-sm">Health programme management</p>
        </div>
        {profile?.approvalStatus && (
          <Badge variant={profile.approvalStatus === "approved" ? "success" : profile.approvalStatus === "rejected" ? "destructive" : "warning"} className="capitalize">
            {profile.approvalStatus}
          </Badge>
        )}
      </div>

      {profile?.approvalStatus === "pending" && (
        <Card className="border-yellow-200 bg-yellow-50 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-yellow-800">Account pending review</CardTitle>
            <CardDescription className="text-yellow-700">Your organisation is being reviewed by the MedTrust admin team.</CardDescription>
          </CardHeader>
        </Card>
      )}

      <Card className="border-slate-200 bg-white/90 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Programmes</CardTitle>
              <CardDescription>Create and manage your health programmes</CardDescription>
            </div>
            <Button asChild size="sm">
              <Link href="/organisation/programmes/new">
                <Plus className="h-4 w-4 mr-1" />
                New Programme
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No programmes yet. Create your first one.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
