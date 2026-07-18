"use client";

import { NAV_LINKS } from "@/constants/objects";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "./ThemeChanger";
import Icon from "@/components/ui/Icon";
import { useSectionRefs } from "@/contexts/sectionRefs.context";
import { useTranslations } from "next-intl";
import { SectionKey } from "@/types/elements/elements.types";
import { handleScrollToSection } from "@/utils/handlers.util";
import { cn } from "@/libs/cn";

export default function MobileNav() {
  const { refs, activeSec } = useSectionRefs();
  const t = useTranslations("Header");

  const resolveIdToRef = (id: SectionKey) => {
    switch (id) {
      case "aboutMe":
        return refs.aboutMe;
      case "experiences":
        return refs.experiences;
      case "skills":
        return refs.skills;
      case "projects":
        return refs.projects;
    }
  };

  return (
    <nav className="md:hidden w-[90dvw] fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between bg-main/20 border-[0.5px] border-main rounded-[40px] py-3 px-5 backdrop-blur-md">
      <ThemeChanger />
      <ul className="flex items-center gap-3">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleScrollToSection(resolveIdToRef(link.id))}
              aria-label={t(link.label)}>
              <Icon
                icon={link.icon}
                className={cn(
                  "p-2 rounded-full text-text size-8",
                  activeSec === link.id ? "bg-main/60" : "bg-main/20",
                )}
              />
            </button>
          </li>
        ))}
      </ul>
      <LanguageChanger />
    </nav>
  );
}
