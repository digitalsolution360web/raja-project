'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const filters = ['All Products', 'Single Glaze', 'Double Glaze', 'Acoustic', 'Frameless', 'Accessories'];

const products = [
  {
    sku: 'RAP-2545',
    name: 'Single glass 25 /* 45',
    category: 'Single Glaze',
    specs: [
      { label: 'Profile Dimensions', value: '25mm × 45mm' },
      { label: 'Glass Thickness', value: '10mm – 12mm' },
      { label: 'System Type', value: 'Single glazed, snap-fit' },
      { label: 'Frame Construction', value: 'Heavy-duty aluminium extrusion' },
      { label: 'Finishes', value: 'Anodised Silver, Matt Black, Champagne' }
    ],
    applications: ['Executive offices and boardrooms', 'Open-plan corporate interiors', 'Commercial retail fit-outs', 'Hotel lobby dividers', 'Reception area partitioning'],
    img: '/g1.jpeg'
  },
  {
    sku: 'RAP-2525',
    name: 'Single glazing partition',
    category: 'Single Glaze',
    specs: [
      { label: 'Profile Dimensions', value: '25mm × 25mm' },
      { label: 'Glass Thickness', value: '8mm – 10mm' },
      { label: 'System Type', value: 'Single glazed, minimalist frame' },
      { label: 'Frame Construction', value: 'Lightweight aluminium extrusion' }
    ],
    applications: ['Contemporary residential interiors', 'Boutique retail spaces', 'Co-working and hot-desk environments', 'Feature walls and room dividers', 'Design studios and creative offices'],
    img: '/g2.jpeg'
  },
  {
    sku: 'RAP-100SG',
    name: 'Single single glazing partition',
    category: 'Single Glaze',
    specs: [
      { label: 'Profile Dimensions', value: '25mm × 100mm' },
      { label: 'Glass Thickness', value: '10mm – 15mm' },
      { label: 'System Type', value: 'Single glazed, structural frame' },
      { label: 'Frame Construction', value: 'Heavy-section extruded aluminium' }
    ],
    applications: ['Full-height office partitions (floor to ceiling)', 'Healthcare and clinic partitioning', 'Government and institutional buildings', 'Commercial banking halls', 'Airport lounges and transit areas'],
    img: '/g3.jpeg'
  },
  {
    sku: 'RAP-100DG',
    name: 'Double glaze partition',
    category: 'Double Glaze',
    specs: [
      { label: 'Profile Dimensions', value: '25mm × 100mm' },
      { label: 'Glass Thickness', value: 'Two panes, 6mm + 6mm (12mm cavity)' },
      { label: 'System Type', value: 'Double glazed, cavity frame' },
      { label: 'Frame Construction', value: 'Thermally broken heavy-section aluminium' }
    ],
    applications: ['Premium corporate headquarters', 'Executive suites and C-Suite offices', 'Financial institutions and trading floors', 'Premium residential apartments', 'High-end hospitality interiors'],
    img: '/g4.jpeg'
  },
  {
    sku: 'RJ-100-DG-AC',
    name: '25x45 single glaze partition',
    category: 'Acoustic',
    specs: [
      { label: 'Profile Dimensions', value: '100mm system depth' },
      { label: 'Glass Specification', value: '8.8mm acoustic laminated + 12mm cavity + 8.8mm acoustic laminated' },
      { label: 'System Type', value: 'Demountable double-glazed acoustic wall' },
      { label: 'Acoustic Rating', value: 'Up to 52dB Rw' }
    ],
    applications: ['Conference rooms and boardrooms', 'Medical consultation and procedure rooms', 'Legal offices and chambers', 'Judiciary and government facilities', 'Recording studios and media rooms'],
    img: '/g5.jpeg'
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
      <section className="section-padding section-white">
        <div className="container-main" style={{ maxWidth: '1200px' }}>
          <style jsx>{`
            .product-badge-red {
              background: #B91C1C;
              color: white;
              padding: 4px 12px;
              border-radius: 4px;
              font-weight: 700;
              text-transform: uppercase;
              font-size: 0.75rem;
              display: inline-block;
            }
            .sku-red {
              color: #B91C1C;
              font-weight: 700;
              font-size: 0.85rem;
              margin-bottom: 0.5rem;
            }
            .product-title-navy {
              color: #0F172A;
              font-weight: 800;
              font-size: 1.85rem;
              line-height: 1.2;
              margin-bottom: 1rem;
            }
            .section-header-red {
              color: #B91C1C;
              font-size: 0.85rem;
              font-weight: 800;
              text-transform: uppercase;
              border-bottom: 3px solid #B91C1C;
              padding-bottom: 2px;
              margin: 1.5rem 0 1rem;
              display: inline-block;
            }
            .specs-table-pro {
              width: 100%;
              border-collapse: collapse;
            }
            .specs-table-pro td {
              padding: 8px 12px;
              font-size: 0.9rem;
              border-bottom: 1px solid #F1F5F9;
            }
            .specs-table-pro tr:nth-child(even) {
              background-color: #F8FAFC;
            }
            .app-list-pro {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            .app-item-pro {
              display: flex;
              align-items: center;
              gap: 8px;
              font-size: 0.95rem;
              color: #475569;
              margin-bottom: 6px;
            }
            .checkmark-red {
              color: #B91C1C;
              font-weight: 900;
            }
            .btn-request {
              background: #0F172A;
              color: white;
              padding: 10px 24px;
              border-radius: 4px;
              text-decoration: none;
              font-weight: 700;
              font-size: 0.9rem;
              display: inline-block;
              margin-top: 1.5rem;
              transition: opacity 0.2s;
            }
            .btn-request:hover {
              opacity: 0.9;
            }
            @media (max-width: 768px) {
              .zigzag-row {
                grid-template-columns: 1fr !important;
                gap: 2rem !important;
              }
              .order-last { order: 0 !important; }
            }
          `}</style>

          {activeFilter !== 'Accessories' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
              {filteredProducts.map((product, idx) => (
                <div key={product.sku} className="zigzag-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.2fr)', gap: '3rem', alignItems: 'start' }}>
                  <div className={`zigzag-image ${idx % 2 !== 0 ? 'lg:order-last' : ''}`} style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                    <Image src={product.img} alt={product.name} width={600} height={450} style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }} />
                  </div>
                  <div>
                    <div className="product-badge-red">{product.category}</div>
                    <div className="sku-red" style={{ marginTop: '0.75rem' }}>SKU: {product.sku}</div>
                    <h2 className="product-title-navy">{product.name}</h2>

                    <h4 className="section-header-red">Technical Specifications</h4>
                    <table className="specs-table-pro">
                      <tbody>
                        {product.specs.map(spec => (
                          <tr key={spec.label}>
                            <td style={{ fontWeight: 700, color: '#0F172A', width: '40%' }}>{spec.label}</td>
                            <td>{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <h4 className="section-header-red">Ideal Applications</h4>
                    <ul className="app-list-pro">
                      {product.applications.map(app => (
                        <li key={app} className="app-item-pro">
                          <span className="checkmark-red">✓</span> {app}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="btn-request">Request Sample / Quote</Link>
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
