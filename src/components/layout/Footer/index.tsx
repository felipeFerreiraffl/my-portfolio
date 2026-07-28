"use client";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import { CURRENT_YEAR } from "@/constants/elements";
import { ICONS } from "@/constants/icons";
import { EXTERNAL_LINKS, SKILLS_NAMES } from "@/constants/objects";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTranslations } from "next-intl";

export default function Footer() {
  const tSec = useTranslations("Footer");
  const tBtn = useTranslations("ButtonLabels");
  const tAria = useTranslations("AriaLabels");

  const isDesktop = useMediaQuery("(min-width: 1200px)");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EXTERNAL_LINKS.email);
    } catch {
      return;
    }
  };

  return (
    <footer className="mt-25 mb-0 w-full flex flex-col items-center gap-10 py-10">
      <div className="flex items-center w-full gap-5">
        <div className="flex items-center w-full">
          <div className="w-full h-px bg-main" />
          <div className="grid place-items-center size-4 border border-main rounded-full shrink-0">
            <div className="size-2 bg-main rounded-full" />
          </div>
        </div>

        <h2 className="md:text-[2.5rem] text-2xl font-bold leading-heading text-title whitespace-nowrap">
          {tSec("heading")}
        </h2>

        <div className="flex items-center w-full">
          <div className="grid place-items-center size-4 border border-main rounded-full shrink-0">
            <div className="size-2 bg-main rounded-full" />
          </div>
          <div className="w-full h-px bg-main" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 md:px-12 px-7 divide-y divide-dashed divide-main">
        <div className="w-full flex md:flex-row flex-col md:justify-between md:items-start items-center md:gap-0 gap-12 pb-5">
          <div className="flex flex-col md:items-start items-center gap-5">
            <h3 className="md:text-[2rem] text-xl font-bold leading-heading text-title">
              {tSec("viewSocial")}
            </h3>
            <div className="flex items-center gap-5">
              <a href={EXTERNAL_LINKS.gitHub} target="_blank" rel="noopener noreferer">
                <IconButton icon={ICONS.social.gitHub} aria-label={tAria("github")} />
              </a>
              <a href={EXTERNAL_LINKS.linkedIn} target="_blank" rel="noopener noreferer">
                <IconButton icon={ICONS.social.linkedIn} aria-label={tAria("linkedin")} />
              </a>
              {isDesktop ? (
                <IconButton
                  icon={ICONS.email}
                  aria-label={tAria("mail.desktop")}
                  onClick={handleCopyEmail}
                />
              ) : (
                <a href={`mailto:${EXTERNAL_LINKS.email}`}>
                  <IconButton icon={ICONS.email} aria-label={tAria("mail.mobile")} />
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col md:items-end items-center gap-5">
            <h3 className="md:text-[2rem] text-xl font-bold leading-heading text-title">
              {tSec("viewFigma")}
            </h3>
            <a href={EXTERNAL_LINKS.figma} target="_blank" rel="noopener noreferer">
              <Button label={tBtn("figma")} />
            </a>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <span className="md:text-sm text-xs leading-body text-text">
            Copyright &copy; 2026-{CURRENT_YEAR}
          </span>

          <div className="flex items-center gap-3">
            <Icon
              icon={ICONS.skillsIcons.nextjs}
              ariaLabel={SKILLS_NAMES.nextjs}
              className="md:size-6 size-4 text-text"
            />
            <Icon
              icon={ICONS.skillsIcons.tailwind}
              ariaLabel={SKILLS_NAMES.tailwind}
              className="md:size-6 size-4 text-text"
            />
            <Icon
              icon={ICONS.skillsIcons.typescript}
              ariaLabel={SKILLS_NAMES.typescript}
              className="md:size-6 size-4 text-text"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
