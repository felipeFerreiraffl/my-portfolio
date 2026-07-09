"use client";

import { ReactNode } from "react";

interface AboutTopicProps {
  title: string;
  children: ReactNode;
}

export default function AboutTopic({ title, children }: AboutTopicProps) {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="w-full flex flex-col items-center gap-1 border-b-[0.5px] border-text pb-2">
        <div className="grid place-items-center md:size-8 size-6 rounded-full border border-title">
          <div className="md:size-4 size-3 bg-main rotate-45" />
        </div>

        <h3 className="md:text-2xl text-lg text-text font-medium leading-heading">{title}</h3>
      </div>

      <div className="pt-5">{children}</div>
    </div>
  );
}
