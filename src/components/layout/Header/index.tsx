"use client";

import { NAV_LINKS } from "@/constants/objects";
import { useTranslations } from "next-intl";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "./ThemeChanger";
import { useSectionRefs } from "@/contexts/sectionRefs.context";
import { handleScrollToSection } from "@/utils/handlers.util";
import { SectionKey } from "@/types/elements/elements.types";

export default function Header() {
  const { refs } = useSectionRefs();
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
    <header className="md:flex hidden fixed top-10 left-1/2 -translate-x-1/2 items-center gap-20 bg-main/20 border-[0.5px] border-main rounded-[40px] py-3 px-10 backdrop-blur-md z-100">
      <ThemeChanger />
      <nav>
        <ul className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScrollToSection(resolveIdToRef(link.id))}
                className="whitespace-nowrap cursor-pointer text-sm font-bold text-text transition-colors duration-300 hover:text-main">
                {t(link.label)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageChanger />
    </header>
  );
}
