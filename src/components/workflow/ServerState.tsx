import Image from "next/image";
import { NodeProps, Position } from "reactflow";
import CustomHandle from "./CustomeHandle";

export default function ServerState({
  data: { name, ipAdress, status },
}: NodeProps<{ name: string; ipAdress: string; status: string }>) {
  let statusClass = "";

  if (status === "critical") {
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

        <div className="server-node-status-container">
          <div className={`server-node-status-icon ${statusClass}`}>
            {statusClass == "low" ? (
              <Image
                src='/icons/home/fail.svg'
                alt="img"
                width={22} height={22}
              />
            ) : (
              <Image
                src='/icons/home/fail.svg'
                alt="img"
                width={22} height={22}
              />
            )}
          </div>
        </div>
      </div>

      <div className="server-node-labels">
        <p className="server-node-labels-heading">{name}</p>
        <p className="server-node-labels-text">{ipAdress}</p>
      </div>

      <CustomHandle type="source" position={Position.Right} />
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
}
