"use client";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/icons";
import { IMAGES } from "@/constants/images";
import { ProjectData } from "@/types/elements/data.types";
import { useTheme } from "@teispace/next-themes";
import { useLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import ProjectGallery from "./ProjectGallery";

interface ProjectDetailsProps {
  data: ProjectData | null;
  open: boolean;
  onOpenChange: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, select, textarea';

export default function ProjectDetails({ data, open, onOpenChange }: ProjectDetailsProps) {
  const tSec = useTranslations("Projects");
  const tAria = useTranslations("AriaLabels");
  const { resolvedTheme } = useTheme();

  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(open);
  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) setIsMounted(true);
  }

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (isMounted) lenis.stop();
    else lenis.start();

    return () => lenis.start();
  }, [isMounted, lenis]);

  // Escape para fechar + foco preso dentro do diálogo enquanto ele está aberto
  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusables = [...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)];
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMounted, onOpenChange]);

  // Move o foco para dentro do diálogo e o devolve ao card ao fechar
  useEffect(() => {
    if (!isMounted) return;

    const trigger = document.activeElement as HTMLElement | null;
    dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)?.focus();

    return () => trigger?.focus();
  }, [isMounted]);

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (open) return;

    setIsMounted(false);
  };

  if (!isMounted) return null;

  return (
    <div
      data-state={open ? "open" : "closed"}
      className="fixed top-1/2 left-1/2 -translate-1/2 grid place-items-center z-999 size-full">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative size-full grid place-items-center">
        <div
          data-state={open ? "open" : "closed"}
          onClick={onOpenChange}
          className="absolute inset-0 size-full bg-black/50 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:fill-mode-forwards duration-300 ease-in-out"
        />

        <div
          data-state={open ? "open" : "closed"}
          data-lenis-prevent
          onAnimationEnd={handleAnimationEnd}
          className="relative md:w-[76dvw] w-[80dvw] max-h-[85dvh] h-full bg-bg border-[1.5px] border-main rounded-[40px] py-10 px-12 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:fill-mode-forwards duration-300 ease-in-out overflow-y-auto z-998">
          <button
            onClick={onOpenChange}
            className="cursor-pointer absolute md:top-6 md:right-6 top-5 right-5 grid place-items-center md:size-7 size-5 border-[0.5] border-main rounded-full z-1000"
            aria-label={tAria("close")}
            data-cursor-hover>
            <Icon icon={ICONS.closeX} className="md:size-4 size-3 text-text" />
          </button>

          {data && (
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex items-center gap-3">
                  <div className="size-3 bg-main rotate-45" />
                  <h3
                    id={titleId}
                    className="md:text-[2.5rem] text-2xl font-bold leading-heading text-title whitespace-nowrap">
                    {tSec(data.title)}
                  </h3>
                  <div className="size-3 bg-main rotate-45" />
                </div>
                <p className="md:text-base text-medium leading-body text-text">
                  {tSec(data.description)}
                </p>
              </div>

              <div className="w-full flex flex-col items-center gap-5">
                <div className="md:max-w-[60%] w-full flex flex-col items-center gap-3 text-center">
                  <h4 className="md:text-2xl text-xl font-medium leading-heading text-text">
                    {tSec("techsTitle")}
                  </h4>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {data.techs.map((t) => (
                      <Icon
                        key={t.label}
                        icon={t.icon}
                        ariaLabel={t.label}
                        className="size-8 text-title"
                      />
                    ))}
                  </div>
                </div>

                <div className="md:max-w-[60%] w-full flex flex-col items-center gap-3 text-center">
                  <h4 className="md:text-2xl text-xl font-medium leading-heading text-text">
                    {tSec("featTitle")}
                  </h4>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    {data.feats.map((f) => (
                      <span
                        key={`feat-(${f})`}
                        className="md:text-sm text-xs leading-body text-text bg-main/20 border-[0.5px] border-main rounded-[20px] py-2 px-3">
                        {tSec(f)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-3">
                <div className="flex items-center gap-5">
                  <a href={data.demoLink} target="_blank" rel="noopener noreferer">
                    <Button label="Demo" disabled={!data.demoLink} />
                  </a>
                  <a href={data.repoLink} target="_blank" rel="noopener noreferer">
                    <Button label={tSec("repo")} />
                  </a>
                </div>
                {!data.images ? (
                  <div className="grid place-items-center w-full lg:w-[60%] aspect-video border border-main rounded-2xl overflow-hidden">
                    <Image
                      src={
                        resolvedTheme === "dark"
                          ? IMAGES.projects.fallback.dark
                          : IMAGES.projects.fallback.light
                      }
                      alt={tSec("fallbackAlt", { title: tSec(data.title) })}
                      className="size-full object-cover"
                    />
                  </div>
                ) : (
                  <ProjectGallery images={data.images} title={tSec(data.title)} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
