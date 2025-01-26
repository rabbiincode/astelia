import { Edge, MarkerType, Node } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: "1",
    data: { name: "Loremipsum " },
    position: { x: 100, y: 90 },
    type: "server-users",
  },
  {
    id: "2",
    data: { name: "Loremipsu" },
    position: { x: 380, y: 90 },
    type: "server-1",
  },
  {
    id: "3",
    data: { name: "Loremipsu" },
    position: { x: 660, y: 90 },
    type: "server-2",
  },
  {
    id: "4",
    data: { name: "LoremIpsum", ipAdress: "192.168.1.2", status: "critical" },
    position: { x: 1200, y: -20 },
    type: "server-state",
  },
  {
    id: "5",
    data: { name: "LoremIpsum", ipAdress: "192.168.1.2", status: "critical" },
    position: { x: 1200, y: 190 },
    type: "server-state",
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 15,
      height: 15,
      color: "#858D9D",
    },
    style: {
      strokeWidth: 2,
      stroke: "#858D9D",
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 15,
      height: 15,
      color: "#858D9D",
    },
    style: {
      strokeWidth: 2,
      stroke: "#858D9D",
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 15,
      height: 15,
      color: "#858D9D",
    },
    style: {
      strokeWidth: 2,
      stroke: "#858D9D",
    },
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 15,
      height: 15,
      color: "#858D9D",
    },
    style: {
      strokeWidth: 2,
      stroke: "#858D9D",
    },
  },
];
