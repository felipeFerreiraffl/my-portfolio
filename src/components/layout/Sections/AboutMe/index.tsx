"use client";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import { SectionProps } from "@/types/elements/elements.types";
import { m, stagger, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { goals, hobbies } from "./_helpers/objects";
import AboutTopic from "./AboutTopic";

export default function AboutMe({ ref }: SectionProps) {
  const tSec = useTranslations("AboutMe");
  const tDef = useTranslations("ButtonLabels");

  const containerVars: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(0.15),
      },
    },
  };

  const itemVars: Variants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section ref={ref} title={tSec("title")}>
      <m.div
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:px-12 px-7">
        <AboutTopic variants={itemVars} title={tSec("hobbies.title")}>
          <ul className="flex xl:flex-row flex-col gap-5">
            {hobbies.map((h) => (
              <li key={h.id} className="w-full flex flex-col items-center gap-2">
                <Icon icon={h.icon} className="size-12 text-main" ariaLabel={tSec(h.label)} />
                <span className="text-lg text-title text-center leading-body">{tSec(h.label)}</span>
              </li>
            ))}
          </ul>
        </AboutTopic>
        <AboutTopic variants={itemVars} title={tSec("goals.title")}>
          <ul className="flex flex-col gap-5">
            {goals.map((g) => (
              <li key={g.id} className="flex items-center gap-2">
                <div className="size-2 bg-main rotate-45" />
                <span className="text-sm text-text leading-body">{tSec(g.label)}</span>
              </li>
            ))}
          </ul>
        </AboutTopic>

        <AboutTopic variants={itemVars} title={tSec("presentation.title")}>
          <div className="flex flex-col items-center gap-3">
            <span className="text-base text-text leading-body">{tSec("presentation.span")}</span>
            <a href="/programmer_cv.pdf" target="_blank" rel="noopener noreferer">
              <Button label={tDef("curriculum")} />
            </a>
          </div>
        </AboutTopic>
      </m.div>
    </Section>
  );
}
