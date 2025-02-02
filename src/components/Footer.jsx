export default function Footer() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Features",
      path: "/",
    },
    {
      name: "Roadmap",
      path: "/",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 justify-center py-7">
        <div className="px-2 md:w-[50%] text-xl">
          <h2 className="font-semibold">Title Coin</h2>
          <p className="text-sm my-1 font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            magnam perferendis est culpa ratione illo maiores similique soluta
            dolor repudiandae!
          </p>
        </div>
        {/* Menu Bar */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Links</h2>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="hover:text-indigo-500/80 font-normal leading-3"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center py-4 text-white bg-black">
        <span className="flex justify-center items-center">
          &copy; All Right Reserved.
        </span>
      </div>
    </>
  );
}
