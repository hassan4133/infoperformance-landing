const CallToActionBanner = () => {
  return (
<section 
  className="text-white py-10 -mb-10 px-8 rounded-2xl max-w-6xl mx-auto my-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url("/footerback.png")',
    minHeight: '250px'
  }}
>
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-blue-600/10 rounded-2xl mt-20"></div>
      
  <div className="flex flex-col md:flex-row items-center -gap-0 relative z-10 w-full justify-center">
    <div className="ml-0 md:ml-8 lg:ml-16 flex-1 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 pt-16 md:pt-16 ml-0 md:ml-8 lg:ml-64">Got Ideas? We Got Skills</h2>
      <p className="text-base md:text-lg font-medium text-white ml-0 md:ml-8 lg:ml-64 mb-0 md:mb-0">
        Served over 5000+ Customers, helped them grow more
      </p>
    </div>
  </div>
  
  <div className="relative z-10 mt-0 md:mt-0 mr-0 md:mr-8 flex justify-center w-full md:w-auto">
<button className="bg-white text-black font-semibold px-4 md:px-8 py-2 md:py-3 mt-0 md:mt-16 rounded-full flex items-center gap-2 md:gap-3 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
<span className="text-xs md:text-sm uppercase tracking-wide whitespace-nowrap">TALK TO A SPECIALIST</span>
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</section>
  );
};

export default CallToActionBanner;
