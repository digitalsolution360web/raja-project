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
  { name: 'Industrial & Warehousing', img: '/1.webp' },
  { name: 'Residential High-Rise', img: '/2.webp' },
];

const steps = [
  { num: '01', title: 'Enquire', desc: 'Share your project dimensions, partition type and finish requirements via our form, email or WhatsApp.' },
  { num: '02', title: 'Specify', desc: 'Our technical team reviews your brief and recommends the correct profile system. Free sample dispatch available.' },
  { num: '03', title: 'Quote & Confirm', desc: 'Receive a detailed itemised quotation within 24 hours. Flexible payment and credit terms for registered contractors.' },
  { num: '04', title: 'Supply & Support', desc: 'Profiles dispatched to site with complete installation hardware. Technical support throughout your installation.' },
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
        <div style={{ maxWidth: '750px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--gold)', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
            ✦ PREMIUM ALUMINIUM PROFILE SYSTEMS
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(15, 23, 42, 0.4)' }}>
            Premium Aluminium Profile Systems for Modern Interiors
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '650px' }}>
            Manufacturer &amp; Supplier of Demountable Glass Partition Profiles — Single Glaze, Double Glaze, Acoustic Systems, and Custom Extrusions. Serving Architects, Contractors and Developers Across India.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/products" className="btn-gold">Explore Our Products →</Link>
            <Link href="/contact" className="btn-outline-white">Get a Free Quote →</Link>
          </div>
        </div>
      </div>
      {/* Arrows */}
      <button onClick={prev} style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '48px', height: '48px', color: 'white', cursor: 'pointer', fontSize: '1.5rem', backdropFilter: 'blur(5px)' }}>‹</button>
      <button onClick={next} style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '48px', height: '48px', color: 'white', cursor: 'pointer', fontSize: '1.5rem', backdropFilter: 'blur(5px)' }}>›</button>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroSlider />

      <div className="trust-bar" style={{ color: 'white', textAlign: 'center', padding: '1.25rem', background: 'var(--navy)', fontSize: '0.85rem', fontWeight: 600 }}>
        ✓ Trusted by 500+ Projects &nbsp;·&nbsp; PAN India Supply &nbsp;·&nbsp; Airoli, Navi Mumbai Office &nbsp;·&nbsp; ✓ WhatsApp Enquiries Welcome &nbsp;·&nbsp; 24-Hour Response
      </div>

      {/* STATS SECTION */}
      <section style={{ background: 'var(--navy)', padding: '5rem 0' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1rem', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold)', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', marginTop: '0.75rem', marginBottom: '0.25rem' }}>{stat.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY NEW SECTION 1: ALUMINUM DOOR FRAME */}
      <section style={{ padding: '6rem 0', background: '#ffffff' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mid)', fontWeight: 600 }}>Featured Systems</h2>
            <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.75rem)', fontWeight: 900, color: 'var(--navy)' }}>1. AEROSPACE Aluminum Door Frame</h3>
            <div className="gold-bar" style={{ margin: '1.5rem auto' }} />
          </div>
          <div className="responsive-spec-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(300px, 1fr)', gap: '0', background: '#F8FAFC', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.1)' }}>
             <div style={{ position: 'relative', height: '600px' }}>
                <Image src="/111.jpeg" alt="Aerospace Door Frame" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem', background: 'linear-gradient(to top, rgba(15,23,42,1), transparent)', color: 'white' }}>
                   <p style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-light)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>FLAGSHIP SERIES</p>
                   <h4 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Aerospace Glass Partition Aluminum Door Frame</h4>
                </div>
             </div>
             <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '1px', background: 'var(--silver-dark)' }}>
                {[
                  { src: '/122.jpeg', label: 'Aerospace Glass Partition System Slim Line Door Frame 45x50 Mm (Black Finish) 2500mm' },
                  { src: '/124.jpeg', label: 'Aerospace Glass Partition System Style Door Fix 35x60mm (Black Finish) 2500mm' },
                  { src: '/126.jpeg', label: 'Aerospace Glass Partition Style Door Male Female Profile 35x60mm (Black Finish) 1800mm' }
                ].map((item, i) => (
                  <div key={i} style={{ background: '#ffffff', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '100px', height: '100px', position: 'relative', flexShrink: 0 }}>
                      <Image src={item.src} alt="Profile" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.4 }}>{item.label}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* MY NEW SECTION 2: DOUBLE GLAZED */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mid)', fontWeight: 600 }}>Architectural Series</h2>
            <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.75rem)', fontWeight: 900, color: 'var(--navy)' }}>2. Double Glazed Partition</h3>
            <div className="gold-bar" style={{ margin: '1.5rem auto' }} />
          </div>
          <div className="responsive-spec-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '0', background: '#ffffff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.1)' }}>
             <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1px', background: 'var(--silver-dark)' }}>
                {[
                  { src: '/dg1 (3).jpeg', label: 'AEROSPACE Glass Partition System Slim Line Fix 25x45mm (Black Finish) 2500mm' },
                  { src: '/dg1 (1).jpeg', label: 'AEROSPACE Glass Partition System Slim Line Male Female 25x45mm (Black Finish) 2500mm' }
                ].map((item, i) => (
                  <div key={i} style={{ background: '#ffffff', padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '140px', height: '140px', position: 'relative', flexShrink: 0 }}>
                      <Image src={item.src} alt="DG Profile" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{item.label}</p>
                      {i === 1 && <p style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>AEROSPACE Glass Partition System Slim Line Door Frame 45x50 Mm (Black Finish) 2500mm</p>}
                    </div>
                  </div>
                ))}
             </div>
             <div style={{ position: 'relative', height: '600px' }}>
                <Image src="/dg1 (2).jpeg" alt="Double Glazed Main" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '40px', right: '40px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(15,23,42,0.1)' }}>
                  <p style={{ fontWeight: 900, color: 'var(--navy)', fontSize: '0.95rem' }}>Acoustic Rating: 52dB</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-mid)', marginTop: '0.2rem' }}>Premium Demountable Profile</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* MY NEW SECTION 3: GRID PARTITION */}
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
                  <div key={i} style={{ background: '#ffffff', padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '60px', height: '60px', position: 'relative', flexShrink: 0 }}>
                      <Image src={item.img} alt="GP Profile" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--navy)' }}>{item.label}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* MY NEW SECTION 4: SINGLE GLAZE */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-mid)', fontWeight: 600 }}>Minimalist Series</h2>
            <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.75rem)', fontWeight: 900, color: 'var(--navy)' }}>4. Single Glaze 25 X25 Partition</h3>
            <div className="gold-bar" style={{ margin: '1.5rem auto' }} />
          </div>
          <div className="responsive-spec-row" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0', background: '#ffffff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.1)' }}>
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
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy)' }}>{spec}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (RESTORED) */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">The Aluminium Profile Partner Built for Pros</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {differentiators.map((item, i) => (
              <div key={i} className="card-glass" style={{ padding: '3rem', background: '#f8fafc', borderRadius: '24px', transition: 'all 0.3s' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--navy)', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION (RESTORED Zig-Zag) */}
      <section className="section-padding section-silver">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">High-Performance Sliding & Glass Solutions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Architectural excellence for commercial and residential spaces.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {/* Commercial */}
            <div className="zigzag-row">
              <div className="zigzag-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}>
                <Image src="/commercial-solutions.png" alt="Commercial" width={700} height={500} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--navy)', marginBottom: '1.5rem' }}>Commercial Partition Solutions</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Specializing in high-performance commercial sliding systems designed for modern workspaces. Whether it's a sleek office partition or a heavy-duty sliding door, our solutions provide superior durability and acoustic excellence.
                </p>
                <Link href="/contact" className="btn-gold">Request Commercial Quote</Link>
              </div>
            </div>

            {/* Residential */}
            <div className="zigzag-row" style={{ direction: 'rtl' }}>
              <div className="zigzag-image" style={{ direction: 'ltr', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}>
                <Image src="/residential-solutions.png" alt="Residential" width={700} height={500} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div style={{ direction: 'ltr', padding: '1rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--navy)', marginBottom: '1.5rem' }}>Residential Glass Works</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                  Enhance your home with elegant aluminium sliding windows and glass partitions. Maximize natural light and sophistication in your living space.
                </p>
                <p style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Book an expert consultation today!</p>
                <a href="tel:+918854935836" className="btn-phone" style={{ width: 'fit-content' }}>+91 8854935836</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID (RESTORED - 8 items in 4 columns) */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">Built for Every Environment</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {industries.map((ind, i) => (
              <div key={i} className="hover-scale" style={{ position: 'relative', height: '260px', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer' }}>
                <Image src={ind.img} alt={ind.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent, rgba(15,23,42,0.85))', display: 'flex', alignItems: 'flex-end', padding: '1.5rem' }}>
                  <h4 style={{ color: 'white', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.02em' }}>{ind.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS (RESTORED) */}
      <section className="section-padding" style={{ background: 'var(--navy)' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title" style={{ color: 'white' }}>Enquiry to Installation in 4 Steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ padding: '3rem 2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--gold)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.3rem', margin: '0 auto 1.5rem' }}>{step.num}</div>
                <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* FEATURED PROJECTS SHOWCASE (RESTORED WITH ZOOM EFFECT) */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">Featured Project Showcase</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Premium aluminium and glass installations across India.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { img: '/h1.jpeg', title: 'Premium Office Partition' },
              { img: '/h2.jpeg', title: 'Luxury Retail Glass' },
              { img: '/h3.jpeg', title: 'Modern Commercial System' },
              { img: '/h4.jpeg', title: 'Acoustic Workspace Solution' },
              { img: '/03 (3).jpeg', title: 'Single Glaze System' },
              { img: '/03 (1).jpeg', title: 'Double Glaze System' },
              { img: '/03 (4).jpeg', title: 'Demountable System' },
              { img: '/04.jpeg', title: 'Frameless Glass System' }
            ].map((proj, i) => (
              <div key={i} className="hover-scale" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <Image src={proj.img} alt={proj.title} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent, rgba(15,23,42,0.8))', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
                  <span style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.15em' }}>{proj.title.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BAND (RESTORED Premium Style) */}
      <section style={{ background: '#F8FAFC', padding: '6rem 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(185, 28, 28, 0.04)', pointerEvents: 'none' }} />
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--navy)', fontWeight: 950, marginBottom: '1.5rem' }}>Ready to Specify? Get a Quotation.</h2>
          <p style={{ color: 'var(--text-mid)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 3.5rem', lineHeight: 1.8 }}>
            Our technical team is ready to provide precise recommendations and detailed itemised quotations for your next partition project within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold">Get a Free Quote →</Link>
            <a href="tel:+918854935836" className="btn-outline-navy">Call +91 8854935836</a>
            <a href="https://wa.me/918854935836" className="btn-outline-navy">WhatsApp Enquiries</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-slider { position: relative; height: 90vh; overflow: hidden; }
        .hero-slide { position: absolute; inset: 0; transition: opacity 1.2s ease-in-out; }
        .hero-overlay { position: absolute; inset: 0; background: rgba(15,23,42,0.45); }
        .hero-content { position: absolute; inset: 0; display: flex; alignItems: center; padding: 0 10%; z-index: 5; }
        .hover-scale { transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .hover-scale:hover { transform: scale(1.08); }
        .zigzag-row { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; alignItems: center; }
        @media (max-width: 1024px) {
           .zigzag-row { grid-template-columns: 1fr; gap: 3rem; }
           .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
