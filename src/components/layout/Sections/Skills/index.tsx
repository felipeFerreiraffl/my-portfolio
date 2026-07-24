"use client";

import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import { SKILLS } from "@/constants/data";
import { ICONS } from "@/constants/icons";
import { SectionProps } from "@/types/elements/elements.types";
import { useTranslations } from "next-intl";
import { createRef, useMemo, useRef } from "react";
import SkillConnector from "./SkillConnector";
import SkillSet from "./SkillSet";

export default function Skills({ ref }: SectionProps) {
  const tSec = useTranslations("Skills");
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useMemo(() => SKILLS.map(() => createRef<HTMLDivElement>()), []);

  return (
    <Section ref={ref} title={tSec("title")}>
      <div className="flex flex-col gap-10 px-12">
        <div className="flex items-center gap-3">
          <Icon icon={ICONS.skills.star} className="size-8 text-star" />
          <span className="text-xl font-medium leading-heading text-gray">{tSec("mostUsed")}</span>
        </div>

        <div ref={containerRef} className="relative flex flex-col gap-25">
          {SKILLS.map((s, idx) => (
            <div key={s.id}>
              <SkillSet {...s} reversed={idx % 2 === 1} circleRef={circleRefs[idx]} />
            </div>
          ))}

          {SKILLS.slice(1).map((s, idx) => (
            <SkillConnector
              key={`connector-${s.id}`}
              containerRef={containerRef}
              fromRef={circleRefs[idx]}
              toRef={circleRefs[idx + 1]}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
