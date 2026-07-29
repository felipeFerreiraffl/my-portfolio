"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const targetRef = useRef({ x: 0, y: 0 });
  const dotPosRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const dotScaleRef = useRef(1);
  const ringScaleRef = useRef(1);

  useEffect(() => {
    let rafId: number;

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const handleMouseMove = (e: MouseEvent) => (targetRef.current = { x: e.clientX, y: e.clientY });
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHoveringRef.current = !!target.closest("[data-cursor-hover]");
    };

    const animate = () => {
      dotPosRef.current.x = lerp(dotPosRef.current.x, targetRef.current.x, 0.3);
      dotPosRef.current.y = lerp(dotPosRef.current.y, targetRef.current.y, 0.3);

      ringPosRef.current.x = lerp(ringPosRef.current.x, targetRef.current.x, 0.15);
      ringPosRef.current.y = lerp(ringPosRef.current.y, targetRef.current.y, 0.15);

      const dotTargetScale = isHoveringRef.current ? 1.6 : 1;
      const ringTargetScale = isHoveringRef.current ? 1.2 : 1;
      dotScaleRef.current = lerp(dotScaleRef.current, dotTargetScale, 0.3);
      ringScaleRef.current = lerp(ringScaleRef.current, ringTargetScale, 0.3);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPosRef.current.x}px, ${dotPosRef.current.y}px, 0) translate(-50%, -50%) scale(${dotScaleRef.current})`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%) scale(${ringScaleRef.current})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed lg:block hidden top-0 left-0 size-7 border-[1.5px] border-main rounded-full pointer-events-none z-9999 will-change-transform"
      />
      <div
        ref={dotRef}
        className="fixed lg:block hidden top-0 left-0 size-1.5 bg-main rounded-full pointer-events-none z-9999 will-change-transform"
      />
    </>
  );
}
