'use client';
import Image from 'next/image';

const galleryImages = [
  { src: '/showcase1.webp', alt: 'Showcase 1' },
  { src: '/showcase2.webp', alt: 'Showcase 2' },
  { src: '/showcase3.webp', alt: 'Showcase 3' },
  { src: '/showcase4.webp', alt: 'Showcase 4' },
  { src: '/showcase5.webp', alt: 'Showcase 5' },
  { src: '/showcase6.webp', alt: 'Showcase 6' },
  { src: '/showcase7.webp', alt: 'Showcase 7' },
  { src: '/showcase8.webp', alt: 'Showcase 8' },
];

export default function GalleryPage() {
  return (
    <div className="animate-fade-in">
      <section className="page-hero">
        <div className="container-main">
          <div className="gold-bar" />
          <h1 className="section-title-white" style={{ marginBottom: '0.5rem' }}>Project Gallery</h1>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container-main">
          <div className="gallery-pro-grid">
            {galleryImages.map((image, idx) => (
              <div key={idx} className="gallery-pro-card">
                <Image 
                   src={image.src} 
                   alt={image.alt} 
                   width={700}
                   height={500}
                   style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
                   priority={idx < 2}
                />
              </div>
            ))}
          </div>
          <style jsx>{`
            .gallery-pro-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
              gap: 1.25rem;
            }
            .gallery-pro-card {
              border-radius: 16px;
              overflow: hidden;
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              aspect-ratio: 4 / 3;
              box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);
              transition: transform 0.25s ease, box-shadow 0.25s ease;
            }
            .gallery-pro-card:hover {
              transform: translateY(-3px);
              box-shadow: 0 14px 30px rgba(15, 23, 42, 0.12);
            }
            @media (max-width: 640px) {
              .gallery-pro-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
              }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
