"use client";

import { RefObject, useEffect, useState } from "react";
import { useScroll, useSpring, useTransform } from "motion/react";

interface ConnectorGeometry {
  left: number;
  top: number;
  width: number;
  angle: number;
}

export const useConnectorLine = (
  containerRef: RefObject<HTMLElement | null>,
  fromRef: RefObject<HTMLElement | null>,
  toRef: RefObject<HTMLElement | null>,
) => {
  const [geometry, setGeometry] = useState<ConnectorGeometry | null>(null);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;
      if (!container || !from || !to) return;

      const containerBox = container.getBoundingClientRect();
      const fromBox = from.getBoundingClientRect();
      const toBox = to.getBoundingClientRect();

      const x1 = fromBox.left + fromBox.width / 2 - containerBox.left;
      const y1 = fromBox.bottom - containerBox.top;
      const x2 = toBox.left + toBox.width / 2 - containerBox.left;
      const y2 = toBox.top - containerBox.top;

      const dx = x2 - x1;
      const dy = y2 - y1;

      setGeometry({
        left: x1,
        top: y1,
        width: Math.hypot(dx, dy),
        angle: (Math.atan2(dy, dx) * 180) / Math.PI,
      });
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [containerRef, fromRef, toRef]);

  const { scrollYProgress } = useScroll({
    target: toRef,
    offset: ["start 90%", "start 45%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    skipInitialAnimation: true,
  });
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1], { clamp: true });

  return { geometry, scaleX };
};
