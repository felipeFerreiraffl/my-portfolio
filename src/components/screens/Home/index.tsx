"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/Header/MobileNav";
import AboutMe from "@/components/layout/Sections/AboutMe";
import Experiences from "@/components/layout/Sections/Experiences";
import Hero from "@/components/layout/Sections/Hero";
import Projects from "@/components/layout/Sections/Projects";
import Skills from "@/components/layout/Sections/Skills";
import ScrollUpButton from "@/components/ui/ScrollUpButton";
import { useSectionRefs } from "@/contexts/sectionRefs.context";
import { markIntroPlayed, useIntroPlayed } from "@/hooks/useIntroPlayed";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { useLenis } from "lenis/react";
import { Variants, m, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function HomeScreen() {
  const { registerSection } = useSectionRefs();
  const { aboutMe, experiences, skills, projects } = registerSection;
  const introPlayed = useIntroPlayed();
  const prefersReducedMotion = useReducedMotion();
  const lenis = useLenis();

  const aboutMeRef = useRef<HTMLElement | null>(null);
  const { scrolledPast: aboutMeReached } = useScrolledPast(aboutMeRef);

  const [ringsExpanded, setRingsExpanded] = useState(introPlayed);

  const setAboutMeRef = (node: HTMLElement | null) => {
    aboutMeRef.current = node;
    aboutMe(node);
  };

  useEffect(() => {
    if (ringsExpanded || prefersReducedMotion || !lenis) return;

    lenis.scrollTo(0, { immediate: true });
    lenis.stop();

    return () => lenis.start();
  }, [lenis, ringsExpanded, prefersReducedMotion]);

  const revealVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const revealFrom = introPlayed ? "visible" : "hidden";

  return (
    <m.div
      initial={introPlayed ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}>
      <m.div
        variants={revealVars}
        initial={revealFrom}
        animate={ringsExpanded ? "visible" : "hidden"}>
        <Header />
      </m.div>

      <Hero
        onRingsExpandComplete={() => {
          markIntroPlayed();
          setRingsExpanded(true);
        }}
      />

      <ScrollUpButton isVisible={aboutMeReached} />

      {/* Sempre renderizado (fica abaixo da dobra) para que o conteúdo exista no HTML do servidor */}
      <main className="w-full flex flex-col gap-10 md:mt-56 mt-37 mb-5">
        <AboutMe ref={setAboutMeRef} />
        <Experiences ref={experiences} />
        <Skills ref={skills} />
        <Projects ref={projects} />
      </main>

      <Footer />

      <m.div
        variants={revealVars}
        initial={revealFrom}
        animate={ringsExpanded ? "visible" : "hidden"}>
        <MobileNav />
      </m.div>
    </m.div>
  );
}
