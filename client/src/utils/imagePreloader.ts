// Comprehensive image preloading for critical above-the-fold content
import { preloadCriticalImages } from './imageOptimization';
import coffeeBeans from "@assets/pexels-cihanyuce-12176054_1753107227313.jpg";
import founderPortrait from "@assets/37063f77-41aa-4bde-a464-48d4e0d4ef14.png";

// Critical images that should be preloaded immediately
export async function preloadCriticalAboveFoldImages() {
  const criticalImages = [
    // Above-the-fold images from About section (shown early in viewport)
    coffeeBeans, // Coffee beans
    founderPortrait, // Founder portrait
  ];

  try {
    await preloadCriticalImages(criticalImages);
    console.log('Critical images preloaded successfully');
  } catch (error) {
    console.warn('Some critical images failed to preload:', error);
  }
}

// Secondary images that can be preloaded with lower priority
export async function preloadSecondaryImages() {
  const secondaryImages = [
    // Coffee showcase images
    '/src/assets/pexels-tonywuphotography-8002414_1753107593179.jpg',
    '/src/assets/pexels-cottonbro-4820773_1753108662827.jpg',
    '/src/assets/pexels-tonywuphotography-9420149_1753108866063.jpg',
    
    // Buyer form image
    '/src/assets/ChatGPT Image Jul 21, 2025, 05_35_31 PM_1753109131938.png',
    
    // Contact section images
    '/src/assets/pexels-michael-burrows-7125434_1753278220415.jpg',
    '/src/assets/pexels-samet-burak-daglioglu-574092183-26651061_1753278277476.jpg',
    '/src/assets/pexels-carlostorres-14678879_1753278292636.jpg',
  ];

  // Delay secondary preloading to not interfere with critical content
  setTimeout(async () => {
    try {
      await preloadCriticalImages(secondaryImages);
      console.log('Secondary images preloaded successfully');
    } catch (error) {
      console.warn('Some secondary images failed to preload:', error);
    }
  }, 1000);
}

// Preload images based on connection speed
export function preloadBasedOnConnection() {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    
    // Only preload on fast connections
    if (connection.effectiveType === '4g' || connection.downlink > 1.5) {
      preloadCriticalAboveFoldImages();
      preloadSecondaryImages();
    } else {
      // On slower connections, only preload critical images
      preloadCriticalAboveFoldImages();
    }
  } else {
    // Fallback for browsers without Network Information API
    preloadCriticalAboveFoldImages();
    preloadSecondaryImages();
  }
}