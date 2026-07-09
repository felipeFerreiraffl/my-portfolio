"use client";

import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/Header/MobileNav";
import AboutMe from "@/components/layout/Sections/AboutMe";
import Hero from "@/components/layout/Sections/Hero";
import { useSectionRefs } from "@/contexts/sectionRefs.context";
import { Variants, m } from "motion/react";
import { useState } from "react";

export default function HomeScreen() {
  const { refs } = useSectionRefs();
  const [ringsExpanded, setRingsExpanded] = useState(false);

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

      {ringsExpanded && (
        <main className="w-dvw md:mt-56 mt-37 mb-5">
          <AboutMe ref={refs.aboutMe} />
        </main>
      )}

      <m.div variants={revealVars} initial="hidden" animate={ringsExpanded ? "visible" : "hidden"}>
        <MobileNav />
      </m.div>
    </>
  );
}
