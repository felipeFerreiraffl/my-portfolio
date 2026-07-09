"use client";

import Section from "@/components/ui/Section";
import { SectionProps } from "@/types/elements/elements.types";
import { useTranslations } from "next-intl";

export default function AboutMe({ ref }: SectionProps) {
  const tSec = useTranslations("AboutMe");

  return <Section ref={ref} title={tSec("title")} />;
}
