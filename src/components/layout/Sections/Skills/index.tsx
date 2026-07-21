"use client";

import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import { SKILLS } from "@/constants/data";
import { ICONS } from "@/constants/icons";
import { SectionProps } from "@/types/elements/elements.types";
import { useTranslations } from "next-intl";
import SkillSet from "./SkillSet";

export default function Skills({ ref }: SectionProps) {
  const tSec = useTranslations("Skills");

  return (
    <Section ref={ref} title={tSec("title")}>
      <div className="flex flex-col gap-10 px-12">
        <div className="flex items-center gap-3">
          <Icon icon={ICONS.skills.star} className="size-8 text-star" />
          <span className="text-xl font-medium leading-heading text-gray">{tSec("mostUsed")}</span>
        </div>

        <div className="flex flex-col gap-25">
          {SKILLS.map((s) => (
            <div key={s.id}>
              <SkillSet {...s} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
