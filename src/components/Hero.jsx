import React from "react";
import Image1 from "../assets/Bluetooth/image-7.png";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left text-white px-6">
      <div className="absolute inset-0 opacity-40"></div>

      {/* Product Image */}
      <div className="relative z-10 w-full md:w-0.5/3 lg:w-1/3 md:mr-8">
        <img
          src={Image1}
          alt="Wireless Headset"
          className="w-full rounded-lg shadow-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hands-Free Call Noise Reduction
        </h1>
        <p className="mt-4 text-lg text-gray-300">
        Enjoy crystal-clear conversations with advanced noise reduction technology..
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
