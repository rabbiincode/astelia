import React from "react";
import { BsList } from "react-icons/bs";
import { LuServer } from "react-icons/lu";

const NodePopoverServerInfo = ({ nodeData }: { nodeData: Node }) => {
  return (
    <div className="node-popover-info">
      <div className="node-popover-info-header">
        <span className="node-popover-info-icon">
          <LuServer color="#1873DE" size={40} />
        </span>
        <p className="node-popover-info-title">Lorem Ipsum Dolor Sit</p>
      </div>

      <div className="node-popover-info-ips-container">
        <BsList color="#1873DE" size={40} />
        <p className="node-popover-info-ips-item">
          Lorem: Loremipsum Loremipsum
        </p>
        <p className="node-popover-info-ips-item">1.2.3.4</p>
      </div>

      <div className="node-popover-info-bottom-info">
        <p className="node-popover-info-ips-item">1.2.3.4</p>
        <p className="node-popover-info-bottom-info-title">Loremipsum</p>
        <p className="node-popover-info-ips-item">1.2.3.4</p>
        <p className="node-popover-info-ips-item">1.2.3.4</p>
      </div>
    </div>
  );
};

export default NodePopoverServerInfo;
