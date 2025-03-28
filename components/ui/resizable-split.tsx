"use client";

import React from "react";

interface ResizableSplitProps {
  minPercentLeft?: number;   // pour contraindre la taille min du bloc gauche en %
  maxPercentLeft?: number;   // pour contraindre la taille max du bloc gauche en %
  initialPercentLeft?: number; 
  leftPane: React.ReactNode; // contenu du bloc gauche
  rightPane: React.ReactNode; // contenu du bloc droit
}

export function ResizableSplit({
  minPercentLeft = 20,    // ex: 20% min
  maxPercentLeft = 80,    // ex: 80% max
  initialPercentLeft = 45,
  leftPane,
  rightPane,
}: ResizableSplitProps) {
  const [leftWidth, setLeftWidth] = React.useState<number>(initialPercentLeft);

  // Réfs pour suivre si on est en train de drag
  const isDraggingRef = React.useRef(false);

  // Gère le démarrage du drag (souris)
  function onMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    isDraggingRef.current = true;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }

  // Gère le démarrage du drag (tactile)
  function onTouchStart(e: React.TouchEvent) {
    isDraggingRef.current = true;
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
  }

  // Calcul de la nouvelle largeur en %
  function handleMove(clientX: number) {
    // Largeur totale de l'écran disponible
    const totalWidth = window.innerWidth; 
    // Calcule la nouvelle largeur en pourcentage
    let newPercent = (clientX / totalWidth) * 100;
    // Contraintes min/max
    if (newPercent < minPercentLeft) newPercent = minPercentLeft;
    if (newPercent > maxPercentLeft) newPercent = maxPercentLeft;
    setLeftWidth(newPercent);
  }

  // Drag souris
  function onMouseMove(e: MouseEvent) {
    if (!isDraggingRef.current) return;
    handleMove(e.clientX);
  }
  function onMouseUp() {
    isDraggingRef.current = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  // Drag tactile
  function onTouchMove(e: TouchEvent) {
    if (!isDraggingRef.current) return;
    const touch = e.touches[0];
    handleMove(touch.clientX);
  }
  function onTouchEnd() {
    isDraggingRef.current = false;
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);
  }

  return (
    <div className="flex h-full w-full relative">
      {/* Bloc gauche */}
      <div
        className="h-full"
        style={{
          width: `${leftWidth}%`,
        }}
      >
        {leftPane}
      </div>

      {/* Barre de séparation draggable */}
      <div
        className="w-[5px] bg-gray-300 cursor-col-resize hover:bg-gray-400 transition-colors"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      />

      {/* Bloc droit */}
      <div
        className="h-full flex-1"
        style={{
          width: `${100 - leftWidth}%`,
        }}
      >
        {rightPane}
      </div>
    </div>
  );
}
