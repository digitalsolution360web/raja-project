'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const faq = [
  { q: 'What glass thickness is compatible with the 25×45 profile?', a: 'The 25×45 profile is designed for 10mm and 12mm glass. For 8mm glass, use the 25×25 slimline system. For 15mm and above, specify the 25×100 structural system.' },
  { q: 'Are your profiles available in custom lengths?', a: 'Yes. Standard lengths are 3m and 6m. Custom lengths up to 7.5m are available on minimum order quantities. Contact our technical team to discuss your requirements.' },
  { q: 'Can your partition systems be demounted and reinstalled?', a: 'All our partition systems (except the frameless bonded system) are fully demountable. Components are numbered and can be reinstalled in a different layout without replacement.' },
  { q: 'What acoustic performance can I expect from the RJ-100 system?', a: 'The RJ-100 system achieves up to 52dB Rw when specified with acoustic laminated glass (8.8mm + 12mm cavity + 8.8mm). For comparison, a standard conversation at 3m is approximately 60dB.' },
  { q: 'Do you supply to other states beyond Rajasthan and Maharashtra?', a: 'Yes — we supply PAN India via our logistics network. Typical transit time is 3–5 working days for Gujarat, Delhi NCR and Madhya Pradesh.' },
  { q: 'Are your products GST compliant? Do you provide proper invoicing?', a: 'Yes. All our supplies are accompanied by proper GST-compliant tax invoices. We are a registered GST entity and can supply to companies requiring formal procurement documentation.' },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-main">
          <div className="gold-bar" />
          <h1 className="section-title-white" style={{ marginBottom: '1.5rem' }}>Built on Precision. Trusted by Professionals.</h1>
          <p className="section-subtitle-white" style={{ maxWidth: '800px' }}>
            Aerospace Aluminium Alloys was founded with a single purpose: to supply India's architecture and construction industry with aluminium partition profiles that meet the highest standards of dimensional accuracy and durability.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div className="zigzag-row">
            <div className="zigzag-image">
              <Image src="/4.webp" alt="Manufacturing Precision" fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <h2 className="section-title">Our Story</h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Established with a focus on engineering quality, Aerospace Aluminium Alloys began as a specialist supplier to contractors who needed reliable, high-quality profiles at competitive pricing.
              </p>
              <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Our Airoli (Navi Mumbai) facility is equipped with precision extrusion capability, enabling us to maintain tight dimensional tolerances across every batch. Our supply operations serve Maharashtra and the western seaboard, ensuring fast lead times.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--gold-dark)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Headquarters</h4>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Airoli, Navi Mumbai</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--gold-dark)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Supply Hub</h4>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Airoli, Navi Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Table */}
      <section className="section-padding section-silver">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Key Facts &amp; Credentials</h2>
          </div>
          <div className="card-glass" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="spec-table">
              <tbody>
                <tr>
                  <td style={{ fontWeight: 700, background: 'var(--navy)', color: 'white', width: '30%' }}>GST Registered</td>
                  <td>GST-compliant supply with full documentation for all orders</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700, background: 'var(--navy)', color: 'white' }}>Product Range</td>
                  <td>25+ profile SKUs across single glaze, double glaze, acoustic and accessories</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700, background: 'var(--navy)', color: 'white' }}>Supply Reach</td>
                  <td>PAN India — regular supply to Rajasthan, Maharashtra, Gujarat, Delhi NCR, MP</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700, background: 'var(--navy)', color: 'white' }}>Technical Support</td>
                  <td>CAD drawings, installation guides, site visits for qualifying projects</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700, background: 'var(--navy)', color: 'white' }}>Finishes Available</td>
                  <td>Mill Finish, Anodised (Silver, Champagne, Bronze), Powder Coat (Full RAL range)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card-glass">
              <h3 style={{ color: 'var(--gold-dark)', marginBottom: '1rem' }}>01 / Precision First</h3>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.7 }}>Every extrusion is checked to dimensional tolerances before dispatch. We do not ship profiles that don't meet specification.</p>
            </div>
            <div className="card-glass">
              <h3 style={{ color: 'var(--gold-dark)', marginBottom: '1rem' }}>02 / Relationships over Transactions</h3>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.7 }}>We earn repeat business through consistent quality and technical support that doesn't end when the invoice is paid.</p>
            </div>
            <div className="card-glass">
              <h3 style={{ color: 'var(--gold-dark)', marginBottom: '1rem' }}>03 / Continuous Improvement</h3>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.7 }}>We regularly introduce new profiles and finishes in response to market demands. If a product doesn't exist, we'll develop it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-silver">
        <div className="container-main" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faq.map((item, i) => (
              <div key={i} className="faq-item" style={{ background: 'white', borderRadius: '8px', padding: '0 1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  {item.q}
                  <span style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.35s', fontSize: '1.5rem', color: 'var(--gold)' }}>+</span>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <div className="faq-answer-inner">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container-main">
          <h2 className="section-title-white" style={{ marginBottom: '1rem' }}>Experience Aerospace Precision</h2>
          <p className="section-subtitle-white" style={{ margin: '0 auto 2.5rem' }}>Download our company profile or request a sample pack today.</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
             <Link href="/contact" className="btn-gold">Request Sample Pack</Link>
             <Link href="/products" className="btn-outline-white">View Full Catalogue</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
