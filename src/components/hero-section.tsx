import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="px-4 -mt-8 relative">
      <div className="flex justify-center">
        <section
          className="rounded-3xl relative overflow-hidden w-full max-w-[1400px]"
          style={{
            background: `url('/hero-background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Mobile-specific background image */}
          <style jsx>{`
            @media (max-width: 768px) {
              section {
                background: url('/mobilehero.png') !important;
                background-size: cover !important;
                background-position: center !important;
              }
            }
          `}</style>

          <div className="px-4 md:px-8 pt-16 pb-20 lg:ml-20" style={{ backgroundColor: "rgba(59, 130, 246, 0.01)" }}>
            <div className="flex justify-start pl-4 md:pl-9 lg:pl-9">
              <div className="max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[780px] 2xl:max-w-[800px]">
                <div className="text-white max-w-full mt-8">
                {/* Gateway Badge */}
                <div className="mb-6 md:mt-2 -mt-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h3l2-4 2 8 2-4h3">
                        <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite"/>
                      </path>
                    </svg>
                    <span className="text-white text-sm font-rajdhani font-medium">Our agency is your gateway to exceptional growth</span>
                  </div>
                </div>

                {/* Main heading - Better responsive handling */}
                <div className="flex flex-wrap items-center mb-2">
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-rajdhani font-bold leading-tight text-white"
                    style={{ backgroundColor: "rgba(59, 130, 246, 0.01)", lineHeight: 1.2}}
                  >
                    Accelerate your <span style={{ whiteSpace: "nowrap" }}>Company&apos;s Pay Per Call</span>
                  </h1>
                  <img
                    src="/aiLine.png"
                    alt="AI line decoration"
                    className="h-1 md:h-2 w-auto md:w-[150px] lg:w-[200px] xl:w-[470px] flex-shrink-0 ml-2 md:ml-4 lg:ml-8 xl:ml-8 2xl:ml-72 "
                  />
                </div>
                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-rajdhani font-bold leading-tight mb-8 text-white"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.01)", lineHeight: 1.2}}>
                    advertising with Infoperformance.
                </h1>
               
                {/* Description with better responsive text sizing */}
                <p
                  className="text-base md:text-lg lg:text-[18px] xl:text-[19px] 2xl:text-[20px] text-white/90 mb-6 font-rajdhani leading-relaxed md:font-light lg:font-light font-medium max-w-[80%] lg:max-w-[80%] xl:max-w-[85%] 2xl:max-w-[90%]"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.01)" }}
                >
                  Infoperformance provides next generation performance marketing services for clients in<br className="hidden lg:block"/>
                  the US insurance, energy and home services markets.
                </p>

                {/* CTA Button */}
                <button className="bg-[#F98600] hover:bg-orange-600 text-white px-3.5 py-2.5 md:px-6 md:py-3 rounded-full font-rajdhani font-semibold text-base mb-8 md:text-lg transition-colors duration-200">
                  GET STARTED →
                </button>

               {/* Google Reviews Transparent Box with better responsive sizing */}
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 rounded-2xl border border-white/20 flex-col w-fit">
                  {/* Google Title */}
                  <span className="text-white font-rajdhani font-medium mb-3 block">Google</span>

                  {/* Avatars + Reviews */}
                  <div className="flex items-end justify-between">
                    {/* Avatars */}
                    <div className="flex -space-x-2">
                      <Image
                        src="/1.jpeg"
                        alt="Profile 1"
                        width={28}
                        height={28}
                        className="rounded-full border-2 border-white md:w-8 md:h-8"
                      />
                      <Image
                        src="/2.jpeg"
                        alt="Profile 2"
                        width={28}
                        height={28}
                        className="rounded-full border-2 border-white md:w-8 md:h-8"
                      />
                      <Image
                        src="/3.jpeg"
                        alt="Profile 3"
                        width={28}
                        height={28}
                        className="rounded-full border-2 border-white md:w-8 md:h-8"
                      />
                      <Image
                        src="/4.jpeg"
                        alt="Profile 4"
                        width={28}
                        height={28}
                        className="rounded-full border-2 border-white md:w-8 md:h-8"
                      />
                    </div>

                    {/* Reviews */}
                    <span className="text-white text-sm font-rajdhani ml-4 self-end">
                      450+ reviews
                    </span>
                  </div>
                </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}