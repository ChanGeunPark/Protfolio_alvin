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
    const enterItems = scene.querySelectorAll<HTMLElement>(
      "[data-project-enter]",
    );
    const media = scene.querySelector<HTMLElement>("[data-project-media]");

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
      },
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

    // One-time stagger reveal for card content elements
    if (enterItems.length > 0) {
      gsap.set(enterItems, { opacity: 0, y: 18 });

      const enterTrigger = ScrollTrigger.create({
        trigger: scene,
        start: "center bottom",
        once: true,
        onEnter: () => {
          gsap.to(enterItems, {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.07,
          });
        },
      });
      triggers.push(enterTrigger);
    }

    // One-time media fade-in + scale reveal
    if (media) {
      gsap.set(media, { opacity: 0, scale: 0.94 });

      const mediaTrigger = ScrollTrigger.create({
        trigger: scene,
        start: "center bottom",
        once: true,
        onEnter: () => {
          gsap.to(media, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.15,
          });
        },
      });
      triggers.push(mediaTrigger);
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
