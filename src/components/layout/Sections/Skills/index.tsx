"use client";

import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import { ICONS } from "@/constants/icons";
import { SectionProps } from "@/types/elements/elements.types";
import { useTranslations } from "next-intl";

export default function Skills({ ref }: SectionProps) {
  const tSec = useTranslations("Skills");

  return (
    <Section ref={ref} title={tSec("title")}>
      <div className="flex flex-col gap-10 px-12">
        <div className="flex items-center gap-3">
          <Icon icon={ICONS.skills.star} className="size-8 text-star" />
          <span className="text-xl font-medium leading-heading text-gray">{tSec("mostUsed")}</span>
        </div>
      </div>
    </Section>
  );
}
