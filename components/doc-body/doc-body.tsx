"use client";

import React from "react";
import { WandSparkles, CodeXml } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiAssistantPanel } from "./ai-assistant-panel";

export function DocBody() {
  // On définit l'état activeTab avec des valeurs sémantiques
  const [activeTab, setActiveTab] = React.useState<"assistant" | "code">("assistant");

  return (
    <div className="flex h-full w-full">
      {/* Bloc 1 : 5% de la largeur - Barre d'onglets verticale */}
      <div className="w-[5%] border-r bg-white flex flex-col items-center gap-4 py-4">
        {/* Bouton pour AI Assistant Mode */}
        <Button
          variant={activeTab === "assistant" ? "default" : "secondary"}
          className="h-10 w-10 cursor-pointer hover:bg-gray-400 hover:text-white"
          onClick={() => setActiveTab("assistant")}
          title="Switch to AI Assistant Mode"
          aria-label="Switch to AI Assistant Mode"
        >
          <WandSparkles className="h-6 w-6" />
        </Button>

        {/* Bouton pour Code Mode (Swagger Editor) */}
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

      {/* Bloc 2 : 45% de la largeur - Contenu dynamique en fonction de l'onglet actif */}
      <div className="w-[45%] max-w-[45%] border-r flex items-center justify-center">
        {activeTab === "assistant" ? (
          <AiAssistantPanel />
        ) : (
          <div className="text-xl">Contenu du bloc 2 (Swagger Editor)</div>
        )}
      </div>

      {/* Bloc 3 : 50% de la largeur - Zone supplémentaire */}
      <div className="w-[50%] bg-gray-600 text-white flex items-center justify-center">
        <span className="text-xl">Bloc 3</span>
      </div>
    </div>
  );
}
