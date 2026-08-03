"use client";

import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/icons";
import { cn } from "@/libs/cn";
import { ProjectData } from "@/types/elements/data.types";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

type ProjectGalleryProps = {
  images: NonNullable<ProjectData["images"]>;
  title: string;
};

const AUTOPLAY_DELAY = 4000;

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const tAria = useTranslations("AriaLabels");
  const tSec = useTranslations("Projects");

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, containScroll: false }, [
    Fade(),
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    }),
  ]);

  const slides: (StaticImageData | string)[] = images;

  const btnStyles = cn(
    "z-90 absolute top-1/2 -translate-y-1/2 grid place-items-center size-10",
    "bg-bg/70 backdrop-blur-sm border-[1.5px] border-title rounded-full",
    "transition-colors duration-300 ease-in-out hover:bg-bg",
  );

  return (
    <div className="relative block w-full lg:w-[60%]">
      <div className="aspect-video border border-main rounded-2xl overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((img, idx) => (
            <div key={idx} className="relative min-w-0 flex-none basis-full h-full">
              <Image
                src={img}
                alt={tSec("imageAlt", { title, index: idx + 1, total: slides.length })}
                fill
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label={tAria("prev")}
        className={cn(btnStyles, "left-3")}
        data-cursor-hover>
        <Icon icon={ICONS.arrows.left} className="size-5 text-title" />
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label={tAria("next")}
        className={cn(btnStyles, "right-3")}
        data-cursor-hover>
        <Icon icon={ICONS.arrows.right} className="size-5 text-title" />
      </button>
    </div>
  );
}
