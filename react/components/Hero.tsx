import React from 'react';
import { ToothStage } from './ToothStage';

/**
 * ==============================================================================
 * HERO COMPONENT (react/components/Hero.tsx)
 * ==============================================================================
 * Renders the hero banner section with copy, CTA buttons, metrics, and 3D tooth.
 */
export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-photo" aria-hidden="true" />
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Kanpur's Boutique Dental Studio</span>
          <h1>
            Dentistry that feels like <em>a deep breath</em>, not a deep drill.
          </h1>
          <p className="lede">
            Meridian pairs calm, unhurried care with modern technique — from routine
            cleanings to full smile makeovers — for patients across Kanpur and beyond.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="#book">
              Book Your Visit
            </a>
            <a className="btn-ghost" href="#services">
              Explore Services &rarr;
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <strong>18</strong>
              <span>Years in practice</span>
            </div>
            <div>
              <strong>12.4k</strong>
              <span>Smiles treated</span>
            </div>
            <div>
              <strong>4.9★</strong>
              <span>Average rating</span>
            </div>
          </div>
        </div>

        <ToothStage />
      </div>
    </section>
  );
};
