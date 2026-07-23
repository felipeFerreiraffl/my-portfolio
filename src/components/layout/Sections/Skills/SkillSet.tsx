"use client";

import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/icons";
import { cn } from "@/libs/cn";
import { SkillsData } from "@/types/elements/data.types";
import { useTranslations } from "next-intl";
import { Ref } from "react";

type SkillSetProps = Omit<SkillsData, "id"> & {
  reversed?: boolean;
  circleRef?: Ref<HTMLDivElement>;
};

export default function SkillSet({ title, skills, illustration, reversed, circleRef }: SkillSetProps) {
  const tSec = useTranslations("Skills");

  return (
    <div
      className={cn(
        "relative lg:max-w-[60dvw] w-full mx-auto flex items-center flex-col lg:gap-0 gap-2",
        reversed ? "lg:flex-row-reverse lg:translate-x-[22%]" : "lg:flex-row",
      )}>
      <div className="flex flex-col w-full">
        <h3
          className={cn(
            "md:text-[2rem] text-xl font-bold leading-heading text-title text-center pl-0",
            reversed ? "lg:text-right lg:pr-4" : "lg:text-left lg:pl-4",
          )}>
          {tSec(title)}
        </h3>

        <div
          className={cn("pointer-events-none lg:flex hidden items-center -mt-0.5", reversed && "flex-row-reverse")}>
          <div className="grid place-items-center size-2 border-[0.5px] border-main rounded-full">
            <div className="size-1 bg-main rounded-full" />
          </div>

          <div className="w-full h-[0.5px] bg-main" />
        </div>
      </div>

      <div
        ref={circleRef}
        className="lg:size-94 size-62 grid place-items-center lg:grid-cols-3 grid-cols-2 gap-y-5 gap-x-8 lg:py-25 py-9 px-15 border border-main rounded-full shrink-0">
        {skills.map((s) => (
          <div key={s.label} className="relative grid place-items-center md:size-16 size-12">
            <Icon icon={s.icon} className="md:size-12 size-8 text-title" ariaLabel={s.label} />
            {s.isMostUsed && (
              <Icon
                icon={ICONS.skills.star}
                className="absolute md:-top-0.5 md:-right-0.5 -top-1 -right-1 md:size-6 size-4 text-star z-20"
              />
            )}
          </div>
        ))}
      </div>

      <div className={cn("lg:flex hidden items-center", reversed && "flex-row-reverse")}>
        <div className="w-15 border border-dashed border-main" />

        <div className="relative grid place-items-center size size-32.5">
          <div className="absolute top-1/2 left-1/2 -translate-1/2 size-23 border border-main rotate-45" />
          <Icon
            icon={illustration.icon}
            ariaLabel={tSec(illustration.label ?? "")}
            className="size-13 text-title"
          />
        </div>
      </div>
    </div>
  );
}
