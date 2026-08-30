import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * ==============================================================================
 * GALLERY COMPONENT (react/components/Gallery.tsx)
 * ==============================================================================
 * Displays a horizontally scrollable strip of treatment outcomes and clinic space.
 */
export const Gallery = () => {
    const galleryItems = [
        {
            imageUrl: './assets/images/gallery-veneers.jpg',
            tag: 'Veneers · 6 visits',
            altText: 'Smile result after veneers treatment'
        },
        {
            imageUrl: './assets/images/gallery-whitening.jpg',
            tag: 'Whitening · 2 visits',
            altText: 'Smile result after whitening treatment'
        },
        {
            imageUrl: './assets/images/gallery-invisalign.jpg',
            tag: 'Invisalign · 11 months',
            altText: 'Smile result after Invisalign treatment'
        },
        {
            imageUrl: './assets/images/gallery-implant.jpg',
            tag: 'Implant · 1 tooth',
            altText: 'Single tooth implant result'
        },
        {
            imageUrl: './assets/images/gallery-sterilization.jpg',
            tag: 'Our sterilization room',
            altText: 'Sterilization and dental hygiene equipment'
        }
    ];
    return (_jsxs("section", { id: "gallery", children: [_jsxs("div", { className: "section-head reveal", children: [_jsx("span", { className: "eyebrow", children: "Smile Gallery" }), _jsx("h2", { children: "A few results, with consent to share." }), _jsx("p", { children: "Every case here is a real patient who agreed to let us show their journey." })] }), _jsx("div", { className: "gallery-strip", children: galleryItems.map((item, index) => (_jsxs("div", { className: "gallery-item reveal", children: [_jsx("img", { src: item.imageUrl, alt: item.altText }), _jsx("span", { className: "tag", children: item.tag })] }, index))) })] }));
};
