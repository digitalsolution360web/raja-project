'use client';
import Image from 'next/image';
import Link from 'next/link';

const systems = [
  {
    id: 'single-glaze',
    title: 'Single Glaze Partition System',
    intro: 'The most widely specified system for commercial fit-outs where visual openness, light transmission and cost efficiency are the primary drivers. Single-glaze systems use a single pane of glass (8mm–12mm) within a precision-extruded aluminium frame.',
    specs: [
      { label: 'Frame Profile Options', value: '25×25, 25×45 (slimline), 25×100 (structural)' },
      { label: 'Glass Options', value: 'Clear, frosted, tinted, patterned, switchable smart glass' },
      { label: 'Acoustic Performance', value: '32–44dB (dependent on profile and glazing selection)' },
      { label: 'Door Integration', value: 'Hinged, pivoting, and sliding door options' },
      { label: 'Finish Options', value: 'Anodised Silver, Matt Black, Champagne, Bronze, Full RAL powder coat' },
      { label: 'Demountable', value: 'Yes — components can be dismantled and reinstalled' },
      { label: 'Fire Rating', value: 'Fire-rated glazing available on request (EI 30 / EI 60)' }
    ],
    img: '/1.webp'
  },
  {
    id: 'double-glaze',
    title: 'Double Glaze Partition System',
    intro: 'The premium system for projects where acoustic performance, thermal comfort, and a sense of architectural gravitas are required. Two glass panes separated by an air cavity deliver superior sound insulation and a weightier visual presence.',
    specs: [
      { label: 'Profile Options', value: '25×100 DG, RJ-100 Acoustic' },
      { label: 'Glass Configuration', value: '6+6 standard | 8.8+8.8 acoustic laminated (RJ-100)' },
      { label: 'Cavity', value: '12mm air standard | argon-filled optional for thermal' },
      { label: 'Acoustic Performance', value: '44–52dB Rw (RJ-100 system)' },
      { label: 'Blind Integration', value: 'Internal venetian or fabric blinds within cavity' },
      { label: 'Thermal Performance', value: 'U-value from 1.8 W/m²K' },
      { label: 'Cable Management', value: 'Integrated cable channel within base track' }
    ],
    img: '/2.webp'
  },
  {
    id: 'demountable',
    title: 'Demountable Partition System',
    intro: 'Demountable systems are designed to be fully disassembled and relocated without damage to the building fabric — making them the preferred choice for organisations planning for future reconfiguration, compliance with Green Building ratings, and LEED/GRIHA point accumulation.',
    whyItems: [
      { title: 'LEED Credit Contribution', text: 'Supports MR credits under LEED v4 for material reuse' },
      { title: 'Zero Waste Relocation', text: 'Entire partition system packs down and reinstalls in new layout' },
      { title: 'Building Fabric Intact', text: 'No drilling into structure — no reinstatement costs' },
      { title: 'Lease Exit Compliance', text: "Demountable partitions are typically classified as tenant's fixtures" },
      { title: 'Reconfiguration Speed', text: 'Typical floor can be reconfigured in 3–5 days without disruption' }
    ],
    img: '/3.webp'
  },
  {
    id: 'frameless',
    title: 'Frameless Glass System',
    intro: 'For projects where the glass itself is the design statement, our frameless system reduces the aluminium profile to a minimal floor channel and ceiling track, leaving the glass face fully exposed. The result is a seamless, virtually invisible partition.',
    bestSuited: [
      'Premium residential interiors (penthouse, villa, high-end apartments)',
      'Luxury retail and showroom environments',
      'Corporate reception areas and feature walls',
      'Hotel suites and spa interiors',
      'Art galleries and exhibition spaces'
    ],
    img: '/4.webp'
  }
];

export default function SystemsPage() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-main">
          <div className="gold-bar" />
          <h1 className="section-title-white" style={{ marginBottom: '1.5rem' }}>Demountable Partition Systems</h1>
          <p className="section-subtitle-white" style={{ maxWidth: '800px' }}>
            Our partition systems go beyond individual profiles — they are complete, coordinated systems designed for straightforward specification, fast installation and long-term reconfigurability. Every system is backed by full technical documentation and site support.
          </p>
        </div>
      </section>

      {/* Systems Content */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {systems.map((system, idx) => (
              <div key={system.id} className="zigzag-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', borderBottom: '1px solid var(--silver-dark)', padding: '4rem 0' }}>
                <div className="zigzag-image" style={{ position: 'relative', height: '500px', width: '100%', order: idx % 2 === 0 ? 0 : 1 }}>
                  <Image src={system.img} alt={system.title} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={idx < 2} />
                </div>
                
                <div className="zigzag-text" style={{ paddingTop: '0', order: idx % 2 === 0 ? 1 : 0 }}>
                  <h2 style={{ fontSize: '1.85rem', color: 'var(--navy)', marginBottom: '0.8rem' }}>{system.title}</h2>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {system.intro}
                  </p>

                  {system.specs && (
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '0.9rem', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '2px solid var(--gold)', display: 'inline-block' }}>Key Specifications</h4>
                      <table className="spec-table">
                        <tbody>
                          {system.specs.map(spec => (
                            <tr key={spec.label}>
                              <td style={{ fontWeight: 700, color: 'var(--navy)', width: '35%' }}>{spec.label}</td>
                              <td>{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {system.whyItems && (
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '0.9rem', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '2px solid var(--gold)', display: 'inline-block' }}>Why Choose Demountable?</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {system.whyItems.map(item => (
                          <div key={item.title}>
                            <h5 style={{ fontSize: '0.92rem', color: 'var(--navy)', fontWeight: 700, marginBottom: '0.15rem' }}>
                              <span style={{ color: 'var(--gold)', marginRight: '0.4rem' }}>✦</span> {item.title}
                            </h5>
                            <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', paddingLeft: '1.4rem' }}>{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {system.bestSuited && (
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '0.9rem', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '2px solid var(--gold)', display: 'inline-block' }}>Best Suited For</h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {system.bestSuited.map(item => (
                          <li key={item} style={{ fontSize: '0.95rem', color: 'var(--text-mid)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                    <Link href="/contact" className="btn-navy">Request System Specs</Link>
                    <Link href="/gallery" className="btn-outline-navy">View Projects</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical FAQ Band */}
      <section style={{ background: 'var(--silver)', padding: '3rem 0' }}>
        <div className="container-main">
          <div className="card-glass" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', background: 'var(--navy)', color: 'white', padding: '2.5rem' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="section-title-white" style={{ marginBottom: '1rem' }}>Technical Installation Support</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We provide comprehensive AutoCAD drawings, installation manuals, and site preparation guides for all our partition systems. Our technical teams are available for site visits on high-volume projects.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>📄</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>AutoCAD Drawings</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>🛠</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Site Supervisors</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>📦</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Hardware Kits</span>
                </div>
              </div>
            </div>
            <div>
              <Link href="/contact" className="btn-gold">Download Technical Resource Pack</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .zigzag-row { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .zigzag-image { order: 1 !important; height: 350px !important; }
          .zigzag-text { order: 2 !important; }
        }
      `}</style>
    </div>
  );
}
