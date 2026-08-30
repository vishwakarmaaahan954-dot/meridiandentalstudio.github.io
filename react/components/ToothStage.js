import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
/**
 * ==============================================================================
 * TOOTH STAGE COMPONENT (react/components/ToothStage.tsx)
 * ==============================================================================
 * Renders the 3D rotating tooth signature model with orbital rings, sparkles,
 * and mouse-tracking parallax tilt interaction.
 */
export const ToothStage = () => {
    const stageRef = useRef(null);
    const toothRef = useRef(null);
    useEffect(() => {
        const stage = stageRef.current;
        const tooth = toothRef.current;
        if (!stage || !tooth)
            return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion)
            return;
        const handleMouseMove = (e) => {
            const rect = stage.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            tooth.style.transform = `rotateX(${-y * 18}deg) rotateY(${x * 26}deg)`;
            tooth.style.animationPlayState = 'paused';
        };
        const handleMouseLeave = () => {
            tooth.style.transform = '';
            tooth.style.animationPlayState = 'running';
        };
        stage.addEventListener('mousemove', handleMouseMove);
        stage.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            stage.removeEventListener('mousemove', handleMouseMove);
            stage.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    return (_jsxs("div", { className: "tooth-stage", ref: stageRef, "aria-hidden": "true", children: [_jsx("div", { className: "tooth-orbit-ring" }), _jsx("div", { className: "tooth-orbit-ring r2" }), _jsxs("div", { className: "tooth-3d", ref: toothRef, children: [_jsx("div", { className: "tooth-face front" }), _jsx("div", { className: "tooth-face back" }), _jsx("div", { className: "tooth-face side-l" }), _jsx("div", { className: "tooth-face side-r" }), _jsx("div", { className: "tooth-crack" }), _jsx("div", { className: "tooth-sparkle" })] }), _jsxs("div", { className: "stat-chip c1", children: [_jsx("i", {}), "0% pain-free promise"] }), _jsxs("div", { className: "stat-chip c2", children: [_jsx("i", {}), "Same-week appointments"] })] }));
};
