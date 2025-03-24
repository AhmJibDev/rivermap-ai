"use client";

import React from "react";

// Exemple : on utilise le composant Card de Shadcn pour illustrer deux blocs
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function DocBody() {
  return (
    <div className="p-4 flex gap-4">
      {/* Container1 */}
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Container1</CardTitle>
          <CardDescription>Blocs, contenu, etc.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Ici, tu peux afficher la documentation, des formulaires, ou tout autre contenu.
          </p>
        </CardContent>
      </Card>

      {/* Container2 */}
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Container2</CardTitle>
          <CardDescription>Autre contenu, UI, etc.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Tu peux également y placer un aperçu, des logs, des résultats, etc.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
