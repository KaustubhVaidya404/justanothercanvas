"use client";

import AppBar from "@/components/appbar";
import { CanvasComponent } from "@/components/canvas";
import { ReactFlowProvider } from "@xyflow/react";

export default function Canvas() {
  return (
    <div>
      <ReactFlowProvider>
        <AppBar />
        <div className="flex flex-row justify-center items-center">
          <CanvasComponent />
        </div>
      </ReactFlowProvider>
    </div>
  );
}
