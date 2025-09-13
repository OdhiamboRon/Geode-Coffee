import { Sprout, BicepsFlexed, Tag, Truck } from "lucide-react";

export default function JourneyTimeline() {
  const journeySteps = [
    {
      icon: Sprout,
      title: "Highland Growing",
      description: "Carefully cultivated at 1,400-2,100m elevation in Kenya's finest coffee regions",
      bgColor: "bg-forest-100 group-hover:bg-forest-200"
    },
    {
      icon: BicepsFlexed,
      title: "Hand Harvesting",
      description: "Selective picking ensures only the ripest cherries make it to processing",
      bgColor: "bg-orange-100 group-hover:bg-orange-200"
    },
    {
      icon: Tag,
      title: "Quality Processing",
      description: "Washed and sun-dried using traditional methods passed down through generations",
      bgColor: "bg-coffee-200 group-hover:bg-coffee-300"
    },
    {
      icon: Truck,
      title: "Global Delivery",
      description: "Direct trade relationships ensure fresh, traceable coffee reaches roasters worldwide",
      bgColor: "bg-forest-100 group-hover:bg-forest-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-700 mb-4">
            From Farm to Cup
          </h2>
          <p className="text-xl text-coffee-500 max-w-3xl mx-auto">
            Follow the journey of our premium Kenyan coffee from the highland farms to your perfect cup
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className={`${step.bgColor} w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center transition-colors duration-300`}>
                <step.icon className="text-forest-600 text-2xl" size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-coffee-700 mb-3">
                {step.title}
              </h3>
              <p className="text-coffee-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
