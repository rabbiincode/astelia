"use client";

import RiskContainerItem from "@/components/dashboard/RiskContainerItem";
import RiskContainerServer from "@/components/dashboard/RiskContainerServer";
import Server from "@/components/dashboard/Server";
import ServerStatus from "@/components/dashboard/ServerStatus";
import CustomEdge from "@/components/workflow/CustomEdge";
import ServerInfo from "@/components/workflow/ServerInfo";
import ServerState from "@/components/workflow/ServerState";
import ServerUsers from "@/components/workflow/ServerUsers";
import { DescriptionItems } from "@/constants/DescriptionItems.constants";
import { RiskContainerServers } from "@/constants/RiskContainerServers.constants";
import { RiskItems } from "@/constants/RiskItems.constants";
import { ServerStatuses } from "@/constants/ServerStatuses.constants";
import { Servers } from "@/constants/Servers.constants";
import { initialEdges, initialNodes } from "@/constants/Workflow.constants";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ReactFlow, {
  Connection,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import DescriptionItem from "../../../src/components/dashboard/DescriptionItem";
import "../../globals.css";
import NodePopoverUsers from "@/components/workflow/NodePopoverUsers";

const nodeTypes = {
  "server-users": ServerUsers,
  "server-1": ServerInfo,
  "server-2": ServerInfo,
  "server-state": ServerState,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const router = useRouter();

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    if (!user && !userSession) {
      router.push("/signin");
    }
  }, []);

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length + 1}`,
        type: "customEdge",
      };
      setEdges((prevEgdes: any) => addEdge(edge, prevEgdes));
    },
    [setEdges]
  );

  return (
    <div className="w-full h-screen bg-white flex justify-between gap-8 pr-6 py-6 max-[1050px]:flex-col  max-[1050px]:w-full">
      {/* Description */}
      <div className="description">
        {/* Intro section */}
        <div className="intro-wrapper">
          <h3>Description</h3>
          <p className="intro-text">
            Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque
            gravida nibh et magna faucibus. Dui commodo ut metus amet egestas
            habitant viverra. Quisque fusce senectus facilisis non diam leo
            nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla
            vestibulum.
          </p>

          <div className="intro-wrapper-2">
            <h3>Extra</h3>
            <p className="intro-text">
              Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing
              fames egestas tellus dis pretium tempus. Justo nisl nisl lorem
              lectus id ornare. Rhoncus in egestas in amet porttitor
              pellentesque sit. Amet gravida integer velit felis. Eu consectetur
              interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a
              aliquam eu quisque commodo lectus. Lectus ipsum velit purus
              viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris
              urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum
              habitant congue massa in etiam sit. Commodo nibh viverra lobortis
              augue lorem quam lorem suspendisse.
            </p>
          </div>
        </div>

        {/* Description section */}
        <div className="description-wrapper">
          {DescriptionItems.map(
            ({ heading, icon, iconColor, isIcon, text }) => (
              <DescriptionItem
                key={heading}
                heading={heading}
                icon={icon}
                iconColor={iconColor}
                isIcon={isIcon}
                text={text}
              />
            )
          )}
        </div>

        {/* Servers section */}
        <div className="servers-wrapper">
          <p className="servers-heading">Lorem Ipsum Dolor Sit</p>

          <div className="servers-wrapper-flex">
            {Servers.map(({ name, text, text2, description }) => (
              <Server
                key={name}
                name={name}
                text={text}
                text2={text2}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div className="graph">
        {/* Flowchart */}
        <div className="flowchart-container">
          <p className="flowchart-heading">Servers</p>

          <div className="flowchart-wrapper">
            <div className="flowchart-chart-wrapper">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onConnect={onConnect}
                fitView
              >
                {/* <Background /> */}
                {/* <Controls /> */}
              </ReactFlow>
            </div>

            <div className="flowchart-status-wrapper">
              {ServerStatuses.map(({ name, icon, status }) => (
                <ServerStatus
                  key={name}
                  name={name}
                  icon={icon}
                  status={status}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Graph */}
        <div className="graph-container">
          <p className="graph-container-heading">Servers Risk Analytics</p>

          {/* <NodePopoverUsers nodeData={""} /> */}

          <div className="risk-wrapper">
            {/* Risk container */}
            <div className="risk-container">
              <div className="risk-container-header">
                <p className="risk-container-header-text">Asset</p>
                <p className="risk-container-header-text">Contextual Risk</p>
              </div>

              <div className="risk-container-servers">
                {RiskContainerServers.map(({ name, text, icon, status }) => (
                  <RiskContainerServer
                    key={name}
                    name={name}
                    text={text}
                    icon={icon}
                    status={status}
                  />
                ))}
              </div>

              <div className="pagination-container">
                <FaChevronLeft
                  className="chevron-back"
                  color="#C2C6CE"
                  size={12}
                />
                <span className="pagination-info">Showing 1 - 2 of 2</span>
                <FaChevronRight
                  className="chevron-forward"
                  color="#858D9D"
                  size={12}
                />
              </div>
            </div>

            {/* Risk graph */}
            <div className="risk-graph-container">
              <div className="risk-graph-container-header">
                <p className="risk-graph-container-header-text">
                  Contextual Risk
                </p>
              </div>

              <div className="risk-graph-flex">
                <div className="risk-graph-flex-container">
                  {RiskItems.map(({ icon, value, status }) => (
                    <RiskContainerItem
                      key={status}
                      icon={icon}
                      value={value}
                      status={status}
                    />
                  ))}
                </div>
                <div className="risk-graph-value">2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
