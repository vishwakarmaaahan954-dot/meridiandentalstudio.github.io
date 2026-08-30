import React, { useState } from 'react';
import { BookingFormData } from '../types';

/**
 * ==============================================================================
 * BOOKING FORM COMPONENT (react/components/BookingForm.tsx)
 * ==============================================================================
 * Interactive appointment reservation form with controlled inputs, submission
 * handling, and friendly visual confirmation feedback.
 */
export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fname: '',
    lname: '',
    phone: '',
    service: 'General Checkup',
    date: '',
    time: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset feedback after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fname: '',
        lname: '',
        phone: '',
        service: 'General Checkup',
        date: '',
        time: ''
      });
    }, 4000);
  };

  return (
    <section id="book">
      <div className="book-grid">
        <div className="reveal">
          <span className="eyebrow">Book a Visit</span>
          <h2>Let's find you a time that works.</h2>
          <p>
            Fill in a few details and our front desk will confirm within one
            business day. New patients welcome.
          </p>
        </div>

        <form className="book-form reveal" onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label htmlFor="fname">First name</label>
              <input
                id="fname"
                name="fname"
                placeholder="Ananya"
                value={formData.fname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="lname">Last name</label>
              <input
                id="lname"
                name="lname"
                placeholder="Gupta"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                placeholder="+91 98xxxxxx"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>General Checkup</option>
                <option>Cosmetic Consultation</option>
                <option>Orthodontics</option>
                <option>Emergency</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="date">Preferred date</label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="time">Preferred time</label>
              <input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            className="submit"
            type="submit"
            disabled={submitted}
            style={submitted ? { backgroundColor: 'var(--pine-light)' } : undefined}
          >
            {submitted ? 'Request sent ✓' : 'Request Appointment'}
          </button>
          <p className="note">
            This is a demo form with sample data — no appointment is actually booked.
          </p>
        </form>
      </div>
    </section>
  );
};
