import { useState, useCallback, memo } from 'react';
import { FALLBACK_IMAGE } from '../../data/products';

/**
 * Optimized product image with lazy loading, fallback, and skeleton.
 * Memoized to prevent unnecessary re-renders in product grids.
 */
const ProductImage = memo(function ProductImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallback = FALLBACK_IMAGE,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => setLoaded(true), []);
  const handleError = useCallback(() => { setError(true); setLoaded(true); }, []);

  const imgSrc = error ? fallback : (src || fallback);

  return (
    <div className={`product-image-container ${containerClassName}`}>
      {/* Skeleton shown while loading */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full animate-pulse" style={{ background: 'var(--card-glass-bg)' }}>
            <div className="flex items-center justify-center h-full opacity-30">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--color-text-muted)' }}>
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <rect x="8" y="3" width="8" height="3" rx="1" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-contain p-4 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
    </div>
  );
});

export default ProductImage;
