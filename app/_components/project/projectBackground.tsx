"use client";

import { initGsapClient, gsap, ScrollTrigger } from "@/lib/gsap/client";
import { cls, getStreamEmbedUrl } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";

const BASE_BG_COLOR = "#28292E";

const SCENE_COLOR_BY_ID: Record<string, string> = {
  "project-intro-scene": "#28292D",
  "project-scene-0": "#28292D",
  "project-scene-1": "#1F2430",
  "project-scene-2": "#202A3A",
  "project-scene-3": "#1E2F2B",
  "project-scene-4": "#2D2438",
  "project-scene-5": "#2E2521",
};

type SceneBackground =
  | { type: "image"; src: string }
  | { type: "iframe"; src: string };

/**
 * 씬별 배경 미디어 설정.
 * 씬에 진입하면 opacity 0→1, blur 0.4rem→0 으로 애니메이션됩니다.
 * 씬을 벗어나면 반대로 되돌아갑니다.
 */
const SCENE_BACKGROUNDS: Partial<Record<string, SceneBackground>> = {
  "project-intro-scene": {
    type: "image",
    // src: "https://iframe.videodelivery.net/dfb40045f4086d15b9898dce60a7757f",
    src: "/images/projectScene/bg_projectIntro.png",
  },
  "project-scene-0": {
    type: "image",
    src: "/images/projectScene/bg_chizu.jpg",
  },
  "project-scene-1": {
    type: "image",
    src: "/images/projectScene/classroom-day.png",
  },
  "project-scene-2": {
    type: "image",
    src: "/images/projectScene/project-scene-2_bg.jpg",
  },
  "project-scene-3": {
    type: "image",
    src: "/images/projectScene/bg-academy.jpg",
  },
  "project-scene-4": {
    type: "image",
    src: "/images/projectScene/bg-academy.jpg",
  },
  "project-scene-5": {
    type: "image",
    src: "/images/projectScene/bg_eduedu3.jpg",
  },
  "project-scene-6": {
    type: "image",
    src: "/images/projectScene/bg_eduedu3.jpg",
  },
  "project-scene-7": {
    type: "image",
    src: "/images/projectScene/bg_eduedu3.jpg",
  },
};

const getSceneColor = (scene: HTMLElement) =>
  SCENE_COLOR_BY_ID[scene.id] ?? BASE_BG_COLOR;

const BG_SPOT_STYLE = {
  backgroundColor: BASE_BG_COLOR,
  "--bg-spot-x": "50%",
  "--bg-spot-y": "50%",
} as CSSProperties;

const ProjectBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = backgroundRef.current;
    if (!el) return;

    let raf = 0;
    const setSpot = (clientX: number, clientY: number) => {
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      el.style.setProperty("--bg-spot-x", `${x}%`);
      el.style.setProperty("--bg-spot-y", `${y}%`);
    };

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setSpot(e.clientX, e.clientY));
    };

    setSpot(window.innerWidth / 2, window.innerHeight / 2);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  useEffect(() => {
    initGsapClient();

    const background = backgroundRef.current;
    if (!background) return;

    gsap.set(background, { backgroundColor: BASE_BG_COLOR });

    let timelines: gsap.core.Timeline[] = [];
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    const buildTriggers = () => {
      timelines.forEach((tl) => {
        tl.scrollTrigger?.kill();
        tl.kill();
      });
      timelines = [];

      gsap.set(background, { backgroundColor: BASE_BG_COLOR });

      const projectScenes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-project-scene]"),
      );
      if (!projectScenes.length) return;

      // 배경색 전환 타임라인
      projectScenes.forEach((scene, index) => {
        const toColor = getSceneColor(scene);
        const previousColor =
          index === 0 ? BASE_BG_COLOR : getSceneColor(projectScenes[index - 1]);

        const sceneTl = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: "top 85%",
            end: "bottom bottom",
            scrub: true,
            ...(index === 0 && {
              onLeaveBack: () => {
                gsap.set(background, { backgroundColor: BASE_BG_COLOR });
              },
            }),
          },
        });

        sceneTl.fromTo(
          background,
          { backgroundColor: previousColor, immediateRender: false },
          { backgroundColor: toColor, duration: 1, ease: "none" },
        );

        timelines.push(sceneTl);
      });

      // 씬별 배경 미디어 레이어 애니메이션
      projectScenes.forEach((scene) => {
        const sceneId = scene.id;
        if (!SCENE_BACKGROUNDS[sceneId]) return;

        const layer = background.querySelector<HTMLElement>(
          `[data-bg-scene="${sceneId}"]`,
        );
        if (!layer) return;

        const mediaTl = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: "30% 85%",
            end: "50% 15%",
            toggleActions: "play reverse play reverse",
          },
        });

        mediaTl.fromTo(
          layer,
          { opacity: 0, filter: "blur(0.4rem)" },
          {
            opacity: 1,
            filter: "blur(0rem)",
            duration: 0.6,
            ease: "power2.out",
          },
        );

        timelines.push(mediaTl);
      });
    };

    const scheduleRebuild = () => {
      if (resizeTimer != null) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeTimer = null;
        buildTriggers();
        ScrollTrigger.refresh();
      }, 120);
    };

    // Do not hook ScrollTrigger "refresh" to rebuild — killing triggers during a global
    // refresh can leave ScrollTrigger with null pins and crash in _parsePosition (scrollHeight).
    const runAfterLayout = () => {
      buildTriggers();
      ScrollTrigger.refresh();
    };
    requestAnimationFrame(() => {
      requestAnimationFrame(runAfterLayout);
    });

    const ro = new ResizeObserver(() => scheduleRebuild());
    const smoothContent = document.getElementById("smooth-content");
    if (smoothContent) ro.observe(smoothContent);
    ro.observe(document.documentElement);

    return () => {
      ro.disconnect();
      if (resizeTimer != null) clearTimeout(resizeTimer);
      timelines.forEach((tl) => {
        tl.scrollTrigger?.kill();
        tl.kill();
      });
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 top-0 left-0 z-0 h-screen w-full"
      style={BG_SPOT_STYLE}
      ref={backgroundRef}
    >
      <div className="absolute inset-0 h-full w-full">
        <iframe
          src={getStreamEmbedUrl(
            "https://iframe.videodelivery.net/2c1eab7a190e2bea4d6c65b2f998c227",
          )}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
          style={{
            width: "max(100%, 177.78vh)",
            height: "max(100%, 56.25vw)",
          }}
          allowFullScreen
        />
      </div>

      {(Object.entries(SCENE_BACKGROUNDS) as [string, SceneBackground][]).map(
        ([sceneId, bg]) => (
          <div
            key={sceneId}
            data-bg-scene={sceneId}
            className="absolute inset-0 h-full w-full"
            style={{ opacity: 0, filter: "blur(0.4rem)" }}
          >
            {bg.type === "image" ? (
              <Image
                src={bg.src}
                alt=""
                fill
                className={cls("object-cover")}
                priority
              />
            ) : (
              <iframe
                src={getStreamEmbedUrl(bg.src)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
                style={{
                  width: "max(100%, 177.78vh)",
                  height: "max(100%, 56.25vw)",
                }}
                allowFullScreen
              />
            )}
          </div>
        ),
      )}
      {/* 그림자 */}
      <div className="absolute inset-0 h-full w-full bg-black/85" />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(circle 60vmin at var(--bg-spot-x) var(--bg-spot-y), rgba(255,255,255,1), transparent 55%)",
          mixBlendMode: "soft-light",
        }}
        aria-hidden
      />
    </div>
  );
};

export default ProjectBackground;
