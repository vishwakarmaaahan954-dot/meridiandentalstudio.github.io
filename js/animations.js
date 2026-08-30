/**
 * ==============================================================================
 * MERIDIAN DENTAL STUDIO — ANIMATIONS MODULE (js/animations.js)
 * ==============================================================================
 * This module handles:
 * 1. Staggered Scroll-Reveal Animations on scroll into viewport
 * 2. Interactive 3D Mouse Parallax Tilt on the hero tooth stage
 */

/**
 * Initializes IntersectionObserver to smoothly reveal cards, headings, and
 * sections with a subtle staggered delay as they scroll into view.
 */
export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  // Enable animation styles only once JS and IntersectionObserver are ready
  document.documentElement.classList.add('reveal-ready');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('in'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        // Unobserve after animating once to conserve performance
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  // Assign staggered transition delays for grid elements in the same row
  revealElements.forEach((el, index) => {
    el.style.transitionDelay = `${(index % 6) * 60}ms`;
    revealObserver.observe(el);
  });
}

/**
 * Sets up 3D perspective mouse-tracking parallax on the hero tooth model.
 * When the user moves the cursor over the tooth stage, the tooth tilts to follow.
 * Honors the 'prefers-reduced-motion' accessibility setting.
 */
export function initToothParallax() {
  const stage = document.querySelector('.tooth-stage');
  const tooth = document.querySelector('.tooth-3d');

  // Skip interactive parallax if elements don't exist or reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!stage || !tooth || prefersReducedMotion) return;

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    // Normalize coordinates to -0.5 to +0.5 from center
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Apply 3D rotation based on mouse offset
    tooth.style.transform = `rotateX(${-y * 18}deg) rotateY(${x * 26}deg)`;
    tooth.style.animationPlayState = 'paused';
  });

  stage.addEventListener('mouseleave', () => {
    // Reset to default automated CSS animation
    tooth.style.transform = '';
    tooth.style.animationPlayState = 'running';
  });
}
