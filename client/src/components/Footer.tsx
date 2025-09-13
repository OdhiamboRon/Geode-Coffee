import { Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="coffee-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div>
                <h3 className="text-3xl font-serif font-bold drop-shadow-2xl text-[#5E3023]">GEODE</h3>
                <span className="font-medium tracking-wide text-[#FF991C] text-[15px] ml-[1px] mr-[1px]">COFFEE</span>
              </div>
            </div>
            <p className="text-coffee-200 mb-6 max-w-md leading-relaxed">
              Connecting Kenya's finest coffee producers with passionate roasters worldwide through transparent, ethical trade relationships.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="coffee-800 p-3 rounded-lg hover:bg-warm-orange transition-colors duration-300"
              >
                <Linkedin className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="coffee-800 p-3 rounded-lg hover:bg-forest-600 transition-colors duration-300"
              >
                <Phone className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="coffee-800 p-3 rounded-lg hover:bg-warm-orange transition-colors duration-300"
              >
                <Mail className="text-white" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-coffee-200 hover:text-warm-orange transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('coffee')}
                  className="text-coffee-200 hover:text-warm-orange transition-colors"
                >
                  Our Coffee
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('buyer')}
                  className="text-coffee-200 hover:text-warm-orange transition-colors"
                >
                  Become a Buyer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-coffee-200 hover:text-warm-orange transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Coffee Regions</h4>
            <ul className="space-y-3">
              <li><span className="text-coffee-200">Nyeri County</span></li>
              <li><span className="text-coffee-200">Kirinyaga County</span></li>
              <li><span className="text-coffee-200">Kiambu County</span></li>
              <li><span className="text-coffee-200">Central Kenya</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-12 pt-8 text-center">
          <p className="text-coffee-300">
            © 2024 GEODE Coffee. All rights reserved. | Proudly sourcing from Kenya's highlands.
          </p>
        </div>
      </div>
    </footer>
  );
}
