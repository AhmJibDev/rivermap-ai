"use client";

import React from "react";
import Editor from "@monaco-editor/react";

/**
 * Composant SwaggerEditor qui intègre le Monaco Editor configuré pour YAML.
 * Il permet d'éditer des spécifications Swagger/OpenAPI.
 */
export function SwaggerEditor() {
  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        defaultLanguage="yaml"   // Langage par défaut : YAML
        defaultValue={`# Écris ici ta spécification Swagger/OpenAPI
openapi: "3.0.0"
info:
  title: Sample API
  version: 1.0.0
paths:
  /example:
    get:
      summary: Example endpoint
      responses:
        '200':
          description: Successful response`}
        theme="vs-light"         // Thème de l'éditeur : vs-dark
      />
    </div>
  );
}
