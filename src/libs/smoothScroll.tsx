"use client";

import "lenis/dist/lenis.css";
import ReactLenis from "lenis/react";
import { useReducedMotion } from "motion/react";
import { ReactNode } from "react";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  // O Lenis continua montado sob prefers-reduced-motion (outros componentes
  // dependem de stop()/scrollTo()), apenas sem suavizar a roda do mouse.
  return (
    <ReactLenis
      root
      options={{ duration: 1.4, smoothWheel: !prefersReducedMotion, wheelMultiplier: 0.8 }}>
      {children}
    </ReactLenis>
  );
}
