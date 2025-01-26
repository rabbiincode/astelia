interface Props {
  status: string;
  icon: any;
  icon2: any;
}

const ServerNode = ({ status, icon: Icon, icon2: Icon2 }: Props) => {
  let statusClass = "";

  if (status === "severe") {
    statusClass = "severe";
  } else if (status === "high") {
    statusClass = "high";
  } else if (status === "low") {
    statusClass = "low";
  }

  return (
    <div className="server-node-container">
      <div className="server-node-flex">
        <span className="server-node-icon">
          <Icon2 color="#6236CC" size={25} />
        </span>
      </div>

      <div className="server-node-status-container">
        <div className={`server-node-status-icon ${statusClass}`}>
          <Icon color="#fff" size={15} />
        </div>
      </div>
    </div>
  );
};

export default ServerNode;
