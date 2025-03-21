import React from "react";
import Image1 from "../assets/image-7.png";

const Hero = () => {
  // Scroll to the packages section
  const scrollToPackages = () => {
    const section = document.getElementById("packages");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left text-white px-4 py-4">
      {/* Product Image */}
      <div className="relative w-full md:w-1/3 lg:w-2/5 md:mr-8 sm:mb-8">
        <img
          src={Image1}
          alt="Wireless Bluetooth Headset"
          className="w-full shadow-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-300 sm:mt-8 md:mb-0">
          Bluetooth with Instant Pairing and Uninterrupted Stable Transmission
        </h1>

        <p className="mt-5 text-base sm:text-lg md:text-xl text-purple-200 leading-relaxed sm:leading-normal">
          The Bluetooth headset is designed with a <strong>lightweight hanging ear</strong>, ensuring comfort and durability.
        </p>

        <p className="mt-3 text-base sm:text-lg md:text-xl text-purple-200 leading-relaxed sm:leading-normal">
          Support <strong>voice wake-up Siri</strong>, allowing you to make calls without holding your phone.
        </p>

        <p className="mt-3 text-base sm:text-lg md:text-xl text-purple-200 leading-relaxed sm:leading-normal">
          Use <strong>multi-function buttons</strong> to prevent accidental touches.
        </p>

        <p className="mt-3 text-base sm:text-lg md:text-xl text-purple-200 leading-relaxed sm:leading-normal">
          Easily control the headset directly, making it highly convenient for those who frequently drive.
        </p>

        {/* Call to Action Button - Neumorphism Style */}
        <div className="mt-8 flex justify-center md:justify-start">
          <button
            onClick={scrollToPackages}
            className="bg-yellow-700 text-gray-950 font-bold text-lg sm:text-xl md:text-2xl py-4 sm:py-5 px-8 sm:px-12 rounded-md 
                       shadow-[6px_6px_12px_#0F172A,-6px_-6px_12px_#334155] 
                       transition-all transform hover:scale-105 hover:shadow-[3px_3px_6px_#0F172A,-3px_-3px_6px_#334155] 
                       active:shadow-inner active:translate-y-[2px]"
          >
            I NEED IT NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
