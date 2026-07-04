"use client";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { ICONS } from "@/constants/icons";
import { useTranslations } from "next-intl";
import HeroRings from "./HeroRings";

export default function Hero() {
  const tDef = useTranslations("ButtonLabels");
  const tHero = useTranslations("Hero");

  return (
    <article className="relative w-full h-dvh grid place-items-center">
      <HeroRings />

      <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center gap-8 z-10">
        <div className="flex items-center gap-3">
          <IconButton icon={ICONS.social.gitHub} />
          <IconButton icon={ICONS.social.linkedIn} />
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="md:text-5xl text-[2rem] font-bold text-title leading-heading">
            Felipe Ferreira Lima
          </h1>
          <p className="md:text-lg text-base text-gray leading-body">{tHero("role")}</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-text leading-body text-center">{tHero("workingNow")}</span>
          <Button label={tDef("curriculum")} />
        </div>
      </div>
    </article>
  );
}
