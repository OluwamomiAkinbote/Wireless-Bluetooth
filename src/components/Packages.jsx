import React from "react";
import Package1 from "../assets/image-4.png";
import Package2 from "../assets/image-5.png";
import Package3 from "../assets/image-3.png";
import { FaShippingFast, FaGift, FaShieldAlt, FaCheckCircle, FaPercentage } from "react-icons/fa";

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      items: "Single Item",
      price: "₦33,000",
      original: "₦35,000",
      savings: "₦2,000",
      image: Package1,
      features: [
        { icon: <FaShippingFast />, text: "Free Shipping" },
        { icon: <FaGift />, text: "Bonus Gift" },
        { icon: <FaShieldAlt />, text: "6-Month Warranty" },
      ],
    },
    {
      name: "Popular",
      items: "Duo Pack",
      price: "₦64,000",
      original: "₦70,000",
      savings: "₦6,000",
      featured: true,
      image: Package2,
      features: [
        { icon: <FaCheckCircle />, text: "All Starter Benefits" },
        { icon: <FaPercentage />, text: "Extra 3% Discount" },
        { text: "🔥 Best Value" },
      ],
    },
    {
      name: "Premium",
      items: "Triple Pack",
      price: "₦96,000",
      original: "₦105,000",
      savings: "₦9,000",
      image: Package3,
      features: [
        { icon: <FaCheckCircle />, text: "All Popular Benefits" },
        { icon: <FaPercentage />, text: "Exclusive 5% Discount" },
        { icon: <FaGift />, text: "Deluxe Gift Package" },
      ],
    },
  ];
  
  const handleScroll = () => {
    const section = document.getElementById("contact-us");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black" id="packages">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Get More, Save More</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose your perfect package and enjoy exclusive bundle discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 
              ${pkg.featured ? "border-2 border-yellow-400" : "border border-gray-700"}`}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 text-sm font-bold">
                  RECOMMENDED
                </div>
              )}

              <div className="p-6 bg-gray-800 bg-opacity-60 h-full">
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-1 ${pkg.featured ? "text-yellow-400" : "text-white"}`}>
                    {pkg.name}
                  </h3>
                  <p className="text-gray-300">{pkg.items}</p>
                </div>

                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-40 object-contain mb-6"
                />

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-1">{pkg.price}</div>
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-gray-400 line-through">{pkg.original}</span>
                    <span className="text-green-400 text-sm">Save {pkg.savings}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      {feature.icon && <span className="text-yellow-400">{feature.icon}</span>}
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition-colors
                  ${pkg.featured 
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black" 
                    : "bg-gray-700 hover:bg-gray-600 text-white"}`}
                  onClick={handleScroll}
                >
                  Get {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;