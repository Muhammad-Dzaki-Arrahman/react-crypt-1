export default function Community() {
  return (
    <>
      <div className="max-w-sm w-full my-8 md:max-w-full md:flex md:justify-center">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url("/image/community/img_1.svg")` }}
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Join us, and let's shape the future of blockchain
              security—together!
            </div>
            <p className="text-gray-700 text-base max-w-md">
              At Audit AI, we believe that the future of blockchain security is
              built on collaboration. Our vibrant community of developers,
              enthusiasts, and industry leaders are working together to create
              safer, smarter, and more transparent crypto ecosystems. By joining
              us, you'll get access to cutting-edge insights, exclusive updates,
              and the opportunity to be part of a groundbreaking movement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
