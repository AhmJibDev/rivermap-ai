// components/top-bar/top-bar.tsx
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
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";

export function TopBar() {
  const { folder, endpoint } = useBreadcrumb();

  return (
    <header className="flex h-16 shrink-0 items-center border-b px-3 justify-between">
      {/* Zone gauche : SidebarTrigger et Breadcrumb dynamique */}
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {folder ? (
              <>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{folder}</BreadcrumbLink>
                </BreadcrumbItem>
                {endpoint && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{endpoint}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Zone droite : trois boutons */}
      <div className="flex items-center gap-2">
        <Button variant="default" className="bg-black text-white hover:bg-gray-900">
          Save
        </Button>
        <Button variant="outline">
          <File className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button variant="ghost">...</Button>
      </div>
    </header>
  );
}
