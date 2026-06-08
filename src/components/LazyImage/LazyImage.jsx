import { useEffect, useRef, useState } from 'react';

const LazyImage = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  eager = false,
  width,
  height,
  ...rest
}) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(eager);

  useEffect(() => {
    if (eager) return undefined;

    const el = imgRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '200px', threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <div ref={imgRef} className={`lazy-image-wrapper ${className}`}>
      {isVisible && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`lazy-image ${imgClassName} ${isLoaded ? 'lazy-image--loaded' : ''}`}
          {...rest}
        />
      )}
      {!isLoaded && (
        <div
          className="lazy-image-placeholder"
          aria-hidden="true"
          style={width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
        />
      )}
    </div>
  );
};

export default LazyImage;
