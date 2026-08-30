/**
 * ==============================================================================
 * MERIDIAN DENTAL STUDIO — NAVIGATION MODULE (js/navigation.js)
 * ==============================================================================
 * This module handles all navigation-related behaviors:
 * 1. Sticky Header Background Blur on Scroll
 * 2. Sidebar Rail Dot Scrollspy (IntersectionObserver)
 * 3. Mobile Hamburger Menu Toggle & Auto-close on link click
 */

/**
 * Attaches a scroll event listener to toggle a 'scrolled' class on the site header
 * when the user scrolls down more than 30px from the top.
 */
export function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Initializes IntersectionObserver to monitor section visibility and automatically
 * highlight the active dot in the sidebar quick-nav rail.
 */
export function initScrollSpy() {
  const dots = document.querySelectorAll('.rail-dot');
  if (!dots.length) return;

  // Find corresponding DOM section elements using data-section attribute
  const sections = Array.from(dots)
    .map(dot => document.getElementById(dot.dataset.section))
    .filter(Boolean);

  // Setup observer with balanced top/bottom margins for accurate section activation
  const observerOptions = {
    rootMargin: '-40% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all dots
        dots.forEach(dot => dot.classList.remove('active'));

        // Activate the dot matching the currently intersecting section ID
        const activeDot = Array.from(dots).find(
          dot => dot.dataset.section === entry.target.id
        );
        if (activeDot) {
          activeDot.classList.add('active');
        }
      }
    });
  }, observerOptions);

  // Observe each target section
  sections.forEach(section => observer.observe(section));
}

/**
 * Sets up mobile hamburger navigation menu toggle, allowing mobile users
 * to open the navigation drawer and closing it when a link is clicked.
 */
export function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');
  if (!hamburger || !mainNav) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = mainNav.getAttribute('data-mobile-open') === 'true';

    if (isExpanded) {
      mainNav.style.display = '';
      mainNav.removeAttribute('data-mobile-open');
    } else {
      mainNav.style.cssText = `
        display: flex;
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: #ffffff;
        padding: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        z-index: 200;
        border-bottom: 1px solid var(--line);
      `;
      mainNav.setAttribute('data-mobile-open', 'true');
    }
  });

  // Automatically close mobile menu when clicking any link inside
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        mainNav.style.display = '';
        mainNav.removeAttribute('data-mobile-open');
      }
    });
  });
}
