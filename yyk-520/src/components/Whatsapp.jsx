import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const WhatsApp = () => {
  const phoneNumber = "+2348089206714"; // Change this to your WhatsApp number
  const productName = "Wireless Bluetooth-yyk520";

  // WhatsApp Message
  const message = encodeURIComponent(`Hi, I'm interested in "${productName}". Can you provide more details?`);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-2 flex z-50 items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default WhatsApp;
