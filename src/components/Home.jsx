import CustomeImage from "./CustomeImage";

export default function Home() {
  return (
    <div className="px-16 bg-home">
      <div className="py-4 flex flex-col justify-between md:flex-row items-center h-[500px]">
        <div className="w-full md:w-[50%] mt-16 md:mt-0">
          <h1 className="text-4xl font-bold mb-4 text-white">Nama Koin</h1>
          <p className="text-xl mb-2 md:pr-8 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            magnam perferendis est culpa ratione illo maiores similique soluta
            dolor repudiandae!
          </p>
          <button className="shadow-md outline rounded-sm px-2 py-1 bg-amber-600 font-medium text-white tracking-wide mb-8 md:mb-0">
            Click to View Coin
          </button>
        </div>
        <div className="w-full md:w-[50%]">
          <CustomeImage />
        </div>
      </div>
    </div>
  );
}
