import Image from "next/image";
import CustomHandle from "./CustomeHandle";
import { NodeProps, Position } from "reactflow";

export default function ServerUsers({
  data: { name, ipAdress, status },
}: NodeProps<{ name: string; ipAdress: string; status: string }>) {
  return (
    <div className="server-state-node">
      <div className="server-node-container">
        <div className="server-node-flex">
          <span className="server-users-icon">
            <Image
              src="/icons/home/mask.svg"
              alt="mask"
              width={50}
              height={50}
              color="#E5372B"
            />
          </span>
        </div>

        <div className="server-node-status-container">
          <div className={`server-users-status-icon`}>
            <Image
              src="/icons/home/group.svg"
              alt="mask"
              width={25}
              height={25}
              color="#E5372B"
            />
          </div>
        </div>
      </div>

      <div className="server-node-labels">
        <p className="server-node-labels-heading">{name}</p>
        <p className="server-node-labels-text"></p>
      </div>

      <CustomHandle type="source" position={Position.Right} />
    </div>
  );
}
