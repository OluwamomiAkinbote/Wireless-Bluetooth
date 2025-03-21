import React from "react";
import { FaExclamationTriangle, FaPhoneSlash, FaTimesCircle, FaClock, FaMoneyBillWave } from "react-icons/fa";

const Notice = () => {
  return (
    <div className="border-dashed border-2 border-red-500 bg-red-50 text-red-700 p-4 md:p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center gap-3">
        <FaExclamationTriangle className="text-red-500 text-2xl" />
        <h3 className="text-lg md:text-xl font-semibold">Important Notice</h3>
      </div>
      <ul className="mt-3 space-y-2 text-sm md:text-base">
        <li className="flex items-center gap-2">
          <FaTimesCircle className="text-red-500" /> Do not place an order if you are not ready to receive it.
        </li>
        <li className="flex items-center gap-2">
          <FaPhoneSlash className="text-red-500" /> Ensure your phone is reachable when the rider arrives.
        </li>
        <li className="flex items-center gap-2">
          <FaClock className="text-red-500" /> Delays or unresponsive customers may result in order cancellation.
        </li>
        <li className="flex items-center gap-2">
          <FaMoneyBillWave className="text-red-500" /> Have cash or payment ready upon delivery.
        </li>
        <li className="flex items-center gap-2">
          <FaExclamationTriangle className="text-red-500" /> By ordering, you agree to be available for delivery.
        </li>
      </ul>
    </div>
  );
};

export default Notice;
