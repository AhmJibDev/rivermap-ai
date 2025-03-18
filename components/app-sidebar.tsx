"use client"

import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { TeamSwitcher } from "@/components/team-switcher"
import { GalleryVerticalEnd } from "lucide-react"

// Données d'exemple pour ton team-switcher
const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>

      <SidebarContent>
        {/* Tu peux ajouter d'autres éléments de ta sidebar ici */}
      </SidebarContent>
    </Sidebar>
  )
}
