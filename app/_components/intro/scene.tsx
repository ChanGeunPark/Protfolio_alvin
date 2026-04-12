"use client";

import { Environment, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Clump } from "./clump";
import { MainModel } from "./main-model";
import {
  CenterSphere,
  Pointer,
  PointerLight,
} from "./pointer-bodies";
import { PointCircle } from "./point-circle";
import type { BoxTextureId } from "./types";

export function IntroScene({ boxTexture }: { boxTexture: BoxTextureId }) {
  return (
    <>
      <Environment preset="studio" environmentIntensity={0.5} />
      <Stars />
      <ambientLight intensity={0.2} />
      <hemisphereLight
        args={["#f4f4f5", "#1a1a1c", 0.05]}
        position={[0, 1, 0]}
      />
      <spotLight
        intensity={1.65}
        angle={0.22}
        penumbra={1}
        position={[30, 30, 30]}
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <PointerLight />
      <directionalLight
        intensity={0.55}
        position={[-12, 14, 8]}
        color="#ffffff"
      />
      <Physics>
        <MainModel />
        <Clump boxTexture={boxTexture} />
        <Pointer />
        <CenterSphere />
        <PointCircle />
      </Physics>
    </>
  );
}
