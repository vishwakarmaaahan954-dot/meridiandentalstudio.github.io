import React, { useState } from 'react';

/**
 * ==============================================================================
 * FOOTER COMPONENT (react/components/Footer.tsx)
 * ==============================================================================
 * Renders the site footer with brand information, social channels, navigation
 * links, clinic operating hours, and newsletter signup form.
 */
export const Footer: React.FC = () => {
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer id="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#hero">
            <svg viewBox="0 0 40 40" fill="none" width="30" height="30">
              <path
                d="M20 6C13 6 9 10.5 9 16.5C9 22 11.5 27 13.3 31.5C14 33.3 15.6 34 16.8 32.4C18 30.8 18.3 26 20 26C21.7 26 22 30.8 23.2 32.4C24.4 34 26 33.3 26.7 31.5C28.5 27 31 22 31 16.5C31 10.5 27 6 20 6Z"
                stroke="#fff"
                strokeWidth="1.6"
                fill="rgba(255,255,255,0.06)"
              />
            </svg>
            <span className="brand-text">
              <span className="name">Meridian Dental Studio</span>
              <span className="tag">Since 2008</span>
            </span>
          </a>
          <p>A boutique dental practice in Kanpur focused on calm, modern, patient-first care.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#gallery">Smile Gallery</a></li>
            <li><a href="#stories">Patient Stories</a></li>
            <li><a href="#book">Book a Visit</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+915122345678">+91 512 234 5678</a></li>
            <li><a href="mailto:hello@meridiandental.example">hello@meridiandental.example</a></li>
            <li>14 Mall Road, Civil Lines<br />Kanpur, UP 208001</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <div className="hours-row"><span>Mon – Fri</span><span>9:00 – 19:00</span></div>
          <div className="hours-row"><span>Saturday</span><span>9:00 – 17:00</span></div>
          <div className="hours-row"><span>Sunday</span><span>By appointment</span></div>
          <form className="newsletter" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Email for offers &amp; reminders"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit" aria-label="Subscribe to newsletter">
              {newsletterSubscribed ? '✓' : '→'}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Meridian Dental Studio. All dummy content for demonstration.</span>
        <span><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#footer">Back to top ↑</a></span>
      </div>
    </footer>
  );
};
