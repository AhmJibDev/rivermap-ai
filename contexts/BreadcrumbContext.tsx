// app/contexts/BreadcrumbContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BreadcrumbState {
  folder: string;
  endpoint: string;
}

interface BreadcrumbContextValue extends BreadcrumbState {
  setBreadcrumb: (folder: string, endpoint: string) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextValue | undefined>(undefined);

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [breadcrumb, setBreadcrumbState] = useState<BreadcrumbState>({
    folder: "",
    endpoint: "",
  });

  const setBreadcrumb = (folder: string, endpoint: string) => {
    setBreadcrumbState({ folder, endpoint });
  };

  return (
    <BreadcrumbContext.Provider value={{ ...breadcrumb, setBreadcrumb }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumb() {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumb must be used within a BreadcrumbProvider");
  }
  return context;
}
