"use client";

import Section from "@/components/ui/Section";
import { SectionProps } from "@/types/elements/elements.types";
import { useTranslations } from "next-intl";

export default function Projects({ ref }: SectionProps) {
  const tSec = useTranslations("Projects");

  return <Section ref={ref} title={tSec("title")} />;
}
