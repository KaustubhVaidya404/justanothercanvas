"use client";

import AppBar from "@/components/appbar";
import { CanvasComponent } from "@/components/canvas";

export default function Canvas() {
  return (
    <div>
      <AppBar />
      <div className="flex flex-row justify-center items-center">
        <CanvasComponent />
      </div>
    </div>
  );
}
