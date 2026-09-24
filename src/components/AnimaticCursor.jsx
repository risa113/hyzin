import { useEffect, useRef, useState } from 'react';

/**
 * AnimaticCursor
 * Ultra-fast, responsive luxury custom cursor in Gold Sand & Coffee styling.
 * Features:
 * - Dual-layer system: Zero-lag pinpoint inner core + high-speed fluid magnetic outer ring
 * - Dynamic velocity stretching & responsive click contraction
 * - Hover detection on interactive elements (buttons, links, inputs, cards)
 * - Automatic disable on touch-only mobile devices (clean fallback)
 */
export default function AnimaticCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // Real mouse coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  // Smoothly interpolated ring coordinates
  const ringPos = useRef({ x: -100, y: -100 });
  // Velocity calculation for dynamic stretching
  const prevPos = useRef({ x: -100, y: -100 });
  const velocity = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-only devices to avoid awkward cursors on mobile screens
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        !window.matchMedia('(pointer: fine)').matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant inner dot tracking (zero perceptible delay)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Track hoverable / interactive elements
    const handleElementHover = (e) => {
      const target = e.target;
      const interactiveEl = target.closest(
        'button, a, input, select, textarea, [role="button"], .cursor-pointer, .animatic-reflection'
      );

      if (interactiveEl) {
        setIsHovered(true);
        // Optional custom data-cursor label
        const customLabel = interactiveEl.getAttribute('data-cursor') || '';
        setHoverText(customLabel);
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleElementHover, { passive: true });

    // 60-120fps smooth lerp loop for the outer luxury magnetic ring
    let animationFrameId;
    const lerpFactor = 0.28; // Snappy yet liquid smooth

    const render = () => {
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;

      ringPos.current.x += dx * lerpFactor;
      ringPos.current.y += dy * lerpFactor;

      // Calculate instant speed for dynamic animatic stretch
      const vx = mousePos.current.x - prevPos.current.x;
      const vy = mousePos.current.y - prevPos.current.y;
      const speed = Math.sqrt(vx * vx + vy * vy);
      velocity.current = velocity.current * 0.85 + speed * 0.15;
      prevPos.current = { ...mousePos.current };

      if (ringRef.current) {
        const scale = isClicking ? 0.75 : isHovered ? 1.6 : 1;
        // Subtle stretch angle when moving quickly
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const stretch = Math.min(velocity.current * 0.015, 0.35);

        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${scale + stretch}, ${scale - stretch * 0.5})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isClicking, isHovered, isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Ultra-speed Pinpoint Core Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D4AF37] pointer-events-none transition-transform duration-75 shadow-[0_0_10px_#D4AF37] ${
          isHovered ? 'scale-0' : 'scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* 2. Fluid Animatic Outer Magnetic Ring with Gold Sand Glow */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height,background-color,border-color] duration-200 flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 bg-[#D4AF37]/15 border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] backdrop-blur-[1px]'
            : 'w-8 h-8 bg-transparent border border-[#D4AF37]/70 shadow-[0_0_12px_rgba(212,175,55,0.2)]'
        }`}
        style={{ willChange: 'transform' }}
      >
        {/* Subtle center crosshair dot when hovered */}
        {isHovered && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
        )}
        {hoverText && (
          <span className="text-[9px] font-bold uppercase tracking-wider text-[#FAF7F0] bg-[#2B1C19]/90 px-1.5 py-0.5 rounded border border-[#D4AF37]/40 shadow">
            {hoverText}
          </span>
        )}
      </div>
    </div>
  );
}
