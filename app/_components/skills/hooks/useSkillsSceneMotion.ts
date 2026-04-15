"use client";

import { gsap, initGsapClient } from "@/lib/gsap/client";
import { useEffect } from "react";
import { animateSkillsScene } from "../animations/skills.scroll";

export function useSkillsSceneMotion(sectionSelector = "[data-skills-section]") {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    initGsapClient();

    const section = document.querySelector<HTMLElement>(sectionSelector);
    if (!section) {
      return;
    }

    const viewport = section.querySelector<HTMLElement>("[data-skills-viewport]");
    const track = section.querySelector<HTMLElement>("[data-skills-track]");

    if (!viewport || !track) {
      return;
    }

    const ctx = gsap.context(() => {
      const cleanup = animateSkillsScene({ section, viewport, track });
      return cleanup;
    }, section);

    return () => {
      ctx.revert();
    };
  }, [sectionSelector]);
}
