export default function Footer() {
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
  <>
    <div>
      <div>
        <h2></h2>
        <p></p>
      </div>
      {/* Menu Bar */}
      <div>
        {links.map((link, index) => (
          <a></a>
        ))}
      </div>
    </div>
  </>;
}
