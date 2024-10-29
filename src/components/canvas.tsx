/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  Panel,
  useReactFlow,
  ReactFlowInstance,
} from "@xyflow/react";
import { v4 as uuidv4 } from 'uuid';
import "@xyflow/react/dist/style.css";
import { Button } from "./ui/button";

const getNodeId = () => uuidv4();
//TODO: make sure the data id is generated from the server
const FLOW_KEY = "canvas-flow";

const initialNodes: any[] = [];
const initialEdges: Edge[] = [];

export function CanvasComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);
  const { setViewport } = useReactFlow();
  const onSave = useCallback(() => {
    if (!rfInstance) return;
    const flow = rfInstance.toObject();
    console.log(flow);
    localStorage.setItem(FLOW_KEY, JSON.stringify(flow));
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(FLOW_KEY) || "{}");

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport || {};
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setEdges, setNodes, setViewport]);

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { label: "Added node" },
      position: {
        x: 0,
        y: 0,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "90vw", height: "80vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Panel position="top-right">
          <div className="flex flex-col gap-2">
            <Button onClick={onSave}>Save</Button>
            <Button onClick={onRestore}>Restore</Button>
            <Button onClick={onAdd}>Add</Button>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}
