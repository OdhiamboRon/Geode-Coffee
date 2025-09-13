import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "GEODE's SL28 has become our signature single-origin. The traceability and consistent quality keep our customers coming back.",
      author: "Mike Chen",
      company: "Roast & Ground Coffee, Seattle",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      rating: 5,
      text: "Working with GEODE transformed our sourcing. The farmer stories and direct trade approach resonates with our customers.",
      author: "Sarah Martinez",
      company: "Altitude Coffee, Denver",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    },
    {
      rating: 5,
      text: "The quality is exceptional, but it's the relationship and reliability that keeps us coming back year after year.",
      author: "James Wilson",
      company: "Highland Roasters, Portland",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-coffee-700 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-coffee-500">
            Trusted by specialty roasters across 15+ countries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="coffee-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="flex text-warm-orange text-lg">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-coffee-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt="Customer testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-coffee-700">{testimonial.author}</h4>
                  <p className="text-sm text-coffee-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
