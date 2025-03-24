// components/sidebar/app-sidebar.tsx
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
import { PlusCircle, Upload, Folder, FolderOpen, ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { UserAccountMenu } from "@/components/sidebar/user-account-menu"; // Si séparé

// Données initiales pour la sidebar
const initialFolders = [
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
  const [folders, setFolders] = React.useState(initialFolders);

  return (
    <Sidebar>
      {/* Header de la sidebar */}
      <SidebarHeader className="flex flex-col gap-4 p-4">
        <UserAccountMenu />
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
        <Input type="text" placeholder="Search..." />
      </SidebarHeader>

      {/* Liste des dossiers et endpoints */}
      <FolderList folders={folders} />
    </Sidebar>
  );
}

function FolderList({ folders }: { folders: typeof initialFolders }) {
  const { setBreadcrumb } = useBreadcrumb();

  return (
    <SidebarContent className="space-y-2 p-2">
      {folders.map((folder) => (
        <Collapsible key={folder.name} defaultOpen className="group">
          <CollapsibleTrigger asChild>
            <div className="flex items-center cursor-pointer px-2 py-2 font-semibold hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md">
              <span className="mr-2">
                <Folder className="h-4 w-4 group-data-[state=closed]:block hidden" />
                <FolderOpen className="h-4 w-4 group-data-[state=open]:block hidden" />
              </span>
              <span className="flex-1">{folder.name}</span>
              <ChevronRight className="inline-block ml-1 h-4 w-4 align-middle transition-transform group-data-[state=open]:rotate-90" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-4 border-l pl-2 space-y-1">
            <SidebarMenu>
              {folder.endpoints.map((endpoint) => (
                <SidebarMenuItem key={endpoint.title}>
                  <SidebarMenuButton asChild>
                    <button
                      onClick={() => setBreadcrumb(folder.name, endpoint.title)}
                      className="flex items-center gap-2 text-sm"
                    >
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
  );
}

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
