"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import Character from "./character-model";
import NameGltf from "./name-model";

export function MainModel() {
  const mainModel = useRef<THREE.Group>(null);
  useFrame((state) => {
    const g = mainModel.current;
    if (!g) return;
    const { x, y } = state.pointer;
    if (x > -0.9 && y < 0.9) {
      g.rotation.y = Math.PI * x * 0.3;
      g.rotation.x = -Math.PI * y * 0.2;
    }
  });
  return (
    <group ref={mainModel}>
      <NameGltf />
      <Character />
    </group>
  );
}
