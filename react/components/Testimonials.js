import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
/**
 * ==============================================================================
 * TESTIMONIALS COMPONENT (react/components/Testimonials.tsx)
 * ==============================================================================
 * Interactive testimonial quotes carousel with indicator dots and automatic
 * rotation timer (every 5.5 seconds).
 */
export const Testimonials = () => {
    const testimonials = [
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
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5500);
        return () => clearInterval(timer);
    }, [testimonials.length]);
    return (_jsxs("section", { id: "stories", children: [_jsxs("div", { className: "section-head reveal", style: { margin: '0 auto 40px' }, children: [_jsx("span", { className: "eyebrow", children: "Patient Stories" }), _jsx("h2", { children: "In their words." })] }), _jsxs("div", { className: "quote-wrap", children: [_jsx("p", { className: "quote-text active", children: testimonials[currentIndex].quote }, currentIndex), _jsx("div", { className: "quote-author", id: "quoteAuthor", children: testimonials[currentIndex].author }), _jsx("div", { className: "quote-dots", "aria-label": "Testimonial Navigation Dots", children: testimonials.map((_, index) => (_jsx("button", { type: "button", className: currentIndex === index ? 'active' : '', onClick: () => setCurrentIndex(index), "aria-label": `View quote ${index + 1}` }, index))) })] })] }));
};
