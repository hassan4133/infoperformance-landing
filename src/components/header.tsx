"use client"
import Link from "next/link"
import { ChevronDown, Phone, MessageCircle } from "lucide-react"

export default function Header() {
  return (
    <header className="relative z-20 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[#FFFFFF] py-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-start items-start md:items-center text-sm gap-2 md:gap-6">
          <div className="flex flex-wrap items-center gap-2 md:gap-2">
            <span className="text-gray-600 text-xs md:text-sm">Get a proposal. AI-Powered quote in minutes</span>
            <Link href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-xs md:text-sm">
              Instant AI Quote →
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 md:mt-0">
            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs md:text-sm px-1 md:px-0">
              <MessageCircle className="w-4 h-4" />
              Message
            </button>
            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs md:text-sm px-1 md:px-0">
              <MessageCircle className="w-4 h-4" />
              Chat
            </button>
            <span className="flex items-center gap-1 text-blue-600 text-xs md:text-sm">
              <Phone className="w-4 h-4" />
              04-888-7368
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-4 md:px-6 pb-0">
        <div className="flex justify-center w-full md:w-[800px] mx-auto">
          <nav className="bg-white rounded-full shadow-xl shadow-black/10 py-3 px-4 md:px-6 mb-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/logo2.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-lg text-gray-800">Infoperformance</span>
              </div>

              <div className="hidden lg:flex items-center gap-6">
                <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
                  Home
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium text-sm">
                    About <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium text-sm">
                    Services <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium text-sm">
                    Agencies <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
                <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
                  Projects
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
                  Features
                </Link>
              </div>

              <button className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                GET STARTED →
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export { Header }
