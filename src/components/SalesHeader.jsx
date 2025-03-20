import React from "react";

const SalesHeader = () => {
  return (
    <header className="relative w-full flex flex-col items-center justify-center text-center text-white px-2">
      {/* Overlay */}
      <div className="absolute inset-0  opacity-50"></div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Best Crystal-Clear Conversations & Immersive Stereo Sound 🎧
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Advanced ENC noise reduction, built-in microphones, and powerful speakers 
          deliver rich, high-quality audio with deep bass and vibrant highs.
        </p>

        {/* Call to Action Button */}
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
            Buy Now
          </button>

        </div>
      </div>
    </header>
  );
};

export default SalesHeader;
