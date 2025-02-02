export default function Team() {
  const teams = [
    {
      name: "Jack Matthew",
      title: "CEO",
      desc: "Lead AI Audit by setting business vision, strategy, and direction.  Responsible for company growth, building partnerships, and ensuring innovation and business sustainability in the crypto industry.",
      path: "/image/team/img_1.png",
    },
    {
      name: "Willy Jackson",
      title: "Co-Founder",
      desc: "Assist with business development and AI Audit technology. Play a role in product strategy, market expansion, and liaison with partners and blockchain community.",
      path: "/image/team/img_2.png",
    },
    {
      name: "Alisa Reinford",
      title: "AI Analyst",
      desc: "Analyze smart contracts and detect security holes using AI. Develop risk analysis models and work with teams to improve blockchain audit accuracy.",
      path: "/image/team/img_3.png",
    },
  ];
  return (
    <>
      <div>
        <h1>Our Team</h1>
        {teams.map((team, index) => (
          <div className="max-w-sm w-full my-8 md:max-w-full md:flex">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${team.path})` }}
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {team.name}
                </div>
                <p className="text-gray-700 text-base max-w-md">{team.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
