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

      {/* SECTION 1: ALUMINUM DOOR FRAME SERIES */}
      <section style={{ padding: '6rem 0', background: '#ffffff' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mid)', fontWeight: 600 }}>Featured Systems</h2>
            <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.75rem)', fontWeight: 900, color: 'var(--navy)' }}>1. AEROSPACE Aluminum Door Frame</h3>
            <div className="gold-bar" style={{ margin: '1.5rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0', background: '#F8FAFC', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.1)' }}>
             <div style={{ position: 'relative', height: '600px' }}>
                <Image src="/111.jpeg" alt="Aerospace Door Frame Assembly" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem', background: 'linear-gradient(to top, rgba(15,23,42,0.95), transparent)', color: 'white' }}>
                   <p style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-light)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>FLAGSHIP SERIES</p>
                   <h4 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Aerospace Glass Partition Aluminum Door Frame</h4>
                </div>
             </div>
             <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '1px', background: 'var(--silver-dark)' }}>
                {[
                  { src: '/122.jpeg', label: 'Aerospace Glass Partition System Slim Line Door Frame 45x50 Mm (Black Finish) 2500mm' },
                  { src: '/124.jpeg', label: 'Aerospace Glass Partition System Style Door Fix 35x60mm (Black Finish) 2500mm' },
                  { src: '/126.jpeg', label: 'Aerospace Glass Partition Style Door Male Female Profile 35x60mm (Black Finish) 1800mm' }
                ].map((item, i) => (
                  <div key={i} style={{ background: '#ffffff', position: 'relative', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '100px', height: '100px', position: 'relative', flexShrink: 0 }}>
                      <Image src={item.src} alt="Profile" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.4 }}>{item.label}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DOUBLE GLAZED SERIES */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mid)', fontWeight: 600 }}>Architectural Series</h2>
            <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.75rem)', fontWeight: 900, color: 'var(--navy)' }}>2. Double Glazed Partition</h3>
            <div className="gold-bar" style={{ margin: '1.5rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '0', background: '#ffffff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.1)' }}>
             <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1px', background: 'var(--silver-dark)' }}>
                {[
                  { src: '/dg1 (3).jpeg', label: 'AEROSPACE Glass Partition System Slim Line Fix 25x45mm (Black Finish) 2500mm' },
                  { src: '/dg1 (1).jpeg', label: 'AEROSPACE Glass Partition System Slim Line Male Female 25x45mm (Black Finish) 2500mm' }
                ].map((item, i) => (
                  <div key={i} style={{ background: '#ffffff', position: 'relative', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '140px', height: '140px', position: 'relative', flexShrink: 0 }}>
                      <Image src={item.src} alt="DG Profile" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>{item.label}</p>
                      {i === 1 && <p style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>AEROSPACE Glass Partition System Slim Line Door Frame 45x50 Mm (Black Finish) 2500mm</p>}
                    </div>
                  </div>
                ))}
             </div>
             <div style={{ position: 'relative', height: '600px' }}>
                <Image src="/dg1 (2).jpeg" alt="Double Glazed Main" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '40px', right: '40px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(15,23,42,0.1)' }}>
                  <p style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '0.9rem' }}>Acoustic Rating: 52dB</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-mid)' }}>Demountable Double Glazed Profile</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GRID PARTITION SERIES */}
      <section style={{ padding: '6rem 0', background: '#ffffff' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mid)', fontWeight: 600 }}>Grid Series</h2>
            <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.75rem)', fontWeight: 900, color: 'var(--navy)' }}>3. Grid Partition 24 X 45</h3>
            <div className="gold-bar" style={{ margin: '1.5rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '450px auto', gap: '0', background: '#F8FAFC', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.1)' }}>
             <div style={{ position: 'relative' }}>
                <Image src="/121.jpeg" alt="Grid Partition Main" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.2)' }} />
             </div>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'var(--silver-dark)' }}>
                {[
                  { label: 'AEROSPACE Glass Partition System Slim Line Fix 25x45mm (Black Finish) 2500mm', img: '/gp1 (1).jpeg' },
                  { label: 'AEROSPACE Glass Partition System Slim Line Male Female 25x45mm (Black Finish) 2500mm', img: '/gp1 (2).jpeg' },
                  { label: 'AEROSPACE Glass Partition System Slim Line Door Frame 45x50 Mm (Black Finish) 2500mm', img: '/gp1 (3).jpeg' }
                ].map((item, i) => (
                  <div key={i} style={{ background: '#ffffff', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '60px', height: '60px', position: 'relative', flexShrink: 0 }}>
                      <Image src={item.img} alt="Unique Component Profile" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)' }}>{item.label}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SINGLE GLAZE SERIES */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mid)', fontWeight: 600 }}>Minimalist Series</h2>
            <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.75rem)', fontWeight: 900, color: 'var(--navy)' }}>4. Single Glaze 25 X25 Partition</h3>
            <div className="gold-bar" style={{ margin: '1.5rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0', background: '#ffffff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.1)' }}>
             <div style={{ position: 'relative', height: '500px' }}>
                <Image src="/hm1 (1).jpeg" alt="Single Glaze Main" fill style={{ objectFit: 'cover' }} />
             </div>
             <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '1px', background: 'var(--silver-dark)' }}>
                {[
                  'AEROSPACE Glass Partition System Slim Line Fix 25x45mm (Black Finish) 2500mm',
                  'AEROSPACE Glass Partition System Slim Line Male Female 25x45mm (Black Finish) 2500mm',
                  'AEROSPACE Glass Partition System Slim Line Door Frame 45x50 Mm (Black Finish) 2500mm'
                ].map((spec, i) => (
                  <div key={i} style={{ background: '#ffffff', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '80px', height: '80px', position: 'relative', flexShrink: 0 }}>
                      <Image src={`/sg1 (${i + 1}).jpeg`} alt="Spec" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)' }}>{spec}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>


      <TestimonialSlider />


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
