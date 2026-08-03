"use client";

import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import { SECTION_IDS } from "@/constants/elements";
import { EXPERIENCES } from "@/constants/data";
import { ICONS } from "@/constants/icons";
import { cn } from "@/libs/cn";
import { SectionProps } from "@/types/elements/elements.types";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experiences({ ref }: SectionProps) {
  const tSec = useTranslations("Experiences");
  const tAria = useTranslations("AriaLabels");
  // Abre no cargo atual (último do array), mantendo a linha do tempo cronológica
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex: EXPERIENCES.length - 1 });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateBtn = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    updateBtn();

    emblaApi.on("select", updateBtn);
    emblaApi.on("reInit", updateBtn);

    return () => {
      emblaApi.off("select", updateBtn);
      emblaApi.off("reInit", updateBtn);
    };
  }, [emblaApi]);

  return (
    <Section ref={ref} id={SECTION_IDS.experiences} title={tSec("title")}>
      <div className="relative w-full group">
        {canPrev && (
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label={tAria("prev")}
            className={cn(
              "z-90 absolute top-1/2 left-20 -translate-y-1/2 lg:grid hidden place-items-center size-12",
              "border-[1.5px] border-title rounded-full",
              "opacity-0 -translate-x-2 pointer-events-none transition-[opacity, transform] duration-300",
              "group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto",
            )}
            data-cursor-hover>
            <Icon icon={ICONS.arrows.left} className="size-6 text-title" />
          </button>
        )}
        {canNext && (
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label={tAria("next")}
            className={cn(
              "z-90 absolute top-1/2 right-20 -translate-y-1/2 lg:grid hidden place-items-center size-12",
              "border-[1.5px] border-title rounded-full",
              "opacity-0 translate-x-2 pointer-events-none transition-[opacity, transform] duration-300",
              "group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto",
            )}
            data-cursor-hover>
            <Icon icon={ICONS.arrows.right} className="size-6 text-title" />
          </button>
        )}

        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="min-w-0 flex-none basis-full md:px-12 px-7">
                <ExperienceCard data={exp} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ExperienceTimeline emblaApi={emblaApi} labels={EXPERIENCES.map((exp) => tSec(exp.title))} />
    </Section>
  );
}
