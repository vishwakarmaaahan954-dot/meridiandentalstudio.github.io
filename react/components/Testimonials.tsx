import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';

/**
 * ==============================================================================
 * TESTIMONIALS COMPONENT (react/components/Testimonials.tsx)
 * ==============================================================================
 * Interactive testimonial quotes carousel with indicator dots and automatic
 * rotation timer (every 5.5 seconds).
 */
export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: `"I'd put off a root canal for two years out of fear. Dr. Sharma talked me through every step — I barely felt anything."`,
      author: '— Priya M., patient since 2021'
    },
    {
      quote: `"My son actually asks to go back for his cleanings. Dr. Iyer has a gift with nervous kids."`,
      author: '— Rohit K., parent of a 6-year-old patient'
    },
    {
      quote: `"Eleven months of Invisalign and my bite finally feels right. The scans made it easy to see progress."`,
      author: '— Sanya T., patient since 2019'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="stories">
      <div className="section-head reveal" style={{ margin: '0 auto 40px' }}>
        <span className="eyebrow">Patient Stories</span>
        <h2>In their words.</h2>
      </div>

      <div className="quote-wrap">
        <p className="quote-text active" key={currentIndex}>
          {testimonials[currentIndex].quote}
        </p>
        <div className="quote-author" id="quoteAuthor">
          {testimonials[currentIndex].author}
        </div>

        <div className="quote-dots" aria-label="Testimonial Navigation Dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={currentIndex === index ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
