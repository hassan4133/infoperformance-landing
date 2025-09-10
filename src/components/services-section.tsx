import { ArrowRight, ArrowLeft } from "lucide-react"

import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      title: "Digital Marketing",
      subtitle: "Robust Your Digital Marketing Campaigns",
      image: "/marketing.png",
    },
    {
      title: "Marketing Automation",
      subtitle: "Robust Your Digital Marketing Campaigns",
      image: "/automation.png",
    },
    {
      title: "CRM Solutions",
      displayTitle: <>CRM <br/>Solutions</>,
      subtitle: "Witness Prompt Customer Support",
      image: "/CRM.png",
    },
    {
      title: "Pay Per Call Marketing",
      subtitle: "Witness Prompt Customer Support",
      image: "/Pay-per.png",
    },
  ]

  return (
    <section className="py-4 px-4 bg-white mb-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <ArrowLeft className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-rajdhani font-medium"><b>OUR SERVICES</b></span>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <h2 className="text-4xl font-rajdhani font-bold text-[#0F0C1D]">Our Services</h2>
          </div>
         
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 hover:bg-blue-600 rounded-2xl p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Icon placeholder */}
              <div className="w-12 h-11.5 mb-3 flex items-center justify-center rounded-lg border border-gray-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="object-contain"
                  style={{ borderRadius: 8, backgroundColor: '#F2F6FB', border: '1px solid #F2F6FB' }}
                />
              </div>

              <h3 className="text-[32px] font-rajdhani font-bold text-[#0F0C1D] group-hover:text-white mb-1 transition-colors duration-300"
              style={{ lineHeight: 1.2 , letterSpacing: '-0.02em' }}>
                {service.displayTitle || service.title}
              </h3>

              <p className="text-[#0F0C1D] text-[16px] group-hover:text-white opacity-80 text-sm font-rajdhani mb-6 leading-relaxed transition-colors duration-300"
              style={{ lineHeight: 1.4 , letterSpacing: '-0.02em' }}>
                {service.subtitle}
              </p>

              <button
                className="flex items-center gap-1.5 bg-white rounded-full font-rajdhani font-medium transition-all duration-300 group-hover:gap-3 text-gray-800 group-hover:text-orange-500"
                style={{ width: 170, height: 47, borderWidth: 0.75, paddingLeft: 16, paddingRight: 16 }}
              >
                Read More
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}