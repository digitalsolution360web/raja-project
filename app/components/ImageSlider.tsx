'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  aspectRatio?: string;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageSlider({ images, aspectRatio = '16 / 10', borderRadius = '20px', className = '', style = {} }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`image-slider-container ${className}`} style={style}>
      <div className="slider-track">
        {images.map((img, i) => (
          <div
            key={img}
            className={`slider-slide ${i === current ? 'active' : ''}`}
            style={{
              opacity: i === current ? 1 : 0,
              visibility: i === current ? 'visible' : 'hidden',
              transition: 'opacity 0.8s ease, visibility 0.8s ease'
            }}
          >
            <Image
              src={img}
              alt={`Slide ${i + 1}`}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      
      {/* Dots Overlay */}
      <div className="slider-dots">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`slider-dot ${i === current ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .image-slider-container {
          position: relative;
          width: 100%;
          aspect-ratio: ${aspectRatio};
          border-radius: ${borderRadius};
          overflow: hidden;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        .slider-track {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .slider-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .slider-dots {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }
        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .slider-dot.active {
          background: #fff;
          width: 24px;
          border-radius: 4px;
        }
        
        @media (max-width: 640px) {
          .image-slider-container {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </div>
  );
}
