"use client";

import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Suspense, useCallback, useState } from "react";
import {
  INTRO_CAMERA,
  preventWebglContextLost,
} from "./constants";
import { IntroOverlay } from "./overlay";
import { IntroScene } from "./scene";
import type { BoxTextureId } from "./types";

export default function Intro() {
  const [boxTexture, setBoxTexture] = useState<BoxTextureId>(1);

  const cycleBoxTexture = useCallback(() => {
    setBoxTexture((t) => (t >= 3 ? 1 : ((t + 1) as BoxTextureId)));
  }, []);

  return (
    <div className="bg-[#28292E]">
      <div className="relative h-screen w-full">
        <Suspense
          fallback={
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#28292E]" />
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
      </div>
    </div>
  );
}
