import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../assets/amazon-2.jpg";
import banner2 from "../assets/amazon-3.jpg";
import banner3 from "../assets/amazon-4.jpg";
import banner4 from "../assets/amazon-5.jpg";
import banner5 from "../assets/amazon-6.jpg";
import banner6 from "../assets/amazon-7.jpg";
import banner7 from "../assets/amazon-1.jpg";
import banner8 from "../assets/amazon-d.jpg";

const ImageBanner = () => {
  const images = [banner1, banner2, banner3, banner4, banner5];
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
      <img
        src={images[currentIndex]}
        alt={`banner-${currentIndex}`}
        className="w-full h-full object-cover "
      />
      {/* Navigation Controls (Top-Right) */}
      <div className="absolute -top-1 right-4 flex space-x-2">
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

      <div>
      <img
        src={banner6}

        className="w-full h-full object-cover "
      />
      </div>
      <div>
      <img
        src={banner7}

        className="w-full h-full object-cover "
      />
      </div>
      <div>
      <img
        src={banner8}

        className="w-full h-full object-cover "
      />
      </div>
    </div>
  );
};

export default ImageBanner;
