import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { User, Phone, MapPin, Send, ShoppingCart, Gift } from "lucide-react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjkyybkr");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);

    if (state.succeeded) {
      if (window.fbq) {
        window.fbq("track", "Purchase");
      }
    }
  };

  if (state.succeeded) {
    return (
      <div className="text-center p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-2">Order Confirmed! ✅</h3>
        <p>Thank you for your order! Our delivery agent will contact you shortly.</p>
        <p className="mt-2 font-medium">Check your WhatsApp for confirmation message.</p>
      </div>
    );
  }

  return (
    <div
      id="order-now"
      className="max-w-3xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl rounded-xl border border-gray-700"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          Place Your Order Now
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Fill this form to secure your item. Delivery takes 24-48 hours in Lagos, 2-3 days outside Lagos.
        </p>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
        {/* Personal Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 border border-gray-700">
              <User className="text-yellow-400 w-4 h-4 mr-2" />
              <input
                type="text"
                name="fullName"
                required
                placeholder="John Doe"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              WhatsApp Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 border border-gray-700">
              <Phone className="text-green-400 w-4 h-4 mr-2" />
              <input
                type="tel"
                name="whatsapp"
                required
                defaultValue="+234"
                pattern="\+234[0-9]{10}"
                placeholder="+2348123456789"
                className="w-full bg-transparent outline-none text-white text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Alternative Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 border border-gray-700">
              <Phone className="text-blue-400 w-4 h-4 mr-2" />
              <input
                type="tel"
                name="phone"
                required
                defaultValue="+234"
                pattern="\+234[0-9]{10}"
                placeholder="+2348123456789"
                className="w-full bg-transparent outline-none text-white text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Delivery Address (Include State) <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 border border-gray-700">
              <MapPin className="text-red-400 w-4 h-4 mr-2" />
              <input
                type="text"
                name="address"
                required
                placeholder="e.g., 25 Adeola Odeku St, Victoria Island, Lagos"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>

        {/* Package Selection */}
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold mb-3 flex items-center text-yellow-400">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Select Your Package
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label className="flex flex-col border border-gray-600 rounded-lg p-3 hover:border-yellow-400 cursor-pointer">
              <div className="flex items-center mb-2">
                <input type="radio" name="package" value="BUY 1 FOR #37,000" required className="mr-2" />
                <span className="font-medium">Single Pack</span>
              </div>
              <div className="text-yellow-400 font-bold text-lg">₦32,500</div>
              <div className="text-xs text-gray-400 mt-1">Save ₦2,500</div>
            </label>

            <label className="flex flex-col border border-gray-600 rounded-lg p-3 hover:border-yellow-400 cursor-pointer">
              <div className="flex items-center mb-2">
                <input type="radio" name="package" value="BUY 2 FOR #72,500" required className="mr-2" />
                <span className="font-medium">Double Pack</span>
              </div>
              <div className="text-yellow-400 font-bold text-lg">₦63,500</div>
              <div className="text-xs text-gray-400 mt-1">Save ₦6,500</div>
            </label>

            <label className="flex flex-col border border-gray-600 rounded-lg p-3 hover:border-yellow-400 cursor-pointer bg-gray-700 border-yellow-400 relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
                BEST VALUE
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" name="package" value="BUY 3 FOR #106,000" required className="mr-2" />
                <span className="font-medium">Triple Pack</span>
              </div>
              <div className="text-yellow-400 font-bold text-lg">₦95,500</div>
              <div className="text-xs text-gray-400 mt-1">Save ₦9,500</div>
            </label>
          </div>
        </div>

        {/* Bonus Offer */}
        <div className="bg-gray-800 p-4 rounded-lg border border-dashed border-yellow-400 flex items-start">
          <Gift className="text-yellow-400 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-yellow-400">Special Offer!</h4>
            <p className="text-sm text-gray-300">
              Order today and get FREE delivery within Lagos! Outside Lagos? Enjoy 50% off delivery fee.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-lg flex items-center justify-center hover:from-yellow-600 hover:to-yellow-700 text-lg font-bold shadow-lg transition-all duration-300"
        >
          <Send className="w-5 h-5 mr-2" /> 
          {state.submitting ? "Processing..." : "CONFIRM ORDER NOW"}
        </button>

        <ValidationError prefix="Form" field="form" errors={state.errors} />

        <p className="text-xs text-gray-400 text-center">
          By ordering, you agree to our delivery terms. Our agent will contact you to confirm your order.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;