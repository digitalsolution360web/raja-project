'use client';
import Image from 'next/image';
import ImageSlider from '@/app/components/ImageSlider';

const products = [
  { id: 'single-glazing-partition', title: 'Single Glazing Partition', img: '/g1.jpeg' },
  { id: 'single-glass-25-25', title: 'Single Gaze Grid Partition 25*45', img: '/g2.jpeg' },
  { id: 'double-glaze-25-100', title: 'Double Glaze Partition 25*100', img: '/dou.jpeg' },
  { id: 'single-glazing-25-25', title: 'Single Glazing Partition 25*25', img: '/g4.jpeg' },
  { id: 'single-glaze-25-45', title: 'Single Glaze Partition 25*45', img: '/g5.jpeg' },
  { id: 'single-glazing-25-100', title: 'Single Glazing Partition 25*100', img: '/p20.jpeg' },
  { id: 'grid-partition', title: 'Double Glaze Partition 25*100', img: '/p21.jpeg' },
  { id: 'double-glaze-partition-new', title: 'Double Glaze Partition', img: '/double.webp' },
  { id: 'single-glazing-25x45-new', title: 'Single Glazing Partition 25x45', img: '/single.webp' },
  { id: 'single-glazing-25x100-new', title: 'Single Glazing Partition 25x100', img: '/single25.webp' },
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
              <p className="products-head-sub">Catalogue for your key partition systems.</p>
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
        <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #e1e7ef' }}>
          <div className="container-main">
            <div className="centered-head">
              <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Aluminium Door</h2>
            </div>
            <div className="aluminium-door-grid">
              <div className="aluminium-door-feature">
                <Image src="/left-image.jpeg" alt="Aluminium glass partition" fill sizes="(max-width: 900px) 100vw, 48vw" style={{ objectFit: 'cover' }} priority />
              </div>
              <div className="aluminium-door-tiles">
                {['/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg'].map((src, idx) => (
                  <div key={src} className="aluminium-door-tile architect-border">
                    <Image src={src} alt={`Partition profile ${idx + 1}`} fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Elite Design Portfolio (Slider) */}
        <section className="section-padding" style={{ background: '#fef2f2', borderTop: '1px solid #fee2e2' }}>
          <div className="container-main">
            <div className="centered-head">
              <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Aluminium Door</h2>
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
        <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
          <div className="container-main">
            <div className="centered-head">
              <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Aluminium Door</h2>
            </div>
            <div className="comprehensive-dual-grid">
              <div className="comp-dual-column">
                <ImageSlider images={['/p15.jpeg', '/p14.jpeg', '/p21.jpeg']} aspectRatio="auto" style={{ height: '100%' }} />
              </div>
              <div className="comp-dual-column">
                <div className="comp-dual-tile tile-hero group">
                  <Image src="/p11.jpeg" alt="Profile Specs 1" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'contain' }} />
                </div>
                <div className="comp-dual-subgrid">
                  <div className="comp-dual-tile group"><Image src="/p12.jpeg" alt="Specs 2" fill sizes="25vw" style={{ objectFit: 'contain' }} /></div>
                  <div className="comp-dual-tile group"><Image src="/p13.jpeg" alt="Specs 3" fill sizes="25vw" style={{ objectFit: 'contain' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Entrance & Matting Solutions */}
        <section className="section-padding" style={{ background: '#f0f9ff', borderTop: '1px solid #e0f2fe' }}>
          <div className="container-main">
            <div className="centered-head">
              <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Aluminium Door</h2>
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
        <section className="section-padding" style={{ background: '#fafaf9', borderTop: '1px solid #f5f5f4' }}>
          <div className="container-main">
            <div className="centered-head">
              <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">Aluminium Door</h2>
            </div>
            <div className="pp-showcase-grid">
              <div className="pp-showcase-panel pp-showcase-panel--left architect-border">
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
        .products-layout-wrapper { width: 100%; overflow-x: hidden; background: #fff; }
        .animate-fade-in { width: 100%; }
        .products-head, .centered-head { text-align: center; margin-bottom: clamp(2.5rem, 6vw, 5rem); position: relative; }
        .products-head-title { margin: 0; color: #0f172a; font-size: clamp(1.8rem, 4.5vw, 3rem); font-weight: 850; letter-spacing: -0.03em; }
        .products-head-sub { margin: 0.75rem auto 0; color: #64748b; font-size: 1.15rem; max-width: 650px; line-height: 1.6; }
        
        .gold-bar { width: 45px; height: 3px; background: linear-gradient(90deg, #b91c1c 0%, #ef4444 100%); border-radius: 100px; margin-bottom: 1.25rem; }

        .products-clean-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); justify-content: stretch; gap: 2.5rem; width: 100%; }
        .product-clean-card { background: #fff; border-radius: 12px; border: 3px solid #334155; overflow: hidden; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1); transition: all 0.45s ease; position: relative; padding: 12px; }
        .product-clean-card:hover { transform: translateY(-7px); box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2); border-color: var(--accent); }
        .product-clean-image-wrap { position: relative; width: 100%; aspect-ratio: 1 / 1; background: #f8fafc; overflow: hidden; border-radius: 8px; border: 1.5px solid #e2e8f0; }
        .product-clean-title { margin: 0; min-height: 60px; display: flex; align-items: center; justify-content: center; padding: 1rem; color: #0f172a; font-size: 1.05rem; font-weight: 850; line-height: 1.3; text-align: center; background: #fff; }

        .aluminium-door-grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 2.5rem; align-items: stretch; max-width: 1400px; margin: 0 auto; width: 100%; }
        .aluminium-door-feature { position: relative; border-radius: 12px; overflow: hidden; border: 3px solid #334155; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); background: #f8fafc; min-height: 550px; padding: 12px; }
        .aluminium-door-tiles { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 1.5rem; }
        .aluminium-door-tile { position: relative; background: #fff; aspect-ratio: 1 / 1; transition: all 0.4s ease; }
        
        .premium-showcase-grid { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 3rem; align-items: stretch; max-width: 1400px; margin: 0 auto; width: 100%; }
        .premium-left-gallery { display: flex; flex-direction: column; min-height: 650px; border-radius: 12px; overflow: hidden; border: 3px solid #334155; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); padding: 12px; background: #fff; }
        .premium-right-feature { position: relative; border-radius: 12px; overflow: hidden; border: 3.5px solid #1e293b; background: #0f172a; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); min-height: 650px; padding: 12px; }

        .comprehensive-dual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1400px; margin: 0 auto; width: 100%; }
        .comp-dual-column { display: flex; flex-direction: column; gap: 2.5rem; justify-content: stretch; }
        .comp-dual-tile { position: relative; border-radius: 12px; overflow: hidden; border: 3px solid #334155; background: #fff; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); transition: all 0.4s ease; padding: 12px; }
        .tile-hero { flex-grow: 1; min-height: 400px; }
        .comp-dual-subgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .comp-dual-subgrid .comp-dual-tile { aspect-ratio: 1 / 1; }

        .entrance-showcase-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: stretch; max-width: 1400px; margin: 0 auto; width: 100%; }
        .entrance-left-feature { position: relative; border-radius: 12px; overflow: hidden; border: 3px solid #334155; background: #fff; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); min-height: 650px; padding: 12px; }
        .entrance-right-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .tile-large { grid-column: 1 / -1; aspect-ratio: 16 / 9; min-height: 320px; }
        .entrance-tile { position: relative; border-radius: 12px; overflow: hidden; border: 3px solid #334155; background: #fff; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); padding: 12px; }

        .pp-showcase-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1400px; margin: 0 auto; width: 100%; }
        .pp-showcase-panel { position: relative; border-radius: 12px; overflow: hidden; border: 3px solid #334155; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1); background: #ffffff; min-height: 450px; aspect-ratio: 4 / 3; transition: all 0.4s ease; padding: 12px; }
        .pp-showcase-panel--left { background: #ffffff; border-color: #334155; }

        .group { cursor: pointer; position: relative; }
        .group::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 65%, rgba(15, 23, 42, 0.05) 100%); opacity: 0; transition: opacity 0.4s ease; }
        .group:hover::after { opacity: 1; }
        .group :global(img) { transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1) !important; }
        .group:hover :global(img) { transform: scale(1.08); }
        .group:hover { transform: translateY(-8px); box-shadow: 0 40px 80px rgba(16, 29, 64, 0.12); }

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
        .container-main { width: 100% !important; max-width: 1400px !important; margin: 0 auto !important; padding: 0 2rem !important; box-sizing: border-box !important; }
        .section-padding { width: 100%; box-sizing: border-box; }
      `}</style>
    </div>
  );
}
