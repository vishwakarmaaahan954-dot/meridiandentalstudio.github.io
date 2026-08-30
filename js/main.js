/**
 * ==============================================================================
 * MERIDIAN DENTAL STUDIO — MAIN SCRIPT ENTRY (js/main.js)
 * ==============================================================================
 * This is the central JavaScript entry point. It imports modular functions
 * and boots up all interactive components when the DOM is ready:
 *
 * 1. navigation.js   - Header scroll blur, sidebar scrollspy, mobile navigation
 * 2. animations.js   - Scroll-triggered reveals, 3D interactive tooth parallax
 * 3. testimonials.js - Testimonial quote rotator & pagination dots
 * 4. booking.js      - Appointment booking form feedback
 * ==============================================================================
 */

import { initHeaderScroll, initScrollSpy, initMobileNav, initDropdowns } from './navigation.js';
import { initScrollReveal, initToothParallax } from './animations.js';
import { initTestimonials } from './testimonials.js';
import { initBookingForm } from './booking.js';

// Initialize all features once DOM content is ready
function initApp() {
  // Navigation & Header
  initHeaderScroll();
  initScrollSpy();
  initMobileNav();
  initDropdowns();

  // Visual Effects & Animations
  initScrollReveal();
  initToothParallax();

  // Interactive Content
  initTestimonials();
  initBookingForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

