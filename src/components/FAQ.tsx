"use client"
import { ArrowRight, ArrowLeft, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(2) // Third item open by default

  const faqItems = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      id: 2,
      question: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
  ]

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Replace with your Image */}
          <div className="relative w-full h-80 md:h-[500px] rounded-[30px] overflow-hidden mx-auto">
            <Image
              src="/FAQ.png" 
              alt="FAQ Illustration"
              fill
              className="object-cover rounded-[30px]"
            />
          </div>

          {/* Right side - FAQ Content */}
          <div className="space-y-6">
            {/* Section header */}
            <div>
              <div className="flex items-center gap-1 mb-1">
                <div className="flex items-center gap-1">
                  <ArrowLeft className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-rajdhani font-medium">
                    <b>FAQ</b>
                  </span>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <h2 className="text-4xl font-rajdhani font-bold text-gray-800 leading-tight">
                Infoperformance
                <br />
                Services FAQ
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="-space-y-2 self-start">
              {faqItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <h3
                      className={`text-lg font-rajdhani font-semibold pr-4 ${
                        openItem === item.id
                          ? "text-blue-600"
                          : "text-gray-800"
                      }`}
                    >
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItem === item.id ? (
                        <ChevronDown className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </button>

                  {openItem === item.id && (
                    <div className="pb-4">
                      <p className="text-gray-600 font-rajdhani leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
