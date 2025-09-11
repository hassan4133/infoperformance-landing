"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import WhyChooseSection from "@/components/why-choose-section"
import FAQSection from "@/components/FAQ"
import ContactTestimonialsSection from "@/components/ContactTestimonialsSection"
import BlogsSection from "@/components/BlogsSection"
import FooterSection from "@/components/FooterSection"
import CallToActionBanner from "@/components/CallToActionBanner"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection />

      {/* Updated circular element to match the screenshot */}
      <div className="relative -mt-12 flex justify-center z-30 mb-16">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg relative">
          <svg className="w-full h-full" viewBox="0 0 80 80">
            {/* Outer circle border */}
            <circle cx="40" cy="40" r="38" fill="none" stroke="#3B82F6" strokeWidth="2"/>
            
            {/* Text path - positioned to fill the ring space */}
            <defs>
              <path id="circle-path" d="M 40, 40 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" />
            </defs>
            <text className="text-[9.5px] fill-blue-600 font-rajdhani font-bold tracking-wide">
              <textPath href="#circle-path" startOffset="0%">
                INFOPERFORMANCE - INFOPERFORMANCE - 
              </textPath>
            </text>
            
            {/* Center diagonal arrow */}
            <svg x="28" y="28" width="24" height="24" viewBox="0 0 24 24">
              <path 
                d="M7 17L17 7M17 7H7M17 7V17" 
                stroke="#3B82F6" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </svg>
        </div>
      </div>

      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <FAQSection />
      <ContactTestimonialsSection />
      <BlogsSection />
      <CallToActionBanner />
      <FooterSection />
    </main>
  )
}