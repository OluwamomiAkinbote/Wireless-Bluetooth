import React from "react";
import Package1 from "../assets/image-4.png";
import Package2 from "../assets/image-5.png";
import Package3 from "../assets/image-3.png";
import { FaShippingFast, FaGift, FaUndo, FaShieldAlt, FaCheckCircle, FaPercentage } from "react-icons/fa";

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
        { icon: <FaShippingFast />, text: "Free Shipping" },
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
      highlight: true, // Most purchased
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
    <section id="packages" className="py-16 px-8 bg-gradient-to-r from-gray-900 to-black">
      <h2 className="text-5xl font-bold text-white mb-12 text-center">Choose Your Package</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative bg-gray-800 p-10 rounded-xl shadow-lg border border-gray-700 
            transition transform duration-300 hover:shadow-2xl hover:scale-105 text-white`}
          >
            {pkg.highlight && (
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                Most Purchased
              </span>
            )}

            {/* Package Image */}
            <img src={pkg.image} alt={pkg.name} className="w-full h-52 object-cover rounded-lg mb-6" />

            {/* Package Name & Subheading */}
            <div className="text-left">
              <h3 className="text-3xl font-semibold">{pkg.name}</h3>
              <p className="text-lg text-gray-300">{pkg.subheading}</p>
            </div>

            {/* Pricing */}
            <div className="text-left mt-6">
              <span className="text-4xl font-bold text-blue-400">{pkg.price}</span>
              <span className="text-gray-400 line-through ml-3 text-2xl">{pkg.slashPrice}</span>
            </div>

            {/* Features List */}
            <ul className="mt-6 space-y-4">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-xl">
                  <span className="text-blue-400 text-2xl">{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <button
              onClick={handleScroll}
              className="mt-8 w-full bg-blue-500 text-white py-4 rounded-full font-semibold 
              shadow-lg transition-all hover:shadow-md hover:bg-blue-600 text-xl"
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
