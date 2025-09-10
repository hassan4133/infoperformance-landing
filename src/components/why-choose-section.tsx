export default function WhyChooseSection() {
  return (
    <section className="bg-[#FFFFFF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
             <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 18 24"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span className="font-rajdhani font-semibold text-blue-600 text-lg">
              OUR SUPERIOR
            </span>
             <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 18 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
          <h2 className="font-rajdhani font-bold text-2xl md:text-4xl text-gray-900 mb-4">
            Why Should You Choose Infoperformance?
          </h2>
          <p className="font-rajdhani text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
            At Infoperformance, we champion exceptional customer experiences,
            turning every interaction into an opportunity to transform clients
            into dedicated brand advocates. Customers into Brand Champions!
          </p>
        </div>

        {/* Two Header Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-4 max-w-4xl mx-auto relative z-20">
          {/* Left Card */}
          <div className="relative flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/Excellence.png"  
                  alt="Left Card Icon"
                  className="w-8 h-8"
                />
              </div>
            </div>
            <div className="bg-gray-100 text-gray-900 px-6 py-8 pt-8 rounded-2xl text-center shadow-lg h-24 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              <h3 className="font-rajdhani font-bold text-lg md:text-xl">
                Perfect Blend Of Excellence & Experience
              </h3>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/services.png"  
                  alt="Right Card Icon"
                  className="w-8 h-8"
                />
              </div>
            </div>
            <div className="bg-gray-100 text-gray-900 px-6 py-8 pt-9 rounded-2xl text-center shadow-lg h-24 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              <h3 className="font-rajdhani font-bold text-lg md:text-xl">
                Digitally Integrated Services
              </h3>
            </div>
          </div>
        </div>

        {/* Feature Card */}
        <div className="relative mb-20 max-w-6xl mx-auto -mt-12">
          <div className="bg-[#F3F6FD] rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden pt-16 md:py-3 py-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center mt-6">
              {/* Left Image */}
              <div className="relative">
                <img
                  src="/cardchoose.png"
                  alt="Professional team meeting"
                  className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-6 md:p-8  relative flex flex-col justify-between overflow-visible md:overflow-hidden min-h-[320px] md:min-h-[384px]">
                  <div className="space-y-4">
                    <h3 className="font-rajdhani font-bold text-2xl md:text-3xl text-gray-900">
                      Perfect Blend Of Excellence And Experience
                    </h3>
                    <p className="font-rajdhani text-gray-600 text-base md:text-lg leading-relaxed">
                      Our commitment is to craft an optimized customer journey
                      that not only resonates with your audience but also
                      enhances your brand&apos;s reputation, leaving a lasting
                      positive impact.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                      <div className="flex flex-row items-center gap-3">
                        <div className="md:w-12 h-12 bg-[#F3F6FD] rounded-sm flex items-center justify-center flex-shrink-0">
                          <img
                            src="/clients1.png"
                            alt="Clients Served"
                            className="w-10 h-10"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-rajdhani font-semibold text-[14px] text-gray-900"
                          style={{ lineHeight: '1.2' , letterSpacing: '-1%' }}>
                            Clients Served In the Insurance & Energy Industry
                          </div>
                        </div>
                      </div>
  
                      <div className="flex flex-row items-center gap-3 md:mb-6 mb-4">
                        <div className="w-12 h-12 bg-[#F3F6FD] rounded-sm flex items-center justify-center flex-shrink-0">
                          <img
                            src="/industary.png"
                            alt="Industries"
                            className="w-10 h-10"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-rajdhani font-semibold  text-[14px]  text-gray-900"
                          style={{ lineHeight: '1.2' , letterSpacing: '-1%' }}>
                            Industries Employees
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pb-4 md:mb-2 mb-2">
                    <button className="bg-[#F98600] hover:bg-orange-600 text-white px-3 py-3 rounded-full font-rajdhani font-bold text-sm transition-colors duration-200  hover:shadow-xl">
                      START YOUR PROJECT →
                    </button>
                  </div>

                 
                 

                </div>

                  <div className="absolute -bottom-8 md:-bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <img
                      src="/choosecard0.png"
                      alt="Choose Card 0"
                      className="w-32 h-auto"
                    />
                  </div>

              </div>
              
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative z-10  mx-auto px-4 mb-[-120px]"
        style={{ width: "93%" }}>
          <div className="relative bg-gray-200 rounded-2xl overflow-hidden h-64 md:h-96">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dWf0AHcwKDk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className="bg-[#18185D] pt-32 pb-12 px-4 w-full max-w-none mx-auto"
          style={{
            width: "100vw",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            minHeight: "680.5px",
          }}
        >
          <div className="from-[#18185D] rounded-2xl p-6 md:p-10 mt-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-8" >
                     <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-600 rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
            </svg>
                    <span className="font-rajdhani font-semibold  text-sm md:text-base"
                    style={{ color: "#384BFF" }}>
                      PARTNER WITH INFOPERFORMANCE
                    </span>
                     <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
            </svg>
                  </div>
                  <h3 className="font-rajdhani font-bold text-2xl md:text-3xl mb-4 text-white">
                    Your Ultimate Contact Center & Tech Powerhouse!
                  </h3>
                  <p className="font-rajdhani text-blue-100 mb-8 text-sm md:text-base">
                    Partner with Infoperformance, the leading force in contact
                    center and technology solutions, and experience unparalleled
                    growth that takes your competitive edge to the next level!
                  </p>
                  <button className="bg-[#F98600] hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-rajdhani font-semibold text-sm md:text-base">
                    LET US CONTACT YOU →
                  </button>
                </div>

                <div className="relative">
                  <img
                    src="/modernoffice.png"
                    alt="Modern office workspace"
                    className="w-full h-60 md:h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}