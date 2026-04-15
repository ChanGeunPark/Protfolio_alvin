"use client";

import { initGsapClient, gsap } from "@/lib/gsap/client";
import { useEffect } from "react";
import { animateProjectScenes } from "../animations/project.scroll";

export function useProjectSceneMotion(sectionSelector = "[data-project-section]") {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    initGsapClient();

    const section = document.querySelector<HTMLElement>(sectionSelector);
    if (!section) {
      return;
    }

    const scenes = Array.from(
      section.querySelectorAll<HTMLElement>("[data-project-scene]")
    );

    const ctx = gsap.context(() => {
      const cleanup = animateProjectScenes({ section, scenes });
      return cleanup;
    }, section);

    return () => {
      ctx.revert();
    };
  }, [sectionSelector]);
}
