"use client";

import { cn } from "@/libs/cn";
import { EmblaCarouselType } from "embla-carousel";
import { useEffect, useState } from "react";

interface CarouselDotsProps {
  emblaApi: EmblaCarouselType | undefined;
  /** Nome acessível de cada item, na mesma ordem dos slides. */
  labels: string[];
  className?: string;
}

/**
 * Indicadores de posição para os carrosséis no mobile, onde não há hover para
 * revelar as setas nem espaço para a linha do tempo.
 */
export default function CarouselDots({ emblaApi, labels, className }: CarouselDotsProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [snapCount, setSnapCount] = useState(labels.length);

  useEffect(() => {
    if (!emblaApi) return;

    const updateDots = () => {
      setSelectedIdx(emblaApi.selectedScrollSnap());
      setSnapCount(emblaApi.scrollSnapList().length);
    };

    updateDots();

    emblaApi.on("select", updateDots);
    emblaApi.on("reInit", updateDots);

    return () => {
      emblaApi.off("select", updateDots);
      emblaApi.off("reInit", updateDots);
    };
  }, [emblaApi]);

  if (snapCount <= 1) return null;

  return (
    <div className={cn("md:hidden flex items-center justify-center gap-2.5", className)}>
      {Array.from({ length: snapCount }).map((_, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => emblaApi?.scrollTo(idx)}
          aria-label={labels[idx] ?? String(idx + 1)}
          aria-current={selectedIdx === idx}
          className={cn(
            "size-2.5 rounded-full border border-main transition-colors duration-300 shrink-0",
            selectedIdx === idx ? "bg-main" : "bg-transparent",
          )}
        />
      ))}
    </div>
  );
}
