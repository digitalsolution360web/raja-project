'use client';
import Image from 'next/image';

const products = [
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
    <div className="animate-fade-in">
      <section className="page-hero">
        <div className="container-main">
          <div className="gold-bar" />
          <h1 className="section-title-white" style={{ marginBottom: '1rem' }}>Our Partition Product Range</h1>
          <p className="section-subtitle-white" style={{ maxWidth: '800px' }}>
            Professional systems for residential and commercial spaces.
          </p>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container-main">
          <div className="products-head">
            <h2 className="products-head-title">Partition Collection</h2>
            <p className="products-head-sub">Image-first catalogue for your key partition systems.</p>
          </div>
          <div className="products-clean-grid">
            {products.map((product, idx) => (
              <article key={product.id} className="product-clean-card">
                <div className="product-clean-image-wrap">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={idx < 2}
                  />
                </div>
                <h2 className="product-clean-title">{product.title}</h2>
              </article>
            ))}
          </div>
          <style jsx>{`
            .products-head {
              text-align: center;
              margin-bottom: clamp(1.25rem, 3vw, 2.5rem);
            }
            .products-head-title {
              margin: 0;
              color: #0f172a;
              font-size: clamp(1.5rem, 3vw, 2.2rem);
              font-weight: 900;
              letter-spacing: 0.01em;
            }
            .products-head-sub {
              margin: 0.5rem 0 0;
              color: #64748b;
              font-size: 1rem;
            }
            .products-clean-grid {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              justify-content: stretch;
              gap: 1.5rem;
            }
            .product-clean-card {
              background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
              border-radius: 20px;
              border: 1px solid #e2e8f0;
              overflow: hidden;
              box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);
              transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            }
            .product-clean-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
              border-color: #cbd5e1;
            }
            .product-clean-image-wrap {
              position: relative;
              width: 100%;
              aspect-ratio: 16 / 10;
              background: #f1f5f9;
              border-bottom: 1px solid #e2e8f0;
            }
            .product-clean-title {
              margin: 0;
              min-height: 70px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1rem 1.25rem;
              color: #0f172a;
              font-size: 1.05rem;
              font-weight: 850;
              line-height: 1.4;
              text-align: center;
            }
            @media (max-width: 1024px) {
              .products-clean-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 1.25rem;
              }
            }
            @media (max-width: 640px) {
              .products-clean-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
              }
              .product-clean-image-wrap {
                aspect-ratio: 4 / 3;
              }
              .products-head-title {
                font-size: 1.6rem;
              }
              .products-head-sub {
                font-size: 0.95rem;
              }
              .product-clean-title {
                font-size: 1.1rem;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Aluminium door — left hero + right 2×2 gallery */}
      <section className="section-padding" style={{ background: '#f1f5f9', borderTop: '1px solid #e2e8f0' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
            <h2 className="section-title">Aluminium Door</h2>
          </div>
          <div className="aluminium-door-grid">
            <div className="aluminium-door-feature">
              <Image
                src="/left-image.jpeg"
                alt="Aluminium glass partition"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="aluminium-door-tiles">
              {[
                { src: '/1.jpeg', alt: 'Partition profile 1' },
                { src: '/2.jpeg', alt: 'Partition profile 2' },
                { src: '/3.jpeg', alt: 'Partition profile 3' },
                { src: '/4.jpeg', alt: 'Partition profile 4' },
              ].map((item) => (
                <div key={item.src} className="aluminium-door-tile">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            .aluminium-door-grid {
              display: grid;
              grid-template-columns: 1.05fr 0.95fr;
              gap: 1.25rem;
              align-items: stretch;
              max-width: 1200px;
              margin: 0 auto;
            }
            .aluminium-door-feature {
              position: relative;
              border-radius: 20px;
              overflow: hidden;
              border: 1px solid #e2e8f0;
              box-shadow: 0 12px 40px rgba(15, 23, 42, 0.1);
              background: #f1f5f9;
              min-height: 420px;
              max-height: min(640px, 80vh);
            }
            .aluminium-door-tiles {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr 1fr;
              gap: 1rem;
              min-height: 0;
            }
            .aluminium-door-tile {
              position: relative;
              border-radius: 16px;
              overflow: hidden;
              border: 1px solid #e2e8f0;
              background: #fff;
              box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);
              aspect-ratio: 4 / 3;
              transition: transform 0.25s ease, box-shadow 0.25s ease;
            }
            .aluminium-door-tile:hover {
              transform: translateY(-2px);
              box-shadow: 0 14px 32px rgba(15, 23, 42, 0.11);
            }
            @media (max-width: 900px) {
              .aluminium-door-grid {
                grid-template-columns: 1fr;
                max-width: none;
              }
              .aluminium-door-feature {
                max-height: none;
                min-height: 300px;
                aspect-ratio: 4 / 3;
              }
              .aluminium-door-tiles {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 480px) {
              .aluminium-door-tiles {
                grid-template-columns: 1fr;
              }
              .aluminium-door-tile {
                aspect-ratio: 16 / 10;
              }
            }
          `}</style>
        </div>
      </section>

      {/* New Premium Collection section — left gallery + right hero */}
      <section className="section-padding" style={{ background: '#fafafa', borderTop: '1px solid #e2e8f0' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
            <h2 className="section-title">Premium Collection</h2>
            <p className="products-head-sub" style={{ marginTop: '0.5rem', fontSize: '1.05rem', color: '#64748b' }}>
              Explore our top-tier designs with unparalleled aesthetics.
            </p>
          </div>
          <div className="premium-showcase-grid">
            {/* Left side: 3 images */}
            <div className="premium-left-gallery">
              <div className="premium-tile tile-large group">
                <Image src="/ad-31.jpeg" alt="Premium Option 1" fill sizes="(max-width: 900px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="premium-tile group">
                <Image src="/ad32.jpeg" alt="Premium Option 2" fill sizes="(max-width: 900px) 50vw, 15vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="premium-tile group">
                <Image src="/ad33.jpeg" alt="Premium Option 3" fill sizes="(max-width: 900px) 50vw, 15vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Right side: 1 large image */}
            <div className="premium-right-feature group">
              <Image 
                src="/cc.jpeg" 
                alt="Premium Main Concept" 
                fill 
                sizes="(max-width: 900px) 100vw, 55vw" 
                style={{ objectFit: 'contain', background: '#0f172a' }} 
                priority 
              />
            </div>
          </div>
          <style jsx>{`
            .premium-showcase-grid {
              display: grid;
              grid-template-columns: 0.8fr 1.2fr;
              gap: 1.5rem;
              align-items: stretch;
              max-width: 1200px;
              margin: 0 auto;
            }
            .premium-left-gallery {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto 1fr;
              gap: 1.25rem;
              min-height: 0;
            }
            .tile-large {
              grid-column: 1 / -1;
              aspect-ratio: 16 / 10;
              min-height: 240px;
            }
            .premium-tile {
              position: relative;
              border-radius: 16px;
              overflow: hidden;
              border: 1px solid #e2e8f0;
              background: #fff;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            }
            .premium-tile:not(.tile-large) {
              aspect-ratio: 1 / 1;
            }
            .premium-right-feature {
              position: relative;
              border-radius: 20px;
              overflow: hidden;
              border: 1px solid #e2e8f0;
              background: #0f172a;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
              min-height: 520px;
            }
            
            .group {
              cursor: pointer;
            }
            .group :global(img) {
              transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) !important;
            }
            .group:hover :global(img) {
              transform: scale(1.05);
            }
            
            @media (max-width: 900px) {
              .premium-showcase-grid {
                grid-template-columns: 1fr;
              }
              .premium-right-feature {
                min-height: 400px;
                aspect-ratio: 16 / 10;
                order: -1; /* feature image first on mobile */
              }
              .premium-left-gallery {
                gap: 1rem;
              }
            }
            @media (max-width: 480px) {
              .premium-left-gallery {
                grid-template-columns: 1fr;
              }
              .premium-tile:not(.tile-large) {
                aspect-ratio: 4 / 3;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Comprehensive Collection section — Custom 3-on-3 Layout */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
            <h2 className="section-title">Systems & Project Specifications</h2>
            <p className="products-head-sub" style={{ marginTop: '0.5rem', fontSize: '1.05rem', color: '#64748b' }}>
              Detailed profile documentation and premium office partition installations.
            </p>
          </div>
          
          <div className="comprehensive-dual-grid">
            {/* Left Side: p15 (Large) + p14, p21 (Small) */}
            <div className="comp-dual-column">
              <div className="comp-dual-tile tile-hero group">
                <Image src="/p15.jpeg" alt="Comprehensive Hero" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover' }} priority />
              </div>
              <div className="comp-dual-subgrid">
                <div className="comp-dual-tile group">
                  <Image src="/p14.jpeg" alt="Profile Logic 1" fill sizes="(max-width: 900px) 50vw, 22vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="comp-dual-tile group">
                  <Image src="/p21.jpeg" alt="Profile Logic 2" fill sizes="(max-width: 900px) 50vw, 22vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            {/* Right Side: p11 (Large) + p12, p13 (Small) */}
            <div className="comp-dual-column">
              <div className="comp-dual-tile tile-hero group" style={{ background: '#f8fafc' }}>
                <Image src="/p11.jpeg" alt="Profile Specs 1" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'contain' }} />
              </div>
              <div className="comp-dual-subgrid">
                <div className="comp-dual-tile group" style={{ background: '#f8fafc' }}>
                  <Image src="/p12.jpeg" alt="Profile Specs 2" fill sizes="(max-width: 900px) 50vw, 22vw" style={{ objectFit: 'contain' }} />
                </div>
                <div className="comp-dual-tile group" style={{ background: '#f8fafc' }}>
                  <Image src="/p13.jpeg" alt="Profile Specs 3" fill sizes="(max-width: 900px) 50vw, 22vw" style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>
          
          <style jsx>{`
            .comprehensive-dual-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 2rem;
              max-width: 1240px;
              margin: 0 auto;
            }
            .comp-dual-column {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
            }
            .comp-dual-tile {
              position: relative;
              border-radius: 20px;
              overflow: hidden;
              border: 1px solid #e2e8f0;
              background: #fff;
              box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
              transition: all 0.3s ease;
            }
            .tile-hero {
              aspect-ratio: 16 / 10;
              flex-grow: 1;
              min-height: 280px;
            }
            .comp-dual-subgrid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1.5rem;
            }
            .comp-dual-subgrid .comp-dual-tile {
              aspect-ratio: 1 / 1;
            }
            
            .group { cursor: pointer; }
            .group :global(img) { transition: transform 0.6s cubic-bezier(0.2, 1, 0.2, 1) !important; }
            .group:hover :global(img) { transform: scale(1.05); }
            .group:hover {
              transform: translateY(-4px);
              box-shadow: 0 20px 48px rgba(15, 23, 42, 0.1);
              border-color: #cbd5e1;
            }

            @media (max-width: 900px) {
              .comprehensive-dual-grid { grid-template-columns: 1fr; gap: 3rem; }
              .tile-hero { aspect-ratio: 4 / 3; min-height: 240px; }
              .comp-dual-subgrid { gap: 1rem; }
            }
          `}</style>
        </div>
      </section>

      {/* Premium Entrance & Mat Collection — left hero + right gallery (3 images) */}
      <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
            <h2 className="section-title">Premium Entrance & Mats</h2>
            <p className="products-head-sub" style={{ marginTop: '0.5rem', fontSize: '1.05rem', color: '#64748b' }}>
              Superior quality floor mats and entrance solutions for a clean, professional look.
            </p>
          </div>
          <div className="entrance-showcase-grid">
            {/* Left side: 3 images gallery */}
            <div className="entrance-right-gallery">
              <div className="entrance-tile tile-large group">
                <Image src="/mat1.webp" alt="Premium Mat 1" fill sizes="(max-width: 900px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="entrance-tile group">
                <Image src="/mat2.webp" alt="Premium Mat 2" fill sizes="(max-width: 900px) 50vw, 15vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="entrance-tile group">
                <Image src="/mat3.webp" alt="Premium Mat 3" fill sizes="(max-width: 900px) 50vw, 15vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Right side: 1 large image */}
            <div className="entrance-left-feature group">
              <Image 
                src="/door-5.webp" 
                alt="Entrance Solution" 
                fill 
                sizes="(max-width: 900px) 100vw, 45vw" 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
          <style jsx>{`
            .entrance-showcase-grid {
              display: grid;
              grid-template-columns: 0.8fr 1.2fr;
              gap: 1.5rem;
              align-items: stretch;
              max-width: 1200px;
              margin: 0 auto;
            }
            .entrance-left-feature {
              position: relative;
              border-radius: 20px;
              overflow: hidden;
              border: 1px solid #e2e8f0;
              background: #fff;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
              min-height: 520px;
            }
            .entrance-right-gallery {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto 1fr;
              gap: 1.25rem;
              min-height: 0;
            }
            .tile-large {
              grid-column: 1 / -1;
              aspect-ratio: 16 / 10;
              min-height: 240px;
            }
            .entrance-tile {
              position: relative;
              border-radius: 16px;
              overflow: hidden;
              border: 1px solid #e2e8f0;
              background: #fff;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            }
            .entrance-tile:not(.tile-large) {
              aspect-ratio: 1 / 1;
            }
            
            .group {
              cursor: pointer;
            }
            .group :global(img) {
              transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) !important;
            }
            .group:hover :global(img) {
              transform: scale(1.05);
            }
            
            @media (max-width: 900px) {
              .entrance-showcase-grid {
                grid-template-columns: 1fr;
              }
              .entrance-left-feature {
                min-height: 400px;
                aspect-ratio: 16 / 10;
                order: -1; /* image first on mobile */
              }
              .entrance-right-gallery {
                gap: 1rem;
              }
            }
            @media (max-width: 480px) {
              .entrance-right-gallery {
                grid-template-columns: 1fr;
              }
              .entrance-tile:not(.tile-large) {
                aspect-ratio: 4 / 3;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Profile systems showcase — pp2 left, pp right */}
      <section className="section-padding section-white" style={{ borderTop: '1px solid #e2e8f0' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
            <h2 className="section-title">AEROSPACE Technical Specs & Projects</h2>
            <p className="products-head-sub" style={{ marginTop: '0.5rem', fontSize: '1.05rem', color: '#64748b' }}>
              Precision-designed partition profiles alongside high-end installation examples.
            </p>
          </div>
          <div className="pp-showcase-grid">
            <div className="pp-showcase-panel pp-showcase-panel--left">
              <Image
                src="/pp2.jpeg"
                alt="AEROSPACE glass partition profile series"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
            <div className="pp-showcase-panel pp-showcase-panel--right">
              <Image
                src="/pp.jpeg"
                alt="AEROSPACE glass partition installation"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <style jsx>{`
            .pp-showcase-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1.5rem;
              align-items: stretch;
              max-width: 1200px;
              margin: 0 auto;
            }
            .pp-showcase-panel {
              position: relative;
              border-radius: 20px;
              overflow: hidden;
              border: 1px solid #e2e8f0;
              box-shadow: 0 10px 36px rgba(15, 23, 42, 0.09);
              background: #f8fafc;
              min-height: 340px;
              aspect-ratio: 4 / 3;
              transition: box-shadow 0.3s ease, transform 0.3s ease;
            }
            .pp-showcase-panel:hover {
              box-shadow: 0 16px 48px rgba(15, 23, 42, 0.12);
              transform: translateY(-2px);
            }
            .pp-showcase-panel--left {
              background: #0f172a;
            }
            @media (max-width: 900px) {
              .pp-showcase-grid {
                grid-template-columns: 1fr;
                gap: 1.25rem;
              }
              .pp-showcase-panel {
                min-height: 260px;
                aspect-ratio: 16 / 10;
              }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
