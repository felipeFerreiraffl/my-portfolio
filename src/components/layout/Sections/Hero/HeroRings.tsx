"use client";

import { HERO_RINGS } from "@/constants/objects";
import { cn } from "@/libs/cn";
import { AnimatePresence, m, stagger, Variants } from "motion/react";
import { useEffect, useState } from "react";

interface HeroRingsProps {
  onExpandComplete?: () => void;
}

export default function HeroRings({ onExpandComplete }: HeroRingsProps) {
  const [phase, setPhase] = useState<"loading" | "expanded">("loading");

  const ringsContainerVars: Variants = {
    loading: {},
    expanded: {
      transition: {
        delayChildren: stagger(0.15),
      },
    },
  };

  const ringVars: Variants = {
    loading: (ring: HeroRingData) =>
      ring.id === "dashed"
        ? { width: 48, height: 48, opacity: 1 }
        : { width: 0, height: 0, opacity: 1 },
    expanded: (ring: HeroRingData) => ({
      width: `var(${ring.sizeVar})`,
      height: `var(${ring.sizeVar})`,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  };

  useEffect(() => {
    const timeout = setTimeout(() => setPhase("expanded"), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative grid place-items-center z-1">
      <AnimatePresence>
        {phase === "loading" && (
          <m.div
            key="center-dot"
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
            className="absolute size-5 rounded-full bg-main"
          />
        )}
      </AnimatePresence>

      <m.div
        variants={ringsContainerVars}
        animate={phase}
        className="relative grid place-items-center">
        {HERO_RINGS.map((ring, i) => (
          <m.div
            key={ring.id}
            custom={ring}
            variants={ringVars}
            onAnimationComplete={(def) => {
              const isLastRing = i === HERO_RINGS.length - 1;
              if (def === "expanded" && isLastRing) {
                onExpandComplete?.();
              }
            }}
            className={cn("absolute rounded-full border-main", ring.className)}
            style={{
              borderWidth: ring.borderWidth,
              borderStyle: ring.borderStyle ?? "solid",
              ...(ring.hasGradient && {
                maskImage: "linear-gradient(to bottom, black 0%, transparent 90%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 90%)",
              }),
            }}
          />
        ))}
      </m.div>
    </div>
  );
}
