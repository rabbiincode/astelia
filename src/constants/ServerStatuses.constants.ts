import { BsShieldCheck, BsShieldX } from "react-icons/bs";

export const ServerStatuses = [
  {
    name: "Critical",
    icon: BsShieldX,
    status: "severe",
  },
  {
    name: "High",
    icon: BsShieldX,
    status: "down",
  },
  {
    name: "Low",
    icon: BsShieldCheck,
    status: "ok",
  },
];
