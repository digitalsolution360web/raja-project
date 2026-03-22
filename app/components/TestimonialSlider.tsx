'use client';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: "The Aerospace partition systems have transformed our office space. The slim line door frames are incredibly sleek and modern.",
    author: "Ar. Sanjay Mehta",
    company: "Studio Design Associates"
  },
  {
    quote: "Exceptional quality and precision. The black finish on the aluminum profiles is flawless and very premium.",
    author: "Vikram Shah",
    company: "BuildRight Infrastructure"
  },
  {
    quote: "Great technical support and fast delivery. The RJ-100 system's acoustic performance was exactly what we needed for our executive lounge.",
    author: "Priya Malik",
    company: "Corporate Solutions Group"
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="testimonial-slider-container" style={{ padding: '4rem 0', background: 'var(--navy)' }}>
      <div className="container-main" style={{ textAlign: 'center', color: 'white' }}>
        <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.1)', color: 'var(--accent-light)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '2rem' }}>
          TESTIMONIALS
        </div>
        <div className="testimonial-wrapper" style={{ position: 'relative', height: 'auto', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{
                display: i === current ? 'block' : 'none',
                maxWidth: '900px',
                margin: '0 auto',
                animation: i === current ? 'fadeInUp 0.8s ease forwards' : 'none'
              }}
            >
              <div style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.6, marginBottom: '2rem', color: 'var(--navy)' }}>
                "{t.quote}"
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '2px', background: 'var(--accent)', marginBottom: '1rem' }} />
                <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.05em', color: 'var(--navy)' }}>{t.author.toUpperCase()}</div>
                <div style={{ color: 'var(--text-mid)', fontSize: '0.9rem', marginTop: '0.2rem' }}>{t.company}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '3rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '30px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
