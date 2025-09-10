import Image from "next/image"

const blogs = [
  {
    id: 1,
    title: "Lorem ipsum dolor amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/insight1.png",
    icon: "/brain.png", // 👈 unique icon
  },
  {
    id: 2,
    title: "Lorem ipsum dolor amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/insight2.png",
    icon: "/brain2.png", // 👈 another unique icon
  },
  {
    id: 3,
    title: "Lorem ipsum dolor amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/insight3.png",
    icon: "/brain3.png", // 👈 another unique icon
  },
]

export default function BlogsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-start justify-start text-blue-600 uppercase tracking-widest mb-1 space-x-3 mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5m7 7l-7-7 7-7" />
        </svg>
        <strong>Our Blogs</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14m-7-7l7 7-7 7" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-12 max-w-4xl text-[#0F0C1D];
">
        Insights of Next Generation Infoperformance Marketing
      </h2>

      <div className="flex flex-col md:flex-row gap-8 -mb-16">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden max-w-sm flex flex-col relative"
          >
            {/* Top full-width image */}
            <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom narrower section */}
            <div className="relative -mt-10 px-6 pb-6">
              <div className="bg-white rounded-lg p-6 relative mx-auto w-[90%] mb-3">
                {/* Circular icon */}
                <div className="absolute -top-8 right-6 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md overflow-hidden">
                  <Image
                    src={blog.icon} // 👈 use per-card icon
                    alt="Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Text content */}
                <h3 className="font-extrabold text-xl mb-2 leading-snug border-b border-gray-300 ml-4 mt-1.5">
                  {blog.title}
                </h3>
                <p className="text-blue-900 mb-4 ml-4">{blog.description}</p>

                {/* Arrow button */}
                <button className="w-10 h-10 flex items-center ml-4 justify-center border border-blue-100 rounded-md text-black hover:bg-blue-50 transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
