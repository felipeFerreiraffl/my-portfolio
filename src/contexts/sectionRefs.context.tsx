"use client";

import { SECTION_KEYS } from "@/constants/elements";
import { SectionKey } from "@/types/elements/elements.types";
import { handleScrollToSection } from "@/utils/handlers.util";
import { useLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type SectionRegistry = Record<SectionKey, (node: HTMLElement | null) => void>;

interface SectionRefsContextType {
  registerSection: SectionRegistry;
  scrollToSection: (key: SectionKey) => void;
  activeSec: SectionKey | null;
}

const HEADER_OFFSET = 80;

const SectionRefsContext = createContext<SectionRefsContextType | null>(null);

export const SectionRefsProvider = ({ children }: { children: ReactNode }) => {
  const nodesRef = useRef(new Map<SectionKey, HTMLElement>());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [activeSec, setActiveSec] = useState<SectionKey | null>(null);

  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const nodes = nodesRef.current;
    const visibleSecs = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (observerEntries) => {
        observerEntries.forEach((e) => {
          if (e.isIntersecting) {
            visibleSecs.set(e.target, e.boundingClientRect.top);
          } else {
            visibleSecs.delete(e.target);
          }
        });

        if (visibleSecs.size === 0) {
          setActiveSec(null);
          return;
        }

        const [closestEl] = [...visibleSecs.entries()].sort((a, b) => a[1] - b[1])[0];
        const key = [...nodes.entries()].find(([, node]) => node === closestEl)?.[0];

        if (key) setActiveSec(key);
      },
      {
        root: null,
        rootMargin: `-${HEADER_OFFSET}px 0px -40% 0px`,
        threshold: 0,
      },
    );

    observerRef.current = observer;
    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, []);

  // Refs de callback estáveis: registram a seção assim que ela monta, sem observar o DOM inteiro
  const registerSection = useMemo(() => {
    const entries = SECTION_KEYS.map((key) => {
      const setNode = (node: HTMLElement | null) => {
        const prev = nodesRef.current.get(key);

        if (prev) {
          observerRef.current?.unobserve(prev);
          nodesRef.current.delete(key);
        }

        if (node) {
          nodesRef.current.set(key, node);
          observerRef.current?.observe(node);
        }
      };

      return [key, setNode] as const;
    });

    return Object.fromEntries(entries) as SectionRegistry;
  }, []);

  // O Lenis é o dono do scroll: chamar window.scrollTo aqui brigaria com ele
  const scrollToSection = useCallback(
    (key: SectionKey) => {
      const node = nodesRef.current.get(key);
      if (!node) return;

      if (lenis) {
        lenis.scrollTo(node, {
          offset: -HEADER_OFFSET,
          immediate: !!prefersReducedMotion,
        });
        return;
      }

      handleScrollToSection(node);
    },
    [lenis, prefersReducedMotion],
  );

  const value = (() => ({ registerSection, scrollToSection, activeSec }))();

  return <SectionRefsContext.Provider value={value}>{children}</SectionRefsContext.Provider>;
};

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);

  if (!context) {
    throw new Error("useSectionRefs must be used inside SectionRefsContext");
  }

  return context;
};
