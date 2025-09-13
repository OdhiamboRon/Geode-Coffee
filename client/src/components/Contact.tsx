import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import LazyImage from "./LazyImage";
import coffeeCherriesImage from "@assets/pexels-michael-burrows-7125434_1753278220415.jpg";
import coffeeSacksImage from "@assets/pexels-samet-burak-daglioglu-574092183-26651061_1753278277476.jpg";
import coffeePlantsImage from "@assets/pexels-carlostorres-14678879_1753278292636.jpg";

export default function Contact() {
  const stats = [
    { number: "500+", label: "Tons Exported" },
    { number: "50+", label: "Partner Roasters" },
    { number: "15+", label: "Countries Served" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold mb-4 sm:mb-6 text-white">Get In Touch</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-amber-100 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Ready to explore Kenya's finest coffee? We're here to help you find the perfect beans for your roasting needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold mb-4 sm:mb-6 text-white">Our Office</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-orange-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="text-white" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-1 text-white text-sm sm:text-base">Headquarters</h4>
                    <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
                      Embakasi, Nairobi Kenya, East Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-green-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-white" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-1 text-white text-sm sm:text-base">WhatsApp</h4>
                    <p className="text-amber-100 text-sm sm:text-base">+254 757 555 845</p>
                    <p className="text-xs sm:text-sm text-amber-200">Available 24/7 for urgent inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-orange-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="text-white" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-1 text-white text-sm sm:text-base">Email</h4>
                    <p className="text-amber-100 text-sm sm:text-base break-all">info.geodeinvestltd@gmail.com</p>
                    <p className="text-xs sm:text-sm text-amber-200">We respond within 24 hours</p>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-black/30 p-6 rounded-xl">
              <h4 className="font-semibold mb-4 text-lg text-white">Why Choose GEODE?</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-orange-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-amber-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Three Images Side by Side */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-96 relative grid grid-cols-3 gap-2 p-2">
              <LazyImage
                src={coffeeCherriesImage}
                alt="Fresh coffee cherries in traditional basket"
                className="w-full h-full object-cover rounded-lg"
                width={300}
                height={400}
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
              <LazyImage
                src={coffeeSacksImage}
                alt="Coffee sacks from different Kenyan regions"
                className="w-full h-full object-cover rounded-lg"
                width={300}
                height={400}
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
              <LazyImage
                src={coffeePlantsImage}
                alt="Coffee plants with ripe cherries on the branch"
                className="w-full h-full object-cover rounded-lg"
                width={300}
                height={400}
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>

            <div className="p-8">
              <h4 className="font-serif font-semibold text-xl text-amber-900 mb-4">
                Fair Trade & Ethical Sourcing
              </h4>
              <p className="text-amber-700 mb-6">
                We believe in sustainable partnerships that benefit both farmers and buyers. Our direct trade relationships ensure fair compensation for growers while maintaining the highest quality standards and traceability throughout the supply chain.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-amber-700">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-sm">Direct partnerships with smallholder farmers</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-sm">Premium prices paid above market rates</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-sm">Sustainable farming practices supported</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-sm">Full supply chain transparency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
