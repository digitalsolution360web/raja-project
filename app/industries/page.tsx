'use client';
import Image from 'next/image';
import Link from 'next/link';

const sectors = [
  {
    title: 'Corporate Offices & IT Parks',
    intro: 'Modern workplaces demand flexible, light-filled environments that support both collaboration and focused work. Our single and double-glaze partition systems create visual openness while providing the acoustic separation productivity requires.',
    projects: ['HQ fit-outs', 'IT campuses', 'Co-working spaces', 'Serviced offices', 'BPO/KPO centres', 'Banking halls'],
    img: '/1.jpeg'
  },
  {
    title: 'Healthcare & Hospitals',
    intro: 'Healthcare environments demand hygiene, durability, acoustic privacy and compliance with infection-control protocols. Our profiles are non-porous, easy to clean and available in clinical-grade finishes.',
    projects: ['Hospital wards', 'Consultation rooms', 'ICU/HDU isolation', 'Dental and diagnostic clinics', 'Medical colleges', 'Pharmacy partitions'],
    img: '/2.jpeg'
  },
  {
    title: 'Retail & Showrooms',
    intro: 'Retail environments need to guide footfall and create display zones — all while being durable enough to withstand continuous public use. Our frameless and slimline systems achieve premium visual impact.',
    projects: ['Fashion boutiques', 'Jewellery showrooms', 'Auto dealerships', 'Electronics retail', 'Furniture showrooms', 'Airport retail'],
    img: '/3.jpeg'
  },
  {
    title: 'Hospitality — Hotels & Restaurants',
    intro: 'Hospitality interiors must balance aesthetics, durability and ease of maintenance. Our profiles are available in premium architectural finishes like brushed gold, bronze, and champagne.',
    projects: ['Hotel room dividers', 'Spa treatment rooms', 'Restaurant private dining', 'Bar dividers', 'Lobby feature walls', 'Banquet hall partitioning'],
    img: '/4.jpeg'
  },
  {
    title: 'Education — Schools & Universities',
    intro: 'Educational facilities require robust, vandal-resistant partitions that can adapt to changing room configurations. Our demountable systems allow schools to reconfigure spaces without capital expenditure.',
    projects: ['Classroom dividers', 'Library partitions', 'Science lab enclosures', 'Faculty offices', 'Computer labs', 'Auditorium staging areas'],
    img: '/5.jpeg'
  },
  {
    title: 'Government & Institutional',
    intro: 'Government projects require products with documented specifications, GST compliance and tested performance data. We supply formal technical data sheets and project-specific compliance documentation.',
    projects: ['Secretariat offices', 'Court complexes', 'PSU headquarters', 'Police stations', 'Municipal buildings', 'Defence facilities'],
    img: '/6.jpeg'
  }
];

export default function IndustriesPage() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container-main">
          <div className="gold-bar" />
          <h1 className="section-title-white" style={{ marginBottom: '1.5rem' }}>Aluminium Profile Solutions Across Every Sector</h1>
          <p className="section-subtitle-white" style={{ maxWidth: '800px' }}>
            From individual offices to massive commercial hubs — our partition profile systems are specified by leading architects and contractors across India's most demanding sectors.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding section-white">
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2.5rem' }}>
            {sectors.map((sector, idx) => (
              <div key={idx} className="card-glass" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '240px' }}>
                  <Image src={sector.img} alt={sector.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,40,0.8) 0%, transparent 60%)' }} />
                  <h3 style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', right: '1.5rem', color: 'white', fontSize: '1.25rem', fontWeight: 800 }}>{sector.title}</h3>
                </div>
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {sector.intro}
                  </p>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, marginBottom: '1rem' }}>Key Project Types:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {sector.projects.map(proj => (
                        <span key={proj} style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem', background: 'var(--silver)', color: 'var(--navy)', borderRadius: '4px', fontWeight: 600 }}>
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialised Solutions */}
      <section className="section-padding section-silver">
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="gold-bar" style={{ margin: '0 auto 1.25rem' }} />
            <h2 className="section-title">Specialised Sector Requirements</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>We understand that every environment has unique demands. Our manufacturing flexibility allows us to tailor solutions for specific performance targets.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '0.75rem' }}>Durability & Hygiene</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.6 }}>Our profiles are available in anti-microbial powder coats and high-micron anodised finishes that withstand heavy cleaning and high-traffic use in hospitals and retail.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📏</div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '0.75rem' }}>Dimensional Precision</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.6 }}>For high-end residential and gallery spaces, our +/- 0.5mm tolerance guarantee ensures that minimalist frameless tracks align perfectly over long runs.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '0.75rem' }}>Rapid Turnaround</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.6 }}>Our Navi Mumbai supply hub is stocked for immediate dispatch of standard profiles to meet the aggressive timelines of corporate fit-out projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--navy)', padding: '5rem 0' }}>
        <div className="container-main" style={{ textAlign: 'center' }}>
          <h2 className="section-title-white" style={{ marginBottom: '1.5rem' }}>Ready to Discuss Your Project?</h2>
          <p className="section-subtitle-white" style={{ margin: '0 auto 2.5rem' }}>
            Our technical consultants have deep experience across all these sectors. We can help you choose the right profile system for your building type and performance requirements.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold">Consult an Expert</Link>
            <Link href="/gallery" className="btn-outline-white">Browse Project Gallery</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
