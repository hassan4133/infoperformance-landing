export default function AboutSection() {
  return (
    <section
      className="relative py-10 md:py-20 px-4 bg-blue-600"
      style={{
        backgroundImage: "url('/bgabout.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            {/* Main image collage placeholder */}
            <div
              className="relative rounded-2xl overflow-hidden pl-0 md:pl-12 mt-0 md:-mt-12 h-64 md:h-[480px] mx-auto"
            >
              <img
                src="/aboutsect.png"
                alt="Professional team working in office environment"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white">
            {/* Header with arrows */}
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16 10 L4 10 M7 7 L4 10 L7 13"
                  clipRule="evenodd"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-rajdhani font-medium text-md tracking-wider">
                ABOUT INFOPERFORMANCE
              </span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 10 L16 10 M13 7 L16 10 L13 13"
                  clipRule="evenodd"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Main heading */}
            <h2 className="font-rajdhani font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight text-white"
            style={{ lineHeight: "1.2" }}>
              Revolutionizing Your Customer Experience.
            </h2>

            {/* Description */}
            <p className="text-white/90 font-semibold mb-7 leading-relaxed font-plus-jakarta-sans text-base md:text-[18px]">
              At Infoperformance, we passionately empower our clients with innovative 
              digital solutions and performance-focused oversight, ensuring unparalleled 
              service excellence.
            </p>

            {/* Feature cards - Stack vertically on mobile, horizontal on desktop */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-7 md:ml-[-6px]">
              <div className="flex items-center gap-3 bg-blue-700 bg-opacity-80 rounded-lg px-3 py-2 hover:bg-blue-900 hover:bg-opacity-90 transition duration-300">
                <div className="bg-white rounded-md p-1">
                  <img
                    src="/Feature1.png"
                    alt="Customer Management Icon"
                    className="w-12 h-10 object-contain"
                  />
                </div>
                <span className="font-rajdhani font-bold text-base leading-[16px] tracking-[-0.01em]">
                  Customer Management
                </span>
              </div>
              <div className="flex items-center gap-3 bg-blue-700 bg-opacity-80 rounded-lg px-3 py-2 hover:bg-blue-900 hover:bg-opacity-90 transition duration-300">
                <div className="bg-white rounded-md p-1">
                  <img
                    src="/Feature2.png"
                    alt="Metrics Evaluation Icon"
                    className="w-12 h-10 object-contain"
                  />
                </div>
                <span className="font-rajdhani font-bold text-base leading-[16px] tracking-[-0.01em]">
                  Metrics Evaluation
                </span>
              </div>
              <div className="flex items-center gap-3 bg-blue-700 bg-opacity-80 rounded-lg px-2 py-2 hover:bg-blue-900 hover:bg-opacity-90 transition duration-300">
                <div className="bg-white rounded-md p-1">
                  <img
                    src="/Feature3.png"
                    alt="Customer Insights Define Our Actions Icon"
                    className="w-12 h-10 object-contain"
                  />
                </div>
                <span className="font-rajdhani font-bold text-base leading-[16px] tracking-[-0.01em]">
                  Customer <br />Insights Define Our Actions
                </span>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-1 mb-6">
              <div>
                <div className="font-rajdhani font-bold text-3xl md:text-4xl mb-1">20,000</div>
                <div className="text-[#FFFFFF] font-plus-jakarta-sans text-lg md:text-[22px] font-semibold"
                style={{ lineHeight: 1.1 }}>
                  Inbound Call Leads<br/> Generated Weekly
                </div>
              </div>
              <div>
                <div className="font-rajdhani font-bold text-2xl sm:text-3xl md:text-4xl mb-1">
                  $100,000,000 M
                </div>
                <div className="text-[#FFFFFF] font-plus-jakarta-sans text-lg md:text-[22px] font-semibold"
                style={{ lineHeight: 1.1 }}
                >Sales Conversions</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#F98600] hover:bg-orange-600 text-white px-6 md:px-8 py-3 rounded-full font-rajdhani font-semibold flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              GET STARTED →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}