"use client";

import React from "react";
import { Settings, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

/**
 * Composant principal qui regroupe header, zone de chat et zone de saisie.
 * Il est en `z-50` pour être au-dessus des autres blocs si nécessaire.
 */
export function AiAssistantPanel() {
  return (
    <div className="relative z-50 flex flex-col w-full h-full bg-white shadow-md">
      <AiAssistantHeader />
      <AiAssistantBody />
      <AiAssistantInput />
    </div>
  );
}

/**
 * 1) HEADER : titre "AI Assistant" + icône "Settings"
 */
function AiAssistantHeader() {
  return (
    <header className="flex items-center justify-between p-2 border-b">
      <h2 className="text-sm font-semibold">AI Assistant</h2>
      <Button variant="ghost" size="icon" title="Settings" aria-label="Settings">
        <Settings className="h-4 w-4" />
      </Button>
    </header>
  );
}

/**
 * 2) CORPS : zone de chat défilable (messages, réponses...)
 *    Ici, on utilise `ScrollArea` de Shadcn pour gérer le scroll stylé.
 */
function AiAssistantBody() {
  return (
    <ScrollArea className="flex-1 p-4 space-y-4">
      {/* Message de l’IA (gauche) */}
      <div className="flex items-start gap-2 pb-3">
        <Avatar className="bg-gray-900">
          <AvatarImage
            src="https://static.vecteezy.com/system/resources/previews/021/608/790/non_2x/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg"
            alt="AI Assistant"
          />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className="bg-gray-900 text-white p-2 rounded-md w-fit max-w-[70%]">
          <p className="text-sm">Hello, how can I help you?</p>
        </div>
      </div>

      {/* Message de l’utilisateur (droite) */}
      <div className="flex items-start gap-2 justify-end">
        <div className="bg-gray-200 p-2 rounded-md w-fit max-w-[70%]">
          <p className="text-sm">
            How do I structure JSON to include user status and metadata?
          </p>
        </div>
        <Avatar>
          <AvatarImage
            src="https://via.placeholder.com/40x40?text=U"
            alt="User"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </ScrollArea>
  );
}

/**
 * 3) ZONE DE SAISIE : Textarea qui peut grandir + bouton "envoyer"
 *    Tu pourras brancher la logique d'envoi (ex: onClick, onSubmit) par la suite.
 */
function AiAssistantInput() {
  return (
    <div className="border-t p-2 flex items-center gap-2">
      <Textarea
        placeholder="Type your prompt..."
        className="flex-1 resize-none"
        rows={1}
      />
      <Button variant="default" size="icon" title="Send message" aria-label="Send message">
        <ArrowUpRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
