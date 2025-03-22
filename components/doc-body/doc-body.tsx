// components/doc-body/doc-body.tsx
"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; 
// Par exemple, si tu utilises le composant Tabs de Shadcn
// ou tu peux coder ta propre logique

export function DocBody() {
  return (
    <section className="p-4 flex-1 overflow-auto">
      <Tabs defaultValue="docs" className="w-full">
        <TabsList>
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="try-it">Try It</TabsTrigger>
        </TabsList>

        <TabsContent value="docs" className="mt-4">
          {/* Contenu de l’onglet Docs */}
          <h2 className="text-lg font-bold">Get User Info by User ID</h2>
          <p>Documentation détaillée...</p>
        </TabsContent>

        <TabsContent value="try-it" className="mt-4">
          {/* Contenu de l’onglet Try It */}
          <h2 className="text-lg font-bold">Tester l’endpoint</h2>
          <p>Formulaire d’appel, paramétrage, etc.</p>
        </TabsContent>
      </Tabs>
    </section>
  );
}
