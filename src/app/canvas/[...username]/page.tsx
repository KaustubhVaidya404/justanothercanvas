"use client";

import AppBar from "@/components/appbar";
import { CanvasComponent } from "@/components/canvas";
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlowProvider,
} from "@xyflow/react";

export default function Canvas() {
  return (
    <div>
      <ReactFlowProvider>
        <AppBar />
        <div className="flex flex-row justify-center items-center">
          <CanvasComponent />
        </div>
        <Background color="#000000" variant={BackgroundVariant.Dots} />
        <Controls />
      </ReactFlowProvider>
    </div>
  );
}
