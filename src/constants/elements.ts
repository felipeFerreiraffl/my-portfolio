import { SectionKey } from "@/types/elements/elements.types";

export const AVAILABLE_THEMES = ["light", "dark"];
export const CURRENT_YEAR = new Date().getFullYear();
export const SECTION_KEYS: readonly SectionKey[] = ["aboutMe", "experiences", "skills", "projects"];

// Slugs neutros de idioma, para que /pt-br#projects e /en#projects sejam o mesmo alvo
export const SECTION_IDS: Record<SectionKey, string> = {
  aboutMe: "about-me",
  experiences: "experiences",
  skills: "skills",
  projects: "projects",
};
