'use client';
import Image from 'next/image';
import ImageSlider from '@/app/components/ImageSlider';

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
    <div className="products-layout-wrapper">
      <div className="animate-fade-in">
        <section className="page-hero">
          <div className="container-main">
            <div className="gold-bar" />
            <h1 className="section-title-white" style={{ marginBottom: '1rem' }}>Our Partition Product Range</h1>
            <p className="section-subtitle-white" style={{ maxWidth: '800px', fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)' }}>
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
          </div>
        </section>

        {/* Section 1: Aluminium Door Systems */}
        <section className="section-padding" style={{ background: '#f1f5f9', borderTop: '1px solid #e2e8f0' }}>
          <div className="container-main">
            <div className="centered-head">
              <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Aluminium Door Systems</h2>
            </div>
            <div className="aluminium-door-grid">
              <div className="aluminium-door-feature">
                <Image src="/left-image.jpeg" alt="Aluminium glass partition" fill sizes="(max-width: 900px) 100vw, 48vw" style={{ objectFit: 'cover' }} priority />
              </div>
              <div className="aluminium-door-tiles">
                {['/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg'].map((src, idx) => (
                  <div key={src} className="aluminium-door-tile">
                    <Image src={src} alt={`Partition profile ${idx + 1}`} fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Elite Design Portfolio (Slider) */}
        <section className="section-padding" style={{ background: '#fafafa', borderTop: '1px solid #e2e8f0' }}>
          <div className="container-main">
            <div className="centered-head">
              <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Elite Design Portfolio</h2>
            </div>
            <div className="premium-showcase-grid">
              <div className="premium-left-gallery">
                <ImageSlider images={['/ad-31.jpeg', '/ad32.jpeg', '/ad33.jpeg']} style={{ height: '100%', aspectRatio: 'auto' }} />
              </div>
              <div className="premium-right-feature group">
                <Image src="/cc.jpeg" alt="Premium Main Concept" fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: 'contain', background: '#0f172a' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Architectural Profile Systems (Slider) */}
        <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
          <div className="container-main">
            <div className="centered-head">
              <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Architectural Profile Systems</h2>
            </div>
            <div className="comprehensive-dual-grid">
              <div className="comp-dual-column">
                <ImageSlider images={['/p15.jpeg', '/p14.jpeg', '/p21.jpeg']} aspectRatio="auto" style={{ height: '100%' }} />
              </div>
              <div className="comp-dual-column">
                <div className="comp-dual-tile tile-hero group" style={{ background: '#f8fafc' }}>
                  <Image src="/p11.jpeg" alt="Profile Specs 1" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'contain' }} />
                </div>
                <div className="comp-dual-subgrid">
                  <div className="comp-dual-tile group" style={{ background: '#f8fafc' }}><Image src="/p12.jpeg" alt="Specs 2" fill sizes="25vw" style={{ objectFit: 'contain' }} /></div>
                  <div className="comp-dual-tile group" style={{ background: '#f8fafc' }}><Image src="/p13.jpeg" alt="Specs 3" fill sizes="25vw" style={{ objectFit: 'contain' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Entrance & Matting Solutions */}
        <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
          <div className="container-main">
            <div className="centered-head">
              <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Entrance & Matting Solutions</h2>
            </div>
            <div className="entrance-showcase-grid">
              <div className="entrance-right-gallery">
                <div className="entrance-tile tile-large group"><Image src="/mat1.webp" alt="Mat 1" fill sizes="40vw" style={{ objectFit: 'cover' }} /></div>
                <div className="entrance-tile group"><Image src="/mat2.webp" alt="Mat 2" fill sizes="20vw" style={{ objectFit: 'cover' }} /></div>
                <div className="entrance-tile group"><Image src="/mat3.webp" alt="Mat 3" fill sizes="20vw" style={{ objectFit: 'cover' }} /></div>
              </div>
              <div className="entrance-left-feature group">
                <Image src="/door-5.webp" alt="Entrance Solution" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Aerospace Profile Series */}
        <section className="section-padding section-white" style={{ borderTop: '1px solid #e2e8f0' }}>
          <div className="container-main">
            <div className="centered-head">
              <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Aerospace Profile Series</h2>
            </div>
            <div className="pp-showcase-grid">
              <div className="pp-showcase-panel pp-showcase-panel--left">
                <Image src="/pp2.jpeg" alt="Profile Series" fill sizes="45vw" style={{ objectFit: 'contain' }} />
              </div>
              <div className="pp-showcase-panel pp-showcase-panel--right">
                <Image src="/pp.jpeg" alt="Installation" fill sizes="45vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .products-layout-wrapper { width: 100%; overflow-x: hidden; }
        .animate-fade-in { width: 100%; }
        .products-head, .centered-head { text-align: center; margin-bottom: clamp(1.25rem, 3vw, 2.5rem); }
        .products-head-title { margin: 0; color: #0f172a; font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 900; letter-spacing: 0.01em; }
        .products-head-sub { margin: 0.5rem 0 0; color: #64748b; font-size: 1rem; }
        
        .products-clean-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); justify-content: stretch; gap: 1.5rem; width: 100%; }
        .product-clean-card { background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); border-radius: 20px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .product-clean-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1); border-color: #cbd5e1; }
        .product-clean-image-wrap { position: relative; width: 100%; aspect-ratio: 16 / 10; background: #f1f5f9; border-bottom: 1px solid #e2e8f0; }
        .product-clean-title { margin: 0; min-height: 70px; display: flex; align-items: center; justify-content: center; padding: 1rem 1.25rem; color: #0f172a; font-size: 1.05rem; font-weight: 850; line-height: 1.4; text-align: center; }

        .aluminium-door-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 1.25rem; align-items: stretch; max-width: 1200px; margin: 0 auto; width: 100%; }
        .aluminium-door-feature { position: relative; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 12px 40px rgba(15, 23, 42, 0.1); background: #f1f5f9; min-height: 420px; }
        .aluminium-door-tiles { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 1rem; min-height: 0; }
        .aluminium-door-tile { position: relative; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; background: #fff; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07); aspect-ratio: 4 / 3; transition: transform 0.25s ease, box-shadow 0.25s ease; }

        .premium-showcase-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 1.5rem; align-items: stretch; max-width: 1200px; margin: 0 auto; width: 100%; }
        .premium-left-gallery { display: flex; flex-direction: column; min-height: 520px; }
        .premium-right-feature { position: relative; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; background: #0f172a; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); min-height: 520px; }

        .comprehensive-dual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 1200px; margin: 0 auto; width: 100%; }
        .comp-dual-column { display: flex; flex-direction: column; gap: 1.5rem; justify-content: stretch; }
        .comp-dual-tile { position: relative; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; background: #fff; box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06); transition: all 0.3s ease; }
        .tile-hero { aspect-ratio: 16 / 10; flex-grow: 1; min-height: 280px; }
        .comp-dual-subgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .comp-dual-subgrid .comp-dual-tile { aspect-ratio: 1 / 1; }

        .entrance-showcase-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 1.5rem; align-items: stretch; max-width: 1200px; margin: 0 auto; width: 100%; }
        .entrance-left-feature { position: relative; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; background: #fff; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); min-height: 520px; }
        .entrance-right-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .tile-large { grid-column: 1 / -1; aspect-ratio: 16 / 10; min-height: 240px; }
        .entrance-tile { position: relative; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; background: #fff; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); }

        .pp-showcase-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; max-width: 1200px; margin: 0 auto; width: 100%; }
        .pp-showcase-panel { position: relative; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 36px rgba(15, 23, 42, 0.09); background: #f8fafc; min-height: 340px; aspect-ratio: 4 / 3; transition: all 0.3s ease; }
        .pp-showcase-panel--left { background: #0f172a; }

        .group { cursor: pointer; }
        .group :global(img) { transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) !important; }
        .group:hover :global(img) { transform: scale(1.05); }
        .group:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(15, 23, 42, 0.1); }

        @media (max-width: 1024px) {
          .products-clean-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .aluminium-door-grid, .premium-showcase-grid, .comprehensive-dual-grid, .entrance-showcase-grid, .pp-showcase-grid { grid-template-columns: 1fr; gap: 2rem; }
          .premium-right-feature, .entrance-left-feature { min-height: 300px; aspect-ratio: 16 / 10; order: -1; }
          .premium-left-gallery { min-height: 300px; aspect-ratio: 4 / 3; }
          .comp-dual-column:first-child { min-height: 300px; aspect-ratio: 4 / 3; }
          .aluminium-door-feature { min-height: 280px; aspect-ratio: 4 / 3; }
          .aluminium-door-tiles { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .tile-hero { aspect-ratio: 4 / 3; min-height: 240px; }
          .pp-showcase-panel { min-height: 260px; aspect-ratio: 16 / 10; }
        }

        @media (max-width: 768px) {
          .products-clean-grid { grid-template-columns: 1fr; }
          .product-clean-image-wrap { aspect-ratio: 4 / 3; }
          .product-clean-title { font-size: 1.1rem; min-height: 60px; padding: 0.75rem; }
        }
      `}</style>

      <style jsx global>{`
        html, body { overflow-x: hidden; width: 100%; margin: 0; padding: 0; }
        .container-main { width: 100% !important; max-width: 1320px !important; margin: 0 auto !important; padding: 0 1.5rem !important; box-sizing: border-box !important; }
        .section-padding { width: 100%; box-sizing: border-box; }
      `}</style>
    </div>
  );
}
