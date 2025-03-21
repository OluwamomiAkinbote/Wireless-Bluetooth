import { Star } from "lucide-react";
import product1 from "../assets/review-1.jpg";
import product2 from "../assets/review-2.jpg";
import product3 from "../assets/review-3.jpg";
import product4 from "../assets/review-4.jpg";

const testimonials = [
  {
    name: "Oghenetetega O.",
    state: "Delta State",
    rating: 5,
    image: product1,
    content:
      "Works good with two phones. Good quality on phone conversation, fits ok on both sides, keeps working all day .",
  },
  {
    name: "Oritsejolomi",
    state: "Delta State",
    rating: 4,
    image: product2,
    content:
      "I use this daily in my work for several hours on the phone. It is a wonderful budget-friendly headset but could maybe use a bit of improvement on the range as it does not reach nearly as far as advertised.\n\nPros:\n- Battery Life\n- Recharging Case\n- Comfort\n- Sound Quality\n\nCons:\n- Range on Bluetooth",
  },
  {
    name: "Yusuf Kolade",
    state: "Ogun State",
    rating: 5,
    image: product3,
    content:
      "I've had this one for several months now and it is doing great. It sounds great and there is plenty of volume. It is very lightweight, fits well, comfortable, and after a few minutes I forget that I have it on. The battery lasts as long as I'm wearing it. It automatically connects when removed from the charging box and disconnects when replaced. The charger box recharges multiple times, and the digital display shows the charge left. I'm very happy with this one.",
  },
  {
    name: "Leonard Enoch ",
    state: "Port Harcourt",
    rating: 4,
    image: product4,
    content:
      "Way better than other cheaper ones I've had. Battery/talk-time is fantastically better. The voice that tells me it's connected is a bit foreign, I would have preferred a more 'local' one or if there were choices, but this is a super-minor complaint. It's very comfortable, I forget it's even on my ear. Overall, I am very pleased and hope it lasts a while – it's only been used a few weeks thus far.",
  },
];

const TestimonialCard = ({ name, state, rating, content, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-gray-500 text-sm">{state}</span>
        {/* Rating */}
        <div className="flex text-yellow-500 mt-2 mb-3">
          {Array.from({ length: rating }, (_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>
        <p className="text-gray-700 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-100">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
