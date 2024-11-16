"use client";

import { useMouse } from "@uidotdev/usehooks";

export function BackgroundGrid() {
  const [mouse] = useMouse();
  const gridCols = 30;
  const squareWidth = window.innerWidth / gridCols;
  const gridRows = window.innerHeight / squareWidth;
  const xRatio = mouse.x / window.innerWidth;
  const yRatio = mouse.y / window.innerHeight;
  const gridPosX = (xRatio * gridCols) | 0;
  const gridPosY = (yRatio * gridRows) | 0;

  return (
    <>
      <div
        style={{
          left: `${gridPosX * squareWidth}px`,
          top: `${gridPosY * squareWidth}px`,
          width: squareWidth,
        }}
        className="absolute -z-10 aspect-square rounded-lg border border-grid-item-background transition-all"
      ></div>
    </>
  );
}
