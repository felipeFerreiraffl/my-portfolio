"use client";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { ICONS } from "@/constants/icons";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <article className="w-full h-dvh grid place-items-center">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-3">
          <IconButton icon={ICONS.social.gitHub} />
          <IconButton icon={ICONS.social.linkedIn} />
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="md:text-5xl text-[2rem] font-bold text-title leading-heading">
            Felipe Ferreira Lima
          </h1>
          <p className="md:text-lg text-base text-gray leading-body">{t("role")}</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-text leading-body text-center">{t("workingNow")}</span>
          <Button label="Currículo" />
        </div>
      </div>
    </article>
  );
}
