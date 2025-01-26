import React from "react";

const NodePopoverUsers = ({ nodeData }: { nodeData: any }) => {
  return (
    <div className="node-popover-users">
      <div className="node-popover-users-heading">Lorem Ipsum Dolor Sit</div>
      <div className="node-popover-users-ips-container">
        <div className="node-popover-users-ips-item">1.2.3.4</div>
        <div className="node-popover-users-ips-item">1.2.3.4</div>
        <div className="node-popover-users-ips-item">1.2.3.4</div>
        <div className="node-popover-users-ips-item">1.2.3.4</div>
        <div className="node-popover-users-ips-item">1.2.3.4</div>
        <div className="node-popover-users-ips-item">1.2.3.4</div>
      </div>
      <div className="node-popover-users-bottom-info">Lorem Ipsum Dolor Sit</div>
    </div>
  );
};

export default NodePopoverUsers;
