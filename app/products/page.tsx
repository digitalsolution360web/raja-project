'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const filters = [
  'All Products',
  'Single Glaze',
  'Double Glaze',
  'Demountable',
  'Frameless',
  'Accessories',
];

// 7 featured systems (image + heading + full details) for Products page UI.
const products = [
  {
    id: 'single-glazing-partition-system',
    sku: '25x45-SG-001',
    name: 'Single Glazing Partition System',
    category: 'Single Glaze',
    specs: [
      { label: 'Frame Profile Options', value: '25×25, 25×45 (slimline), 25×100 (structural)' },
      { label: 'Glass Options', value: 'Clear, frosted, tinted, patterned, switchable smart glass' },
      { label: 'Acoustic Performance', value: '32–44dB (dependent on profile and glazing selection)' },
      { label: 'Door Integration', value: 'Hinged, pivoting, and sliding door options' },
      { label: 'Finish Options', value: 'Anodised Silver, Matt Black, Champagne, Bronze, Full RAL powder coat' }
    ],
    applications: ['Executive boardrooms', 'Private offices', 'Reception partitions', 'Retail showrooms'],
    img: '/g1.jpeg'
  },
  {
    id: 'double-glaze-partition-system',
    sku: '25x100-DG-002',
    name: 'Double Glaze Partition System',
    category: 'Double Glaze',
    specs: [
      { label: 'Profile Options', value: '25×100 DG, RJ-100 Acoustic' },
      { label: 'Glass Configuration', value: '6+6 standard | 8.8+8.8 acoustic laminated (RJ-100)' },
      { label: 'Cavity', value: '12mm air standard | argon-filled optional for thermal' },
      { label: 'Acoustic Performance', value: '44–52dB Rw (RJ-100 system)' },
      { label: 'Thermal Performance', value: 'U-value from 1.8 W/m²K' }
    ],
    applications: ['Executive boardrooms', 'Conference rooms', 'Clinics & healthcare partitions', 'Hospitality interiors'],
    img: '/g2.jpeg'
  },
  {
    id: 'demountable-partition-system',
    sku: 'DM-100-003',
    name: 'Demountable Partition System',
    category: 'Demountable',
    specs: [
      { label: 'System Type', value: 'Fully demountable partition system (reusable components)' },
      { label: 'Relocation Approach', value: 'Dismantle + reinstall without damaging building fabric (design dependent)' },
      { label: 'Component Numbering', value: 'Numbered parts for fast reconfiguration' },
      { label: 'Sustainability Fit', value: 'Supports reuse / material recovery projects' }
    ],
    applications: ['Future-ready office layouts', 'Lease exit compliance', 'Green building programs (LEED-style)', 'Fast reconfiguration projects'],
    img: '/g3.jpeg'
  },
  {
    id: 'frameless-glass-system',
    sku: 'FRM-GL-004',
    name: 'Frameless Glass System',
    category: 'Frameless',
    specs: [
      { label: 'Profile System', value: 'Minimal floor channel + ceiling track (virtually invisible framing)' },
      { label: 'Glass Visibility', value: 'Maximum glass face exposure for premium aesthetics' },
      { label: 'Seal Type', value: 'Concealed / dry-glazed joints (application dependent)' },
      { label: 'Installation Style', value: 'Designed for seamless, clean sightlines' }
    ],
    applications: [
      'Premium residential interiors',
      'Luxury retail and showroom environments',
      'Corporate reception areas and feature walls',
      'Hotel suites and spa interiors',
      'Art galleries and exhibition spaces',
    ],
    img: '/g4.jpeg'
  },
  {
    id: 'acoustic-double-glaze-system',
    sku: 'RAP-AC-123',
    name: 'Acoustic Double Glaze System',
    category: 'Double Glaze',
    specs: [
      { label: 'System Depth', value: '100mm (standard) up to 125mm' },
      { label: 'Acoustic Rating', value: 'Rw 48 - 52dB' },
      { label: 'Glass Specification', value: 'Double 8.8mm acoustic laminate' },
      { label: 'Cavity Type', value: 'Argon-filled for superior clarity' },
    ],
    applications: ['Executive boardrooms', 'Legal consult offices', 'Judiciary chambers', 'High-end residential acoustics'],
    img: '/g5.jpeg'
  },
  {
    id: 'frameless-glass-series',
    sku: 'RAP-FL-124',
    name: 'Frameless Glass Series',
    category: 'Frameless',
    specs: [
      { label: 'Profile Height', value: '25mm floor channel' },
      { label: 'Glass Options', value: '10mm - 15mm Toughened Clear' },
      { label: 'Seal Type', value: 'Dry-glaze transparent vertical joints' },
    ],
    applications: ['Luxury retail showrooms', 'Museum displays', 'Corporate reception dividers', 'Art gallery enclosures'],
    img: '/p20.jpeg'
  },
  {
    id: 'premium-office-enclosure',
    sku: 'RAP-EX-125',
    name: 'Premium Office Enclosure',
    category: 'Single Glaze',
    specs: [
      { label: 'Profile Options', value: 'Matt Black, Anodised Silver, Bronze' },
      { label: 'Stability', value: 'Internal structural reinforcement' },
      { label: 'Door Integration', value: 'Compatible with all RAP series hardware' },
    ],
    applications: ['Private offices', 'Meeting room pods', 'Modern co-working spaces', 'Boutique interiors'],
    img: '/p21.jpeg'
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

// Featured items: left thumbnail + right heading.
const featuredItems = [
  { id: 'single-glazing-partition-system', title: 'Single Glazing Partition System', img: '/g1.jpeg' },
  { id: 'double-glaze-partition-system', title: 'Double Glaze Partition System', img: '/g2.jpeg' },
  { id: 'demountable-partition-system', title: 'Demountable Partition System', img: '/g3.jpeg' },
  { id: 'frameless-glass-system', title: 'Frameless Glass System', img: '/g4.jpeg' },
  { id: 'acoustic-double-glaze-system', title: 'Acoustic Double Glaze System', img: '/g5.jpeg' },
  { id: 'frameless-glass-series', title: 'Frameless Glass Series', img: '/p20.jpeg' },
  { id: 'premium-office-enclosure', title: 'Premium Office Enclosure', img: '/p21.jpeg' }
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
        <div className="container-main" style={{ maxWidth: '1400px' }}>
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

            .featured-list {
              margin-top: 1.25rem;
              margin-bottom: 2.25rem;
            }

            .featured-item {
              display: grid;
              grid-template-columns: 180px 1fr;
              gap: 1.25rem;
              align-items: center;
              padding: 1rem 0;
              border-bottom: 1px solid rgba(15, 23, 42, 0.12);
              text-decoration: none;
              transition: transform 0.18s ease, border-color 0.18s ease;
            }

            .featured-item:hover {
              transform: translateX(2px);
            }

            .featured-thumb {
              position: relative;
              height: 92px;
              width: 180px;
              border-radius: 12px;
              overflow: hidden;
              border: 1px solid rgba(15, 23, 42, 0.10);
              background: #ffffff;
            }

            .featured-item-title {
              color: #0F172A;
              font-weight: 850;
              font-size: 1.18rem;
              line-height: 1.2;
              margin-bottom: 0.35rem;
            }

            .featured-item-sub {
              color: #475569;
              font-size: 0.95rem;
              line-height: 1.5;
              max-width: 520px;
            }

            @media (max-width: 768px) {
              .featured-item {
                grid-template-columns: 120px 1fr;
              }
              .featured-thumb {
                width: 120px;
                height: 84px;
              }
              .featured-item-title {
                font-size: 1.06rem;
              }
            }

            @media (max-width: 1024px) {
              .zigzag-row {
                grid-template-columns: 1fr !important;
                gap: 2rem !important;
              }
              .zigzag-image { order: 1 !important; }
              .zigzag-text { order: 2 !important; }
            }
          `}</style>

          {activeFilter !== 'Accessories' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
              {filteredProducts.map((product, idx) => (
                <div
                  key={product.sku}
                  id={product.id}
                  className="zigzag-row"
                  style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.2fr)', gap: '3rem', alignItems: 'start' }}
                >
                  <div className="zigzag-image" style={{ position: 'relative', height: '450px', width: '100%', order: idx % 2 === 0 ? 0 : 1 }}>
                    <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover', borderRadius: '8px' }} priority={idx < 2} />
                  </div>
                  <div className="zigzag-text" style={{ order: idx % 2 === 0 ? 1 : 0 }}>
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
            Our Airoli (Navi Mumbai) manufacturing facility can produce custom aluminium profiles to your exact architectural requirements. Discuss your project with our technical team today.
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
