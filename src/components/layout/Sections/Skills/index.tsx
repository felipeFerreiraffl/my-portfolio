"use client";

import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import { SECTION_IDS } from "@/constants/elements";
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
    <Section ref={ref} id={SECTION_IDS.skills} title={tSec("title")}>
      <div className="flex flex-col gap-10 md:px-12 px-7">
        <div className="w-full flex md:flex-row flex-col md:items-start items-center md:justify-between md:gap-0 gap-10">
          <div className="flex flex-col md:items-start items-center gap-2">
            <h3 className="text-xl font-medium leading-heading text-text">
              {tSec("levels.title")}
            </h3>
            <div className="flex items-center gap-3 justify-evenly flex-wrap">
              <div className="min-w-20 flex flex-col items-center gap-1">
                <span className="size-1 rounded-full bg-main"></span>
                <span className="text-sm leading-body text-text text-center">
                  {tSec("levels.basic")}
                </span>
              </div>
              <div className="min-w-20 flex flex-col items-center gap-1">
                <span className="size-1 rounded-full bg-main"></span>
                <span className="text-sm leading-body text-text text-center">
                  {tSec("levels.intermediate")}
                </span>
              </div>
              <div className="min-w-20 flex flex-col items-center gap-1">
                <span className="size-1 rounded-full bg-main"></span>
                <span className="text-sm leading-body text-text text-center">
                  {tSec("levels.advanced")}
                </span>
              </div>
              <div className="min-w-20 flex flex-col items-center gap-1">
                <span className="size-1 rounded-full bg-main"></span>
                <span className="text-sm leading-body text-text text-center">
                  {tSec("levels.expert")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Icon icon={ICONS.skills.star} className="size-6 text-star" />
            <span className="text-base leading-heading text-gray">{tSec("mostUsed")}</span>
          </div>
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
