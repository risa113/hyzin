import { useState } from 'react';

/**
 * OptimizedImage Component
 * Designed for 10,000 concurrent sessions:
 * - Native decoding="async" prevents main thread freezing
 * - Native loading="lazy" defers off-screen images to save bandwidth
 * - Graceful fallback placeholder on network drop or CDN timeout
 * - Zero Layout Shift (CLS) container aspect ratios
 */
export default function OptimizedImage({
  src,
  alt = 'HYZIN Interior Studio Work',
  className = '',
  aspectRatio = 'aspect-[16/10]',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  onClick,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Fallback monogram architectural placeholder
  const fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' width='800' height='600'%3E%3Crect width='800' height='600' fill='%233A2117'/%3E%3Crect x='20' y='20' width='760' height='560' fill='none' stroke='%23C4A174' stroke-width='1' stroke-opacity='0.3'/%3E%3Ctext x='50%25' y='48%25' dominant-baseline='middle' text-anchor='middle' fill='%23EDE3D2' font-family='serif' font-size='24' letter-spacing='4'%3EHYZIN INTERIOR%3C/text%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='%23C4A174' font-family='sans-serif' font-size='12' letter-spacing='3'%3ESCULPTED SPACES%3C/text%3E%3C/svg%3E";

  return (
    <div
      className={`relative overflow-hidden bg-[#4A2E22] ${aspectRatio} ${className}`}
      onClick={onClick}
    >
      {/* Shimmer Placeholder while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#4A2E22] animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4A174]/10 to-transparent animate-shimmer" />
        </div>
      )}

      {/* Actual Responsive Image */}
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
        } ${props.imgClassName || ''}`}
        {...props}
      />
    </div>
  );
}
