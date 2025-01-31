import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// component
import Sidebar from "./Sidebar";

// icons
import { faHome, faList, faArchway } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Features",
      path: "/",
      icon: faList,
    },
    {
      name: "Roadmap",
      path: "/",
      icon: faArchway,
    },
  ];

  return (
    <>
      <div className="px-40 flex justify-between items-center py-1 bg-white text-zinc-900 shadow-md">
        <h1 className="text-2xl">Title Coin</h1>
        {/* Desktop Menu */}
        <div className="text-lg gap-8 tracking-wide font-semibold hidden md:flex">
          {links.map((link, index) => (
            <a
              href={link.path}
              key={index}
              className="hover:text-blue-500 active:text-blue-500"
            >
              {link.name}
            </a>
          ))}
          {/* <Link
            to="/home"
            className={`relative group ${
              location.hash === "/home" ? "scale-x-100" : ""
            }`}
          >
            <div
              className={`h-1 w-full top-6 bg-blue-700 absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in ${
                location.hash === "/home" ? "scale-x-100" : ""
              }`}
            ></div>
            Home
          </Link>
          <Link
            to="/features"
            className={`relative group ${
              location.hash === "/features" ? "scale-x-100" : ""
            }`}
          >
            <div
              className={`h-1 w-full top-6 bg-blue-700 absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in ${
                location.hash === "/features" ? "scale-x-100" : ""
              }`}
            ></div>
            Features
          </Link>
          <Link
            to="/roadmap"
            className={`relative group ${
              location.hash === "/roadmap" ? "scale-x-100" : ""
            }`}
          >
            <div
              className={`h-1 w-full top-6 bg-blue-700 absolute scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in ${
                location.hash === "/roadmap" ? "scale-x-100" : ""
              }`}
            ></div>
            Roadmap
          </Link> */}
        </div>
        {/* Mobile Menu */}
        <div
          className="flex flex-col gap-1.5 md:hidden group active"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {/* Bar */}
          <div
            className={`h-1 w-8 bg-blue-700 transition-all duration-300 ${
              showSidebar ? "transform translate-y-3 rotate-45" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-8 bg-blue-700 transition-all duration-300 ${
              showSidebar ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-8 bg-blue-700 transition-all duration-300 ${
              showSidebar ? "transform -translate-y-2 -rotate-45" : ""
            }`}
          ></div>
        </div>
      </div>
      {/* Sidebar */}
      {showSidebar && (
        <Sidebar
          isActive={showSidebar}
          close={() => setShowSidebar(false)}
          links={links}
        />
      )}
    </>
  );
}
