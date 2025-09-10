"use client"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Lauren Bell",
    role: "Web Entrepreneur",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    avatar: "/1.jpeg",
  },
  {
    id: 2,
    name: "Lauren Bell",
    role: "Web Entrepreneur",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    avatar: "/4.jpeg",
  },
  {
    id: 3,
    name: "Lauren Bell",
    role: "Web Entrepreneur",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    avatar: "/3.jpeg",
  },
]

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
    </svg>
  )
}

export default function ContactTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section className="mt-10 max-w-8xl mx-auto">
      {/* Contact Banner - Reduced Width */}
      <div className="mx-auto max-w-6xl -mb-20">
        <div className="bg-[#2F4BFF] rounded-lg overflow-hidden">
          <div 
            className="flex flex-col md:flex-row items-center justify-between px-8 py-12 relative h-64 md:h-80"
            style={{ 
              gap: "20px", 
              backgroundImage: 'url("/Desk.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex-1 text-white text-left pl-4 md:pl-72">
              <p className="text-xs md:text-sm uppercase tracking-widest mb-2 opacity-80 text-white relative flex items-center justify-start gap-2 md:gap-4">
                <button className="bg-transparent text-white font-semibold px-1 md:px-2 py-1 hover:text-gray-300 transition">&larr;</button>
                <span className="block"><strong>Contact Us</strong></span>
                <button className="bg-transparent text-white font-semibold px-1 md:px-2 py-1 hover:text-gray-300 transition">&rarr;</button>
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-snug">
                Ready to Discuss <br />
                your Project with Us?
              </h2>
            </div>
            <div className="flex-1 flex items-center justify-center md:justify-end pr-4 md:pr-20">


              <button className="bg-white text-[#2F4BFF] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition flex items-center gap-2">
                Talk to a Specialist
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials - Full Width */}
      <div className="bg-[#F5F8FF] py-12 px-6  rounded-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mt-24 mb-2">
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
            <p className="text-center text-blue-600 uppercase tracking-widest"><strong>Testimonials</strong>  </p>
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
          <h3 className="text-center text-2xl font-bold mb-10">Our Latest Client Feedback</h3>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className={`bg-white rounded-lg p-6 shadow-md max-w-sm flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                  activeIndex === t.id ? "border-4 border-blue-600 scale-105" : "border border-gray-200 hover:shadow-lg"
                }`}
                onClick={() => setActiveIndex(t.id)}
              >
                <div className="flex items-center mb-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} filled={star <= t.rating} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                  <img src="/comma.png" alt="comma" className="w-12 h-12 ml-20" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((t) => (
              <button
                key={t.id}
                className={`w-12 h-2 mx-1 rounded-full transition-colors duration-200 ${
                  activeIndex === t.id ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setActiveIndex(t.id)}
                aria-label={`Go to testimonial ${t.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}