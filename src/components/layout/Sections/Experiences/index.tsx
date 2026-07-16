"use client";

import Section from "@/components/ui/Section";
import { SectionProps } from "@/types/elements/elements.types";
import { useTranslations } from "next-intl";
import ExperienceCard from "./ExperienceCard";

export default function Experiences({ ref }: SectionProps) {
  const tSec = useTranslations("Experiences");

  return (
    <Section ref={ref} title={tSec("title")}>
    </Section>
  );
}
