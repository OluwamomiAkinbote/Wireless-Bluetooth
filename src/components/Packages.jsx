import React from "react";
import Package1 from "../assets/image-4.png";
import Package2 from "../assets/image-5.png";
import Package3 from "../assets/image-3.png";
import { FaShippingFast, FaGift, FaUndo, FaShieldAlt, FaCheckCircle, FaPercentage, FaStar } from "react-icons/fa";

const Packages = () => {
  const packages = [
    {
      name: "Basic Package",
      subheading: "Buy 1 pcs",
      price: "#37,000",
      slashPrice: "#49,000",
      highlight: false,
      image: Package1,
      features: [
        { icon: <FaShippingFast />, text: "Free Delivery" },
        { icon: <FaGift />, text: "Free Gift" },
        { icon: <FaShieldAlt />, text: "6 Months Warranty" },
        { icon: <FaUndo />, text: "Easy Returns" },
      ],
    },
    {
      name: "Pro Package",
      subheading: "Buy 2 pcs",
      price: "#72,500",
      slashPrice: "#89,000",
      highlight: true,
      image: Package2,
      features: [
        { icon: <FaCheckCircle />, text: "Everything in Basic" },
        { icon: <FaPercentage />, text: "Enjoy 3% Discount" },
      ],
    },
    {
      name: "Premium Package",
      subheading: "Buy 3 pcs",
      price: "#106,000",
      slashPrice: "#130,000",
      highlight: false,
      image: Package3,
      features: [
        { icon: <FaCheckCircle />, text: "Everything in Pro" },
        { icon: <FaPercentage />, text: "Enjoy 5% Discount" },
        { icon: <FaGift />, text: "Exclusive Gift Pack" },
      ],
    },
  ];

  const handleScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-10 px-4 md:px-8 mb-8">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
        <FaCheckCircle className="text-yellow-500 text-3xl md:text-4xl" />
        Choose Your Package
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative bg-gray-800 p-6 md:p-8 rounded-xl shadow-md text-white 
            ${pkg.highlight ? "border-2 border-yellow-500" : ""}`}
          >
            {pkg.highlight && (
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full flex items-center gap-2">
                <FaStar className="text-lg" />
                <span className="text-sm font-semibold">Most Purchased</span>
              </div>
            )}

            {/* Package Image */}
            <img src={pkg.image} alt={pkg.name} className="w-full h-36 md:h-48 object-cover rounded-lg mb-4" />

            {/* Package Name & Subheading */}
            <div className="text-center">
              <h3 className="text-lg md:text-2xl font-semibold text-white">{pkg.name}</h3>
              <p className="text-sm md:text-lg text-gray-300">{pkg.subheading}</p>
            </div>

            {/* Pricing */}
            <div className="text-left mt-4">
              <span className="text-xl md:text-3xl font-bold text-yellow-500">{pkg.price}</span>
              <span className="text-gray-400 line-through ml-2 md:ml-3 text-base md:text-lg">{pkg.slashPrice}</span>
            </div>

            {/* Features List */}
            <ul className="mt-4 space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm md:text-lg text-gray-300">
                  <span className="text-yellow-500 text-lg md:text-2xl">{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <button
              onClick={handleScroll}
              className="mt-6 w-full bg-blue-700 text-white py-3 md:py-4 rounded-full font-semibold shadow-md text-base md:text-lg"
            >
              Choose Package
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
