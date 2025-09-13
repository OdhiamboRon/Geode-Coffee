import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { optimizeImageUrl, supportsWebP, preloadCriticalImages } from "../utils/imageOptimization";

export default function Hero() {
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Optimize background image loading with better performance
    const baseUrl = 'https://images.unsplash.com/photo-1442550528053-c431ecb55509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop';
    
    // Choose appropriate image size based on screen width with higher quality
    const getOptimizedUrl = () => {
      const width = window.innerWidth;
      const pixelRatio = window.devicePixelRatio || 1;
      
      let targetWidth: number;
      let quality: number;
      
      if (width <= 768) {
        targetWidth = Math.min(800 * pixelRatio, 1200);
        quality = 75;
      } else if (width <= 1200) {
        targetWidth = Math.min(1200 * pixelRatio, 1800);
        quality = 80;
      } else {
        targetWidth = Math.min(1920 * pixelRatio, 2400);
        quality = 85;
      }
      
      return optimizeImageUrl(baseUrl, {
        width: targetWidth,
        quality,
        format: 'auto'
      });
    };

    const optimizedUrl = getOptimizedUrl();
    
    // Preload with high priority
    preloadCriticalImages([optimizedUrl]).then(() => {
      setBackgroundImage(`linear-gradient(rgba(0,0,0,0.4), rgba(139,69,19,0.3)), url('${optimizedUrl}')`);
    }).catch(() => {
      // Fallback to lower quality if high quality fails
      const fallbackUrl = optimizeImageUrl(baseUrl, { width: 800, quality: 60 });
      setBackgroundImage(`linear-gradient(rgba(0,0,0,0.4), rgba(139,69,19,0.3)), url('${fallbackUrl}')`);
    });

    // Throttled resize handler for better performance
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newUrl = getOptimizedUrl();
        setBackgroundImage(`linear-gradient(rgba(0,0,0,0.4), rgba(139,69,19,0.3)), url('${newUrl}')`);
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen h-screen flex items-center justify-center hero-parallax bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: backgroundImage || `linear-gradient(rgba(0,0,0,0.4), rgba(139,69,19,0.3)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOGI0NTEzIi8+PC9zdmc+')`
      }}
    >
      <div className="text-center text-white animate-fade-in px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
          Bridging Africa's <span className="text-warm-orange">Best Beans</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>to the World
        </h1>
        <p className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-10 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto font-light leading-relaxed">
          Premium Kenyan coffee sourced directly from the highlands. Connecting passionate producers with discerning roasters worldwide.
        </p>
        <div className="flex flex-col xs:flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
          <button
            onClick={() => scrollToSection('buyer')}
            className="w-full xs:w-full sm:w-auto bg-warm-orange hover:bg-orange-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[200px]"
          >
            Request a Sample
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="w-full xs:w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-coffee-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 min-w-[200px]"
          >
            Learn Our Story
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="text-white text-2xl animate-bounce" size={32} />
      </div>
    </section>
  );
}
