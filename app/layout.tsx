// app/layout.tsx
"use client";

import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { BreadcrumbProvider } from "@/contexts/BreadcrumbContext";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { TopBar } from "@/components/top-bar/top-bar";
import { cn } from "@/lib/utils"; // Helper pour concaténer des classes conditionnelles
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <SidebarProvider>
          <BreadcrumbProvider>
            <LayoutContent>{children}</LayoutContent>
          </BreadcrumbProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}

/**
 * LayoutContent récupère l'état de la sidebar (expanded ou collapsed)
 * pour ajuster la largeur de la sidebar : 255px si "expanded", 80px si "collapsed".
 * Il contient la TopBar et le contenu principal.
 */
function LayoutContent({ children }: { children: React.ReactNode }) {
  const { state } = useSidebar(); // "expanded" ou "collapsed"

  return (
    <div className="flex flex-1">
      {/* Sidebar avec largeur dynamique */}
      <div
        className={cn(
          "transition-all duration-300",
          state === "expanded" ? "w-[255px]" : "w-[0px]"
        )}
      >
        <AppSidebar />
      </div>

      {/* Conteneur principal (TopBar + contenu) */}
      <div className="flex flex-col flex-1">
        <TopBar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
