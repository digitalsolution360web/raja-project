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
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>MINDSPACE AIROLI EAST</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                    Airoli, Navi Mumbai, Maharashtra<br />
                    Manufacturing + Supply Hub
                  </p>
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.85rem' }}>📧 aerospacealuminiumalloys@gmail.com</div>
                    <div style={{ fontSize: '0.85rem' }}>
                      <svg width="14" height="14" style={{ verticalAlign: 'middle', marginRight: '4px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      +91 8854935836
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>
                      📍 MINDSPACE AIROLI EAST, 4, opposite Airoli Railway Station, Airoli, Navi Mumbai<br />
                      Maharashtra 400708
                    </div>
                  </div>
                </div>
                {/* Old offices removed; updated company contact block inserted above. */}

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
           <p style={{ color: 'var(--text-mid)' }}>Serving Pan-India Metros.</p>
        </div>
      </section>
    </div>
  );
}
