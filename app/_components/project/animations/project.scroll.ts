import { gsap, ScrollTrigger } from "@/lib/gsap/client";

type AnimateProjectScenesParams = {
  section: HTMLElement;
  scenes: HTMLElement[];
};

export function animateProjectScenes({
  section,
  scenes,
}: AnimateProjectScenesParams) {
  const triggers: ScrollTrigger[] = [];

  scenes.forEach((scene, index) => {
    const card = scene.querySelector<HTMLElement>("[data-project-card]");
    const badge = scene.querySelector<HTMLElement>("[data-project-badge]");

    if (!card) {
      return;
    }

    const isOddScene = index % 2 === 1;
    const cardFrom = isOddScene
      ? { xPercent: 20, yPercent: 30, rotate: -1.1, opacity: 0.9 }
      : { xPercent: 20, yPercent: 30, rotate: 1.2, opacity: 0.9 };
    const cardTo = isOddScene
      ? { xPercent: -20, yPercent: -30, rotate: 0.6, opacity: 1 }
      : { xPercent: -20, yPercent: -30, rotate: -0.8, opacity: 1 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scene,
        start: () => "top 85%",
        end: () => "bottom 50%",
        scrub: 1.1,
        invalidateOnRefresh: false,
        refreshPriority: 1,
      },
      defaults: { ease: "none" },
    });

    tl.fromTo(
      card,
      { ...cardFrom, force3D: true },
      {
        ...cardTo,
        force3D: true,
        overwrite: "auto",
        duration: 1,
      }
    );

    if (badge) {
      tl.fromTo(
        badge,
        {
          yPercent: 20,
          opacity: 0.5,
        },
        {
          yPercent: -8,
          opacity: 1,
          duration: 1,
        },
        0,
      );
    }

    const trigger = tl.scrollTrigger;
    if (trigger) {
      triggers.push(trigger);
    }
  });

  const sectionTrigger = ScrollTrigger.create({
    trigger: section,
    start: "top bottom",
    end: "bottom top",
  });
  triggers.push(sectionTrigger);

  return () => {
    triggers.forEach((trigger) => trigger.kill());
  };
}
