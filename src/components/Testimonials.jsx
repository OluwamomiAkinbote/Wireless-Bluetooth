import { Star, Quote } from "lucide-react";
import product1 from "../assets/review-1.jpg";
import product2 from "../assets/review-2.jpg";
import product3 from "../assets/review-3.jpg";
import product4 from "../assets/review-4.jpg";

const testimonials = [
  {
    name: "Oghenetetega O.",
    role: "Frequent Traveler",
    state: "Delta State",
    rating: 5,
    image: product1,
    content: "Works perfectly with two phones simultaneously. Crystal clear calls, all-day comfort, and exceptional battery life - my go-to headset for business trips!",
    highlight: "All-day comfort"
  },
  {
    name: "Oritsejolomi",
    role: "Customer Support Agent",
    state: "Delta State",
    rating: 4,
    image: product2,
    content: "As someone who spends 8+ hours daily on calls, these have been a game-changer. The sound quality rivals headsets twice the price!",
    highlight: "8+ hour battery"
  },
  {
    name: "Yusuf Kolade",
    role: "Tech Enthusiast",
    state: "Ogun State",
    rating: 5,
    image: product3,
    content: "After 6 months of daily use, they still perform like new. The auto-connect feature saves me minutes every day - brilliant engineering!",
    highlight: "6-month durability"
  },
  {
    name: "Leonard Enoch",
    role: "Sales Executive",
    state: "Port Harcourt",
    rating: 4,
    image: product4,
    content: "Upgraded from cheaper alternatives and the difference is night and day. My clients now hear me perfectly on every call - worth every naira!",
    highlight: "Premium sound"
  },
];

const TestimonialCard = ({ name, role, state, rating, content, image, highlight }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-white font-bold text-lg">{name}</h3>
              <p className="text-gray-300 text-sm">{role}, {state}</p>
            </div>
            <div className="flex items-center bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
              <Star size={14} fill="currentColor" className="mr-1" />
              {rating}.0
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 relative">
        <Quote className="absolute top-4 right-6 text-gray-700" size={24} />
        
        <div className="mb-4">
          <span className="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold mb-3">
            {highlight}
          </span>
          <p className="text-gray-300 italic">"{content}"</p>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <div className="flex text-yellow-400">
            {Array.from({ length: rating }, (_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-gray-400 text-xs">Verified Purchase</span>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Loved by <span className="text-yellow-400">Thousands</span> of Nigerians
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our customers say about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};