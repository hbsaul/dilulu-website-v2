"use client";

import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Performance optimization component that implements lazy loading and code splitting
const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Detect device type for responsive optimizations
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // Apply device-specific optimizations
  React.useEffect(() => {
    // Add data-device attribute to body for CSS targeting
    if (isMobile) {
      document.body.setAttribute('data-device', 'mobile');
    } else if (isTablet) {
      document.body.setAttribute('data-device', 'tablet');
    } else if (isDesktop) {
      document.body.setAttribute('data-device', 'desktop');
    }

    // Implement intersection observer for lazy loading images
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      lazyImages.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) {
          (img as HTMLImageElement).src = src;
          img.removeAttribute('data-src');
        }
      });
    }

    return () => {
      document.body.removeAttribute('data-device');
    };
  }, [isMobile, isTablet, isDesktop]);

  return (
    <>
      {/* Add performance-related styles */}
      <style jsx global>{`
        /* Optimize animations for reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.001ms !important;
            transition-duration: 0.001ms !important;
          }
        }

        /* Optimize image rendering */
        img {
          content-visibility: auto;
        }

        /* Responsive typography */
        html {
          font-size: 16px;
        }

        @media (max-width: 767px) {
          html {
            font-size: 14px;
          }
        }

        @media (min-width: 1024px) {
          html {
            font-size: 18px;
          }
        }

        /* Optimize layout shifts */
        img, video, iframe {
          max-width: 100%;
          height: auto;
        }
      `}</style>

      {children}
    </>
  );
};

export default PerformanceOptimizer;
