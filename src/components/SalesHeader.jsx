import React from "react";

const SalesHeader = () => {
  const handleScroll = () => {
    const section = document.getElementById("packages");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative w-full flex flex-col items-center justify-center text-center text-gray-300 px-4 py-6 mb-6 border-2 border-dashed border-maroon-700">
      {/* Overlay */}
      <div className="absolute inset-0 opacity-50"></div>

      <div className="relative z-10 max-w-6xl">
        <h1 className="text-2xl md:text-6xl font-bold leading-tight">
          Best Wireless Earphone With Crystal-Clear Conversations & Active Noise Reduction
        </h1>
        <p className="mt-4 text-sm md:text-xl text-gray-300">
          Compatible with iOS, Android, iPad, and laptops.<br />
          Featuring active noise reduction that blocks external noise for crystal-clear sound.
        </p>

        {/* Call to Action Button */}
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={handleScroll}
            className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-[6px_6px_12px_#1a1a1a,-6px_-6px_12px_#2a2a2a] 
            active:shadow-[inset_4px_4px_8px_#1a1a1a,inset_-4px_-4px_8px_#2a2a2a] transition-all duration-200"
          >
            Discover the Best Deals
          </button>
        </div>
      </div>
    </header>
  );
};

export default SalesHeader;
