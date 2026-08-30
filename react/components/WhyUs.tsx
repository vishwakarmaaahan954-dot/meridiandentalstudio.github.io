import React from 'react';
import { StatItem } from '../types';

/**
 * ==============================================================================
 * WHY US COMPONENT (react/components/WhyUs.tsx)
 * ==============================================================================
 * Highlights clinic performance statistics and patient trust numbers.
 */
export const WhyUs: React.FC = () => {
  const stats: StatItem[] = [
    { value: '18', label: 'Years in practice' },
    { value: '12,400+', label: 'Patients treated' },
    { value: '4.9 / 5', label: 'Average patient rating' },
    { value: '97%', label: 'Report pain-free procedures' }
  ];

  return (
    <section id="why">
      <div className="section-head reveal">
        <span className="eyebrow">Why Patients Stay</span>
        <h2>Numbers earned one appointment at a time.</h2>
        <p>
          We track how we're doing the same way we track a filling — carefully, and
          over time.
        </p>
      </div>

      <div className="stats-row">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-block reveal">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
