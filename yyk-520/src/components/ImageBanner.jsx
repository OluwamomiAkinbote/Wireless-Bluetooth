'use client'

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ImageBanner = () => {
  const images = [
    "/assets/amazon-2.jpg",
    "/assets/amazon-3.jpg",
    "/assets/amazon-4.jpg",
    "/assets/amazon-5.jpg",
    "/assets/amazon-6.jpg"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto p-4">
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={images[currentIndex]}
          alt={`banner-${currentIndex}`}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Navigation Controls (Top-Right) */}
      <div className="absolute top-4 right-6 flex space-x-2">
        <button
          onClick={prevBanner}
          className="p-2 bg-yellow-800 text-black rounded hover:bg-yellow-700 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextBanner}
          className="p-2 bg-yellow-800 text-black rounded hover:bg-yellow-700 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-4 relative w-full h-40 md:h-64">
        <Image
          src="/assets/amazon-6.jpg"
          alt="Amazon banner 6"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="mt-4 relative w-full h-40 md:h-64">
        <Image
          src="/assets/amazon-1.jpg"
          alt="Amazon banner 7"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="mt-4 relative w-full h-40 md:h-64">
        <Image
          src="/assets/amazon-d.jpg"
          alt="Amazon banner 8"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageBanner;