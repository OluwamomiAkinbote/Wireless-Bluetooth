'use client'



import { Volume2, BatteryCharging, Bluetooth, PhoneCall, Mic, CheckCircle, Ear } from "lucide-react";

const features = [
  {
    icon: <Mic className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: "Clear Talk Anywhere",
    description: "No background noise - people go hear you well well even for market or bus"
  },
  {
    icon: <BatteryCharging className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: "Long Lasting Battery",
    description: "Full charge go last you 3 days - no be that one wey go die after small use"
  },
  {
    icon: <Bluetooth className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: "Bluetooth 5.3 (Latest)",
    description: "Connect sharp-sharp, no shaking - better pass old Bluetooth wey dey cut"
  },
  {
    icon: <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: "Hands-Free Calling",
    description: "No need to hold phone - just talk like big man while you dey drive"
  },
  {
    icon: <Ear className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: "No Ear Pain",
    description: "Small and light - fit your ear well well no matter how long you take am"
  },
  {
    icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: "Work With All Phones",
    description: "No be only iPhone or Android - e fit connect any phone wey get Bluetooth"
  }
];

const HeadsetFeature = () => {
  const scrollToContact = () => {
    const section = document.getElementById("packages");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
          Why You Go Love This Headset
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Na real quality you go enjoy - no be that fake one wey go spoil after one week
        </p>
      </div>

      {/* Features Grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl hover:bg-gray-750 transition-all group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-yellow-400/10 rounded-full group-hover:bg-yellow-400/20 transition">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-8 sm:mt-12 text-center">
        <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
          <span className="text-yellow-400 font-bold">Over 10,000+</span> Nigerians don buy and confirm say e good!
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-md sm:rounded-lg text-sm sm:text-base transition-all transform hover:scale-105"
        >
          I Want My Own Now
        </button>
      </div>
    </div>
  );
};

export default HeadsetFeature;