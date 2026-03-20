'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const products = [
  { sku: 'RAP-AC-123', name: 'Acoustic Double Glaze System', desc: 'Premium sound-insulated system for sensitive office environments and boardrooms. Up to 52dB rating.', img: '/123.jpg', tag: 'Acoustic' },
  { sku: 'RAP-FL-124', name: 'Frameless Glass Series', desc: 'Minimalist frameless design with slim floor tracks for luxury retail showrooms and modern office partitions.', img: '/124.jpg', tag: 'Frameless' },
  { sku: 'RAP-EX-125', name: 'Premium Office Enclosure', desc: 'Top-tier executive workspace solution with multiple finish options and high structural integrity.', img: '/125.jpg', tag: 'Suite' },
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

const testimonials = [
  { text: 'The 25×45 slimline profiles were exactly what we needed for a premium corporate fit-out in Mumbai. Consistent quality, on-time delivery and excellent after-sales support.', author: 'Interior Designer, Mumbai' },
  { text: "We've been specifying these profiles on all our commercial projects for the past three years. The double-glazed system performs exactly as rated — clients love the acoustic results.", author: 'Architect, Delhi' },
  { text: 'Competitive pricing, wide finish range and reliable dispatch from their Navi Mumbai office made them our preferred aluminium profile supplier for North and West India.', author: 'Contractor, Jaipur' },
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
          <Image src={slide.src} alt={slide.alt} fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority={i === 0} />
        </div>
      ))}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div style={{ maxWidth: '700px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--gold)', color: 'var(--white)', padding: '0.35rem 0.875rem', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            ✦ Premium Aluminium Profile Systems
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.25rem', textShadow: '0 4px 20px rgba(15, 23, 42, 0.4)' }}>
            Premium Aluminium Profile Systems for Modern Interiors
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '600px' }}>
            Manufacturer &amp; Supplier of Demountable Glass Partition Profiles — Single Glaze, Double Glaze, Acoustic Systems, and Custom Extrusions. Serving Architects, Contractors and Developers Across India.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/products" className="btn-gold">Explore Our Products →</Link>
            <Link href="/contact" className="btn-outline-white">Get a Free Quote →</Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} aria-label="Previous slide" style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', width: '48px', height: '48px', color: 'white', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}>‹</button>
      <button onClick={next} aria-label="Next slide" style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', width: '48px', height: '48px', color: 'white', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}>›</button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: '0.5rem' }}>
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`} style={{ width: i === current ? '32px' : '10px', height: '10px', borderRadius: '5px', background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.35s ease', padding: 0 }} />
        ))}
      </div>
    </div>
  );
}

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = () => setCurrent(c => (c - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', padding: '1rem' }}>
      <div style={{
        display: 'flex',
        transition: 'transform 0.5s ease',
        transform: `translateX(-${current * 100}%)`
      }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ minWidth: '100%', padding: '0 1rem' }}>
            <div className="testimonial-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 2.5rem' }}>
              <div style={{ fontSize: '3.5rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '0.5rem' }}>&ldquo;</div>
              <p style={{ color: 'var(--text-mid)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic' }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontWeight: 800, fontSize: '1.1rem' }}>★</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--navy)', letterSpacing: '0.01em' }}>{t.author}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--gold)', marginTop: '2px' }}>★★★★★ Rating</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }}>
        <button onClick={prev} className="btn-outline-navy" style={{ padding: '0.75rem 1.25rem', borderRadius: '50px', cursor: 'pointer', border: '2px solid var(--navy)', background: 'transparent', color: 'var(--navy)', fontWeight: 700 }}>← Prev</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {testimonials.map((_, i) => (
            <div key={i} onClick={() => setCurrent(i)} style={{ width: '10px', height: '10px', borderRadius: '50%', background: i === current ? 'var(--primary)' : 'var(--silver-dark)', cursor: 'pointer', transition: 'all 0.3s' }} />
          ))}
        </div>
        <button onClick={next} className="btn-outline-navy" style={{ padding: '0.75rem 1.25rem', borderRadius: '50px', cursor: 'pointer', border: '2px solid var(--navy)', background: 'transparent', color: 'var(--navy)', fontWeight: 700 }}>Next →</button>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <HeroSlider />

      {/* TRUST BAR */}
      <div className="trust-bar " style={{ color: 'white' }}>
        ✓ Trusted by 500+ Projects &nbsp;·&nbsp; PAN India Supply &nbsp;·&nbsp; Airoli, Navi Mumbai Office &nbsp;·&nbsp; ✓ WhatsApp Enquiries Welcome &nbsp;·&nbsp; 24-Hour Quotation Response
      </div>

      {/* STATS */}
      <section style={{ background: 'var(--navy)', padding: '4rem 0' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem 1rem', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div className="stat-number">{stat.value}</div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginTop: '0.5rem', marginBottom: '0.25rem' }}>{stat.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS OVERVIEW */}
      <section className="section-padding section-silver">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">Our Partition Profile Range</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Engineered for performance, precision and aesthetics — available in standard sizes and custom extrusions to meet any architectural requirement.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '2.5rem' }}>
            {products.map(p => (
              <div key={p.sku} className="product-card">
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '0.875rem', left: '0.875rem' }}>
                    <span className="product-badge">{p.tag}</span>
                  </div>
                </div>
                <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gold-dark)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem' }}>SKU: {p.sku}</div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.625rem', lineHeight: 1.3 }}>{p.name}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{p.desc}</p>
                  <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--gold-dark)', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none', marginTop: '1rem' }}>
                    View Specs →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/products" className="btn-navy">View Full Product Catalogue →</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">The Aluminium Profile Partner Built for Professional Projects</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {differentiators.map((item, i) => (
              <div key={i} className="card-glass">
                <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.625rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="section-padding section-silver">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">High-Performance Sliding & Glass Solutions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Premium aluminium and glass partition systems engineered for architectural excellence in both commercial and residential spaces.
            </p>
          </div>

          {/* Commercial */}
          <div className="zigzag-row">
            <div className="zigzag-image">
              <Image
                src="/commercial-solutions.png"
                alt="Commercial Aluminium Sliding & Glass Partition"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '1.25rem' }}>Commercial Aluminium Sliding & Glass Partition Solutions</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                At Mumbai Aluminium and Glass, we specialize in high-performance commercial sliding systems designed for modern workspaces. Whether it's a sleek office partition or a heavy-duty sliding door, our solutions provide superior durability, acoustic insulation, and aesthetic excellence.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem' }}>
                {[
                  { title: 'Expertise & Customization', desc: 'Tailored designs for offices, retail, and commercial buildings.' },
                  { title: 'Quality Products', desc: 'High-grade aluminium profiles and toughened safety glass.' },
                  { title: 'Timely Execution', desc: 'Reliable project timelines and streamlined installation.' },
                  { title: 'Professional Installation', desc: 'Precision fitting by our expert technicians.' }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.875rem', marginBottom: '0.875rem' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 900, fontSize: '1.1rem' }}>✓</span>
                    <div>
                      <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>{item.title}:</strong>
                      <span style={{ color: 'var(--text-mid)', marginLeft: '0.5rem' }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="tel:+918854935836" className="btn-phone" style={{ width: 'fit-content' }}>
                  <span className="phone-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span> +91 8854935836
                </a>
              </div>
            </div>
          </div>

          {/* Residential */}
          <div className="zigzag-row">
            <div className="order-2 lg:order-1">
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.25rem' }}>Residential Aluminum Sliding and Glass Partition Works</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Enhance your home with our elegant aluminium sliding windows and glass partitions. Designed to maximize natural light and space, our residential solutions offer a perfect blend of style and functionality. From balconies to room dividers, we bring a touch of sophistication to your living spaces.
              </p>
              <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Our systems are engineered for energy efficiency and security, ensuring your home remains comfortable and safe while looking stunning.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <a href="tel:+918854935836" className="btn-phone" style={{ width: 'fit-content' }}>
                  <span className="phone-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span> +91 8854935836
                </a>
                <p style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '1.1rem', letterSpacing: '0.02em' }}>Book an expert consultation today!</p>
              </div>
            </div>
            <div className="zigzag-image order-1 lg:order-2">
              <Image
                src="/residential-solutions.png"
                alt="Residential Aluminum Sliding & Glass Partition"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (min-width: 1025px) {
            .zigzag-row:last-of-type {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}</style>
      </section>

      {/* INDUSTRIES */}
      <section className="section-padding section-silver">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">Built for Every Built Environment</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Our partition systems are trusted by architects and contractors across every sector.</p>
          </div>

          <div className="industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className="industry-tile">
                <Image src={ind.img} alt={ind.name} fill style={{ objectFit: 'cover' }} />
                <div className="industry-tile-overlay">
                  <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.02em' }}>{ind.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
            .industries-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 1.5rem;
              margin-bottom: 2.5rem;
            }
            @media (max-width: 1024px) {
              .industries-grid { grid-template-columns: repeat(3, 1fr); }
            }
            @media (max-width: 768px) {
              .industries-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 480px) {
              .industries-grid { grid-template-columns: 1fr; }
            }
          `}</style>

          <div style={{ textAlign: 'center' }}>
            <Link href="/industries" className="btn-navy">See How We Serve Each Industry →</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding section-navy">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">From Enquiry to Installation-Ready Profiles in 4 Simple Steps</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', position: 'relative' }}>
            {steps.map((step, i) => (
              <div key={i} className="process-step" style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'var(--white)', borderRadius: '12px', border: '1px solid var(--silver-dark)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <div className="step-circle" style={{ background: 'var(--accent)', color: 'white' }}>{step.num}</div>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">What Architects &amp; Contractors Say</h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">Featured Project Showcase</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>A preview of our premium aluminium and glass partition installations across commercial and retail spaces.</p>
          </div>

          <div className="project-grid-pro">
            {[
              { img: '/h1.jpeg', title: 'Premium Office Partition' },
              { img: '/h2.jpeg', title: 'Luxury Retail Glass' },
              { img: '/h3.jpeg', title: 'Modern Commercial System' },
              { img: '/h4.jpeg', title: 'Acoustic Workspace Solution' }
              ,
              { img: '/hm1 (1).jpeg', title: 'Premium Office Partition' },
              { img: '/hm1 (2).jpeg', title: 'Modern Glass Room' },
              { img: '/hm1 (3).jpeg', title: 'Executive Cabin System' },
              { img: '/hm1 (4).jpeg', title: 'Luxury Glass Workspace' }
            ].map((proj, i) => (
              <div key={i} className="project-card-pro">
                <div className="project-img-wrapper">
                  <Image src={proj.img} alt={proj.title} fill style={{ objectFit: 'cover' }} />
                  <div className="project-overlay-pro">
                    <span style={{ fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>{proj.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
            .project-grid-pro {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 1.5rem;
            }
            .project-card-pro {
              position: relative;
              border-radius: 12px;
              overflow: hidden;
              aspect-ratio: 4/5;
              box-shadow: 0 10px 30px rgba(0,0,0,0.08);
              cursor: pointer;
            }
            .project-img-wrapper {
              position: relative;
              width: 100%;
              height: 100%;
              transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .project-card-pro:hover .project-img-wrapper {
              transform: scale(1.08);
            }
            .project-overlay-pro {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(transparent, rgba(15, 23, 42, 0.8));
              color: white;
              padding: 2rem 1.5rem 1.25rem;
              opacity: 0;
              transition: opacity 0.4s ease;
              display: flex;
              align-items: flex-end;
            }
            .project-card-pro:hover .project-overlay-pro {
              opacity: 1;
            }
            @media (max-width: 1024px) {
              .project-grid-pro { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 640px) {
              .project-grid-pro { grid-template-columns: 1fr; }
            }
          `}</style>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: '#F8FAFC', padding: '3rem 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--silver-dark)' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(185, 28, 28, 0.03)', pointerEvents: 'none' }} />
        <div className="container-main" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--navy)' }}>Ready to Specify? Get a Quotation in 24 Hours.</h2>
          <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', maxWidth: '600px', margin: '1rem auto 2.5rem', lineHeight: 1.7 }}>
            Submit your project requirements and our technical team will respond with product recommendations, a detailed quotation, and free sample dispatch where required.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold">▶ Get a Free Quote</Link>
            <a href="tel:+918854935836" className="btn-phone">
              <span className="phone-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span> +91 8854935836
            </a>
            <a href="https://wa.me/918854935836" target="_blank" rel="noopener noreferrer" className="btn-outline-navy">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
