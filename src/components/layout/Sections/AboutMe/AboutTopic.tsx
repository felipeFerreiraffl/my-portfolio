"use client";

import { m, useScroll, useTransform, Variants } from "motion/react";
import { ReactNode, useRef } from "react";

interface AboutTopicProps {
  title: string;
  children: ReactNode;
  variants?: Variants;
}

export default function AboutTopic({ title, children, variants }: AboutTopicProps) {
  const diamondRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: diamondRef,
    offset: ["start end", "end start"],
  });

  const diamondRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="w-full flex flex-col items-center gap-1 border-b-[0.5px] border-text pb-2">
        <div
          ref={diamondRef}
          className="grid place-items-center md:size-8 size-6 rounded-full border border-title">
          <m.div style={{ rotate: diamondRotate }} className="md:size-4 size-3 bg-main rotate-45" />
        </div>

        <h3 className="md:text-2xl text-lg text-text font-medium leading-heading">{title}</h3>
      </div>

      <m.div variants={variants} className="pt-5">{children}</m.div>
    </div>
  );
}
