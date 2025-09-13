import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { addOptimizedScrollListener } from "@/utils/performanceOptimizations";
import { preloadBasedOnConnection } from "@/utils/imagePreloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import JourneyTimeline from "@/components/JourneyTimeline";
import About from "@/components/About";
import CoffeeShowcase from "@/components/CoffeeShowcase";
import BuyerForm from "@/components/BuyerForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 400);
    };

    // Use optimized scroll listener for better performance
    const removeScrollListener = addOptimizedScrollListener(handleScroll);
    return removeScrollListener;
  }, []);

  // Preload critical images for faster loading
  useEffect(() => {
    preloadBasedOnConnection();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-coffee-50">
      <Navigation />
      <Hero />
      <JourneyTimeline />
      <About />
      <CoffeeShowcase />
      <BuyerForm />
      <Contact />
      <Footer />
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-warm-orange hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-orange-300"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
