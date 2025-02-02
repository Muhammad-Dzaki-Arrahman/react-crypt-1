export default function Testimoni() {
  const testimonies = [
    {
      name: "Andreas Wijaya",
      comment:
        "Audit AI helped my project identify security vulnerabilities quickly. The reports are very detailed and easy to understand!",
      path: "/image/testimoni/img_1.jpg",
    },
    {
      name: "John Robert",
      comment:
        "With Audit AI, we ensured our smart contract was bug-free before launch. Highly recommended!",
      path: "/image/testimoni/img_1.jpg",
    },
    {
      name: "Michael Surya",
      comment:
        "The AI technology used is truly advanced! The auditing process is much faster and more efficient than traditional methods.",
      path: "/image/testimoni/img_1.jpg",
    },
    {
      name: "Kenny Lim",
      comment:
        "I feel much safer running my DeFi project after using Audit AI. Security is our top priority!",
      path: "/image/testimoni/img_1.jpg",
    },
    {
      name: "Rizky Pratama",
      comment:
        "Audit AI provides professional and responsive service. The audit reports are also easy to understand for both developers and investors.",
      path: "/image/testimoni/img_1.jpg",
    },
    {
      name: "William Austin",
      comment:
        "Audit AI enhances transparency and trust for our users. Our smart contract is now more secure and reliable!",
      path: "/image/testimoni/img_1.jpg",
    },
  ];
  return (
    <>
      {testimonies.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white max-w-md dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-600 transform hover:scale-105 mb-6"
        >
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full mr-4 object-cover"
              src="/image/testimoni/img_1.jpg"
              alt="Reviewer's Name"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {testimonial.name}
              </h4>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            "{testimonial.comment}"
          </p>
          <div className="mt-6 flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-600 dark:text-gray-400 ml-2">5.0</span>
          </div>
        </div>
      ))}
    </>
  );
}
