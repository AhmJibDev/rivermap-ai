"use client";

import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { TopBar } from "@/components/top-bar/top-bar";
import { cn } from "@/lib/utils"; // helper pour concaténer des classes
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <SidebarProvider>
          <LayoutContent>{children}</LayoutContent>
        </SidebarProvider>
      </body>
    </html>
  );
}

/**
 * Sous-composant qui appelle useSidebar() pour
 * récupérer l'état (expanded / collapsed) et ajuster la largeur (255px / 80px).
 */
function LayoutContent({ children }: { children: React.ReactNode }) {
  const { state } = useSidebar(); // "expanded" ou "collapsed"

  return (
    <div className="flex flex-1">
      {/* 1. Sidebar dont la largeur varie selon l'état */}
      <div
        className={cn(
          "transition-all duration-300",
          state === "expanded" ? "w-[255px]" : "w-[0px]"
        )}
      >
        <AppSidebar />
      </div>

      {/* 2. Conteneur principal : topbar + contenu */}
      <div className="flex flex-col flex-1">
        <TopBar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
