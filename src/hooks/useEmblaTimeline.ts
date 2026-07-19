import { EmblaCarouselType } from "embla-carousel";
import { useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

export const useEmblaTimeline = (emblaApi: EmblaCarouselType | undefined, slideCount: number) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const progress = useMotionValue(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIdx(emblaApi.selectedScrollSnap());

    const onScroll = () => {
      const raw = emblaApi.scrollProgress();
      progress.set(raw * (slideCount - 1));
    };

    onSelect();
    onScroll();

    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, slideCount, progress]);

  return { selectedIdx, progress };
};
