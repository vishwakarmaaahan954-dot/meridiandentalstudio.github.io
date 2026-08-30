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

  const closeMobileMenu = () => {
    mainNav.removeAttribute('data-mobile-open');
    mainNav.style.display = '';
    hamburger.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.nav-item.open').forEach(item => {
      item.classList.remove('open');
      const btn = item.querySelector('button');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = mainNav.getAttribute('data-mobile-open') === 'true';

    if (isExpanded) {
      closeMobileMenu();
    } else {
      mainNav.setAttribute('data-mobile-open', 'true');
      hamburger.setAttribute('aria-expanded', 'true');
    }
  });

  document.addEventListener('click', (e) => {
    if (mainNav.getAttribute('data-mobile-open') === 'true' && !mainNav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Automatically close mobile menu when clicking any link inside
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.getAttribute('data-mobile-open') === 'true' || window.innerWidth <= 900) {
        closeMobileMenu();
      }
    });
  });

  // Reset mobile state and close open mobile dropdowns when viewport switches to desktop
  const desktopMedia = window.matchMedia('(min-width: 901px)');
  const handleViewportChange = (e) => {
    if (e.matches) {
      closeMobileMenu();
    }
  };
  if (desktopMedia.addEventListener) {
    desktopMedia.addEventListener('change', handleViewportChange);
  } else {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMobileMenu();
    }, { passive: true });
  }
}

/**
 * Initializes interactive click-to-toggle behavior for dropdown menus in the header navigation.
 * Clicking a dropdown button toggles it open/closed. Clicking outside or pressing Escape closes it.
 */
export function initDropdowns() {
  const navItems = document.querySelectorAll('.nav-item');
  if (!navItems.length) return;

  navItems.forEach(item => {
    const button = item.querySelector('button');
    if (!button) return;

    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains('open');

      // Close all other dropdowns
      navItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          const otherBtn = otherItem.querySelector('button');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current dropdown: click to open, click again to close
      if (isOpen) {
        item.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close open dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    navItems.forEach(item => {
      if (!item.contains(e.target)) {
        item.classList.remove('open');
        const btn = item.querySelector('button');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close open dropdowns on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navItems.forEach(item => {
        item.classList.remove('open');
        const btn = item.querySelector('button');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close dropdown when any link inside it is clicked
  document.querySelectorAll('.dropdown a').forEach(link => {
    link.addEventListener('click', () => {
      navItems.forEach(item => {
        item.classList.remove('open');
        const btn = item.querySelector('button');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    });
  });
}
