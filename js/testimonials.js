/**
 * ==============================================================================
 * MERIDIAN DENTAL STUDIO — TESTIMONIALS MODULE (js/testimonials.js)
 * ==============================================================================
 * This module manages the interactive testimonial quote slider:
 * 1. Active quote switching with smooth opacity transitions
 * 2. Synchronized dot indicators
 * 3. Automatic rotation interval with user click interaction override
 */

/**
 * Initializes the testimonial quote carousel with auto-rotation and interactive pagination dots.
 */
export function initTestimonials() {
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

  /**
   * Displays the testimonial at the given index.
   * @param {number} index - Index of the quote to show.
   */
  function showQuote(index) {
    quotes.forEach(quote => quote.classList.remove('active'));
    quoteDots.forEach(dot => dot.classList.remove('active'));

    quotes[index].classList.add('active');
    quoteDots[index].classList.add('active');
    quoteAuthorEl.textContent = authors[index] || '';
    currentIndex = index;
  }

  /**
   * Starts or resets the automatic rotation interval (5.5 seconds per quote).
   */
  function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
      showQuote((currentIndex + 1) % quotes.length);
    }, 5500);
  }

  // Attach click listeners to pagination dots
  quoteDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showQuote(index);
      startAutoPlay(); // Restart timer on user interaction
    });
  });

  // Start auto-advancing slides
  startAutoPlay();
}
