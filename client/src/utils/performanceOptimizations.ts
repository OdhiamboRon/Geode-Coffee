// Performance optimization utilities for mobile devices

/**
 * Debounce function to limit the rate of function calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit function execution frequency
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Load scripts asynchronously to avoid blocking
 */
export function loadScriptAsync(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/**
 * Preload critical resources
 */
export function preloadResource(href: string, type: 'image' | 'font' | 'style' | 'script') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = type;
  if (type === 'font') {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}

/**
 * Optimize scroll performance with passive listeners
 */
export function addOptimizedScrollListener(
  callback: () => void,
  element: Element | Window = window
) {
  const throttledCallback = throttle(callback, 16); // 60fps
  element.addEventListener('scroll', throttledCallback as EventListener, { passive: true });
  
  return () => {
    element.removeEventListener('scroll', throttledCallback as EventListener);
  };
}

/**
 * Check if device is mobile/tablet for conditional loading
 */
export function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Check if connection is slow (2G/3G)
 */
export function isSlowConnection(): boolean {
  const connection = (navigator as any).connection;
  if (!connection) return false;
  
  return connection.effectiveType === 'slow-2g' || 
         connection.effectiveType === '2g' ||
         connection.effectiveType === '3g';
}

/**
 * Dynamically import components for code splitting
 */
export async function importComponent<T>(
  importFn: () => Promise<{ default: T }>
): Promise<T> {
  try {
    const module = await importFn();
    return module.default;
  } catch (error) {
    console.error('Failed to load component:', error);
    throw error;
  }
}