"use client";

import React from "react";
// Exemples de composants Shadcn pour illustrer (Card, Button, etc.)
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function HomeBody() {
  return (
    <div className="p-4 space-y-4">
      {/* Entête de la section */}
      <div>
        <h2 className="text-xl font-bold">Projects</h2>
        <p className="text-sm text-muted-foreground">
          Create your first project by selecting a template or starting from scratch.
        </p>
      </div>

      {/* Grille de 3 options */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Option 1 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Create a list</CardTitle>
            <CardDescription>Organize tasks into simple lists.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Start
            </Button>
          </CardContent>
        </Card>

        {/* Option 2 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Create a gallery</CardTitle>
            <CardDescription>Showcase items visually and neatly.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Start
            </Button>
          </CardContent>
        </Card>

        {/* Option 3 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Create a calendar</CardTitle>
            <CardDescription>Plan events with clear schedules.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Start
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
