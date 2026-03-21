import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.7)', paddingTop: '5rem', borderTop: '4px solid var(--accent)' }}>
      <div className="container-main" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '4rem', paddingBottom: '4rem' }}>

          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Go to homepage"
              style={{ 
                textDecoration: 'none', 
                display: 'inline-block', 
                marginBottom: '1.5rem', 
                cursor: 'pointer',
                background: 'white',
                padding: '10px 15px',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
            >
              <div style={{ position: 'relative', height: '45px', width: '180px' }}>
                <Image 
                  src="/logooo.png" 
                  alt="Company Logo" 
                  fill
                  sizes="180px"
                  unoptimized
                  quality={100}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Manufacturer &amp; Supplier of Demountable Glass Partition Profiles. Serving architects, contractors and developers across India.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://wa.me/918854935836" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'all 0.3s' }}>💬</a>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'all 0.3s' }}>👤</a>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'all 0.3s' }}>📸</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
                  <Link href={href} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>▶</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Solution Catalog</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                '25×45 Single Glaze Profile',
                '25×25 Slim Profile',
                '25×100 Single Glazing',
                '25×100 Double Glazing',
                'RJ-100 Acoustic (52dB)',
                'Frameless Glass System',
                'Accessories & Hardware',
              ].map(item => (
                <li key={item} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>▶</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Contact Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>HQ Location</div>
                <div style={{ color: 'white', fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 500 }}>
                  MINDSPACE AIROLI EAST, 4,<br />
                  Navi Mumbai, Maharashtra 400708
                </div>
              </div>
              <div>
                <div style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Connect</div>
                <div style={{ color: 'white', fontSize: '1rem', fontWeight: 800 }}>+91 8854935836</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '0.2rem' }}>aerospacealuminiumalloys@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
            © 2026 Aerospace Aluminium Alloys. GST Registered Entity.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Navi Mumbai</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>PAN India Supply</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
