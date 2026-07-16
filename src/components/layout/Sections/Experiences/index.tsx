"use client";

import Section from "@/components/ui/Section";
import { SectionProps } from "@/types/elements/elements.types";
import { useTranslations } from "next-intl";
import ExperienceCard from "./ExperienceCard";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { EXPERIENCES } from "@/constants/data";
import { ExperienceData } from "@/types/elements/data.types";

export default function Experiences({ ref }: SectionProps) {
  const tSec = useTranslations("Experiences");
  const tDate = useTranslations("Date");
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const initialTime = (exp: ExperienceData) =>
    `${tDate(exp.initialTime.month)} ${exp.initialTime.year}`;

  const endingTime = (exp: ExperienceData) =>
    exp.endingTime ? `${tDate(exp.endingTime.month)} ${exp.endingTime?.year}` : tDate("current");

  return (
    <Section ref={ref} title={tSec("title")}>
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="min-w-0 flex-none basis-full px-12">
              <ExperienceCard
                type="academic"
                title={exp.title}
                icon={exp.icon}
                location={exp.place}
                initialTime={initialTime(exp)}
                endingTime={endingTime(exp)}
                description={exp.description}
                skills={exp.skills}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
