import React from "react";

const SalesHeader = () => {
  const handleScroll = () => {
    const section = document.getElementById("packages");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-black py-8 md:py-12 px-4 sm:px-6 border-b-2 border-yellow-500">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge - disappears on smallest screens */}
        <div className="inline-block bg-yellow-500 text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
          LIMITED STOCK - DON MISS AM
        </div>

        {/* Main Heading - responsive font sizes */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-snug sm:leading-tight">
          No Noise, Pure Sound! <br className="hidden sm:block" />
          <span className="text-yellow-400">Bluetooth Earphone Wey Go Make You Hear Word Well Well</span>
        </h1>

        {/* Subheading - responsive text and spacing */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8">
          Fit all phones - iPhone, Android, even laptop! <br className="hidden sm:block" />
          Na real noise cancellation - whether you dey road, market or bus, your call go clear pass.
        </p>

        {/* Buttons - stack on mobile, row on larger screens */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={handleScroll}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg
            transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30"
          >
            GIVE ME THE EARPHONE NOW
          </button>
          <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg transition-all">
            See How E Dey Work
          </button>
        </div>

        {/* Features - stack on small screens, flex row on larger */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-gray-300 text-xs sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span>Over 15,000+ happy customers</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span>1-year warranty</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span>Free delivery for nationwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesHeader;