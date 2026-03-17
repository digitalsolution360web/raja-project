'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-main">
          <div className="gold-bar" />
          <h1 className="section-title-white" style={{ marginBottom: '1.5rem' }}>Get in Touch — Quotations Within 24 Hours</h1>
          <p className="section-subtitle-white" style={{ maxWidth: '800px' }}>
            Whether you're an architect specifying for an upcoming project, a contractor who needs a bulk price or a developer planning a large-scale fit-out — our technical team is ready to help.
          </p>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            
            {/* Contact Form */}
            <div>
              <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Send an Enquiry</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-input" placeholder="Your Name" required />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-input" placeholder="Your Company" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Role</label>
                    <select className="form-select">
                      <option>Architect</option>
                      <option>Interior Designer</option>
                      <option>Contractor</option>
                      <option>Developer</option>
                      <option>End Client</option>
                      <option>Distributor</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input type="tel" className="form-input" placeholder="+91" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-input" placeholder="email@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Requirements</label>
                  <textarea className="form-textarea" placeholder="Describe your project, partition type, finish and approximate quantity..."></textarea>
                </div>

                <button type="submit" className="btn-navy" style={{ alignSelf: 'flex-start', border: 'none' }}>
                  Submit Enquiry
                </button>
              </form>
              <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                * Required fields. We will respond to your enquiry within 24 working hours.
              </p>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Our Offices</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div className="card-glass" style={{ borderLeft: '4px solid var(--gold)' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>RAJASTHAN HEADQUARTERS</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                    Bikaner, Rajasthan<br />
                    Manufacturing Hub &amp; Main Warehouse
                  </p>
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.85rem' }}>📧 info@rajaaluminium.com</div>
                    <div style={{ fontSize: '0.85rem' }}>📞 +91 [Number]</div>
                  </div>
                </div>

                <div className="card-glass" style={{ borderLeft: '4px solid var(--gold)' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>NAVI MUMBAI SUPPLY HUB</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                    Aroli Naka, Navi Mumbai<br />
                    Maharashtra Supply Center
                  </p>
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.85rem' }}>📧 mumbai@rajaaluminium.com</div>
                    <div style={{ fontSize: '0.85rem' }}>📞 +91 [Number]</div>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '1.25rem' }}>Connect With Us</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="https://wa.me/" className="btn-outline-white" style={{ borderColor: '#25D366', color: '#25D366', justifyContent: 'center' }}>
                      💬 WhatsApp (Fastest Response)
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                    <a href="#" style={{ width: '40px', height: '40px', background: 'var(--navy)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', textDecoration: 'none' }}>F</a>
                    <a href="#" style={{ width: '40px', height: '40px', background: 'var(--navy)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', textDecoration: 'none' }}>I</a>
                    <a href="#" style={{ width: '40px', height: '40px', background: 'var(--navy)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', textDecoration: 'none' }}>L</a>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--navy)', marginBottom: '0.25rem' }}>Business Hours</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Monday – Saturday: 10:00 AM – 7:00 PM</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', marginTop: '0.5rem' }}>WhatsApp support available for on-site technical queries during installation.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ height: '400px', background: 'var(--silver)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid var(--silver-dark)' }}>
        <div style={{ textAlign: 'center' }}>
           <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
           <h3 style={{ color: 'var(--navy)' }}>Interactive Map Coming Soon</h3>
           <p style={{ color: 'var(--text-mid)' }}>Serving Bikaner, Mumbai, Delhi, Ahmedabad and Pan-India Metros.</p>
        </div>
      </section>
    </div>
  );
}
