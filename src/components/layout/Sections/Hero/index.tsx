"use client";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { ICONS } from "@/constants/icons";
import { Variants, m } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import HeroRings from "./HeroRings";

interface HeroProps {
  onRingsExpandComplete?: () => void;
}

export default function Hero({ onRingsExpandComplete }: HeroProps) {
  const tDef = useTranslations("ButtonLabels");
  const tHero = useTranslations("Hero");
  const [contentVisible, setContentVisible] = useState(false);

  const contentVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const circleVars: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const handleExpandComplete = () => {
    setContentVisible(true);
    onRingsExpandComplete?.();
  };

  return (
    <article className="relative w-full h-dvh grid place-items-center">
      <HeroRings onExpandComplete={handleExpandComplete} />

      <m.div
        variants={circleVars}
        initial="hidden"
        animate={contentVisible ? "visible" : "hidden"}
        className="absolute top-1/2 left-1/2 -translate-1/2 lg:size-[27dvw] size-[82dvw] bg-main/20 rounded-full blur-2xl shadow-main/30 z-1"
      />

      <m.div
        variants={contentVars}
        initial="hidden"
        animate={contentVisible ? "visible" : "hidden"}
        className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center gap-8 z-10">
        <div className="flex items-center gap-3">
          <IconButton icon={ICONS.social.gitHub} />
          <IconButton icon={ICONS.social.linkedIn} />
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="md:text-5xl text-[2rem] font-bold text-title leading-heading w-full">
            Felipe Ferreira Lima
          </h1>
          <p className="md:text-lg text-base text-gray leading-body">{tHero("role")}</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-text leading-body text-center">{tHero("workingNow")}</span>
          <a href="/programmer_cv.pdf" target="_blank" rel="noopener noreferer">
            <Button label={tDef("curriculum")} />
          </a>
        </div>
      </m.div>
    </article>
  );
}
