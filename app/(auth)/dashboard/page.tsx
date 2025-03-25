// app/(auth)/dashboard/page.tsx
"use client";

import React from "react";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { HomeBody } from "@/components/doc-body/home-body";
import { DocBody } from "@/components/doc-body/doc-body";

export default function DashboardPage() {
  // Récupération du folder et de l’endpoint via le contexte
  const { folder, endpoint } = useBreadcrumb();

  // Détermine si on est en "Home" (c.-à-d. aucun dossier ni endpoint sélectionné)
  const isHome = !folder && !endpoint;

  return (
    <div className="h-full">
      {isHome ? <HomeBody /> : <DocBody />}
    </div>
  );
}
