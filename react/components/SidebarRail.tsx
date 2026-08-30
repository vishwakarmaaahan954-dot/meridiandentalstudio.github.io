import React, { useEffect, useState } from 'react';

/**
 * ==============================================================================
 * SIDEBAR RAIL COMPONENT (react/components/SidebarRail.tsx)
 * ==============================================================================
 * Fixed left navigation rail displaying section indicators and quick phone link.
 * Uses IntersectionObserver to track and highlight the currently active section.
 */
export const SidebarRail: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navItems = [
    { id: 'hero', label: 'Welcome' },
    { id: 'services', label: 'Services' },
    { id: 'why', label: 'Why Us' },
    { id: 'team', label: 'Our Team' },
    { id: 'gallery', label: 'Smile Gallery' },
    { id: 'stories', label: 'Stories' },
    { id: 'book', label: 'Book a Visit' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="rail" aria-label="Quick Section Navigation">
      <a href="#hero" aria-label="Meridian Home">
        <svg className="rail-logo" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 6C13 6 9 10.5 9 16.5C9 22 11.5 27 13.3 31.5C14 33.3 15.6 34 16.8 32.4C18 30.8 18.3 26 20 26C21.7 26 22 30.8 23.2 32.4C24.4 34 26 33.3 26.7 31.5C28.5 27 31 22 31 16.5C31 10.5 27 6 20 6Z"
            stroke="#fff"
            strokeWidth="1.6"
            fill="rgba(255,255,255,0.08)"
          />
        </svg>
      </a>

      <nav className="rail-dots">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`rail-dot ${activeSection === item.id ? 'active' : ''}`}
            data-label={item.label}
            aria-label={`Jump to ${item.label}`}
          />
        ))}
      </nav>

      <div className="rail-foot">
        <a href="tel:+915122345678" aria-label="Call clinic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </aside>
  );
};
