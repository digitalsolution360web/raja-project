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
              grid-template-columns: repeat(2, 1fr);
              justify-content: center;
              gap: 2rem;
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
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
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
    </div>
  );
}
