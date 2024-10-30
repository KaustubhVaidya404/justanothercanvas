import { Node } from "@xyflow/react";

// Define the structure of your node (you can extend this in the future)
interface CreateNodeProps {
  id: string;
  data: string;
  position: { x: number; y: number };
}

// Function to create a new node
export const CreateNode = ({ id, data, position }: CreateNodeProps): Node => {
  return {
    id,
    type: "text",
    position,
    data: { label: data },
  };
};
