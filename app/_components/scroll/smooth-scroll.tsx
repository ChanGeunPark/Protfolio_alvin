"use client";

import { ScrollSmoother, initGsapClient } from "@/lib/gsap/client";
import { PropsWithChildren, useEffect, useRef } from "react";

type SmoothScrollProps = PropsWithChildren<{
  smoothness?: number;
  disableOnTouch?: boolean;
}>;

export default function SmoothScroll({
  children,
  smoothness = 1,
  disableOnTouch = true,
}: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content || typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    initGsapClient();

    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth: smoothness,
      effects: false,
      normalizeScroll: true,
      smoothTouch: disableOnTouch ? 0 : Math.max(0.1, smoothness * 0.5),
      ignoreMobileResize: true,
    });

    return () => {
      smoother.kill();
    };
  }, [disableOnTouch, smoothness]);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}
