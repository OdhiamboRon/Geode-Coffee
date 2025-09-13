import { MapPin, Mountain, Leaf, Handshake, Search, Award } from "lucide-react";
import LazyImage from "./LazyImage";
import coffeeBeansGolden from "@assets/pexels-tonywuphotography-8002414_1753107593179.jpg";
import coffeeProcessing from "@assets/pexels-cottonbro-4820773_1753108662827.jpg";
import coffeeBeansInBowl from "@assets/pexels-tonywuphotography-9420149_1753108866063.jpg";
import coffeeBeansDrying from "@assets/bartolomeus-rumahorbo-Pd6jxYGZL8k-unsplash_1753279417435.jpg";

export default function CoffeeShowcase() {
  const coffeeVarieties = [
    {
      name: "SL28",
      badge: "Premium",
      description: "A legendary Kenyan variety known for its wine-like acidity and complex flavor notes. Grown in the highlands of Nyeri.",
      location: "Nyeri County",
      altitude: "1,600-2,000m altitude",
      tastingNotes: ["Black Currant", "Wine-like", "Bright Acidity"],
      image: coffeeBeansGolden
    },
    {
      name: "SL34",
      badge: "Premium",
      description: "Renowned for its heavy body and complex sweetness. This variety thrives in Kirinyaga's volcanic soils.",
      location: "Kirinyaga County",
      altitude: "1,400-1,800m altitude",
      tastingNotes: ["Heavy Body", "Complex Sweetness", "Citrus Notes"],
      image: coffeeProcessing
    },
    {
      name: "Ruiru 11",
      badge: "Disease Resistant",
      description: "A hardy variety developed in Kenya, offering consistent quality with disease resistance. Perfect for sustainable farming.",
      location: "Multiple Regions",
      altitude: "1,200-1,900m altitude",
      tastingNotes: ["Balanced", "Mild Acidity", "Nutty"],
      image: coffeeBeansInBowl
    },
    {
      name: "Batian",
      badge: "High Yield",
      description: "A modern variety bred for high productivity and disease resistance while maintaining excellent cup quality.",
      location: "Central Kenya",
      altitude: "1,400-1,900m altitude",
      tastingNotes: ["Clean Cup", "Medium Body", "Floral Notes"],
      image: coffeeBeansDrying
    }
  ];

  const trustBadges = [
    {
      icon: Leaf,
      title: "Organic Certified",
      subtitle: "100% Organic farming",
      bgColor: "bg-forest-100"
    },
    {
      icon: Handshake,
      title: "Fair Trade",
      subtitle: "Ethical sourcing",
      bgColor: "bg-orange-100"
    },
    {
      icon: Search,
      title: "Traceable",
      subtitle: "Single-farm origin",
      bgColor: "bg-coffee-200"
    },
    {
      icon: Award,
      title: "Premium Grade",
      subtitle: "AA/AAA quality",
      bgColor: "bg-forest-100"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="coffee" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-coffee-700 mb-4 sm:mb-6">
            Our Coffee Varieties
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-coffee-500 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover the unique characteristics of Kenya's most celebrated coffee varieties, each with its distinct flavor profile and origin story
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {coffeeVarieties.map((variety, index) => (
            <div key={index} className="col-span-1 coffee-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm mx-auto sm:max-w-none">
              <LazyImage
                src={variety.image}
                alt={`${variety.name} coffee beans`}
                className="w-full h-40 sm:h-48 lg:h-52 object-cover"
                width={400}
                height={208}
              />
              <div className="p-4 sm:p-6">
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-3 sm:mb-4 gap-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-coffee-700">
                    {variety.name}
                  </h3>
                  <span className="forest-100 text-forest-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start xs:self-auto">
                    {variety.badge}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-coffee-600 mb-3 sm:mb-4 leading-relaxed">
                  {variety.description}
                </p>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-coffee-500">
                    <MapPin className="text-warm-orange mr-2 flex-shrink-0" size={14} />
                    <span className="truncate">{variety.location}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-coffee-500">
                    <Mountain className="text-warm-orange mr-2 flex-shrink-0" size={14} />
                    <span>{variety.altitude}</span>
                  </div>
                </div>

                <div className="border-t pt-3 sm:pt-4 mb-4 sm:mb-6">
                  <h4 className="font-semibold text-coffee-700 mb-2 text-sm sm:text-base">Tasting Notes:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {variety.tastingNotes.map((note, noteIndex) => (
                      <span
                        key={noteIndex}
                        className="bg-orange-100 text-warm-orange px-2 py-1 rounded text-xs font-medium"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection('buyer')}
                  className="w-full bg-warm-orange hover:bg-orange-600 text-white py-3 sm:py-4 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 font-semibold text-sm sm:text-base"
                  aria-label={`Request sample of ${variety.name} coffee variety`}
                >
                  Request Sample
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coffee Grades Table */}
        <div className="mt-20 bg-amber-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-amber-900 mb-4">Coffee Grades</h3>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Our coffee is graded according to Kenya's strict quality standards based on bean size, shape, and cup quality.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-amber-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-amber-900">Grade</th>
                  <th className="px-6 py-4 text-left font-semibold text-amber-900">Screen Size</th>
                  <th className="px-6 py-4 text-left font-semibold text-amber-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-semibold text-amber-900">AA</td>
                  <td className="px-6 py-4 text-amber-700">7.2mm+</td>
                  <td className="px-6 py-4 text-amber-700">Largest bean size, exceptional cup quality, bright acidity and complex flavors</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-semibold text-amber-900">AB</td>
                  <td className="px-6 py-4 text-amber-700">6.8-7.2mm</td>
                  <td className="px-6 py-4 text-amber-700">Premium grade, excellent balance of body and acidity, consistent quality</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-semibold text-amber-900">PB</td>
                  <td className="px-6 py-4 text-amber-700">Peaberry</td>
                  <td className="px-6 py-4 text-amber-700">Single round bean, concentrated flavors, unique character and intensity</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-semibold text-amber-900">C</td>
                  <td className="px-6 py-4 text-amber-700">6.2-6.8mm</td>
                  <td className="px-6 py-4 text-amber-700">Good commercial grade, lighter body, suitable for blends and everyday brewing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustBadges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className={`${badge.bgColor} w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <badge.icon className="text-forest-600" size={24} />
              </div>
              <h4 className="font-semibold text-coffee-700 mb-1">{badge.title}</h4>
              <p className="text-sm text-coffee-500">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
