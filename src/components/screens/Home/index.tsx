"use client";

import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/Header/MobileNav";
import Hero from "@/components/layout/Sections/Hero";
import Section from "@/components/ui/Section";
import { Variants, m } from "motion/react";
import { useState } from "react";

export default function HomeScreen() {
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

      <main className="w-dvw md:mt-56 mt-37 mb-5">
        <Section title="Sobre mim" />
      </main>

      <m.div variants={revealVars} initial="hidden" animate={ringsExpanded ? "visible" : "hidden"}>
        <MobileNav />
      </m.div>
    </>
  );
}
