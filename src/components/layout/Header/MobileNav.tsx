"use client";

import { NAV_LINKS } from "@/constants/objects";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "./ThemeChanger";
import Icon from "@/components/ui/Icon";
import { useSectionRefs } from "@/contexts/sectionRefs.context";
import { useTranslations } from "next-intl";
import { cn } from "@/libs/cn";

export default function MobileNav() {
  const { scrollToSection, activeSec } = useSectionRefs();
  const t = useTranslations("Header");

  return (
    <nav className="md:hidden max-w-[90dvw] w-full fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between bg-main/20 border-[0.5px] border-main rounded-[40px] py-3 px-5 backdrop-blur-md">
      <ThemeChanger />
      <ul className="flex items-center gap-3">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => scrollToSection(link.id)}
              aria-label={t(link.label)}
              className={cn(
                "grid place-items-center size-9 rounded-full transition-colors duration-300 shrink-0",
                activeSec === link.id ? "bg-main/60" : "bg-main/20",
              )}>
              <Icon icon={link.icon} className={cn("text-text size-5")} />
            </button>
          </li>
        ))}
      </ul>
      <LanguageChanger />
    </nav>
  );
}
