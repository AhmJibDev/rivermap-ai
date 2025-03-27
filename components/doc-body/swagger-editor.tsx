"use client";

import React from "react";
import Editor from "@monaco-editor/react";

export function SwaggerEditor() {
  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        defaultLanguage="yaml"   // Swagger/OpenAPI est souvent en YAML
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
        theme="vs-dark"         // Choix du thème, peut être "vs-dark" ou "light"
      />
    </div>
  );
}
