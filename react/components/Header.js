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
    const [activeDropdown, setActiveDropdown] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        const handleClickOutside = (e) => {
            const target = e.target;
            if (!target.closest('.nav-item')) {
                setActiveDropdown(null);
            }
        };
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setActiveDropdown(null);
                setIsMobileOpen(false);
            }
        };
        const desktopMedia = window.matchMedia('(min-width: 901px)');
        const handleViewportChange = (e) => {
            if (e.matches) {
                setIsMobileOpen(false);
                setActiveDropdown(null);
            }
        };
        if (desktopMedia.addEventListener) {
            desktopMedia.addEventListener('change', handleViewportChange);
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
            if (desktopMedia.removeEventListener) {
                desktopMedia.removeEventListener('change', handleViewportChange);
            }
        };
    }, []);
    const toggleDropdown = (name, e) => {
        e.stopPropagation();
        setActiveDropdown((prev) => (prev === name ? null : name));
    };
    const handleLinkClick = () => {
        setActiveDropdown(null);
        setIsMobileOpen(false);
    };
    const toggleMobileNav = () => {
        setIsMobileOpen((prev) => !prev);
    };
    const closeMobileNav = () => {
        setActiveDropdown(null);
        setIsMobileOpen(false);
    };
    return (_jsxs("header", { className: `site-header ${isScrolled ? 'scrolled' : ''}`, id: "siteHeader", children: [_jsxs("a", { className: "brand", href: "#hero", onClick: closeMobileNav, children: [_jsx("svg", { viewBox: "0 0 40 40", fill: "none", children: _jsx("path", { d: "M20 6C13 6 9 10.5 9 16.5C9 22 11.5 27 13.3 31.5C14 33.3 15.6 34 16.8 32.4C18 30.8 18.3 26 20 26C21.7 26 22 30.8 23.2 32.4C24.4 34 26 33.3 26.7 31.5C28.5 27 31 22 31 16.5C31 10.5 27 6 20 6Z", stroke: "#1F4B43", strokeWidth: "1.6", fill: "#DCE7E1" }) }), _jsxs("span", { className: "brand-text", children: [_jsx("span", { className: "name", children: "Meridian Dental Studio" }), _jsx("span", { className: "tag", children: "Dr. Pooja Sharma \u00B7 Kanpur" })] })] }), _jsxs("nav", { className: "main-nav", "data-mobile-open": isMobileOpen ? 'true' : undefined, children: [_jsxs("div", { className: `nav-item ${activeDropdown === 'services' ? 'open' : ''}`, children: [_jsxs("button", { type: "button", onClick: (e) => toggleDropdown('services', e), "aria-expanded": activeDropdown === 'services', children: ["Services", ' ', _jsx("svg", { viewBox: "0 0 12 8", fill: "none", children: _jsx("path", { d: "M1 1l5 5 5-5", stroke: "currentColor", strokeWidth: "1.6" }) })] }), _jsxs("div", { className: "dropdown", children: [_jsxs("a", { href: "#services", onClick: handleLinkClick, children: ["General & Preventive", _jsx("span", { children: "Checkups, cleanings, X-rays" })] }), _jsxs("a", { href: "#services", onClick: handleLinkClick, children: ["Cosmetic Dentistry", _jsx("span", { children: "Veneers, whitening, bonding" })] }), _jsxs("a", { href: "#services", onClick: handleLinkClick, children: ["Orthodontics", _jsx("span", { children: "Invisalign & clear aligners" })] }), _jsxs("a", { href: "#services", onClick: handleLinkClick, children: ["Restorative Care", _jsx("span", { children: "Implants, crowns, root canals" })] }), _jsxs("a", { href: "#services", onClick: handleLinkClick, children: ["Pediatric Dentistry", _jsx("span", { children: "Gentle care for kids" })] })] })] }), _jsxs("div", { className: `nav-item ${activeDropdown === 'patients' ? 'open' : ''}`, children: [_jsxs("button", { type: "button", onClick: (e) => toggleDropdown('patients', e), "aria-expanded": activeDropdown === 'patients', children: ["Patients", ' ', _jsx("svg", { viewBox: "0 0 12 8", fill: "none", children: _jsx("path", { d: "M1 1l5 5 5-5", stroke: "currentColor", strokeWidth: "1.6" }) })] }), _jsxs("div", { className: "dropdown", children: [_jsxs("a", { href: "#book", onClick: handleLinkClick, children: ["New Patient Forms", _jsx("span", { children: "Fill out before your visit" })] }), _jsxs("a", { href: "#why", onClick: handleLinkClick, children: ["Insurance & Billing", _jsx("span", { children: "Plans we accept" })] }), _jsxs("a", { href: "#stories", onClick: handleLinkClick, children: ["Patient Stories", _jsx("span", { children: "Real reviews from Kanpur" })] }), _jsxs("a", { href: "#gallery", onClick: handleLinkClick, children: ["Smile Gallery", _jsx("span", { children: "Before & after results" })] })] })] }), _jsxs("div", { className: `nav-item ${activeDropdown === 'about' ? 'open' : ''}`, children: [_jsxs("button", { type: "button", onClick: (e) => toggleDropdown('about', e), "aria-expanded": activeDropdown === 'about', children: ["About", ' ', _jsx("svg", { viewBox: "0 0 12 8", fill: "none", children: _jsx("path", { d: "M1 1l5 5 5-5", stroke: "currentColor", strokeWidth: "1.6" }) })] }), _jsxs("div", { className: "dropdown", children: [_jsxs("a", { href: "#team", onClick: handleLinkClick, children: ["Meet the Team", _jsx("span", { children: "Our dentists & hygienists" })] }), _jsxs("a", { href: "#why", onClick: handleLinkClick, children: ["Our Approach", _jsx("span", { children: "Why patients choose us" })] }), _jsxs("a", { href: "#footer", onClick: handleLinkClick, children: ["Visit & Hours", _jsx("span", { children: "Address, map, timings" })] })] })] })] }), _jsx("a", { className: "book-btn", href: "#book", onClick: closeMobileNav, children: "Book a Visit" }), _jsx("button", { className: "hamburger", "aria-label": "Toggle navigation menu", type: "button", onClick: toggleMobileNav, children: _jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "#142420", strokeWidth: "1.8", children: _jsx("path", { d: "M2 5h16M2 10h16M2 15h16" }) }) })] }));
};
