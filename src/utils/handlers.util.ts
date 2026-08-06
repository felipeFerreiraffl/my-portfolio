const HEADER_OFFSET = 80;

export const handleScrollToSection = (el: HTMLElement | null) => {
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
};
