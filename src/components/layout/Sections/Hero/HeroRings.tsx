"use client";

import { HERO_RINGS } from "@/constants/objects";
import { useIntroPlayed } from "@/hooks/useIntroPlayed";
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
  const introPlayed = useIntroPlayed();
  const [loadingDone, setLoadingDone] = useState(false);

  // Pula a intro para quem pediu movimento reduzido e para quem apenas trocou
  // de idioma — nesse caso a árvore remonta, mas a intro já rodou no documento.
  const skipIntro = prefersReducedMotion || introPlayed;

  // Derivada em vez de estado próprio: `prefersReducedMotion` só resolve depois
  // da montagem, então a fase precisa reagir a ele sem um setState em efeito.
  const phase = skipIntro || loadingDone ? "expanded" : "loading";

  const ringsContainerVars: Variants = {
    loading: {},
    expanded: {
      transition: {
        delayChildren: skipIntro ? 0 : stagger(0.15),
      },
    },
  };

  const ringVars: Variants = {
    loading: { scale: 0, opacity: 1 },
    expanded: {
      scale: 1,
      opacity: 1,
      transition: { duration: skipIntro ? 0 : 0.8, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (skipIntro) return;

    const timeout = setTimeout(() => setLoadingDone(true), LOADING_DURATION);
    return () => clearTimeout(timeout);
  }, [skipIntro]);

  return (
    <div className="relative grid place-items-center z-1">
      <AnimatePresence>
        {phase === "loading" && !skipIntro && (
          <m.div
            key="center-dot"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.55, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            className="absolute size-5 rounded-full bg-main"
          />
        )}
      </AnimatePresence>
      <m.div
        variants={ringsContainerVars}
        initial={introPlayed ? "expanded" : "loading"}
        animate={phase}
        className="relative grid place-items-center opacity-40">
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
