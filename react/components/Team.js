import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * ==============================================================================
 * TEAM COMPONENT (react/components/Team.tsx)
 * ==============================================================================
 * Showcases the dental specialists, their roles, and professional backgrounds.
 */
export const Team = () => {
    const teamMembers = [
        {
            name: 'Dr. Aanya Sharma',
            role: 'Founder · Cosmetic & Restorative',
            bio: '18 years in practice, trained in full-mouth rehabilitation and digital smile design.',
            imageUrl: './assets/images/team-dr-aanya.jpg'
        },
        {
            name: 'Dr. Rohan Verma',
            role: 'Orthodontics',
            bio: 'Leads our Invisalign program with over 900 aligner cases completed.',
            imageUrl: './assets/images/team-dr-rohan.jpg'
        },
        {
            name: 'Dr. Kavya Iyer',
            role: 'Pediatric Dentistry',
            bio: 'Specializes in first visits and helping nervous young patients feel at ease.',
            imageUrl: './assets/images/team-dr-kavya.jpg'
        }
    ];
    return (_jsxs("section", { id: "team", children: [_jsxs("div", { className: "section-head reveal", children: [_jsx("span", { className: "eyebrow", children: "Meet the Team" }), _jsx("h2", { children: "Three specialists, one shared chart." }), _jsx("p", { children: "We consult on complex cases together, so your treatment plan reflects the whole team's thinking." })] }), _jsx("div", { className: "team-grid", children: teamMembers.map((member, index) => (_jsxs("div", { className: "team-card reveal", children: [_jsx("div", { className: "team-photo", children: _jsx("img", { src: member.imageUrl, alt: `${member.name}, ${member.role}` }) }), _jsxs("div", { className: "team-info", children: [_jsx("span", { className: "role", children: member.role }), _jsx("h3", { children: member.name }), _jsx("p", { children: member.bio })] })] }, index))) })] }));
};
