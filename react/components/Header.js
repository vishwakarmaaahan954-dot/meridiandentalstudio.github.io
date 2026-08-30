import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
/**
 * ==============================================================================
 * HEADER COMPONENT (react/components/Header.tsx)
 * ==============================================================================
 * Sticky frosted-glass header with dropdown menus, mobile navigation drawer,
 * and background blur transition upon scrolling.
 */
export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const toggleMobileNav = () => {
        setIsMobileOpen((prev) => !prev);
    };
    const closeMobileNav = () => {
        setIsMobileOpen(false);
    };
    return (_jsxs("header", { className: `site-header ${isScrolled ? 'scrolled' : ''}`, id: "siteHeader", children: [_jsxs("a", { className: "brand", href: "#hero", onClick: closeMobileNav, children: [_jsx("svg", { viewBox: "0 0 40 40", fill: "none", children: _jsx("path", { d: "M20 6C13 6 9 10.5 9 16.5C9 22 11.5 27 13.3 31.5C14 33.3 15.6 34 16.8 32.4C18 30.8 18.3 26 20 26C21.7 26 22 30.8 23.2 32.4C24.4 34 26 33.3 26.7 31.5C28.5 27 31 22 31 16.5C31 10.5 27 6 20 6Z", stroke: "#1F4B43", strokeWidth: "1.6", fill: "#DCE7E1" }) }), _jsxs("span", { className: "brand-text", children: [_jsx("span", { className: "name", children: "Meridian Dental Studio" }), _jsx("span", { className: "tag", children: "Dr. Aanya Sharma \u00B7 Kanpur" })] })] }), _jsxs("nav", { className: "main-nav", style: isMobileOpen
                    ? {
                        display: 'flex',
                        position: 'fixed',
                        top: '70px',
                        left: 0,
                        right: 0,
                        flexDirection: 'column',
                        background: '#ffffff',
                        padding: '20px',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        zIndex: 200,
                        borderBottom: '1px solid var(--line)'
                    }
                    : undefined, children: [_jsxs("div", { className: "nav-item", children: [_jsxs("button", { type: "button", children: ["Services", ' ', _jsx("svg", { viewBox: "0 0 12 8", fill: "none", children: _jsx("path", { d: "M1 1l5 5 5-5", stroke: "currentColor", strokeWidth: "1.6" }) })] }), _jsxs("div", { className: "dropdown", children: [_jsxs("a", { href: "#services", onClick: closeMobileNav, children: ["General & Preventive", _jsx("span", { children: "Checkups, cleanings, X-rays" })] }), _jsxs("a", { href: "#services", onClick: closeMobileNav, children: ["Cosmetic Dentistry", _jsx("span", { children: "Veneers, whitening, bonding" })] }), _jsxs("a", { href: "#services", onClick: closeMobileNav, children: ["Orthodontics", _jsx("span", { children: "Invisalign & clear aligners" })] }), _jsxs("a", { href: "#services", onClick: closeMobileNav, children: ["Restorative Care", _jsx("span", { children: "Implants, crowns, root canals" })] }), _jsxs("a", { href: "#services", onClick: closeMobileNav, children: ["Pediatric Dentistry", _jsx("span", { children: "Gentle care for kids" })] })] })] }), _jsxs("div", { className: "nav-item", children: [_jsxs("button", { type: "button", children: ["Patients", ' ', _jsx("svg", { viewBox: "0 0 12 8", fill: "none", children: _jsx("path", { d: "M1 1l5 5 5-5", stroke: "currentColor", strokeWidth: "1.6" }) })] }), _jsxs("div", { className: "dropdown", children: [_jsxs("a", { href: "#book", onClick: closeMobileNav, children: ["New Patient Forms", _jsx("span", { children: "Fill out before your visit" })] }), _jsxs("a", { href: "#why", onClick: closeMobileNav, children: ["Insurance & Billing", _jsx("span", { children: "Plans we accept" })] }), _jsxs("a", { href: "#stories", onClick: closeMobileNav, children: ["Patient Stories", _jsx("span", { children: "Real reviews from Kanpur" })] }), _jsxs("a", { href: "#gallery", onClick: closeMobileNav, children: ["Smile Gallery", _jsx("span", { children: "Before & after results" })] })] })] }), _jsxs("div", { className: "nav-item", children: [_jsxs("button", { type: "button", children: ["About", ' ', _jsx("svg", { viewBox: "0 0 12 8", fill: "none", children: _jsx("path", { d: "M1 1l5 5 5-5", stroke: "currentColor", strokeWidth: "1.6" }) })] }), _jsxs("div", { className: "dropdown", children: [_jsxs("a", { href: "#team", onClick: closeMobileNav, children: ["Meet the Team", _jsx("span", { children: "Our dentists & hygienists" })] }), _jsxs("a", { href: "#why", onClick: closeMobileNav, children: ["Our Approach", _jsx("span", { children: "Why patients choose us" })] }), _jsxs("a", { href: "#footer", onClick: closeMobileNav, children: ["Visit & Hours", _jsx("span", { children: "Address, map, timings" })] })] })] })] }), _jsx("a", { className: "book-btn", href: "#book", onClick: closeMobileNav, children: "Book a Visit" }), _jsx("button", { className: "hamburger", "aria-label": "Toggle navigation menu", type: "button", onClick: toggleMobileNav, children: _jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "#142420", strokeWidth: "1.8", children: _jsx("path", { d: "M2 5h16M2 10h16M2 15h16" }) }) })] }));
};
