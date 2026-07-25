"use client";

import Section from "@/components/ui/Section";
import { SectionProps } from "@/types/elements/elements.types";
import { useTranslations } from "next-intl";
import ProjectSet from "./ProjectSet";
import { PROJECTS } from "@/constants/data";

export default function Projects({ ref }: SectionProps) {
  const tSec = useTranslations("Projects");

  return (
    <Section ref={ref} title={tSec("title")}>
      {PROJECTS.map((p) => (
        <ProjectSet key={p.id} title={tSec(p.title)} />
      ))}
    </Section>
  );
}
