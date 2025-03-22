"use client";

import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
import { File } from "lucide-react"; // Icône pour "Export"

export function TopBar() {
  return (
    // Header avec flex et justify-between pour séparer la zone gauche et la zone droite
    <header className="flex h-16 shrink-0 items-center border-b px-3 justify-between">
      {/* Zone de gauche : sidebar trigger + breadcrumb */}
      <div className="flex items-center gap-2">
        {/* Bouton qui permet d’ouvrir/réduire la sidebar (Shadcn) */}
        <SidebarTrigger />

        {/* Barre verticale de séparation */}
        <Separator orientation="vertical" className="mr-2 h-4" />

        {/* Fil d’Ariane (breadcrumb) */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">
                Building Your Application
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Zone de droite : trois boutons */}
      <div className="flex items-center gap-2">
        {/* 1) Bouton Save (fond sombre) */}
        <Button variant="default" className="bg-black text-white hover:bg-gray-900">
          Save
        </Button>

        {/* 2) Bouton Export (outline) */}
        <Button variant="outline">
          <File className="mr-2 h-4 w-4" />
          Export
        </Button>

        {/* 3) Bouton ... (ghost) */}
        <Button variant="ghost">...</Button>
      </div>
    </header>
  );
}
