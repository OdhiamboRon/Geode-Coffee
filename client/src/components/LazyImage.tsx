import { useState, useRef, useEffect } from 'react';
import { supportsWebP, createLQIPDataUrl, optimizeImageUrl } from '../utils/imageOptimization';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  width = 400,
  height = 300,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 80
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate optimized image sources
  useEffect(() => {
    if (isInView && src) {
      const optimizedSrc = optimizeImageUrl(src, {
        width,
        quality,
        format: 'auto'
      });
      setCurrentSrc(optimizedSrc);
    }
  }, [isInView, src, width, quality]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  // Generate low-quality placeholder
  const placeholder = createLQIPDataUrl(width, height, '#f5f5dc');

  return (
    <div className="relative overflow-hidden">
      {/* Low quality placeholder */}
      {!isLoaded && !error && (
        <img
          src={placeholder}
          alt=""
          className={`${className} absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300`}
          width={width}
          height={height}
          aria-hidden="true"
        />
      )}
      
      {/* Main image */}
      <img
        ref={imgRef}
        src={isInView ? currentSrc || src : undefined}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        width={width}
        height={height}
        sizes={sizes}
        data-testid={`image-${alt.toLowerCase().replace(/\s+/g, '-')}`}
      />
      
      {/* Loading indicator */}
      {!isLoaded && !error && isInView && (
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-100/50 via-coffee-200/50 to-coffee-100/50 animate-pulse">
          <div className="flex items-center justify-center h-full text-coffee-600 text-sm font-medium">
            Loading...
          </div>
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-coffee-100 flex items-center justify-center">
          <div className="text-coffee-500 text-sm text-center">
            <div className="mb-2">⚠️</div>
            Failed to load image
          </div>
        </div>
      )}
    </div>
  );
}

// Preload critical images function
export function preloadImage(src: string, priority: boolean = false): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    
    if (priority && 'priority' in img) {
      (img as any).priority = 'high';
    }
    
    img.src = src;
  });
}