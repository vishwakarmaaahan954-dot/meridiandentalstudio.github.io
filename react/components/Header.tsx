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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-item')) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileOpen(false);
      }
    };

    const desktopMedia = window.matchMedia('(min-width: 901px)');
    const handleViewportChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    if (desktopMedia.addEventListener) {
      desktopMedia.addEventListener('change', handleViewportChange);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (desktopMedia.removeEventListener) {
        desktopMedia.removeEventListener('change', handleViewportChange);
      }
    };
  }, []);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsMobileOpen(false);
  };

  const toggleMobileNav = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setActiveDropdown(null);
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
          <span className="tag">Dr. Pooja Sharma · Kanpur</span>
        </span>
      </a>

      <nav
        className="main-nav"
        data-mobile-open={isMobileOpen ? 'true' : undefined}
      >
        <div className={`nav-item ${activeDropdown === 'services' ? 'open' : ''}`}>
          <button
            type="button"
            onClick={(e) => toggleDropdown('services', e)}
            aria-expanded={activeDropdown === 'services'}
          >
            Services{' '}
            <svg viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <div className="dropdown">
            <a href="#services" onClick={handleLinkClick}>General &amp; Preventive<span>Checkups, cleanings, X-rays</span></a>
            <a href="#services" onClick={handleLinkClick}>Cosmetic Dentistry<span>Veneers, whitening, bonding</span></a>
            <a href="#services" onClick={handleLinkClick}>Orthodontics<span>Invisalign &amp; clear aligners</span></a>
            <a href="#services" onClick={handleLinkClick}>Restorative Care<span>Implants, crowns, root canals</span></a>
            <a href="#services" onClick={handleLinkClick}>Pediatric Dentistry<span>Gentle care for kids</span></a>
          </div>
        </div>

        <div className={`nav-item ${activeDropdown === 'patients' ? 'open' : ''}`}>
          <button
            type="button"
            onClick={(e) => toggleDropdown('patients', e)}
            aria-expanded={activeDropdown === 'patients'}
          >
            Patients{' '}
            <svg viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <div className="dropdown">
            <a href="#book" onClick={handleLinkClick}>New Patient Forms<span>Fill out before your visit</span></a>
            <a href="#why" onClick={handleLinkClick}>Insurance &amp; Billing<span>Plans we accept</span></a>
            <a href="#stories" onClick={handleLinkClick}>Patient Stories<span>Real reviews from Kanpur</span></a>
            <a href="#gallery" onClick={handleLinkClick}>Smile Gallery<span>Before &amp; after results</span></a>
          </div>
        </div>

        <div className={`nav-item ${activeDropdown === 'about' ? 'open' : ''}`}>
          <button
            type="button"
            onClick={(e) => toggleDropdown('about', e)}
            aria-expanded={activeDropdown === 'about'}
          >
            About{' '}
            <svg viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <div className="dropdown">
            <a href="#team" onClick={handleLinkClick}>Meet the Team<span>Our dentists &amp; hygienists</span></a>
            <a href="#why" onClick={handleLinkClick}>Our Approach<span>Why patients choose us</span></a>
            <a href="#footer" onClick={handleLinkClick}>Visit &amp; Hours<span>Address, map, timings</span></a>
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
