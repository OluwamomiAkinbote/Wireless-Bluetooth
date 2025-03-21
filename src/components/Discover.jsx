import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import DeviceImage from "../assets/image-3.png";
import PackageImage from "../assets/image-4.png";
import UsageImage from "../assets/image-5.png";

const Discover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "How to Wear the Device",
      image: UsageImage,
      content: [
        "Pick up the headset.",
        "Rotate the ear hook to a suitable angle (left or right ear).",
        "Wear the headset with the red support as the fixed point.",
        "Adjust the headphone angle according to your ear type.",
      ],
    },
    {
      title: "Device Features",
      image: DeviceImage,
      content: [
        "Play / Pause Music",
        "Start Siri",
        "Answer Calls",
        "Mute Button",
        "USB Charging Port",
        "Volume Control",
      ],
    },
    {
      title: "What's Inside the Package",
      image: PackageImage,
      content: [
        "Charger",
        "Charging Case",
        "USB Cord",
        "2 Rubber Clips",
        "Bluetooth Headset",
        "User Manual",
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
      <div className="absolute top-4 right-4 flex gap-3">
        <button
          onClick={handlePrev}
          className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
        >
          <FaArrowLeft className="text-white text-lg" />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
        >
          <FaArrowRight className="text-white text-lg" />
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
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaCheckCircle className="text-yellow-400 text-3xl" />
            {cards[currentIndex].title}
          </h2>
          <ul className="space-y-2 text-lg">
            {cards[currentIndex].content.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Discover;
