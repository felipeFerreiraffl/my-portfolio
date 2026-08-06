"use client";

import { cn } from "@/libs/cn";
import { AnimatePresence, m } from "motion/react";

interface CopyFeedbackProps {
  label: string;
  show: boolean;
  className?: string;
}

export default function CopyFeedback({ label, show, className }: CopyFeedbackProps) {
  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          role="status"
          aria-live="polite"
          className={cn(
            "absolute z-200 inline-flex w-auto pointer-events-none",
            "bg-bg p-3 border border-main rounded-xl",
            "text-sm text-text whitespace-nowrap",
            className,
          )}>
          {label}
        </m.div>
      )}
    </AnimatePresence>
  );
}
