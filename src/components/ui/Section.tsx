"use client";

import { cn } from "@/libs/cn";
import { ComponentProps } from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps extends ComponentProps<"section"> {
  title: string;
}

export default function Section({ className, children, title, ...props }: SectionProps) {
  return (
    <section className={cn("w-full flex flex-col gap-16", className)} {...props}>
      <SectionTitle title={title} />

      {children}
    </section>
  );
}
