import { SectionRef } from "@/types/elements/elements.types";

export const handleScrollToSection = (ref: SectionRef) => {
  if (!ref.current) return;

  const top = ref.current.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
};
