import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="px-4 -mt-8 relative">
      <div className="flex justify-center">
        <section
          className="rounded-3xl relative overflow-hidden w-full max-w-[1400px]"
          style={{
            // clipPath:
            //   "polygon(0 0, 100% 0, 100% 100%, 55% 100%, 50% 87%, 45% 100%, 0 100%)",
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

          <div className="px-4 md:px-8 pt-16 pb-20 md:ml-10" style={{ backgroundColor: "rgba(59, 130, 246, 0.01)" }}>
            <div className="flex justify-start pl-4 md:pl-9">
              <div className="text-white max-w-4xl mt-8">
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

                {/* Main heading */}
<h1
  className="text-3xl md:text-5xl lg:text-5xl font-rajdhani font-bold leading-tight mb-2 text-white"
  style={{ backgroundColor: "rgba(59, 130, 246, 0.01) " , lineHeight: 1.2}}
>
Accelerate your <span style={{ whiteSpace: "nowrap" }}>Company&apos;s Pay Per Call</span>
</h1>
                 <img 
                  src="/aiLine.png" 
                  alt="AI line decoration" 
                  className="h-1 md:h-2 w-auto md:w-[450px] -mt-3 ml-0 md:ml-72"
                />
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-rajdhani font-bold leading-tight mb-8 text-white"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.01) " , lineHeight: 1.2}}>
                    advertising with Infoperformance.
                </h1>
               

                {/* Description */}
                <p
                  className="text-lg md:text-[18px] text-white/90 mb-6 font-rajdhani leading-relaxed md:font-light font-medium"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.01)" }}
                >
                  Infoperformance provides next generation performance marketing services for clients in<br/>
                  the US insurance, energy and home services markets.
                </p>

                {/* CTA Button */}
                <button className="bg-[#F98600] hover:bg-orange-600 text-white px-3.5 py-2.5 md:px-6 md:py-3 rounded-full font-rajdhani font-semibold text-base mb-8 md:text-lg">
                  GET STARTED →
                </button>

               {/* Google Reviews Transparent Box */}
<div className="bg-white/10 backdrop-blur-sm px-5 py-4 rounded-2xl border border-white/20  flex-col w-fit">
  {/* Google Title */}
  <span className="text-white font-rajdhani font-medium mb-3">Google</span>

  {/* Avatars + Reviews */}
  <div className="flex items-end justify-between">
    {/* Avatars */}
    <div className="flex -space-x-2">
      <Image
        src="/1.jpeg"
        alt="Profile 1"
        width={32}
        height={32}
        className="rounded-full border-2 border-white"
      />
      <Image
        src="/2.jpeg"
        alt="Profile 2"
        width={32}
        height={32}
        className="rounded-full border-2 border-white"
      />
      <Image
        src="/3.jpeg"
        alt="Profile 3"
        width={32}
        height={32}
        className="rounded-full border-2 border-white"
      />
      <Image
        src="/4.jpeg"
        alt="Profile 4"
        width={32}
        height={32}
        className="rounded-full border-2 border-white"
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
        </section>
      </div>
    </div>
  )
}