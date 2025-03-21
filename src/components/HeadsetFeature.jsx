import { Volume2, BatteryCharging, Bluetooth, PhoneCall, Mic, CheckCircle, Ear } from "lucide-react";

const features = [
  {
    icon: <Mic className="w-7 h-7 text-blue-400" />,
    title: "Automatic Noise Reduction",
    description: "Built-in ENC environmental call noise reduction ensures clear call quality with dual microphone cancellation."
  },
  {
    icon: <BatteryCharging className="w-7 h-7 text-green-400" />,
    title: "Smart LED Digital Display",
    description: "Check battery levels easily with the LED display. Large-capacity charging bin supports up to 72 hours of use."
  },
  {
    icon: <Bluetooth className="w-7 h-7 text-indigo-400" />,
    title: "Bluetooth 5.3",
    description: "Experience instant pairing and stable transmission with low power consumption and enhanced speech clarity."
  },
  {
    icon: <PhoneCall className="w-7 h-7 text-red-400" />,
    title: "Hands-Free for Calling",
    description: "Lightweight ear-hook design with Siri voice wake-up and multifunction buttons for easy control."
  },
  {
    icon: <Ear className="w-7 h-7 text-purple-400" />,
    title: "Ear Painless Design",
    description: "Small and lightweight for a stable, ergonomic fit that ensures comfort for long periods."
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-teal-400" />,
    title: "Wide Compatibility",
    description: "Supports dual connection with iOS, Android, PC, and any Bluetooth-enabled device."
  }
];

const HeadsetFeature = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-r from-gray-900 to-black">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Bluetooth Headset Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 border border-gray-700 rounded-lg hover:border-gray-500 transition"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadsetFeature;
