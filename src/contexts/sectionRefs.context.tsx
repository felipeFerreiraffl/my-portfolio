"use client";

import { SectionKey, SectionRef } from "@/types/elements/elements.types";
import { createContext, ReactNode, useContext, useRef } from "react";

type SectionRefs = Record<SectionKey, SectionRef>;

interface SectionRefsContextType {
  refs: SectionRefs;
}

const SectionRefsContext = createContext<SectionRefsContextType | null>(null);

export const SectionRefsProvider = ({ children }: { children: ReactNode }) => {
  const refs: SectionRefs = {
    aboutMe: useRef(null),
    experiences: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
  };

  return <SectionRefsContext.Provider value={{ refs }}>{children}</SectionRefsContext.Provider>;
};

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);

  if (!context) {
    throw new Error("useSectionRefs must be used inside SectionRefsContext");
  }

  return context;
};
