/**
 * ==============================================================================
 * MERIDIAN DENTAL STUDIO — BOOKING FORM MODULE (js/booking.js)
 * ==============================================================================
 * This module manages the appointment request form:
 * 1. Prevents default page reload on submission
 * 2. Provides immediate, friendly visual feedback to the user
 * 3. Handles form reset and confirmation animation
 */

/**
 * Initializes the appointment booking form submission handler.
 */
export function initBookingForm() {
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

      // Reset button feedback after 4 seconds
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
        submitBtn.disabled = false;
        form.reset();
      }, 4000);
    }
  });
}
