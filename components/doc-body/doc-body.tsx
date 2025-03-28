"use client";

import React from "react";
import { WandSparkles, CodeXml } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiAssistantPanel } from "./ai-assistant-panel";
import { SwaggerEditor } from "@/components/doc-body/swagger-editor";
import { ResizableSplit } from "@/components/ui/resizable-split";

/**
 * Composant DocBody qui divise l'écran en trois blocs :
 * - Bloc 1 (5% de la largeur) : Barre d'onglets verticale avec deux boutons
 * - Bloc 2 (45% de la largeur) : Zone centrale affichant dynamiquement le contenu
 *   selon l'onglet actif (soit l'éditeur AI Assistant, soit le Swagger Editor)
 * - Bloc 3 (50% de la largeur) : Zone supplémentaire (à personnaliser ultérieurement)
 */
export function DocBody() {
  // Utilisation d'un state local pour gérer l'onglet actif de manière sémantique
  const [activeTab, setActiveTab] = React.useState<"assistant" | "code">("assistant");

  return (
    <div className="flex h-full w-full">
      {/* Bloc 1 : Barre d'onglets verticale (5% de la largeur) */}
      <div className="w-[5%] border-r bg-white flex flex-col items-center gap-4 py-4">
        {/* Bouton pour le mode AI Assistant */}
        <Button
          variant={activeTab === "assistant" ? "default" : "secondary"}
          className="h-10 w-10 cursor-pointer hover:bg-gray-400 hover:text-white"
          onClick={() => setActiveTab("assistant")}
          title="Switch to AI Assistant Mode"
          aria-label="Switch to AI Assistant Mode"
        >
          <WandSparkles className="h-6 w-6" />
        </Button>

        {/* Bouton pour le mode Code (Swagger Editor) */}
        <Button
          variant={activeTab === "code" ? "default" : "secondary"}
          className="h-10 w-10 cursor-pointer hover:bg-gray-400 hover:text-white"
          onClick={() => setActiveTab("code")}
          title="Switch to Code Mode"
          aria-label="Switch to Code Mode"
        >
          <CodeXml className="h-6 w-6" />
        </Button>
      </div>

      {/* Bloc 2 : Zone centrale (45% de la largeur) */}
      <div className="w-[45%] max-w-[45%] border-r flex items-center justify-center mt-1">
        {activeTab === "assistant" ? (
          // Si l'onglet actif est "assistant", affiche le composant AiAssistantPanel
          <AiAssistantPanel />
        ) : (
          // Sinon, affiche le SwaggerEditor pour l'édition de Swagger/OpenAPI
          <SwaggerEditor />
        )}
      </div>

      {/* Bloc 3 : Zone supplémentaire (50% de la largeur) */}
      <div className="w-[50%] bg-gray-600 text-white flex items-center justify-center">
        <span className="text-xl">Bloc 3</span>
      </div>
    </div>
  );
}
