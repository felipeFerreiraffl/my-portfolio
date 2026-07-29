"use client";

import { SectionKey, SectionRef } from "@/types/elements/elements.types";
import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type SectionRefs = Record<SectionKey, SectionRef>;

interface SectionRefsContextType {
  refs: SectionRefs;
  activeSec: SectionKey | null;
}

const HEADER_OFFSET = 80;

const SectionRefsContext = createContext<SectionRefsContextType | null>(null);

export const SectionRefsProvider = ({ children }: { children: ReactNode }) => {
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const experiencesRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);

  const refs: SectionRefs = {
    aboutMe: aboutMeRef,
    experiences: experiencesRef,
    projects: projectsRef,
    skills: skillsRef,
  };

  const [activeSec, setActiveSec] = useState<SectionKey | null>(null);

  useEffect(() => {
    const entries = Object.entries(refs) as [SectionKey, SectionRef][];
    const observedNodes = new Set<Element>();
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

        const key = entries.find(([_, ref]) => ref.current === closestEl)?.[0];
        if (key) setActiveSec(key);
      },
      {
        root: null,
        rootMargin: `-${HEADER_OFFSET}px 0px -40% 0px`,
        threshold: 0,
      },
    );

    const tryObserveAll = () => {
      entries.forEach(([_, ref]) => {
        if (ref.current && !observedNodes.has(ref.current)) {
          observer.observe(ref.current);
          observedNodes.add(ref.current);
        }
      });

      if (observedNodes.size === entries.length) {
        domWatcher.disconnect();
      }
    };

    const domWatcher = new MutationObserver(tryObserveAll);
    domWatcher.observe(document.body, { childList: true, subtree: true });
    tryObserveAll();

    return () => {
      observer.disconnect();
      domWatcher.disconnect();
    };
  }, []);

  return (
    <SectionRefsContext.Provider value={{ refs, activeSec }}>
      {children}
    </SectionRefsContext.Provider>
  );
};

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);

  if (!context) {
    throw new Error("useSectionRefs must be used inside SectionRefsContext");
  }

  return context;
};
