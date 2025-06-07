import React, { useState } from "react";
import BatteryImage from "../assets/feat-1.jpg";
import DisplayImage from "../assets/feat-3.jpg";
import VoiceControlImage from "../assets/feat-4.jpg";
import CompatibilityImage from "../assets/feat-5.jpg";
import AccessoriesImage from "../assets/feat-6.jpg";

const Discover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Battery Life Wey No Dey Finish!",
      image: BatteryImage,
      content: [
        "One full charge gives you more than 20 hours of non-stop music and calls",
        "Earbuds fit sleep for 60 days and still wake up with power!",
        "Your charging case na portable power bank - gives you 4 extra full charges",
        "Combined power lasts 60-80 hours - no be small thing!",
      ],
    },
    {
      title: "See Your Power Level Any Time",
      image: DisplayImage,
      content: [
        "Our charging case come with LED display wey dey show you power level",
        "No more surprises - you go always know when to charge",
        "Say bye-bye to 'low battery' wahala at crucial moments",
      ],
    },
    {
      title: "Talk Am, E Go Do! (Voice Control)",
      image: VoiceControlImage,
      content: [
        "Just talk to your earbuds like your personal assistant",
        "Safe for driving - no need to press anything with your hand",
        "Everything dey work smooth like butter - no stress!",
      ],
    },
    {
      title: "E Fit Any Device Wey You Get",
      image: CompatibilityImage,
      content: [
        "No discrimination - works with iPhone, Android, Windows, and others",
        "Connects sharpaly to phones, laptops, tablets, and even smartwatches",
        "Gamers, una well come - e dey work with PlayStation and Xbox too!",
      ],
    },
    {
      title: "Complete Package With All Accessories",
      image: AccessoriesImage,
      content: [
        "You go get charging case, earbuds, and full user manual",
        "We don package different ear caps - small, medium, large - to fit your ear well well",
        "Quality charging cable and fine packaging included - no cutting corners!",
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative p-4 sm:p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      {/* Navigation Buttons - Responsive Positioning */}
      <div className="absolute -top-4 right-2 sm:right-4 flex gap-2 sm:gap-3">
        <button
          onClick={handlePrev}
          className="bg-gray-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-600 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-600 transition-colors"
        >
          Next
        </button>
      </div>

      {/* Card Content with Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
        {/* Image Section - Responsive Sizing */}
        <div className="w-full md:w-1/2 lg:w-2/5">
          <img
            src={cards[currentIndex].image}
            alt={cards[currentIndex].title}
            className="w-full h-48 sm:h-56 md:h-64 object-contain mx-auto"
          />
        </div>

        {/* Text Section - Responsive Typography */}
        <div className="w-full md:w-1/2 lg:w-3/5">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
            {cards[currentIndex].title}
          </h2>
          <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg">
            {cards[currentIndex].content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-1 sm:mr-2 text-green-400">✓</span> 
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="md:hidden flex justify-center mt-4 space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-600'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Discover;