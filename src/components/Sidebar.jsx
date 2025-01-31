import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Sidebar({ links, close, isActive }) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen w-48 bg-slate-50 text-black shadow-md z-10 transition-all duration-500 box-shadow ${
          isActive
            ? "transisition-all translate-x-0 duration-500"
            : "transisition-all -translate-x-full duration-500"
        }`}
        onClick={close}
      >
        <div className="flex flex-col gap-5 text-lg">
          {links.map((link, index) => (
            <a
              href={link.path}
              key={index}
              className="hover:border-l-5 hover:border-l-blue-600 hover:bg-sky-100 active:border-l-5 active:border-l-blue-600 py-1"
            >
              <FontAwesomeIcon icon={link.icon} className="ml-3" />
              <span className="ml-3">{link.name}</span>
            </a>
          ))}{" "}
        </div>
      </div>
    </>
  );
}
