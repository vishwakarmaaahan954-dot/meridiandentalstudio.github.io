import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
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
export const App = () => {
    useEffect(() => {
        document.documentElement.classList.add('reveal-ready');
        // Scroll reveal observer for elements with .reveal class
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
        revealElements.forEach((el, index) => {
            el.style.transitionDelay = `${(index % 6) * 60}ms`;
            observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);
    return (_jsxs("div", { className: "meridian-app", children: [_jsx(SidebarRail, {}), _jsxs("div", { className: "rail-offset", children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(Services, {}), _jsx(WhyUs, {}), _jsx(Team, {}), _jsx(Gallery, {}), _jsx(Testimonials, {}), _jsx(BookingForm, {}), _jsx(Footer, {})] })] }));
};
export default App;
