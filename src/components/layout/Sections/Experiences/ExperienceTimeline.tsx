"use client";

import { useEmblaTimeline } from "@/hooks/useEmblaTimeline";
import { EmblaCarouselType } from "embla-carousel";
import { useTransform } from "motion/react";
import { m } from "motion/react";

interface ExperienceTimelineProps {
  emblaApi: EmblaCarouselType | undefined;
  total: number;
}

const SLOT_WIDTH = 120;

export default function ExperienceTimeline({ emblaApi, total }: ExperienceTimelineProps) {
  const { selectedIdx, progress } = useEmblaTimeline(emblaApi, total);
  const lineProgress = useTransform(
    progress,
    [0, Math.max(total - 1, 1)],
    [-(SLOT_WIDTH / 2), -((total - 1) * SLOT_WIDTH + SLOT_WIDTH / 2)],
  );

  return (
    <div className="relative w-full h-8 md:flex hidden items-center mt-12">
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 border-t border-dashed border-title" />

      <m.div
        className="absolute top-0 left-1/2 flex items-center h-full"
        style={{ x: lineProgress }}>
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => emblaApi?.scrollTo(idx)}
            className="grid place-items-center"
            style={{ width: SLOT_WIDTH }}>
            <m.div
              className="grid place-items-center size-6 rounded-full border-[1.5px] border-title shrink-0"
              animate={{ scale: selectedIdx === idx ? 1.5 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              data-cursor-hover>
              <div className="size-3 bg-title rounded-full" />
            </m.div>
          </button>
        ))}
      </m.div>
    </div>
  );
}
