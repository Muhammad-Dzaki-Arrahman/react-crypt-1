import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Sidebar({ links, close, isActive }) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen w-48 bg-slate-50 text-black shadow-md z-50 transition-all duration-500 box-shadow ${
          isActive
            ? "transisition-all translate-x-0 duration-500"
            : "transisition-all -translate-x-full duration-500"
        }`}
        onClick={close}
      >
        <div className="flex flex-col gap-5 text-lg">
          <h1 className="ml-2 mt-4 text-2xl flex font-medium">
            <img
              src="/image/community/img_1.svg"
              alt="logo"
              className="w-10 h-10"
            />
            <span className="text-[#fd7f20]">AI </span>Audit
          </h1>
          {links.map((link, index) => (
            <a
              href={link.path}
              key={index}
              className="hover:border-l-5 hover:border-l-orange-600 hover:bg-[#fdb750]/40 py-1 font-medium"
            >
              <FontAwesomeIcon
                icon={link.icon}
                className="ml-3 text-[#fd7f20]"
              />
              <span className="ml-3">{link.name}</span>
            </a>
          ))}{" "}
          <button className="mx-auto bg-white px-4 py-1 font-semibold items-center rounded-full capitalize transition-all shadow-lg shadow-[#010100]/50 cursor-pointer relative hover:shadow">
            <a href="https://web.telegram.org/">Telegram</a>
          </button>
          <button className="mx-auto bg-white px-4 py-1 font-semibold items-center rounded-full capitalize transition-all shadow-lg shadow-[#010100]/50 cursor-pointer relative hover:shadow">
            <a href="https://x.com/?mx=2">Twitter</a>
          </button>
        </div>
      </div>
    </>
  );
}
