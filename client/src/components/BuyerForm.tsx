import { MessageCircle, Mail, Truck, CalendarCheck, TrendingUp } from "lucide-react";
import LazyImage from "./LazyImage";
import geodeBeansImage from "@assets/ChatGPT Image Jul 21, 2025, 05_35_31 PM_1753109131938.png";

export default function BuyerForm() {
  const benefits = [
    {
      icon: Truck,
      title: "Direct Trade Benefits",
      description: "Skip the middleman. Work directly with us for better prices and stronger relationships.",
      bgColor: "bg-green-100"
    },
    {
      icon: CalendarCheck,
      title: "Consistent Supply",
      description: "Year-round availability with harvest planning and inventory management.",
      bgColor: "bg-orange-100"
    },
    {
      icon: TrendingUp,
      title: "Quality Guarantee",
      description: "Every shipment meets our strict quality standards with detailed cupping notes.",
      bgColor: "bg-amber-100"
    }
  ];

  return (
    <section id="buyer" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-amber-100 to-green-50 text-[#532409]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-amber-900 mb-4 sm:mb-6 lg:mb-8">
              Partner With Us
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-amber-800 mb-6 sm:mb-8 leading-relaxed">
              Join a growing network of specialty roasters who trust GEODE for consistent quality, reliable supply, and transparent sourcing. Let's create something extraordinary together.
            </p>

            {/* Benefits */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`${benefit.bgColor} p-2 sm:p-3 rounded-lg flex-shrink-0`}>
                      <Icon className="text-amber-800" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-amber-900 mb-1 text-sm sm:text-base lg:text-lg">{benefit.title}</h3>
                      <p className="text-amber-700 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Contact Information - Always Visible */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 lg:p-8 rounded-2xl border border-amber-200 shadow-lg">
              <h4 className="font-serif font-bold text-amber-900 mb-2 sm:mb-3 text-xl sm:text-2xl">Contact Us Directly</h4>
              <p className="text-amber-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Ready to source premium Kenyan coffee? Get in touch through your preferred method below. We provide samples, detailed pricing, and partnership information.
              </p>

              {/* Contact Methods */}
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="bg-white p-3 sm:p-4 rounded-lg border border-amber-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="text-green-600" size={20} />
                      <h5 className="font-semibold text-gray-800 text-sm sm:text-base">WhatsApp</h5>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Instant Reply</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">+254 757 555 845</p>
                  <a
                    href="https://wa.me/254757555845?text=Hello%20GEODE%20Coffee!%20I'm%20interested%20in%20sourcing%20premium%20Kenyan%20coffee%20beans%20for%20my%20roastery."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-200"
                  >
                    Start WhatsApp Chat →
                  </a>
                </div>

                <div className="bg-white p-3 sm:p-4 rounded-lg border border-amber-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="text-orange-600" size={20} />
                      <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h5>
                    </div>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">24hr Quote</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">info.geodeinvestltd@gmail.com</p>
                  <a
                    href="mailto:info.geodeinvestltd@gmail.com?subject=Coffee%20Sourcing%20Partnership&body=Hello%20GEODE%20Coffee%20team,%0A%0AI'm%20interested%20in%20partnering%20with%20you%20for%20sourcing%20premium%20Kenyan%20coffee%20beans.%20Please%20send%20information%20about%20your%20available%20varieties%20and%20partnership%20terms.%0A%0AThank%20you!"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors duration-200"
                  >
                    Send Email Inquiry →
                  </a>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/254757555845?text=Hello%20GEODE%20Coffee!%20I'm%20interested%20in%20sourcing%20premium%20Kenyan%20coffee%20beans%20for%20my%20roastery."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-4 focus:ring-green-300 text-sm font-semibold"
                  aria-label="Contact us via WhatsApp for immediate response"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Now</span>
                </a>
                <a
                  href="mailto:info.geodeinvestltd@gmail.com?subject=Coffee%20Sourcing%20Partnership&body=Hello%20GEODE%20Coffee%20team,%0A%0AI'm%20interested%20in%20partnering%20with%20you%20for%20sourcing%20premium%20Kenyan%20coffee%20beans.%20Please%20send%20information%20about%20your%20available%20varieties%20and%20partnership%20terms.%0A%0AThank%20you!"
                  className="bg-warm-orange hover:bg-orange-600 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-4 focus:ring-orange-300 text-sm font-semibold"
                  aria-label="Send us an email inquiry with your requirements"
                >
                  <Mail size={18} />
                  <span className="text-[#2b2a2a]">Email Us</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:order-first">
            <LazyImage
              src={geodeBeansImage}
              alt="GEODE coffee beans arranged to spell out company name"
              className="rounded-xl shadow-lg w-full"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}