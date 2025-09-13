import { Award } from "lucide-react";
import LazyImage from "./LazyImage";
import coffeeBeans from "@assets/pexels-cihanyuce-12176054_1753107227313.jpg";
import ChatGPT_Image_Jul_24__2025__06_42_00_PM from "@assets/ChatGPT Image Jul 24, 2025, 06_42_00 PM.png";
import _37063f77_41aa_4bde_a464_48d4e0d4ef14 from "@assets/37063f77-41aa-4bde-a464-48d4e0d4ef14.png";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="animate-slide-up order-2 lg:order-1">
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-coffee-700 mb-4 sm:mb-6 lg:mb-8">
              Our Story
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-coffee-600 mb-4 sm:mb-6 leading-relaxed">
              GEODE began as a sourcing agent for specialty coffee, gemstones, and gold. Today, we focus exclusively on what we do best: connecting the world's finest Kenyan coffee with passionate roasters who share our commitment to quality and ethical trade.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-coffee-600 mb-6 sm:mb-8 leading-relaxed">
              Our deep relationships with highland farmers across Nyeri, Kirinyaga, and Kiambu give us exclusive access to exceptional lots. Every bag tells a story of dedication, tradition, and the pursuit of perfection.
            </p>

            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg border-l-4 border-warm-orange">
              <div className="flex flex-col xs:flex-row items-start space-y-4 xs:space-y-0 xs:space-x-4">
                <LazyImage
                  src={_37063f77_41aa_4bde_a464_48d4e0d4ef14}
                  alt="Founder portrait"
                  className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto xs:mx-0 flex-shrink-0"
                  width={80}
                  height={80}
                  priority={true}
                />
                <div className="text-center xs:text-left">
                  <p className="text-coffee-600 italic text-base sm:text-lg lg:text-xl leading-relaxed mb-2">
                    "We exist to connect people to purpose through the power of ethical trade."
                  </p>
                  <p className="text-coffee-500 font-medium text-sm sm:text-base">— Odhiambo Ronald, Founder</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <LazyImage
              src={coffeeBeans}
              alt="Raw coffee beans in a traditional spoon"
              className="w-full rounded-xl shadow-2xl"
              width={600}
              height={400}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />

            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-white p-3 sm:p-4 lg:p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="forest-100 p-2 sm:p-3 rounded-full">
                  <Award className="text-forest-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-700 text-sm sm:text-base">5+ Years</h4>
                  <p className="text-xs sm:text-sm text-coffee-500">Trusted Sourcing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
