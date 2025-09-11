"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Overlay for mobile sidebar */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <header className="relative z-50 w-full">
        {/* Top bar */}
        <div className="bg-[#FFFFFF] px-4 py-2 bg-left sm:bg-left-top">
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-between max-w-7xl mx-auto gap-2 md:gap-26">
            <div className="flex flex-wrap items-center gap-2 md:gap-4 pl-4 md:pl-36 mt-0 md:mt-0 -mb-2">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <span className="font-rajdhani text-xs md:text-sm text-gray-700">
                    Get a precise, <strong>AI-Powered </strong>quote in minutes.
                  </span>
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1 md:px-4 md:py-1.5 rounded-full font-rajdhani font-medium text-xs md:text-sm flex items-center gap-2 whitespace-nowrap">
                    <strong>Instant AI Quote → </strong>
                  </button>
                </div>
                <img
                  src="/aiLine.png"
                  alt="AI line decoration"
                  className="h-1 md:h-2 w-auto md:w-16 -mt-2 ml-20 md:ml-18"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:mt-1 mt-1 md:gap-4 justify-start md:justify-end mx-0 md:mx-auto md:ml-auto pr-4 md:pl-48 text-blue-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="font-rajdhani font-medium text-xs md:text-sm">Message</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zm2 0h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-rajdhani font-medium text-xs md:text-sm">Chat</span>
              </div>
              <div className="flex items-center gap-1 text-blue">
                <svg className="w-4 h-4" fill="blue" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-rajdhani font-medium text-xs md:text-sm">04-585-9268</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation - Fixed position with responsive width */}
        <nav className="relative z-50 px-2 sm:px-4 pt-4">
          <div className="flex justify-center">
            <div className="bg-[#FFFFFF] backdrop-blur-sm rounded-full px-3 sm:px-6 py-3 flex items-center justify-between shadow-lg border-l-4 border-r-4 border-b-4 border-purple-300/100 w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-[1115px]">
              
              {/* Logo section */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/logo2.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-rajdhani font-bold text-lg sm:text-xl lg:text-2xl text-[#060707] whitespace-nowrap">
                  Infoperformance
                </span>
              </div>

              {/* Desktop Navigation - Hidden on smaller screens */}
              <div className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1 justify-center mx-4">
                <a href="#" className="font-rajdhani font-medium text-[#060707] hover:text-blue-700 transition-colors whitespace-nowrap">
                  <b>Home</b>
                </a>
                <div className="relative group">
                  <a
                    href="#"
                    className="font-rajdhani font-medium text-[#060707] hover:text-blue-600 flex items-center gap-1 transition-colors whitespace-nowrap"
                  >
                    <b>About</b>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div className="relative group">
                  <a
                    href="#"
                    className="font-rajdhani font-medium text-[#060707] hover:text-blue-600 flex items-center gap-1 transition-colors whitespace-nowrap"
                  >
                    <b>All Services</b>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div className="relative group">
                  <a
                    href="#"
                    className="font-rajdhani font-medium text-[#060707] hover:text-blue-600 flex items-center gap-1 transition-colors whitespace-nowrap"
                  >
                    <b>Services for Agencies</b>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <a href="#" className="font-rajdhani font-medium text-[#060707] hover:text-blue-600 transition-colors whitespace-nowrap">
                  <b>Projects</b>
                </a>
                <a href="#" className="font-rajdhani font-medium text-[#060707] hover:text-blue-600 transition-colors whitespace-nowrap">
                  <b>Features</b>
                </a>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Desktop GET STARTED button */}
                <button className="hidden lg:block bg-[#F98600] hover:bg-orange-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full font-rajdhani font-semibold text-sm xl:text-base transition-colors whitespace-nowrap">
                  GET STARTED →
                </button>

                {/* Mobile menu button */}
                {!isMenuOpen && (
                  <button
                    onClick={() => setIsMenuOpen(true)}
                    className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/logo2.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-rajdhani font-bold text-xl text-[#060707]">Infoperformance</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sidebar Navigation */}
            <div className="flex flex-col py-6">
              <a
                href="#"
                className="flex items-center px-6 py-3 text-blue-600 bg-blue-50 border-r-4 border-blue-600 font-rajdhani font-semibold text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </a>

              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-rajdhani font-medium text-sm transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                About
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-rajdhani font-medium text-sm transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                All Services
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-rajdhani font-medium text-sm transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                Services for Agencies
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-rajdhani font-medium text-sm transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                Projects
              </a>

              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-rajdhani font-medium text-sm transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Features
              </a>
            </div>

            {/* Sidebar Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
              <button
                className="w-full bg-[#F98600] hover:bg-orange-600 text-white px-4 py-3 rounded-full font-rajdhani font-semibold text-sm transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                GET STARTED →
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export { Header }