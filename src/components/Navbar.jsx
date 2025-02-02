import { useState, useEffect } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
// component
import Sidebar from "./Sidebar";

// icons
import { faHome, faList, faArchway } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolling, setIsScrolling] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const onboarding = new MetaMaskOnboarding();
  const links = [
    {
      name: "Team",
      path: "/",
      icon: faHome,
    },
    {
      name: "Coverage",
      path: "/",
      icon: faList,
    },
    {
      name: "Testimoni",
      path: "/",
      icon: faArchway,
    },
  ];

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true); // Start fading when scrolled down more than 50px
      } else {
        setIsScrolling(false); // Reset opacity when back at the top
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Connect Metamask
  useEffect(() => {
    setIsMetaMaskInstalled(MetaMaskOnboarding.isMetaMaskInstalled());

    const updateAccounts = (newAccounts) => {
      setAccounts(newAccounts);
    };

    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then(updateAccounts);
      window.ethereum.on("accountsChanged", updateAccounts);
    }

    return () => {
      window.ethereum?.removeListener("accountsChanged", updateAccounts);
    };
  }, []);

  const connectWallet = async () => {
    if (!isMetaMaskInstalled) {
      onboarding.startOnboarding();
      return;
    }

    setIsConnecting(true);
    try {
      const newAccounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(newAccounts);
    } catch (error) {
      console.error("Error connecting MetaMask:", error);
      setIsConnecting(false);
    }
  };

  return (
    <>
      <div
        className={`px-16 flex justify-between items-center py-3 bg-white text-zinc-900 shadow-md fixed w-full z-40 ${
          isScrolling ? "opacity-70" : "opacity-100"
        }`}
      >
        {/* Desktop Menu */}
        <h1 className="text-2xl">
          <span className="text-indigo-500">AI </span>Audit
        </h1>
        <div className="text-lg gap-8 tracking-wide font-semibold hidden md:flex">
          {links.map((link, index) => (
            <a href={link.path} key={index} className="hover:text-indigo-500">
              {link.name}
            </a>
          ))}
          <button
            className="bg-white px-4 py-1 font-semibold items-center rounded-full capitalize italic transition-all shadow-lg shadow-indigo-500/70 cursor-pointer relative hover:shadow"
            onClick={connectWallet}
            disabled={isConnecting}
          >
            <span className="text-indigo-600">
              {isMetaMaskInstalled
                ? isConnecting
                  ? "Connecting..."
                  : accounts.length > 0
                  ? `✔ ...${accounts[0].slice(-4)}`
                  : "Connect MetaMask"
                : "Install AI Audit!"}
            </span>
          </button>
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
