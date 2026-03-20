'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: '🏠 Home' },
  { href: '/products', label: 'Products' },
  { href: '/systems', label: 'Systems' },
  { href: '/industries', label: 'Industries' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={{
          background: 'var(--white)',
          boxShadow: scrolled || menuOpen ? '0 4px 24px rgba(15, 23, 42, 0.08)' : '0 2px 10px rgba(15, 23, 42, 0.04)',
          borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
        }}
      >
        <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem', height: '70px' }}>
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', height: '100%', cursor: 'pointer' }}
          >
            <div style={{ position: 'relative', height: '55px', width: '220px' }}>
              <Image
                src="/logoo.png"
                alt="Aerospace Aluminium Alloys Logo"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: pathname === link.href ? 'var(--gold-dark)' : 'var(--navy)',
                  fontWeight: pathname === link.href ? 700 : 500,
                  fontSize: '0.9rem',
                  padding: '0.5rem 0.875rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  borderBottom: pathname === link.href ? '2px solid var(--gold)' : '2px solid transparent',
                  letterSpacing: '0.01em',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gold" style={{ marginLeft: '0.75rem', padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
              Get a Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '6px',
            }}
          >
            <span style={{ width: '24px', height: '2px', background: 'var(--navy)', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ width: '24px', height: '2px', background: 'var(--navy)', display: 'block', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: '24px', height: '2px', background: 'var(--navy)', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          style={{
            background: 'var(--white)',
            overflow: 'hidden',
            maxHeight: menuOpen ? '500px' : '0',
            transition: 'max-height 0.4s ease',
            borderTop: menuOpen ? '1px solid rgba(15, 23, 42, 0.05)' : 'none',
          }}
          className="mobile-drawer"
        >
          <div style={{ padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: pathname === link.href ? 'var(--gold-dark)' : 'var(--navy)',
                  fontWeight: pathname === link.href ? 700 : 500,
                  fontSize: '1rem',
                  padding: '0.75rem 0.5rem',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  display: 'block',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gold" style={{ marginTop: '1rem', justifyContent: 'center' }}>
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
