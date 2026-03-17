'use client';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: '/1.webp', alt: 'Premium glass partition installation' },
  { src: '/2.webp', alt: 'Modern office cubicle systems' },
  { src: '/3.webp', alt: 'Full-height glass wall profiles' },
  { src: '/4.webp', alt: 'Double glaze acoustic partition' },
  { src: '/5.webp', alt: 'Floor-to-ceiling office dividers' },
  { src: '/6.webp', alt: 'Precision aluminium extrusions' },
  { src: '/1.webp', alt: 'Custom partition solutions' },
  { src: '/2.webp', alt: 'Contemporary retail glass system' },
  { src: '/3.webp', alt: 'Executive suite glass doors' },
  { src: '/4.webp', alt: 'Acoustic double glazing' },
  { src: '/5.webp', alt: 'Aluminium profile finishes' },
  { src: '/6.webp', alt: 'Corporate boardroom project' },
];

export default function GalleryPage() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-main">
          <div className="gold-bar" />
          <h1 className="section-title-white" style={{ marginBottom: '1.5rem' }}>Our Work — Projects Across India</h1>
          <p className="section-subtitle-white" style={{ maxWidth: '800px' }}>
            From corporate headquarters in Mumbai to institutional fit-outs in Rajasthan — browse our completed projects and see how our aluminium profile systems perform in real-world installations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div className="gallery-grid">
            {galleryImages.map((image, idx) => (
              <div key={idx} className="gallery-item">
                <Image 
                   src={image.src} 
                   alt={image.alt} 
                   width={400} 
                   height={300} 
                   style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div className="gallery-item-overlay">
                  <div style={{ color: 'white', background: 'var(--navy)', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                    {image.alt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Band */}
      <section style={{ background: 'var(--silver)', padding: '5rem 0' }}>
        <div className="container-main" style={{ textAlign: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card-glass" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>ISO Quality Standard</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem' }}>All profiles manufactured to meet IS 733 for aluminium alloy specifications.</p>
            </div>
            <div className="card-glass" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📐</div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>Precision Extrusion</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem' }}>Maintaining tight dimensional tolerances of +/- 0.5mm for perfect site fitment.</p>
            </div>
            <div className="card-glass" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💎</div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>Premium Finishes</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem' }}>Available in high-micron anodising and architectural grade powder coating.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '5rem 0', background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container-main">
          <h2 className="section-title-white" style={{ marginBottom: '1rem' }}>Inspired by our work?</h2>
          <p className="section-subtitle-white" style={{ margin: '0 auto 2.5rem' }}>Let's collaborate on your next project. Our team is ready to provide technical support and quotations within 24 hours.</p>
          <Link href="/contact" className="btn-gold">Get a Custom Quote</Link>
        </div>
      </section>
    </div>
  );
}
