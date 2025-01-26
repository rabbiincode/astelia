import React from "react";
import { Handle, NodeProps, Position } from "reactflow";

export default function Server({
  data: { amount },
}: NodeProps<{ amount: number }>) {
  return (
    <>
      <div>
        <h2>Payment</h2>
        <p>Make quick and easy payments</p>
        <Handle type="source" position={Position.Right} />
        <Handle type="target" position={Position.Left} />
      </div>

    </>
  );
}
 