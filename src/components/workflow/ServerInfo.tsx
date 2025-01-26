import Image from "next/image";
import CustomHandle from "./CustomeHandle";
import { NodeProps, Position } from "reactflow";

export default function ServerInfo({
  data: { name, ipAdress, status },
}: NodeProps<{ name: string; ipAdress: string; status: string }>) {
  let statusClass = "";

  if (status === "severe") {
    statusClass = "severe";
  } else if (status === "high") {
    statusClass = "down";
  } else if (status === "low") {
    statusClass = "ok";
  }

  return (
    <div className="server-state-node">
      <div className="server-node-container">
        <div className="server-node-flex">
          <span className="server-node-icon">
            <Image
              src='/icons/home/block.svg'
              alt="img"
              width={45} height={45}
            />
          </span>
        </div>
      </div>

      <div className="server-node-labels">
        <p className="server-node-labels-heading">{name}</p>
        <p className="server-node-labels-text"></p>
      </div>

      <CustomHandle type="source" position={Position.Right} />
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
}
 