'use client';
import Image from 'next/image';

const products = [
  { id: 'single-glazing-partition', title: 'Single Glazing Partition', img: '/g1.jpeg' },
  { id: 'single-glass-25-25', title: 'Single Glass 25*25', img: '/g2.jpeg' },
  { id: 'double-glaze-25-100', title: 'Double Glaze Partition 25*100', img: '/g3.jpeg' },
  { id: 'single-glazing-25-25', title: 'Single Glazing Partition 25*25', img: '/g4.jpeg' },
  { id: 'single-glaze-25-45', title: 'Single Glaze Partition 25*45', img: '/g5.jpeg' },
  { id: 'single-glazing-25-100', title: 'Single Glazing Partition 25*100', img: '/p20.jpeg' },
  { id: 'grid-partition', title: 'Grid Partition', img: '/p21.jpeg' },
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
            .products-clean-grid {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 1.5rem;
            }
            .product-clean-card {
              background: #fff;
              border-radius: 16px;
              border: 1px solid #e2e8f0;
              overflow: hidden;
              box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
              transition: transform 0.25s ease, box-shadow 0.25s ease;
            }
            .product-clean-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 16px 36px rgba(15, 23, 42, 0.1);
            }
            .product-clean-image-wrap {
              position: relative;
              width: 100%;
              aspect-ratio: 4 / 3;
              background: #f1f5f9;
            }
            .product-clean-title {
              margin: 0;
              padding: 1rem 1rem 1.2rem;
              color: #0f172a;
              font-size: 1rem;
              font-weight: 800;
              line-height: 1.35;
              text-align: center;
            }
            @media (max-width: 1024px) {
              .products-clean-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
            }
            @media (max-width: 640px) {
              .products-clean-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
              }
              .product-clean-title {
                font-size: 0.95rem;
              }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
