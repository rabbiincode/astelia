"use client";
import Image from "next/image";
import { signOut } from "firebase/auth";
import SidebarItem from "./SidebarItem";
import { BiMenu } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "@/firebase/firebaseConfig";
import { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { SidebarContext } from "@/context/SidebarContext";
import { SidebarFooterItems, SidebarItems } from "@/constants/SidebarItems.constants";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [user] = useAuthState(auth);
  const [active, setActive] = useState("");
  const [activeUser, setActiveUser] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { collapsed, handleCollapse } = useContext(SidebarContext);
  const [showNavigationArrow, setShowNavigationArrow] = useState(false);

  const navigationArrow =
  <button className="button" onClick={handleCollapse}>
    {
      collapsed ?
      <MdOutlineKeyboardArrowRight color="#fff" size={30} /> :
      <MdOutlineKeyboardArrowLeft color="#fff" size={30} />
    }
  </button>

  const logout = () => {
    signOut(auth);
    sessionStorage.removeItem("user");
    router.push("/signin");
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    setActiveUser(userSession!!);
  }, []);

  return (
    <div className="sidebar-wrapper"
      onMouseLeave={() => setShowNavigationArrow(false)}
      onMouseEnter={() => setShowNavigationArrow(true)}
    >
      <button className="menu-icon" onClick={toggleSidebar}>
        <BiMenu size={30} />
      </button>

      {!collapsed && navigationArrow}
      {(collapsed && showNavigationArrow) && navigationArrow}

      <aside
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        data-collapse={collapsed}
      >
        {/* Logo */}
        <div>
          <div className="logo-wrapper">
            <Image
              src="/images/logo.png"
              width={80}
              height={80}
              alt="logo"
              className="sidebar-logo"
            />
            <p className="sidebar-logoname">Astelia</p>
          </div>

          {/* Sidebar links */}
          <ul className="sidebar-list">
            {SidebarItems.map(({ name, href, icon }) => (
              <SidebarItem
                key={name}
                name={name}
                href={href}
                icon={icon}
                collapsed={collapsed}
                onclick={() => setActive(name)}
                active={active}
                route={pathname}
              />
            ))}
          </ul>
        </div>

        {/* Sidebar footer */}
        <div className="w-full h-fit bg-black py-2 ">
          <ul className="sidebar-list">
            {SidebarFooterItems.map(({ name, href, icon }) => (
              <SidebarItem
                key={name}
                name={name}
                href={href}
                icon={icon}
                collapsed={collapsed}
                onclick={() => setActive(name)}
                active={active}
                route={pathname}
              />
            ))}
          </ul>

          <div className={`sidebar-footer ${collapsed && 'sidebar-footer-collapsed'}`}>
            <div className="sidebar-footer-image">
              <FaUserCircle color="#ccc" size={30} />
              <div>
                <p className="sidebar-footer-text truncate">{user?.email}</p>
                <span className="sidebar-footer-text-2">View Profile</span>
              </div>
            </div>

            {
              !collapsed &&
              <Image
                src='/icons/sidebar/logout.svg'
                alt="logout"
                width={15} height={15}
                className=" cursor-pointer"
                onClick={logout}
              />
            }
          </div>
        </div>
      </aside>
    </div>
  );
}
