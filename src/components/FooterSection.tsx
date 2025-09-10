"use client"
import Image from "next/image"
import { useState } from "react"
import { Facebook, Twitter, Youtube, Instagram, Calendar, Mail, Phone, ArrowRight } from "lucide-react"

const recentPosts = [
  { id: 1, date: "10th July, 2025", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/foot1.png" },
  { id: 2, date: "10th July, 2025", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/foot2.png" },
]

export default function FooterSection() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)

  return (
    <footer className="bg-[#19185E] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 mt-12 ">
        {/* Logo and description */}
        <div className="text-left md:ml-9">
          <div className="flex items-center justify-start gap-3 mb-4">
            <div className="w-10 h-10 relative">
              <Image src="/logo2.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="font-rajdhani font-bold text-xl">Infoperformance</span>
          </div>
          <p className="text-white font-semibold mb-6 max-w-xs md:max-w-none mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
          </p>
          <div className="flex gap-4 text-white justify-start">
            <a href="#" aria-label="Facebook" className="hover:text-white border border-white rounded-sm p-2 flex items-center justify-center">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white border border-white rounded-sm p-2 flex items-center justify-center">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Youtube" className="hover:text-white border border-white rounded-sm p-2 flex items-center justify-center">
              <Youtube size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white border border-white rounded-sm p-2 flex items-center justify-center">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* About Links */}
        <div className="text-left md:ml-14 text-[17px] "
        style={{ fontFamily: 'Rajdhani' , lineHeight: '1.25' }}>
          <h4 className="font-semibold mb-2">About</h4>
          <ul className="space-y-2 font-semibold text-white">
            <li><a href="#" className="hover:text-white">All Services</a></li>
            <li><a href="#" className="hover:text-white">Services for Agencies</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Faqs</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="text-left md:mr-3 ">
          <h4 className="font-semibold mb-5  text-[17px]">Recent Posts</h4>
          <ul className="space-y-6 text-white">
            {recentPosts.map((post) => (
              <li key={post.id} className="flex gap-4 items-center">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0 opacity-80">
                  <Image src={post.image} alt="Post Image" fill className="object-cover" />
                </div>
                <div>
                  <p className="flex items-center gap-2 text-sm mb-1 font-semibold">
                    <Calendar size={16} />
                    {post.date}
                  </p>
                  <a href="#" className="hover:text-white font-light text-[17px] leading-snug">
                    {post.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-left text-[17px] font-semibold ml-2 ">
          <h4 className="font-semibold mb-5 ">Contact Us</h4>
          <p className="text-white flex items-center gap-2 mb-4 font-semibold">
            <Mail size={20} />
            info@infoperformance.com
          </p>
          <p className="text-white flex items-center gap-2 mb-4 font-semibold">
            <Phone size={20} />
            04-585-9268
          </p>
          <form className="flex flex-col gap-3 max-w-sm mx-auto md:mx-0">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="pr-12 px-3 py-2 rounded bg-white placeholder-gray-400 text-black focus:outline-none w-full md:w-64"
              />
              <button
                type="submit"
                disabled={!agreed || !email}
                className="absolute top-1/2 right-1 md:right-2 -translate-y-1/2 bg-[#384BFF] hover:bg-blue-700 p-2 px-3 rounded-lg md:mr-10"
              >
                <ArrowRight size={20} color="white" />
              </button>
            </div>
            <label className="flex items-center justify-start gap-2 text-gray-300 text-sm mt-2">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="accent-blue-400"
              />
              I agree to the <span className="underline cursor-pointer">Privacy Policy</span>
            </label>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 bg-[#384BFF] mt-12 py-4 px-6 flex flex-col md:flex-row justify-start text-[16px] md:justify-between items-center text-sm text-white font-plus-jakarta-sans font-semibold">
        <p className="text-left">© 2025 - All Rights Reserved by Infoperformance.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Terms and Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
