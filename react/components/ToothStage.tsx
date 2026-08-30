import React, { useRef, useEffect } from 'react';

/**
 * ==============================================================================
 * TOOTH STAGE COMPONENT (react/components/ToothStage.tsx)
 * ==============================================================================
 * Renders the 3D rotating tooth signature model with orbital rings, sparkles,
 * and mouse-tracking parallax tilt interaction.
 */
export const ToothStage: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const toothRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const tooth = toothRef.current;
    if (!stage || !tooth) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
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

  return (
    <div className="tooth-stage" ref={stageRef} aria-hidden="true">
      <div className="tooth-orbit-ring" />
      <div className="tooth-orbit-ring r2" />
      <div className="tooth-3d" ref={toothRef}>
        <div className="tooth-face front" />
        <div className="tooth-face back" />
        <div className="tooth-face side-l" />
        <div className="tooth-face side-r" />
        <div className="tooth-crack" />
        <div className="tooth-sparkle" />
      </div>
      <div className="stat-chip c1">
        <i />0% pain-free promise
      </div>
      <div className="stat-chip c2">
        <i />Same-week appointments
      </div>
    </div>
  );
};
