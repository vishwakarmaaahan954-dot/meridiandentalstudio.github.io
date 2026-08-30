import React from 'react';
import { ServiceItem } from '../types';

/**
 * ==============================================================================
 * SERVICES COMPONENT (react/components/Services.tsx)
 * ==============================================================================
 * Displays the 6 core dental service cards with icons, descriptions, and prices.
 */
export const Services: React.FC = () => {
  const servicesList: ServiceItem[] = [
    {
      id: 'general',
      title: 'General & Preventive',
      description: 'Checkups, cleanings, digital X-rays, and fluoride care to keep small issues small.',
      price: 'From ₹800',
      iconSvgPath: 'M12 21s-7-6.5-7-12a5 5 0 0 1 10 0 5 5 0 0 1 10 0c0 5.5-7 12-7 12'
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      description: 'Veneers, whitening, and bonding designed to match your face, not a catalogue smile.',
      price: 'From ₹4,500',
      iconSvgPath: 'M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z'
    },
    {
      id: 'ortho',
      title: 'Orthodontics',
      description: 'Invisalign and clear aligners tracked with 3D scans, no goopy impressions.',
      price: 'From ₹38,000',
      iconSvgPath: 'rect'
    },
    {
      id: 'pediatric',
      title: 'Pediatric Dentistry',
      description: 'First visits, sealants, and gentle habits coaching for patients under twelve.',
      price: 'From ₹700',
      iconSvgPath: 'circle'
    },
    {
      id: 'implants',
      title: 'Dental Implants',
      description: 'Single-tooth to full-arch implants planned with 3D imaging for a precise fit.',
      price: 'From ₹28,000',
      iconSvgPath: 'M12 2v20M4 8h16M6 14h12'
    },
    {
      id: 'emergency',
      title: 'Emergency Care',
      description: "Same-day slots for chipped teeth, sudden pain, and other can't-wait moments.",
      price: 'Priority booking',
      iconSvgPath: 'M12 6v6l4 2'
    }
  ];

  return (
    <section id="services">
      <div className="section-head reveal">
        <span className="eyebrow">What We Treat</span>
        <h2>Care built around one mouth at a time.</h2>
        <p>
          Every treatment plan starts with a conversation, not a checklist. Here's
          where most patients begin.
        </p>
      </div>

      <div className="service-grid">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card reveal">
            <div className="icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                {service.iconSvgPath === 'rect' ? (
                  <>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <path d="M8 12h8M12 8v8" strokeLinecap="round" />
                  </>
                ) : service.iconSvgPath === 'circle' ? (
                  <>
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 21v-2a6 6 0 0 1 12 0v2" strokeLinecap="round" />
                  </>
                ) : service.iconSvgPath === 'M12 6v6l4 2' ? (
                  <>
                    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" />
                  </>
                ) : (
                  <path
                    d={service.iconSvgPath}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="price">{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
