import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToothStage } from './ToothStage';
/**
 * ==============================================================================
 * HERO COMPONENT (react/components/Hero.tsx)
 * ==============================================================================
 * Renders the hero banner section with copy, CTA buttons, metrics, and 3D tooth.
 */
export const Hero = () => {
    return (_jsxs("section", { className: "hero", id: "hero", children: [_jsx("div", { className: "hero-bg-photo", "aria-hidden": "true" }), _jsxs("div", { className: "hero-grid", children: [_jsxs("div", { className: "hero-copy", children: [_jsx("span", { className: "eyebrow", children: "Kanpur's Boutique Dental Studio" }), _jsxs("h1", { children: ["Dentistry that feels like ", _jsx("em", { children: "a deep breath" }), ", not a deep drill."] }), _jsx("p", { className: "lede", children: "Meridian pairs calm, unhurried care with modern technique \u2014 from routine cleanings to full smile makeovers \u2014 for patients across Kanpur and beyond." }), _jsxs("div", { className: "hero-actions", children: [_jsx("a", { className: "btn-primary", href: "#book", children: "Book Your Visit" }), _jsx("a", { className: "btn-ghost", href: "#services", children: "Explore Services \u2192" })] }), _jsxs("div", { className: "hero-trust", children: [_jsxs("div", { children: [_jsx("strong", { children: "18" }), _jsx("span", { children: "Years in practice" })] }), _jsxs("div", { children: [_jsx("strong", { children: "12.4k" }), _jsx("span", { children: "Smiles treated" })] }), _jsxs("div", { children: [_jsx("strong", { children: "4.9\u2605" }), _jsx("span", { children: "Average rating" })] })] })] }), _jsx(ToothStage, {})] })] }));
};
