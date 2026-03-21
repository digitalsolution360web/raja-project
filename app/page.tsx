'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TestimonialSlider from './components/TestimonialSlider';

const heroSlides = [
  { src: '/1.webp', alt: 'Premium Glass Partition System' },
  { src: '/2.webp', alt: 'Modern Aluminium Profile Solutions' },
  { src: '/3.webp', alt: 'High-End Office Partitioning' },
  { src: '/4.webp', alt: 'Acoustic Glass Wall Systems' },
  { src: '/5.webp', alt: 'Precision Aluminium Extrusions' },
  { src: '/6.webp', alt: 'Bespoke Partition Hardware' },
];

const stats = [
  { value: '500+', label: 'Projects Delivered', sub: 'Residential, Commercial & Institutional' },
  { value: '20+', label: 'Product SKUs', sub: 'Profiles, Systems & Accessories' },
  { value: '50+', label: 'Cities Served', sub: 'Pan India Supply Network' },
  { value: '10+', label: 'Years in Business', sub: 'Established Expertise' },
  { value: '2', label: 'Office Locations', sub: 'Mindspace Airoli East · Navi Mumbai' },
];

const differentiators = [
  { icon: '🎯', title: 'Precision Manufacturing', desc: 'Profiles extruded to tight dimensional tolerances — consistent fit and finish on every installation.' },
  { icon: '📐', title: 'Wide Profile Range', desc: 'From slim 25×25 dividers to heavy-duty 25×100 double-glazed systems — one supplier for your entire project.' },
  { icon: '🎨', title: 'Multiple Finishes', desc: 'Anodised Silver, Powder Coated (RAL range), Champagne, Matt Black, Bronze — match any interior specification.' },
  { icon: '🔇', title: 'Acoustic Performance', desc: 'RJ-100 double-glaze system rated up to 52dB — ideal for executive offices, boardrooms and healthcare.' },
  { icon: '🚚', title: 'PAN India Supply', desc: 'Manufacturing in Navi Mumbai (Airoli) & supply hub — fast dispatch to all major metros.' },
  { icon: '📞', title: 'Full Technical Support', desc: 'CAD drawings, installation guides, site visit support and responsive WhatsApp service throughout.' },
];

const industries = [
  { name: 'Corporate Offices', img: '/1.webp' },
  { name: 'Healthcare & Hospitals', img: '/2.webp' },
  { name: 'Retail & Showrooms', img: '/3.webp' },
  { name: 'Hospitality & Hotels', img: '/4.webp' },
  { name: 'Educational Institutions', img: '/5.webp' },
  { name: 'Government & PSU', img: '/6.webp' },
];

const steps = [
  { num: '01', title: 'Enquire', desc: 'Share your dimensions and requirements.' },
  { num: '02', title: 'Specify', desc: 'Our team recommends the correct profile system.' },
  { num: '03', title: 'Quote', desc: 'Detailed quotation within 24 hours.' },
  { num: '04', title: 'Supply', desc: 'Profiles dispatched with hardware.' },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const total = heroSlides.length;
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = () => setCurrent(c => (c - 1 + total) % total);
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="hero-slider">
      {heroSlides.map((slide, i) => (
        <div key={slide.src} className="hero-slide" style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}>
          <Image src={slide.src} alt={slide.alt} fill style={{ objectFit: 'cover' }} priority={i === 0} />
        </div>
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <div style={{ maxWidth: '700px' }}>
          <div style={{ display: 'inline-flex', background: 'var(--gold)', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            ✦ PREMIUM ALUMINIUM SYSTEMS
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1.5rem' }}>
            Aluminium Profile Systems for Modern Interiors
          </h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/products" className="btn-gold">Our Products →</Link>
            <Link href="/contact" className="btn-outline-white">Free Quote →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroSlider />

      <div className="trust-bar" style={{ color: 'white', textAlign: 'center', padding: '1rem', background: 'var(--navy)', fontSize: '0.85rem' }}>
        ✓ Trusted by 500+ Projects &nbsp;·&nbsp; PAN India Supply &nbsp;·&nbsp; 24-Hour Response
      </div>

      {/* SECTION 1 */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">1. AEROSPACE Glass Partition Aluminum Door Frame</h2>
            <div className="gold-bar" style={{ margin: '0 auto' }} />
          </div>
          <div className="responsive-spec-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem' }}>
             <div className="premium-feature-card" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <Image src="/111.jpeg" alt="Assembly" width={600} height={400} className="w-full h-auto" />
             </div>
             <div className="responsive-spec-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {[
                  { src: '/122.jpeg', t: 'Slim Line Door Frame', s: '45x50mm' },
                  { src: '/124.jpeg', t: 'Style Door Fix', s: '35x60mm' },
                  { src: '/126.jpeg', t: 'Male Female Profile', s: '35x60mm' }
                ].map((img, i) => (
                  <div key={i} className="premium-profile-card" style={{ background: '#f8fafc', padding: '10px', borderRadius: '16px' }}>
                    <div style={{ position: 'relative', height: '180px' }}>
                      <Image src={img.src} alt={img.t} fill style={{ objectFit: 'contain' }} />
                    </div>
                    <p style={{ textAlign: 'center', fontWeight: 700, fontSize: '0.85rem', marginTop: '10px' }}>{img.t}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">2. Double Glazed Partition</h2>
            <div className="gold-bar" style={{ margin: '0 auto' }} />
          </div>
          <div className="responsive-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>
             <div className="premium-main-card" style={{ borderRadius: '24px', overflow: 'hidden', height: '500px', position: 'relative' }}>
                <Image src="/dg1 (2).jpeg" alt="DG" fill style={{ objectFit: 'cover' }} />
             </div>
             <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1rem' }}>
                {['/dg1 (3).jpeg', '/dg1 (1).jpeg'].map((src, i) => (
                  <div key={i} style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', background: '#fff', border: '1px solid #e2e8f0', padding: '10px' }}>
                    <div style={{ position: 'relative', height: '100%' }}>
                      <Image src={src} alt="Detail" fill style={{ objectFit: 'contain' }} />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">3. Grid Partition 24 X 45</h2>
            <div className="gold-bar" style={{ margin: '0 auto' }} />
          </div>
          <div style={{ marginBottom: '1.5rem', borderRadius: '24px', overflow: 'hidden', height: '400px', position: 'relative' }}>
            <Image src="/121.jpeg" alt="Grid Main" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="responsive-spec-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {['/gp1 (1).jpeg', '/gp1 (2).jpeg', '/gp1 (3).jpeg'].map((src, i) => (
              <div key={i} style={{ height: '350px', position: 'relative', borderRadius: '20px', overflow: 'hidden', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <Image src={src} alt="Grid Detail" fill style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">4. Single Glaze 25 X25 Partition</h2>
            <div className="gold-bar" style={{ margin: '0 auto' }} />
          </div>
          <div style={{ marginBottom: '1.5rem', borderRadius: '24px', overflow: 'hidden', height: '400px', position: 'relative' }}>
            <Image src="/hm1 (1).jpeg" alt="Single Main" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="responsive-spec-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {['/sg1 (1).jpeg', '/sg1 (2).jpeg', '/sg1 (3).jpeg'].map((src, i) => (
              <div key={i} style={{ height: '350px', position: 'relative', borderRadius: '20px', overflow: 'hidden', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <Image src={src} alt="Single Detail" fill style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Why Choose Aerospace Profiles?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {differentiators.map((d, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid #f1f5f9', borderRadius: '16px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{d.icon}</div>
                <h3 style={{ fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>{d.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section style={{ padding: '4rem 0', background: '#f1f5f9' }}>
        <div className="container-main">
          <div className="zigzag-row">
            <div className="zigzag-image">
              <Image src="/commercial-solutions.png" alt="Commercial" width={600} height={400} style={{ borderRadius: '20px' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--navy)', marginBottom: '1rem' }}>Commercial Solutions</h3>
              <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>High-performance office partitions and sliding systems.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Expertise in modern workspaces</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Toughened safety glass</li>
              </ul>
              <a href="tel:+918854935836" className="btn-phone" style={{ display: 'inline-block', marginTop: '1rem' }}>Call +91 8854935836</a>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Built for Every Environment</h2>
          </div>
          <div className="industries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {industries.map((ind, i) => (
              <div key={i} style={{ position: 'relative', height: '200px', borderRadius: '12px', overflow: 'hidden' }}>
                <Image src={ind.img} alt={ind.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <h3 style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem', textAlign: 'center', padding: '10px' }}>{ind.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0', background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container-main">
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to Specify? Get a Quotation.</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold">Get a Quote</Link>
            <a href="https://wa.me/918854935836" className="btn-outline-white">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-slider { position: relative; height: 85vh; overflow: hidden; }
        .hero-slide { position: absolute; inset: 0; transition: opacity 1s ease; }
        .hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); }
        .hero-content { position: absolute; inset: 0; display: flex; alignItems: center; padding: 0 10%; z-index: 5; }
        
        @media (max-width: 768px) {
          .responsive-spec-grid { grid-template-columns: 1fr !important; }
          .responsive-detail-grid { grid-template-columns: 1fr !important; }
          .zigzag-row { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
