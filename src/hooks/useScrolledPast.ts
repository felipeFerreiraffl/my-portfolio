"use client";

import { RefObject, useEffect, useState } from "react";

const VIEWPORT_HALF_MARGIN = "0px 0px -50% 0px";

export const useScrolledPast = (ref: RefObject<HTMLElement | null>) => {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Guarda se o elemento já passou na "view" definida
        setScrolledPast(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      {
        root: null,
        rootMargin: VIEWPORT_HALF_MARGIN,
        threshold: 0,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref]);

  return { scrolledPast };
};
