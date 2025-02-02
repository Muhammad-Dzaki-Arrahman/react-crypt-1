export default function Footer() {
  const links = [
    {
      name: "Team",
      path: "#team",
    },
    {
      name: "Clients",
      path: "#client",
    },
    {
      name: "Community",
      path: "#community",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 justify-center  px-16 py-7">
        <div className="md:w-[50%] text-xl">
          <img
            src="/image/community/img_1.svg"
            alt="logo"
            className="w-20 h-20"
          />
          <h2 className="font-semibold">AI Audit</h2>
          <p className="text-sm my-1 font-normal">
            Optimize the security and transparency of your digital assets with
            AI-based audit technology
          </p>
        </div>
        {/* Menu Bar */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Links</h2>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="hover:text-[#fd7f20] font-normal leading-5"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center py-4 text-[#010100] font-bold">
        <span className="flex justify-center items-center">
          &copy; All Right Reserved.
        </span>
      </div>
    </>
  );
}
