import React from "react";
import { BsList, BsShieldCheck } from "react-icons/bs";
import { LuServer } from "react-icons/lu";

const NodePopoverServerState = ({ nodeData }: { nodeData: Node }) => {
  return (
    <div className="node-popover-state">
      <div className="node-popover-state-heading">
        <div className="server-node-container">
          <div className="server-node-flex">
            <span className="server-node-icon">
              <LuServer color="#1873DE" size={40} />
            </span>
          </div>

          <div className="node-popover-state-status-container">
            <div className={`node-popover-state-status-icon`}>
              <BsShieldCheck color="#fff" size={30} />
            </div>
          </div>
        </div>
        <p className="node-popover-state-title">Lorem Ipsum Dolor Sit</p>
        <p className="node-popover-state-description">192.168.1.1</p>
      </div>

      <div className="node-popover-state-ips-container">
        <BsList color="#1873DE" size={40} />
        <p className="node-popover-state-ips-item">Lorem:</p>
        <p className="node-popover-state-ips-item-highlighted">Lorem "ipsum"</p>
      </div>

      <div className="node-popover-state-bottom-info">
        <p className="node-popover-state-bottom-info">Loremipsum</p>
        <p className="node-popover-state-ips-item">Lorem 1234, 5678</p>
      </div>
    </div>
  );
};

export default NodePopoverServerState;
