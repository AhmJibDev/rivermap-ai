"use client";

import * as React from "react";
import { Sidebar, SidebarHeader, SidebarContent } from "@/components/ui/sidebar";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, PlusCircle, Upload, Folder, FolderOpen } from "lucide-react";

// On utilise Collapsible seulement pour organiser les "dossiers" d'endpoints,
// pas pour réduire toute la sidebar.
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

// Exemples d'endpoints (données mock)
const folders = [
  {
    name: "Swagger Store",
    endpoints: [
      { method: "GET", title: "User Info by User ID" },
      { method: "POST", title: "Create new user" },
    ],
  },
  {
    name: "My Endpoints",
    endpoints: [
      { method: "GET", title: "Fetch all items" },
      { method: "DELETE", title: "Remove item by ID" },
    ],
  },
];

export function AppSidebar() {
  return (
    // Retirer la prop collapsible="icon" pour désactiver la réduction
    <Sidebar>
      {/* HEADER DE LA SIDEBAR */}
      <SidebarHeader className="flex flex-col gap-4 p-4">
        {/* 1) Menu utilisateur */}
        <UserAccountMenu />

        {/* 2) Boutons "New" et "Import" */}
        <div className="flex gap-2">
          <Button variant="secondary" className="flex-1">
            <PlusCircle className="mr-2 h-4 w-4" />
            New
          </Button>
          <Button variant="secondary" className="flex-1">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
        </div>

        {/* 3) Champ de recherche */}
        <Input type="text" placeholder="Search..." />
      </SidebarHeader>

      {/* CONTENU DE LA SIDEBAR (LISTE DES ENDPOINTS) */}
      <SidebarContent className="space-y-2 p-2">
        {folders.map((folder) => (
          /* CHANGEMENT 1: Ajout de la classe "group" pour activer l'animation sur le chevron */
          <Collapsible key={folder.name} defaultOpen className="group">
            {/* Titre du dossier */}
            <CollapsibleTrigger asChild>
              {/* CHANGEMENT 2: Ajout de l'emoji 📁 et classes pour animer le chevron */}
              <div className="flex items-center cursor-pointer px-2 py-2 font-semibold hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md">
                <span className="mr-2">
                  <Folder className="h-4 w-4 group-data-[state=closed]:block hidden" />
                  <FolderOpen className="h-4 w-4 group-data-[state=open]:block hidden" />
                </span>
                <span className="flex-1">{folder.name}</span>
                <ChevronRight
                  className="inline-block ml-1 h-4 w-4 align-middle transition-transform group-data-[state=open]:rotate-90"
                />
              </div>
            </CollapsibleTrigger>

            {/* Liste des endpoints du dossier */}
            <CollapsibleContent className="ml-4 border-l pl-2 space-y-1">
              <SidebarMenu>
                {folder.endpoints.map((endpoint) => (
                  <SidebarMenuItem key={endpoint.title}>
                    <SidebarMenuButton asChild>
                      <button className="flex items-center gap-2 text-sm">
                        {/* Badges de méthode (GET, POST, etc.) */}
                        <MethodBadge method={endpoint.method} />
                        <span>{endpoint.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

/* Composant simple pour le menu utilisateur (avatar + dropdown) */
function UserAccountMenu() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="w-full">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/583231?v=4"
                  alt="Ahmed Ait ouaret"
                />
                <AvatarFallback className="rounded-lg">AA</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-left ml-2">
                <span className="text-sm font-semibold leading-tight">
                  Ahmed Ait ouaret
                </span>
                <span className="text-xs text-muted-foreground">
                  user@example.com
                </span>
              </div>
              <ChevronDown className="ml-auto h-4 w-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-[--radix-dropdown-menu-trigger-width]"
          >
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

/* Petit composant d'affichage d'un badge de méthode HTTP */
function MethodBadge({ method }: { method: string }) {
  let colorClass = "";
  switch (method.toUpperCase()) {
    case "GET":
      colorClass = "bg-green-500 text-white";
      break;
    case "POST":
      colorClass = "bg-blue-500 text-white";
      break;
    case "PUT":
      colorClass = "bg-orange-500 text-white";
      break;
    case "DELETE":
      colorClass = "bg-red-500 text-white";
      break;
    default:
      colorClass = "bg-gray-300 text-black";
  }
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded ${colorClass}`}>
      {method.toUpperCase()}
    </span>
  );
}
