"use client";

import { useConnectorLine } from "@/hooks/useConnectorLine";
import { m } from "motion/react";
import { RefObject } from "react";

interface SkillConnectorProps {
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
}

export default function SkillConnector({ containerRef, fromRef, toRef }: SkillConnectorProps) {
  const { geometry, scaleX } = useConnectorLine(containerRef, fromRef, toRef);

  if (!geometry) return null;

  return (
    <div
      aria-hidden
      className="absolute hidden lg:block pointer-events-none"
      style={{
        left: geometry.left,
        top: geometry.top,
        width: geometry.width,
        transform: `rotate(${geometry.angle}deg)`,
        transformOrigin: "0 0",
      }}>
      <m.div className="h-0 border-t border-dashed border-main origin-left" style={{ scaleX }} />
    </div>
  );
}
