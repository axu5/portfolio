"use client";

import { useMouse } from "@uidotdev/usehooks";

const GRID_COLS = 16;

export function BackgroundGrid() {
  const [mouse] = useMouse();
  const squareWidth = window.innerWidth / GRID_COLS;
  const gridRows = window.innerHeight / squareWidth;
  const xRatio = mouse.x / window.innerWidth;
  const yRatio = mouse.y / window.innerHeight;
  const gridPosX = (xRatio * GRID_COLS) | 0;
  const gridPosY =
    ((yRatio * gridRows) | 0) * squareWidth + squareWidth <= window.innerHeight
      ? (yRatio * gridRows) | 0
      : // cheat a little and attach to bottom
        (window.innerHeight - squareWidth) / squareWidth;

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
