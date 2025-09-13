import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'coffee', 'buyer', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-coffee-600">GEODE</h1>
              <span className="text-xs sm:text-sm text-forest-500 font-medium tracking-wide">COFFEE</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-warm-orange ${
                  activeSection === 'home' 
                    ? 'text-warm-orange border-b-2 border-warm-orange' 
                    : 'text-coffee-700 hover:text-warm-orange'
                }`}
                aria-label="Navigate to Home section"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-warm-orange ${
                  activeSection === 'about' 
                    ? 'text-warm-orange border-b-2 border-warm-orange' 
                    : 'text-coffee-700 hover:text-warm-orange'
                }`}
                aria-label="Navigate to About Us section"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('coffee')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-warm-orange ${
                  activeSection === 'coffee' 
                    ? 'text-warm-orange border-b-2 border-warm-orange' 
                    : 'text-coffee-700 hover:text-warm-orange'
                }`}
                aria-label="Navigate to Our Coffee section"
              >
                Our Coffee
              </button>
              <button
                onClick={() => scrollToSection('buyer')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-warm-orange ${
                  activeSection === 'buyer' 
                    ? 'text-warm-orange border-b-2 border-warm-orange' 
                    : 'text-coffee-700 hover:text-warm-orange'
                }`}
                aria-label="Navigate to Become a Buyer section"
              >
                Become a Buyer
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-warm-orange ${
                  activeSection === 'contact' 
                    ? 'text-warm-orange border-b-2 border-warm-orange' 
                    : 'text-coffee-700 hover:text-warm-orange'
                }`}
                aria-label="Navigate to Contact section"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-coffee-700 hover:text-warm-orange focus:outline-none focus:ring-2 focus:ring-warm-orange rounded p-2 transition-colors duration-200"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-3 py-3 space-y-1">
            <button
              onClick={() => {
                scrollToSection('home');
                setIsMenuOpen(false);
              }}
              className="block px-4 py-3 text-coffee-700 hover:text-warm-orange hover:bg-coffee-50 font-medium w-full text-left rounded-md transition-colors duration-200 text-base"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('about');
                setIsMenuOpen(false);
              }}
              className="block px-4 py-3 text-coffee-700 hover:text-warm-orange hover:bg-coffee-50 font-medium w-full text-left rounded-md transition-colors duration-200 text-base"
            >
              About Us
            </button>
            <button
              onClick={() => {
                scrollToSection('coffee');
                setIsMenuOpen(false);
              }}
              className="block px-4 py-3 text-coffee-700 hover:text-warm-orange hover:bg-coffee-50 font-medium w-full text-left rounded-md transition-colors duration-200 text-base"
            >
              Our Coffee
            </button>
            <button
              onClick={() => {
                scrollToSection('buyer');
                setIsMenuOpen(false);
              }}
              className="block px-4 py-3 text-coffee-700 hover:text-warm-orange hover:bg-coffee-50 font-medium w-full text-left rounded-md transition-colors duration-200 text-base"
            >
              Become a Buyer
            </button>
            <button
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="block px-4 py-3 text-coffee-700 hover:text-warm-orange hover:bg-coffee-50 font-medium w-full text-left rounded-md transition-colors duration-200 text-base"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
