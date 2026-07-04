"use client";

import { NAV_LINKS } from "@/constants/objects";
import { useTranslations } from "next-intl";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "./ThemeChanger";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="md:flex hidden fixed top-10 left-1/2 -translate-x-1/2 items-center gap-20 bg-main/20 border-[0.5px] border-main rounded-[40px] py-3 px-10 backdrop-blur-md z-100">
      <ThemeChanger />
      <nav>
        <ul className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href="#"
                className="whitespace-nowrap text-sm font-bold text-text transition-colors duration-300 hover:text-main">
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageChanger />
    </header>
  );
}
