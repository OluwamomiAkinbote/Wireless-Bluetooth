import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { User, Phone, MapPin, PackageCheck, Send } from "lucide-react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjkyybkr");

  if (state.succeeded) {
    return <p className="text-green-500 text-center">Thanks for your order!</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-gray-900 to-black text-white shadow-lg rounded-lg border border-gray-700">
      <h2 className="text-xl font-semibold text-center mb-4">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border-b border-gray-600 pb-2">
            <User className="text-gray-400 w-4 h-4 mr-2" />
            <input
              type="text"
              name="fullName"
              required
              className="w-full bg-transparent outline-none text-white text-sm"
            />
          </div>
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border-b border-gray-600 pb-2">
            <Phone className="text-green-400 w-4 h-4 mr-2" />
            <input
              type="tel"
              name="whatsapp"
              required
              defaultValue="+234"
              pattern="\+234[0-9]{10}"
              className="w-full bg-transparent outline-none text-white text-sm"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border-b border-gray-600 pb-2">
            <Phone className="text-blue-400 w-4 h-4 mr-2" />
            <input
              type="tel"
              name="phone"
              required
              defaultValue="+234"
              pattern="\+234[0-9]{10}"
              className="w-full bg-transparent outline-none text-white text-sm"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Address (Include State) <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border-b border-gray-600 pb-2">
            <MapPin className="text-red-400 w-4 h-4 mr-2" />
            <input
              type="text"
              name="address"
              required
              className="w-full bg-transparent outline-none text-white text-sm"
            />
          </div>
        </div>

        {/* Choose Package */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Choose Your Package <span className="text-red-500">*</span>
          </label>
          <div className="border-b border-gray-600 pb-2 space-y-2 text-sm">
            <label className="flex items-center">
              <input type="radio" name="package" value="BUY 1 FOR #37,000" required className="mr-2" />
              Buy 1 for #37,000
            </label>
            <label className="flex items-center">
              <input type="radio" name="package" value="BUY 2 FOR #72,500" required className="mr-2" />
              Buy 2 for #72,500
            </label>
            <label className="flex items-center">
              <input type="radio" name="package" value="BUY 3 FOR #106,000" required className="mr-2" />
              Buy 3 for #106,000
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-blue-600 text-sm"
        >
          <Send className="w-4 h-4 mr-2" /> Submit Order
        </button>

        <ValidationError prefix="Form" field="form" errors={state.errors} />
      </form>
    </div>
  );
};

export default ContactForm;
