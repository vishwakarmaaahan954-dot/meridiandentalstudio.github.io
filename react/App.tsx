import React, { useEffect } from 'react';
import { SidebarRail } from './components/SidebarRail';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';

/**
 * ==============================================================================
 * APP CONTAINER (react/App.tsx)
 * ==============================================================================
 * Main React Application component that renders the full layout shell and
 * coordinates scroll-reveal observers across all sub-components.
 */
export const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready');
    // Scroll reveal observer for elements with .reveal class
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    revealElements.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${(index % 6) * 60}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="meridian-app">
      {/* 1. Desktop Fixed Navigation Rail */}
      <SidebarRail />

      {/* 2. Main Offset Container */}
      <div className="rail-offset">
        {/* Sticky Header with Navigation Dropdowns */}
        <Header />

        {/* Hero Section with 3D Animated Tooth Stage */}
        <Hero />

        {/* Services Showcase Cards */}
        <Services />

        {/* Practice Stats & Value Proposition */}
        <WhyUs />

        {/* Medical Specialists Showcase */}
        <Team />

        {/* Before & After Smile Gallery */}
        <Gallery />

        {/* Interactive Patient Reviews Carousel */}
        <Testimonials />

        {/* Appointment Reservation Form */}
        <BookingForm />

        {/* Global Footer & Operating Hours */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
