/**
 * ==============================================================================
 * MERIDIAN DENTAL STUDIO — ALL-IN-ONE APPLICATION SCRIPT (js/app.js)
 * ==============================================================================
 * Self-contained bundle compatible with both local file:// loading and HTTP servers.
 * Features:
 * 1. Sticky Header scroll blur & background
 * 2. Desktop Rail Dot Scrollspy
 * 3. Mobile Hamburger Navigation Drawer
 * 4. Staggered Scroll-Reveal Animations (with safe progressive enhancement)
 * 5. 3D Interactive Tooth Parallax Tilt
 * 6. Testimonial Quote Carousel & Indicators
 * 7. Interactive Appointment Booking Form Feedback
 */

(function () {
  'use strict';

  /* ============================================================================
   * 1. NAVIGATION MODULE
   * ============================================================================ */
  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    const handleScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  function initScrollSpy() {
    const dots = document.querySelectorAll('.rail-dot');
    if (!dots.length) return;

    const sections = Array.from(dots)
      .map(dot => document.getElementById(dot.dataset.section))
      .filter(Boolean);

    const observerOptions = {
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dots.forEach(dot => dot.classList.remove('active'));
          const activeDot = Array.from(dots).find(
            dot => dot.dataset.section === entry.target.id
          );
          if (activeDot) {
            activeDot.classList.add('active');
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  function initMobileNav() {
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

    document.addEventListener('click', (e) => {
      if (mainNav.getAttribute('data-mobile-open') === 'true' && !mainNav.contains(e.target) && !hamburger.contains(e.target)) {
        mainNav.style.display = '';
        mainNav.removeAttribute('data-mobile-open');
      }
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.getAttribute('data-mobile-open') === 'true') {
          mainNav.style.display = '';
          mainNav.removeAttribute('data-mobile-open');
        }
      });
    });
  }

  /* ============================================================================
   * 2. ANIMATIONS MODULE (Scroll Reveal & 3D Parallax)
   * ============================================================================ */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    // Enable animation styles only once JS and IntersectionObserver are ready
    document.documentElement.classList.add('reveal-ready');

    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers without IntersectionObserver
      revealElements.forEach(el => el.classList.add('in'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach((el, index) => {
      el.style.transitionDelay = `${(index % 6) * 60}ms`;
      revealObserver.observe(el);
    });
  }

  function initToothParallax() {
    const stage = document.querySelector('.tooth-stage');
    const tooth = document.querySelector('.tooth-3d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!stage || !tooth || prefersReducedMotion) return;

    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      tooth.style.transform = `rotateX(${-y * 18}deg) rotateY(${x * 26}deg)`;
      tooth.style.animationPlayState = 'paused';
    });

    stage.addEventListener('mouseleave', () => {
      tooth.style.transform = '';
      tooth.style.animationPlayState = 'running';
    });
  }

  /* ============================================================================
   * 3. TESTIMONIALS MODULE
   * ============================================================================ */
  function initTestimonials() {
    const quotes = document.querySelectorAll('.quote-text');
    const quoteDots = document.querySelectorAll('.quote-dots button');
    const quoteAuthorEl = document.getElementById('quoteAuthor');

    if (!quotes.length || !quoteDots.length || !quoteAuthorEl) return;

    const authors = [
      '— Priya M., patient since 2021',
      '— Rohit K., parent of a 6-year-old patient',
      '— Sanya T., patient since 2019'
    ];

    let currentIndex = 0;
    let autoPlayInterval = null;

    function showQuote(index) {
      quotes.forEach(quote => quote.classList.remove('active'));
      quoteDots.forEach(dot => dot.classList.remove('active'));

      quotes[index].classList.add('active');
      quoteDots[index].classList.add('active');
      quoteAuthorEl.textContent = authors[index] || '';
      currentIndex = index;
    }

    function startAutoPlay() {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(() => {
        showQuote((currentIndex + 1) % quotes.length);
      }, 5500);
    }

    quoteDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showQuote(index);
        startAutoPlay();
      });
    });

    startAutoPlay();
  }

  /* ============================================================================
   * 4. BOOKING FORM MODULE
   * ============================================================================ */
  function initBookingForm() {
    const form = document.querySelector('.book-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const submitBtn = form.querySelector('.submit');
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Request sent ✓';
        submitBtn.style.backgroundColor = 'var(--pine-light)';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
          form.reset();
        }, 4000);
      }
    });
  }

  /* ============================================================================
   * APP BOOTSTRAP
   * ============================================================================ */
  function boot() {
    initHeaderScroll();
    initScrollSpy();
    initMobileNav();
    initScrollReveal();
    initToothParallax();
    initTestimonials();
    initBookingForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
