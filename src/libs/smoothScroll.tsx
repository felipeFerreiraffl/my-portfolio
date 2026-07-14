"use client";

import "lenis/dist/lenis.css";
import ReactLenis from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true, wheelMultiplier: 1 }}>
      {children}
    </ReactLenis>
  );
}
