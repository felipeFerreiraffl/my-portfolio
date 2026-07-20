"use client";

import { SkillsData } from "@/types/elements/data.types";
import { useTranslations } from "next-intl";

type SkillSetProps = Omit<SkillsData, "id">;

export default function SkillSet({ title, skills, illustration }: SkillSetProps) {
  const tSec = useTranslations("Skills");

  return (
    <div className="relative max-w-[60dvw] w-full flex items-center lg:flex-row flex-col">
      <div className="flex flex-col">
        <h3 className="md:text-[2rem] text-xl font-bold leading-heading text-title pl-4">
          {tSec(title)}
        </h3>

        <div className="pointer-events-none flex items-center -mt-0.5">
          <div className="grid place-items-center size-2 border-[0.5px] border-main rounded-full">
            <div className="size-1 bg-main rounded-full" />
          </div>

          <div className="w-full h-[0.5px] bg-main" />
        </div>
      </div>
    </div>
  );
}
