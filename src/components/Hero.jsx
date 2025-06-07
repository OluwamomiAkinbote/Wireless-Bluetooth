import React from "react";
import Image1 from "../assets/bluetooth-001.jpg";

const Hero = () => {
  const scrollToPackages = () => {
    const section = document.getElementById("packages");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-8 px-4 sm:px-6 py-8 sm:py-12 border-b-2 border-yellow-500">
      {/* Product Image - centered on mobile, right-aligned on desktop */}
      <div className="w-full lg:w-1/2 xl:w-2/5 relative order-1">
        <img
          src={Image1}
          alt="Quality Bluetooth Headset"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20 pointer-events-none" />
      </div>

      {/* Content - comes first on mobile */}
      <div className="max-w-2xl order-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-white">
          No Wahala Bluetooth Headset <br className="hidden sm:block" />
          <span className="text-yellow-400">Connect Sharp-Sharp!</span>
        </h1>

        {/* Features list - responsive text and spacing */}
        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-base sm:text-lg text-gray-300">
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="text-yellow-400 mt-0.5 sm:mt-1">✓</span>
            <span>Lightweight design - No pain for your ear</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="text-yellow-400 mt-0.5 sm:mt-1">✓</span>
            <span>Call Siri by voice - No need to touch phone</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="text-yellow-400 mt-0.5 sm:mt-1">✓</span>
            <span>Smart buttons - No accidental pressing</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="text-yellow-400 mt-0.5 sm:mt-1">✓</span>
            <span>Perfect for drivers - Hands-free commotment</span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <span className="text-yellow-400 mt-0.5 sm:mt-1">✓</span>
            <span>Strong battery - Last all day</span>
          </li>
        </ul>

        {/* Buttons - stack on mobile, row on larger screens */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={scrollToPackages}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg 
            transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30 text-sm sm:text-base"
          >
            BUY NOW - GET DISCOUNT
          </button>
          <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all text-sm sm:text-base">
            See How It Works
          </button>
        </div>

        {/* Social proof - smaller on mobile */}
        <p className="mt-3 sm:mt-4 text-gray-300 text-xs sm:text-sm">
          🔥 <strong>Over 5,000+</strong> Nigerians don yarn say e good!
        </p>
      </div>
    </section>
  );
};

export default Hero;