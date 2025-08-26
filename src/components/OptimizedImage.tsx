import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP version path if original is PNG/JPG
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('.png') || originalSrc.includes('.jpg') || originalSrc.includes('.jpeg')) {
      return originalSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    }
    return originalSrc;
  };

  // Fallback to original if WebP fails
  const handleError = () => {
    if (src.includes('.webp')) {
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Create a simple blur placeholder
  const blurPlaceholder = placeholder || `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a1a2e"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#666" font-family="Arial" font-size="14">Loading...</text>
    </svg>
  `)}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      {!isLoaded && (
        <img
          src={blurPlaceholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
          aria-hidden="true"
        />
      )}
      
      {/* Main image */}
      <img
        src={hasError ? src : getOptimizedSrc(src)}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
      />
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
