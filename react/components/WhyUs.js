import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * ==============================================================================
 * WHY US COMPONENT (react/components/WhyUs.tsx)
 * ==============================================================================
 * Highlights clinic performance statistics and patient trust numbers.
 */
export const WhyUs = () => {
    const stats = [
        { value: '18', label: 'Years in practice' },
        { value: '12,400+', label: 'Patients treated' },
        { value: '4.9 / 5', label: 'Average patient rating' },
        { value: '97%', label: 'Report pain-free procedures' }
    ];
    return (_jsxs("section", { id: "why", children: [_jsxs("div", { className: "section-head reveal", children: [_jsx("span", { className: "eyebrow", children: "Why Patients Stay" }), _jsx("h2", { children: "Numbers earned one appointment at a time." }), _jsx("p", { children: "We track how we're doing the same way we track a filling \u2014 carefully, and over time." })] }), _jsx("div", { className: "stats-row", children: stats.map((stat, idx) => (_jsxs("div", { className: "stat-block reveal", children: [_jsx("strong", { children: stat.value }), _jsx("span", { children: stat.label })] }, idx))) })] }));
};
