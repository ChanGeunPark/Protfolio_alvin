import { gsap, ScrollTrigger } from "@/lib/gsap/client";

type AnimateSkillsSceneParams = {
  section: HTMLElement;
  viewport: HTMLElement;
  track: HTMLElement;
};

function getHorizontalDistance(viewport: HTMLElement, track: HTMLElement) {
  return Math.max(0, track.scrollWidth - viewport.clientWidth);
}

export function animateSkillsScene({
  section,
  viewport,
  track,
}: AnimateSkillsSceneParams) {
  section.style.minHeight = "100vh";
  gsap.set(track, { x: 0 });
  const cardTweens: gsap.core.Tween[] = [];
  const cards = Array.from(
    track.querySelectorAll<HTMLElement>("[data-skills-card]"),
  );

  const tween = gsap.to(track, {
    x: () => -getHorizontalDistance(viewport, track),
    ease: "none",
    overwrite: "auto",
  });

  const trigger = ScrollTrigger.create({
    animation: tween,
    trigger: section,
    start: "top top",
    end: () => `+=${Math.max(1, getHorizontalDistance(viewport, track))}`,
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onRefresh: () => {
      gsap.set(track, { x: 0 });
    },
  });

  cards.forEach((card) => {
    const speed = Number(card.dataset.parallaxSpeed ?? "1");
    const normalizedSpeed = Number.isFinite(speed) ? speed : 1;
    const xDistance = Math.max(18, normalizedSpeed * 58);

    const parallaxTween = gsap.fromTo(
      card,
      {
        xPercent: 0,
      },
      {
        xPercent: -xDistance,
        ease: "none",
        overwrite: "auto",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(1, getHorizontalDistance(viewport, track))}`,
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      },
    );

    cardTweens.push(parallaxTween);
  });

  const handleRefreshInit = () => {
    gsap.set(track, { x: 0 });
  };

  ScrollTrigger.addEventListener("refreshInit", handleRefreshInit);
  ScrollTrigger.refresh();

  return () => {
    ScrollTrigger.removeEventListener("refreshInit", handleRefreshInit);
    trigger.kill();
    tween.kill();
    cardTweens.forEach((cardTween) => {
      cardTween.scrollTrigger?.kill();
      cardTween.kill();
    });
    section.style.removeProperty("min-height");
    gsap.set(track, { clearProps: "transform" });
    gsap.set(cards, { clearProps: "transform" });
  };
}
