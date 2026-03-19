'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const filters = ['All Products', 'Single Glaze', 'Double Glaze', 'Acoustic', 'Frameless', 'Accessories'];

const products = [
  {
    sku: 'RAP-2545',
    name: '25×45 Single Glaze Slimline Profile',
    category: 'Single Glaze',
    specs: [
      { label: 'Profile Dimensions', value: '25mm × 45mm' },
      { label: 'Glass Thickness', value: '10mm – 12mm' },
      { label: 'System Type', value: 'Single glazed, snap-fit' },
      { label: 'Frame Construction', value: 'Heavy-duty aluminium extrusion' },
      { label: 'Finishes', value: 'Anodised Silver, Matt Black, Champagne' }
    ],
    applications: ['Executive offices and boardrooms', 'Open-plan corporate interiors', 'Commercial retail fit-outs', 'Hotel lobby dividers', 'Reception area partitioning'],
    img: '/1.webp'
  },
  {
    sku: 'RAP-2525',
    name: '25×25 Ultra-Slim Partition Profile',
    category: 'Single Glaze',
    specs: [
      { label: 'Profile Dimensions', value: '25mm × 25mm' },
      { label: 'Glass Thickness', value: '8mm – 10mm' },
      { label: 'System Type', value: 'Single glazed, minimalist frame' },
      { label: 'Frame Construction', value: 'Lightweight aluminium extrusion' }
    ],
    applications: ['Contemporary residential interiors', 'Boutique retail spaces', 'Co-working and hot-desk environments', 'Feature walls and room dividers', 'Design studios and creative offices'],
    img: '/2.webp'
  },
  {
    sku: 'RAP-100SG',
    name: '25×100 Single Glazing System',
    category: 'Single Glaze',
    specs: [
      { label: 'Profile Dimensions', value: '25mm × 100mm' },
      { label: 'Glass Thickness', value: '10mm – 15mm' },
      { label: 'System Type', value: 'Single glazed, structural frame' },
      { label: 'Frame Construction', value: 'Heavy-section extruded aluminium' }
    ],
    applications: ['Full-height office partitions (floor to ceiling)', 'Healthcare and clinic partitioning', 'Government and institutional buildings', 'Commercial banking halls', 'Airport lounges and transit areas'],
    img: '/3.webp'
  },
  {
    sku: 'RAP-100DG',
    name: '25×100 Double Glazing System',
    category: 'Double Glaze',
    specs: [
      { label: 'Profile Dimensions', value: '25mm × 100mm' },
      { label: 'Glass Thickness', value: 'Two panes, 6mm + 6mm (12mm cavity)' },
      { label: 'System Type', value: 'Double glazed, cavity frame' },
      { label: 'Frame Construction', value: 'Thermally broken heavy-section aluminium' }
    ],
    applications: ['Premium corporate headquarters', 'Executive suites and C-Suite offices', 'Financial institutions and trading floors', 'Premium residential apartments', 'High-end hospitality interiors'],
    img: '/4.webp'
  },
  {
    sku: 'RJ-100-DG-AC',
    name: 'RJ-100 Acoustic Double Glaze System',
    category: 'Acoustic',
    specs: [
      { label: 'Profile Dimensions', value: '100mm system depth' },
      { label: 'Glass Specification', value: '8.8mm acoustic laminated + 12mm cavity + 8.8mm acoustic laminated' },
      { label: 'System Type', value: 'Demountable double-glazed acoustic wall' },
      { label: 'Acoustic Rating', value: 'Up to 52dB Rw' }
    ],
    applications: ['Conference rooms and boardrooms', 'Medical consultation and procedure rooms', 'Legal offices and chambers', 'Judiciary and government facilities', 'Recording studios and media rooms'],
    img: '/5.webp'
  },
  {
    sku: 'RAP-FRAME',
    name: 'Frameless Glass Partition System',
    category: 'Frameless',
    specs: [
      { label: 'Profile', value: 'Minimal track and clamp system — glass face visible' },
      { label: 'Glass Thickness', value: '12mm – 15mm toughened / laminated safety glass' },
      { label: 'Frame Profile', value: 'Floor channel and ceiling track only' },
      { label: 'Acoustic Rating', value: '36–40dB' }
    ],
    applications: ['Luxury residential and penthouse interiors', 'Premium hotel room dividers', 'Retail showcase environments', 'Art galleries and showrooms', 'High-end restaurant and bar interiors'],
    img: '/6.webp'
  }
];

const accessories = [
  { name: 'ABS End Caps', spec: 'ABS plastic, impact-resistant, colour-matched', app: 'Profile end finishing' },
  { name: 'L-Connectors', spec: 'High-grade aluminium / zinc alloy, 90° angle', app: 'Corner and junction joins' },
  { name: 'Aluminium Handles', spec: 'Pull handles, D-handles, flush pulls', app: 'Partition door hardware' },
  { name: 'Glazing Gaskets', spec: 'EPDM / TPE rubber, UV and weather resistant', app: 'Glass-to-profile sealing' },
  { name: 'Floor Channel Track', spec: '20mm × 20mm; 25mm × 25mm', app: 'Base fixing and alignment' },
  { name: 'Ceiling Track', spec: 'Flush and surface-mount options', app: 'Top fixing and alignment' },
  { name: 'Aluminium Cover Strips', spec: '25mm × 10mm snap-fit finish strip', app: 'Joint and gap covering' },
  { name: 'Wall Abutment Profile', spec: 'Wall-fixing bracket profile', app: 'Perimeter fixing' },
  { name: 'Sliding Door Systems', spec: 'Soft-close overhead track', app: 'Partition door integration' },
  { name: 'Pivot Door Fittings', spec: 'Top and bottom pivot sets, 90° swing', app: 'Hinged door integration' }
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All Products');

  const filteredProducts = activeFilter === 'All Products'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-main">
          <div className="gold-bar" />
          <h1 className="section-title-white" style={{ marginBottom: '1rem' }}>Aluminium Profile Product Range</h1>
          <p className="section-subtitle-white" style={{ maxWidth: '800px' }}>
            Engineered for architects, interior designers and contractors who demand precision, consistency and choice. Our complete range of aluminium partition profiles and accessories covers every application from slim office dividers to high-performance acoustic walls.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ padding: '2rem 0 1rem', background: 'var(--white)' }}>
        <div className="container-main">
          <div className="filter-tabs">
            {filters.map(filter => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding section-white" style={{ paddingTop: '1rem' }}>
        <div className="container-main">
          {activeFilter !== 'Accessories' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {filteredProducts.map((product, idx) => (
                <div key={product.sku} className="zigzag-row" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center', borderBottom: 'none', padding: '0' }}>
                  <div className={`zigzag-image ${idx % 2 !== 0 ? 'order-last' : ''}`} style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                    <Image src={product.img} alt={product.name} width={600} height={400} style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '16px' }} />
                  </div>
                  <div style={{ padding: '0' }}>
                    <div className="product-badge" style={{ marginBottom: '1rem' }}>{product.category}</div>
                    <div style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>SKU: {product.sku}</div>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '0.8rem' }}>{product.name}</h2>

                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{ fontSize: '0.88rem', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', borderBottom: '2px solid var(--gold)', display: 'inline-block' }}>Technical Specifications</h4>
                      <table className="spec-table">
                        <tbody>
                          {product.specs.map(spec => (
                            <tr key={spec.label}>
                              <td style={{ fontWeight: 700, color: 'var(--navy)', width: '40%' }}>{spec.label}</td>
                              <td>{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '0.88rem', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', borderBottom: '2px solid var(--gold)', display: 'inline-block' }}>Ideal Applications</h4>
                      <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                        {product.applications.map(app => (
                          <li key={app} style={{ fontSize: '0.9rem', color: 'var(--text-mid)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--gold)', fontWeight: 900 }}>✓</span> {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                      <Link href="/contact" className="btn-navy">Request Sample / Quote</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="animate-fade-in">
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="section-title">Accessories & Hardware Range</h2>
                <p className="section-subtitle" style={{ margin: '0 auto' }}>Our profiles are supplied with a complete range of matching accessories to ensure a professional, coordinated finish on every installation.</p>
              </div>
              <div className="card-glass" style={{ padding: '0', overflow: 'hidden' }}>
                <table className="spec-table">
                  <thead>
                    <tr>
                      <th>Accessory</th>
                      <th>Specification</th>
                      <th>Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accessories.map(acc => (
                      <tr key={acc.name}>
                        <td style={{ fontWeight: 700, color: 'var(--navy)' }}>{acc.name}</td>
                        <td>{acc.spec}</td>
                        <td>{acc.app}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Band */}
      <section style={{ background: '#F8FAFC', padding: '3rem 0', borderTop: '1px solid var(--silver-dark)' }}>
        <div className="container-main" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Need a Custom Extrusion?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
            Our Bikaner manufacturing facility can produce custom aluminium profiles to your exact architectural requirements. Discuss your project with our technical team today.
          </p>
          <Link href="/contact" className="btn-gold">Consult Our Technical Team</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .order-last { order: 0 !important; }
        }
      `}</style>
    </div>
  );
}
