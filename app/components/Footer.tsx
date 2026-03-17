import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#f8fafc', color: 'var(--navy)', paddingTop: '4rem', borderTop: '4px solid var(--gold)' }}>
      <div className="container-main" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', paddingBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}>
              <div style={{ position: 'relative', height: '60px', width: '210px' }}>
                <Image 
                  src="/logoo.png" 
                  alt="Company Logo" 
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                />
              </div>
            </Link>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Manufacturer &amp; Supplier of Demountable Glass Partition Profiles. Serving architects, contractors and developers across India.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background 0.2s', fontSize: '1rem' }}>💬</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background 0.2s', fontSize: '1rem' }}>👤</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background 0.2s', fontSize: '1rem' }}>📸</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                ['Home', '/'],
                ['Products', '/products'],
                ['Partition Systems', '/systems'],
                ['Industries', '/industries'],
                ['Gallery', '/gallery'],
                ['About Us', '/about'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} style={{ color: 'var(--navy)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>▶</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Products</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                '25×45 Single Glaze Profile',
                '25×25 Slim Profile',
                '25×100 Single Glazing',
                '25×100 Double Glazing',
                'RJ-100 Acoustic (52dB)',
                'Frameless Glass System',
                'Accessories & Hardware',
              ].map(item => (
                <li key={item} style={{ color: 'var(--navy)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>▶</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div>
                <div style={{ color: 'var(--gold-dark)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>🏢 Bikaner HQ</div>
                <div style={{ color: 'var(--text-mid)', fontSize: '0.875rem', lineHeight: 1.5 }}>Bikaner, Rajasthan<br />Manufacturing + Warehouse</div>
              </div>
              <div>
                <div style={{ color: 'var(--gold-dark)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>🏢 Navi Mumbai</div>
                <div style={{ color: 'var(--text-mid)', fontSize: '0.875rem', lineHeight: 1.5 }}>Aroli Naka, Navi Mumbai<br />Supply Hub</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>💬 WhatsApp Enquiries Welcome</div>
                <div style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>📦 PAN India Supply</div>
                <div style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>⏱ 24-Hour Quotation Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '1.5rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
          <p style={{ color: 'var(--text-light)', fontSize: '0.83rem' }}>
            © 2026 Raja Aluminium Profile. All rights reserved. GST Registered Entity.
          </p>
          <p style={{ color: 'var(--text-light)', fontSize: '0.83rem' }}>
            Bikaner, Rajasthan &middot; Navi Mumbai, Maharashtra &middot; PAN India Supply
          </p>
        </div>
      </div>
    </footer>
  );
}
