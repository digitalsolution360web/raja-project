'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// --- Custom Image Slider Component ---
const ImageSlider = ({ images, interval = 4000, className = "" }: { images: string[], interval?: number, className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${idx}`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      ))}
      
      {/* Indicator Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const partitionProducts = [
  { id: 'single-glazing-partition', title: 'Single Glazing Partition', img: '/g1.jpeg' },
  { id: 'single-glass-25-25', title: 'Single Gaze Grid Partition 25*45', img: '/g2.jpeg' },
  { id: 'double-glaze-25-100', title: 'Double Glaze Partition 25*100', img: '/g3.jpeg' },
  { id: 'single-glazing-25-25', title: 'Single Glazing Partition 25*25', img: '/g4.jpeg' },
  { id: 'single-glaze-25-45', title: 'Single Glaze Partition 25*45', img: '/g5.jpeg' },
  { id: 'single-glazing-25-100', title: 'Single Glazing Partition 25*100', img: '/p20.jpeg' },
  { id: 'grid-partition', title: 'Double Glaze Partition 25*100', img: '/p21.jpeg' },
];

export default function ProductsPage() {
  return (
    <div className="animate-fade-in bg-slate-50">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container-main">
          <div className="gold-bar" />
          <h1 className="section-title-white" style={{ marginBottom: '1rem' }}>Our Premium Product Range</h1>
          <p className="section-subtitle-white" style={{ maxWidth: '800px' }}>
            Innovative partition systems and architectural solutions designed for modern living and professional workspaces.
          </p>
        </div>
      </section>

      {/* 1. Partition Collection */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div className="section-head-modern">
            <span className="section-tag">Partition Systems</span>
            <h2 className="section-title-main">Partition Collection</h2>
            <p className="section-desc">Versatile and elegant glazing solutions for Every space.</p>
          </div>
          
          <div className="products-clean-grid">
            {partitionProducts.map((product, idx) => (
              <article key={product.id} className="product-clean-card group">
                <div className="product-clean-image-wrap">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={idx < 2}
                  />
                  <div className="product-overlay-gradient"></div>
                </div>
                <div className="product-clean-info">
                  <h3 className="product-clean-title">{product.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Aluminium Door - Classic Showcase */}
      <section className="section-padding bg-slate-100/50 border-y border-slate-200">
        <div className="container-main">
          <div className="section-head-modern">
            <span className="section-tag">Modern Doors</span>
            <h2 className="section-title-main">Aluminium Door Series</h2>
            <p className="section-desc">Durable, sleek, and high-performance entrance solutions.</p>
          </div>
          
          <div className="aluminium-door-grid">
            <div className="aluminium-door-feature group overflow-hidden">
              <ImageSlider 
                images={['/left-image.jpeg', '/1.jpeg', '/2.jpeg']} 
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10"></div>
            </div>
            <div className="aluminium-door-tiles">
              {[
                { src: '/1.jpeg', alt: 'Door profile 1' },
                { src: '/2.jpeg', alt: 'Door profile 2' },
                { src: '/3.jpeg', alt: 'Door profile 3' },
                { src: '/4.jpeg', alt: 'Door profile 4' },
              ].map((item, idx) => (
                <div key={idx} className="aluminium-door-tile group">
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    fill 
                    sizes="(max-width: 900px) 50vw, 25vw" 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="tile-hover-indicator"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Premium Glazing - Architectural Series */}
      <section className="section-padding section-white border-b border-slate-200">
        <div className="container-main">
          <div className="section-head-modern">
            <span className="section-tag">Architectural</span>
            <h2 className="section-title-main">Premium Glazing Collection</h2>
            <p className="section-desc">Elite systems for refined aesthetics and functional transparency.</p>
          </div>
          
          <div className="premium-showcase-grid">
            <div className="premium-left-gallery overflow-hidden rounded-[24px] border border-slate-200 shadow-lg">
              <ImageSlider 
                images={['/ad-31.jpeg', '/ad32.jpeg', '/ad33.jpeg']} 
                className="h-full min-h-[400px]"
              />
            </div>

            <div className="premium-right-feature group overflow-hidden bg-slate-900 border border-slate-200">
              <Image
                src="/cc.jpeg"
                alt="Premium Concept"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comprehensive Systems - Profile Logic */}
      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container-main">
          <div className="section-head-modern">
            <span className="section-tag">Technical Specs</span>
            <h2 className="section-title-main">Comprehensive Profile Gallery</h2>
            <p className="section-desc">A deep dive into our precision-engineered profile systems.</p>
          </div>

          <div className="comprehensive-dual-grid">
            {/* Left Side Group - Now a Slider */}
            <div className="comp-dual-column">
              <div className="comp-dual-tile overflow-hidden shadow-xl" style={{ flex: 1, minHeight: '500px' }}>
                <ImageSlider 
                  images={['/p15.jpeg', '/p14.jpeg', '/p21.jpeg']}
                />
              </div>
            </div>

            {/* Right Side Group */}
            <div className="comp-dual-column">
              <div className="comp-dual-tile tile-hero group bg-white">
                <Image src="/p11.jpeg" alt="Profile Specs 1" fill sizes="(max-width: 900px) 100vw, 45vw" className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="comp-dual-subgrid">
                <div className="comp-dual-tile group bg-white">
                  <Image src="/p12.jpeg" alt="Profile Specs 2" fill sizes="(max-width: 900px) 50vw, 22vw" className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="comp-dual-tile group bg-white">
                  <Image src="/p13.jpeg" alt="Profile Specs 3" fill sizes="(max-width: 900px) 50vw, 22vw" className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Entrance & Matting Collection */}
      <section className="section-padding section-white border-b border-slate-200">
        <div className="container-main">
          <div className="section-head-modern">
            <span className="section-tag">First Impressions</span>
            <h2 className="section-title-main">Entrance & Matting Solutions</h2>
            <p className="section-desc">Combine luxury and utility with our specialized entrance systems.</p>
          </div>
          
          <div className="entrance-showcase-grid">
            <div className="entrance-left-feature group overflow-hidden border border-slate-200 shadow-lg bg-slate-50">
              <ImageSlider 
                images={['/door-5.webp', '/mat1.webp', '/mat2.webp']}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
            </div>

            <div className="entrance-right-gallery">
              <div className="entrance-tile tile-large group">
                <Image src="/mat1.webp" alt="Matting 1" fill sizes="(max-width: 900px) 100vw, 35vw" className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="entrance-tile group">
                <Image src="/mat2.webp" alt="Matting 2" fill sizes="(max-width: 900px) 50vw, 15vw" className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="entrance-tile group">
                <Image src="/mat3.webp" alt="Matting 3" fill sizes="(max-width: 900px) 50vw, 15vw" className="object-cover group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Precision Systems Showroom */}
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="section-head-modern">
            <span className="section-tag">Aerospace Series</span>
            <h2 className="section-title-main">Technical Profile Systems</h2>
            <p className="section-desc">Advanced engineering for high-performance architectural glazing.</p>
          </div>
          
          <div className="pp-showcase-grid">
            <div className="pp-showcase-panel bg-slate-900 group shadow-lg">
              <ImageSlider 
                images={['/pp2.jpeg', '/pp.jpeg', '/p11.jpeg']}
                className="p-8 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="pp-showcase-panel group shadow-lg">
              <Image
                src="/pp.jpeg"
                alt="Technical Profile Panel 2"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Styles Consolidated for Performance and Maintainability */}
      <style jsx>{`
        .section-head-modern {
          text-align: center;
          margin-bottom: clamp(3rem, 6vw, 4.5rem);
        }
        .section-tag {
          display: inline-block;
          color: var(--accent);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
          position: relative;
        }
        .section-tag::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 2px;
          background: var(--accent);
        }
        .section-title-main {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .section-desc {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Partition Grid */
        .products-clean-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }
        .product-clean-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
        }
        .product-clean-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.1);
          border-color: #cbd5e1;
        }
        .product-clean-image-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .product-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .product-clean-card:hover .product-overlay-gradient {
          opacity: 1;
        }
        .product-clean-info {
          padding: 1.5rem;
          text-align: center;
        }
        .product-clean-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #1e293b;
          transition: color 0.3s;
        }
        .product-clean-card:hover .product-clean-title {
          color: var(--accent);
        }

        /* Aluminium Door Grid */
        .aluminium-door-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .aluminium-door-feature {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          aspect-ratio: 16 / 12;
        }
        .aluminium-door-tiles {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 1.25rem;
        }
        .aluminium-door-tile {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e2e8f0;
          aspect-ratio: 1 / 1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        /* Premium Glazing Grid */
        .premium-showcase-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 1.5rem;
        }
        .premium-left-gallery {
          position: relative;
          min-height: 400px;
        }
        .premium-right-feature {
          position: relative;
          border-radius: 24px;
          min-height: 500px;
        }

        /* Comprehensive Duel Grid */
        .comprehensive-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        .comp-dual-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .comp-dual-tile {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          transition: all 0.4s ease;
        }
        .tile-hero {
          aspect-ratio: 16 / 10;
          flex: 1;
        }
        .comp-dual-subgrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .comp-dual-subgrid .comp-dual-tile {
          aspect-ratio: 1 / 1;
        }
        .comp-dual-tile:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          border-color: #cbd5e1;
        }

        /* Entrance Showcase */
        .entrance-showcase-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 1.5rem;
        }
        .entrance-left-feature {
          position: relative;
          border-radius: 24px;
          min-height: 500px;
          overflow: hidden;
        }
        .entrance-right-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr;
          gap: 1.25rem;
        }
        .entrance-tile {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }
        .tile-large {
          grid-column: 1 / -1;
          aspect-ratio: 16 / 10;
        }

        /* PP Showcase */
        .pp-showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .pp-showcase-panel {
          position: relative;
          aspect-ratio: 16 / 11;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: all 0.4s;
        }
        .pp-showcase-panel:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .products-clean-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .aluminium-door-grid, 
          .premium-showcase-grid,
          .comprehensive-dual-grid,
          .entrance-showcase-grid,
          .pp-showcase-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .entrance-left-feature, .premium-right-feature, .premium-left-gallery {
            min-height: 350px;
            aspect-ratio: 16 / 10;
          }
          .entrance-left-feature { order: -1; }
          .premium-right-feature { order: -1; }
          .premium-left-gallery { order: 1; } /* Moved below the dark feature on mobile */
        }

        @media (max-width: 640px) {
          .products-clean-grid {
            grid-template-columns: 1fr;
          }
          .section-title-main {
            font-size: 1.8rem;
          }
          .aluminium-door-tiles, .comp-dual-subgrid, .entrance-right-gallery {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .aluminium-door-tile, .comp-dual-subgrid .comp-dual-tile, .entrance-right-gallery .entrance-tile:not(.tile-large) {
            aspect-ratio: 16 / 10;
          }
          .tile-large {
            aspect-ratio: 4 / 3;
          }
          .section-padding {
            padding: 3rem 0;
          }
        }
      `}</style>
    </div>
  );
}
