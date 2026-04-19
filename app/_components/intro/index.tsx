"use client";

import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { INTRO_CAMERA, preventWebglContextLost } from "./constants";
import { IntroOverlay } from "./overlay";
import { IntroScene } from "./scene";
import type { BoxTextureId } from "./types";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInViewport, setIsInViewport] = useState(true);
  const [boxTexture, setBoxTexture] = useState<BoxTextureId>(1);

  const cycleBoxTexture = useCallback(() => {
    setBoxTexture((t) => (t >= 3 ? 1 : ((t + 1) as BoxTextureId)));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      return;
    }

    let observer: IntersectionObserver | null = null;
    let lastTopPx = -1;

    const attach = () => {
      const topPx = Math.round(window.innerHeight * 0.9);
      if (observer && topPx === lastTopPx) {
        return;
      }
      lastTopPx = topPx;
      observer?.disconnect();
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry) {
            setIsInViewport(entry.isIntersecting);
          }
        },
        {
          root: null,
          rootMargin: `${topPx}px 0px 160px 0px`,
          threshold: 0,
        },
      );
      observer.observe(el);
    };

    attach();
    window.addEventListener("resize", attach);
    return () => {
      window.removeEventListener("resize", attach);
      observer?.disconnect();
    };
  }, []);

  return (
    <div id="home" className="">
      <div ref={containerRef} className="relative h-screen w-full">
        {isInViewport ? (
          <Suspense
            fallback={
              <div className="absolute inset-0 flex flex-col items-center justify-center " />
            }
          >
            <section className="relative z-20 h-screen w-full">
              <Canvas
                shadows
                dpr={[1, 2]}
                camera={INTRO_CAMERA}
                className="h-full w-full"
                onCreated={({ gl }) => {
                  preventWebglContextLost(gl);
                }}
              >
                <IntroScene boxTexture={boxTexture} />
                <Html
                  as="div"
                  center
                  className="relative h-screen w-screen"
                  position={[0, 0, 0]}
                >
                  <IntroOverlay onCycleTexture={cycleBoxTexture} />
                </Html>
              </Canvas>
            </section>
          </Suspense>
        ) : (
          <div className="absolute inset-0 bg-[#28292E]" aria-hidden />
        )}
      </div>
    </div>
  );
}
