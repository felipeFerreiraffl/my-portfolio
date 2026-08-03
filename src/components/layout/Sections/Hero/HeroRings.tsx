"use client";

import { HERO_RINGS } from "@/constants/objects";
import { cn } from "@/libs/cn";
import { AnimatePresence, m, stagger, useReducedMotion, Variants } from "motion/react";
import { useEffect, useState } from "react";

interface HeroRingsProps {
  onExpandComplete?: () => void;
}

/**
 * Duração da fase de "loading" (ponto pulsando) antes dos anéis expandirem.
 * Total da intro = LOADING_DURATION + stagger dos anéis + duração do último anel.
 */
const LOADING_DURATION = 800;

export default function HeroRings({ onExpandComplete }: HeroRingsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"loading" | "expanded">("loading");

  const ringsContainerVars: Variants = {
    loading: {},
    expanded: {
      transition: {
        delayChildren: prefersReducedMotion ? 0 : stagger(0.15),
      },
    },
  };

  const ringVars: Variants = {
    loading: { scale: 0, opacity: 1 },
    expanded: {
      scale: 1,
      opacity: 1,
      transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: "easeInOut" },
    },
  };

  // Sob prefers-reduced-motion a intro inteira é pulada: sem espera, sem stagger
  // e sem trava de tela, para não prender quem tem sensibilidade vestibular.
  useEffect(() => {
    const timeout = setTimeout(() => setPhase("expanded"), prefersReducedMotion ? 0 : LOADING_DURATION);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  return (
    <div className="relative grid place-items-center z-1">
      <AnimatePresence>
        {phase === "loading" && (
          <m.div
            key="center-dot"
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.4, 1], opacity: [1, 0.55, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
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
              width: `var(${ring.sizeVar})`,
              height: `var(${ring.sizeVar})`,
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
