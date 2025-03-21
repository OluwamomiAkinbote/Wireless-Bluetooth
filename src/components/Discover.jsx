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
      title: "Invincible Long Battery Life",
      image: BatteryImage,
      content: [
        "Fully charged, the earbuds can be used continuously for more than 20 hours.",
        "Standby time reaches up to 60 days.",
        "Charging case supplies 4 full charges.",
        "Total battery life lasts 60-80 hours with charging case.",
      ],
    },
    {
      title: "With LED Power Display",
      image: DisplayImage,
      content: [
        "Charging case is equipped with an LED power indicator.",
        "Power levels can be checked anytime.",
        "Never worry about running out of power unexpectedly.",
      ],
    },
    {
      title: "The Earbud is Equipped with Intelligent Voice Control",
      image: VoiceControlImage,
      content: [
        "Easily call up the voice assistant with a single command.",
        "Hands-free operation for safer driving.",
        "No manual operation required for smooth experience.",
      ],
    },
    {
      title: "Compatible with Various Systems and Devices",
      image: CompatibilityImage,
      content: [
        "Works with iOS, Android, Windows, and other systems.",
        "Easily connects to phones, tablets, laptops, and smartwatches.",
        "Also compatible with gaming consoles, smart cars, and more.",
      ],
    },
    {
      title: "Bluetooth Earbud Accessories",
      image: AccessoriesImage,
      content: [
        "Includes charging compartment and earbuds.",
        "User manual for easy setup.",
        "Comes with small and large ear caps.",
        "Includes charging cable and premium packaging.",
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
    <section className="relative p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Navigation Buttons */}
      <div className="absolute -top-4 right-4 flex gap-3">
        <button
          onClick={handlePrev}
          className="bg-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-600"
        >
          Next
        </button>
      </div>

      {/* Card Content with Side-by-Side Layout */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={cards[currentIndex].image}
            alt={cards[currentIndex].title}
            className="w-full h-64 object-contain mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {cards[currentIndex].title}
          </h2>
          <ul className="space-y-2 text-base md:text-lg">
            {cards[currentIndex].content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Discover;
