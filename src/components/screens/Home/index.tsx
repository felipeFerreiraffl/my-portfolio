"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/Header/MobileNav";
import AboutMe from "@/components/layout/Sections/AboutMe";
import Experiences from "@/components/layout/Sections/Experiences";
import Hero from "@/components/layout/Sections/Hero";
import Projects from "@/components/layout/Sections/Projects";
import Skills from "@/components/layout/Sections/Skills";
import { useSectionRefs } from "@/contexts/sectionRefs.context";
import { useLenis } from "lenis/react";
import { Variants, m } from "motion/react";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const { registerSection } = useSectionRefs();
  const { aboutMe, experiences, skills, projects } = registerSection;
  const [ringsExpanded, setRingsExpanded] = useState(false);
  const lenis = useLenis();

  // Trava a tela enquanto a intro roda, para que ela seja lida como um loading
  useEffect(() => {
    if (ringsExpanded || !lenis) return;

    lenis.scrollTo(0, { immediate: true });
    lenis.stop();

    return () => lenis.start();
  }, [lenis, ringsExpanded]);

  const revealVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <>
      <m.div variants={revealVars} initial="hidden" animate={ringsExpanded ? "visible" : "hidden"}>
        <Header />
      </m.div>

      <Hero onRingsExpandComplete={() => setRingsExpanded(true)} />

      {/* Sempre renderizado (fica abaixo da dobra) para que o conteúdo exista no HTML do servidor */}
      <main className="w-full flex flex-col gap-10 md:mt-56 mt-37 mb-5">
        <AboutMe ref={aboutMe} />
        <Experiences ref={experiences} />
        <Skills ref={skills} />
        <Projects ref={projects} />
      </main>

      <Footer />

      <m.div variants={revealVars} initial="hidden" animate={ringsExpanded ? "visible" : "hidden"}>
        <MobileNav />
      </m.div>
    </>
  );
}
