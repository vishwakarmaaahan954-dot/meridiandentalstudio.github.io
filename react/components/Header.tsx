import React, { useState, useEffect } from 'react';

/**
 * ==============================================================================
 * HEADER COMPONENT (react/components/Header.tsx)
 * ==============================================================================
 * Sticky frosted-glass header with dropdown menus, mobile navigation drawer,
 * and background blur transition upon scrolling.
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
      <a className="brand" href="#hero" onClick={closeMobileNav}>
        <svg viewBox="0 0 40 40" fill="none">
          <path
            d="M20 6C13 6 9 10.5 9 16.5C9 22 11.5 27 13.3 31.5C14 33.3 15.6 34 16.8 32.4C18 30.8 18.3 26 20 26C21.7 26 22 30.8 23.2 32.4C24.4 34 26 33.3 26.7 31.5C28.5 27 31 22 31 16.5C31 10.5 27 6 20 6Z"
            stroke="#1F4B43"
            strokeWidth="1.6"
            fill="#DCE7E1"
          />
        </svg>
        <span className="brand-text">
          <span className="name">Meridian Dental Studio</span>
          <span className="tag">Dr. Aanya Sharma · Kanpur</span>
        </span>
      </a>

      <nav
        className="main-nav"
        style={
          isMobileOpen
            ? {
                display: 'flex',
                position: 'fixed',
                top: '70px',
                left: 0,
                right: 0,
                flexDirection: 'column',
                background: '#ffffff',
                padding: '20px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                zIndex: 200,
                borderBottom: '1px solid var(--line)'
              }
            : undefined
        }
      >
        <div className="nav-item">
          <button type="button">
            Services{' '}
            <svg viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <div className="dropdown">
            <a href="#services" onClick={closeMobileNav}>General &amp; Preventive<span>Checkups, cleanings, X-rays</span></a>
            <a href="#services" onClick={closeMobileNav}>Cosmetic Dentistry<span>Veneers, whitening, bonding</span></a>
            <a href="#services" onClick={closeMobileNav}>Orthodontics<span>Invisalign &amp; clear aligners</span></a>
            <a href="#services" onClick={closeMobileNav}>Restorative Care<span>Implants, crowns, root canals</span></a>
            <a href="#services" onClick={closeMobileNav}>Pediatric Dentistry<span>Gentle care for kids</span></a>
          </div>
        </div>

        <div className="nav-item">
          <button type="button">
            Patients{' '}
            <svg viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <div className="dropdown">
            <a href="#book" onClick={closeMobileNav}>New Patient Forms<span>Fill out before your visit</span></a>
            <a href="#why" onClick={closeMobileNav}>Insurance &amp; Billing<span>Plans we accept</span></a>
            <a href="#stories" onClick={closeMobileNav}>Patient Stories<span>Real reviews from Kanpur</span></a>
            <a href="#gallery" onClick={closeMobileNav}>Smile Gallery<span>Before &amp; after results</span></a>
          </div>
        </div>

        <div className="nav-item">
          <button type="button">
            About{' '}
            <svg viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <div className="dropdown">
            <a href="#team" onClick={closeMobileNav}>Meet the Team<span>Our dentists &amp; hygienists</span></a>
            <a href="#why" onClick={closeMobileNav}>Our Approach<span>Why patients choose us</span></a>
            <a href="#footer" onClick={closeMobileNav}>Visit &amp; Hours<span>Address, map, timings</span></a>
          </div>
        </div>
      </nav>

      <a className="book-btn" href="#book" onClick={closeMobileNav}>
        Book a Visit
      </a>

      <button
        className="hamburger"
        aria-label="Toggle navigation menu"
        type="button"
        onClick={toggleMobileNav}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#142420" strokeWidth="1.8">
          <path d="M2 5h16M2 10h16M2 15h16" />
        </svg>
      </button>
    </header>
  );
};
