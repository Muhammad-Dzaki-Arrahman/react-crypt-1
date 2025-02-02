import CustomeImage from "./CustomeImage";
import Testimoni from "./Testimoni";
import Team from "./Team";
import Community from "./Community";
export default function Home() {
  return (
    <div className="px-16 pb-8 bg-home">
      <section id="team">
        <div className="py-4 flex flex-col justify-between md:flex-row items-center h-[500px]">
          <div className="w-full md:w-[50%] mt-14 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Crypto Security with Artificial Intelligence
            </h1>
            <p className="text-lg md:text-xl mb-2 md:pr-8 text-white leading-5 md:leading-7">
              Optimize the security and transparency of your digital assets with
              AI-based audit technology
            </p>
            <button className="shadow-md outline rounded-sm mt-2 px-2 py-1 bg-[#fc2e20] font-medium text-white tracking-wide md:mb-0 hover:cursor-pointer">
              Click to View Coin
            </button>
          </div>
          <div className="w-full md:w-[50%] overflow-hidden rounded-md">
            <CustomeImage />
          </div>
        </div>
      </section>
      {/* Team Cards */}
      <div>
        <h1 className="text-center text-2xl font-bold  mt-8 -mb-4 text-white">
          Team
        </h1>
        <Team />
      </div>
      {/* Testimoni Card */}
      <section id="client">
        <h1 className="text-center text-2xl font-bold mb-8 text-white">
          Clients
        </h1>
        <Testimoni />
      </section>
      {/* Community */}
      <section id="community">
        <h1 className="text-center text-2xl font-bold mb-8 text-white">
          Join Our Thriving Community
        </h1>
        <Community />
      </section>
    </div>
  );
}
