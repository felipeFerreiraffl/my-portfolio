"use client";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { ICONS } from "@/constants/icons";
import { Variants, m, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import HeroRings from "./HeroRings";
import { useSectionRefs } from "@/contexts/sectionRefs.context";
import { handleScrollToSection } from "@/utils/handlers.util";
import { EXTERNAL_LINKS } from "@/constants/objects";

interface HeroProps {
  onRingsExpandComplete?: () => void;
}

export default function Hero({ onRingsExpandComplete }: HeroProps) {
  const { refs } = useSectionRefs();
  const tDef = useTranslations("ButtonLabels");
  const tAria = useTranslations("AriaLabels");
  const tHero = useTranslations("Hero");

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const [contentVisible, setContentVisible] = useState(false);

  const ringsScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const ringsOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
    <article ref={heroRef} className="relative w-full h-dvh grid place-items-center overflow-x-clip">
      <m.div style={{ scale: ringsScale, opacity: ringsOpacity }}>
        <HeroRings onExpandComplete={handleExpandComplete} />
      </m.div>

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
          <a href={EXTERNAL_LINKS.gitHub} target="_blank" rel="noopener noreferer">
            <IconButton icon={ICONS.social.gitHub} aria-label={tAria("github")} />
          </a>
          <a href={EXTERNAL_LINKS.linkedIn} target="_blank" rel="noopener noreferer">
            <IconButton icon={ICONS.social.linkedIn} aria-label={tAria("linkedin")} />
          </a>
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

      <m.button
        variants={contentVars}
        initial="hidden"
        animate={contentVisible ? "visible" : "hidden"}
        onClick={() => handleScrollToSection(refs.aboutMe)}
        className="cursor-pointer absolute bottom-35 left-1/2 -translate-x-1/2 flex flex-col items-center"
        data-cursor-hover>
        <div className="flex flex-col items-center">
          <div className="grid place-items-center md:size-5 size-4 border border-main rounded-full">
            <div className="md:size-3 size-2 rounded-full bg-main"></div>
          </div>
          <div className="bg-main md:w-0.5 w-[1.5px] h-6" />
        </div>

        <span>{tHero("scrollDown")}</span>
      </m.button>
    </article>
  );
}
