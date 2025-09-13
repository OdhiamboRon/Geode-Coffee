// Image optimization utilities for faster loading

/**
 * Check if browser supports WebP format
 */
export function supportsWebP(): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

/**
 * Generate responsive image sizes based on device capabilities
 */
export function generateResponsiveImageSizes(baseUrl: string, options: {
  mobile?: number;
  tablet?: number;
  desktop?: number;
  quality?: number;
  format?: 'webp' | 'jpg';
} = {}) {
  const { mobile = 800, tablet = 1200, desktop = 1920, quality = 80, format } = options;
  const formatParam = format || (supportsWebP() ? 'webp' : 'jpg');
  
  return {
    mobile: `${baseUrl}&w=${mobile}&q=${quality}&fm=${formatParam}`,
    tablet: `${baseUrl}&w=${tablet}&q=${quality}&fm=${formatParam}`,
    desktop: `${baseUrl}&w=${desktop}&q=${quality}&fm=${formatParam}`
  };
}

/**
 * Preload critical images for better performance
 */
export function preloadCriticalImages(urls: string[]): Promise<void[]> {
  return Promise.all(
    urls.map(url => 
      new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = url;
        
        // Add to browser cache with high priority
        if ('priority' in img) {
          (img as any).priority = 'high';
        }
      })
    )
  );
}

/**
 * Create optimized low-quality image placeholder (LQIP)
 */
export function createLQIPDataUrl(width: number = 400, height: number = 300, color: string = '#f5f5dc'): string {
  if (typeof window === 'undefined') {
    return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(color)}'/%3E%3C/svg%3E`;
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Use small canvas for LQIP
  canvas.width = Math.min(width / 10, 40);
  canvas.height = Math.min(height / 10, 30);
  
  if (ctx) {
    // Create simple gradient placeholder
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, adjustBrightness(color, -0.1));
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  return canvas.toDataURL('image/jpeg', 0.1);
}

/**
 * Adjust color brightness for gradient effects
 */
function adjustBrightness(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent * 100);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

/**
 * Optimize image URLs with compression and format selection
 */
export function optimizeImageUrl(url: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
} = {}): string {
  const { width, height, quality = 80, format = 'auto' } = options;
  
  // Handle different image services
  if (url.includes('unsplash.com')) {
    let optimized = url;
    
    if (width) optimized += `&w=${width}`;
    if (height) optimized += `&h=${height}`;
    optimized += `&q=${quality}`;
    
    if (format === 'auto') {
      optimized += supportsWebP() ? '&fm=webp' : '&fm=jpg';
    } else {
      optimized += `&fm=${format}`;
    }
    
    return optimized;
  }
  
  return url;
}

/**
 * Calculate optimal image dimensions based on container and device
 */
export function calculateOptimalDimensions(containerWidth: number, devicePixelRatio: number = 1) {
  const optimalWidth = Math.ceil(containerWidth * devicePixelRatio);
  
  // Cap at reasonable maximums to prevent unnecessary large downloads
  const maxWidth = devicePixelRatio > 1 ? 2048 : 1024;
  
  return Math.min(optimalWidth, maxWidth);
}

/**
 * Progressive image loading with multiple quality levels
 */
export function createProgressiveImageSources(baseUrl: string, width: number, height: number) {
  return {
    placeholder: createLQIPDataUrl(width, height, '#f5f5dc'),
    low: optimizeImageUrl(baseUrl, { width: Math.floor(width * 0.3), quality: 30 }),
    medium: optimizeImageUrl(baseUrl, { width: Math.floor(width * 0.7), quality: 60 }),
    high: optimizeImageUrl(baseUrl, { width, quality: 85 })
  };
}

/**
 * Create responsive srcSet string for different device sizes
 */
export function createResponsiveSrcSet(baseUrl: string, options: {
  widths?: number[];
  quality?: number;
} = {}) {
  const { widths = [400, 800, 1200, 1600], quality = 80 } = options;
  
  return widths
    .map(width => {
      const optimizedUrl = optimizeImageUrl(baseUrl, { width, quality, format: 'auto' });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
}

/**
 * Enhanced image optimization for static assets
 */
export function optimizeStaticImage(src: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  responsive?: boolean;
} = {}) {
  const { width = 800, height, quality = 80, responsive = true } = options;
  
  // For external URLs (like Unsplash), use optimization
  if (src.includes('http')) {
    return optimizeImageUrl(src, { width, height, quality, format: 'auto' });
  }
  
  // For static assets, return as-is (Vite handles optimization during build)
  return src;
}