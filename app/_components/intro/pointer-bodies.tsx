"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useRef } from "react";
import * as THREE from "three";

export function CenterSphere() {
  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [4],
    position: [0, 0, 0],
  }));
  useFrame(() => {
    api.position.set(0, 0, 0);
  });
  return null;
}

export function PointerLight() {
  const ref = useRef<THREE.PointLight>(null);
  const viewport = useThree((s) => s.viewport);
  useFrame((state) => {
    const light = ref.current;
    if (!light) return;
    light.position.set(
      (state.pointer.x * viewport.width) / 2,
      (state.pointer.y * viewport.height) / 2,
      4,
    );
  });
  return (
    <pointLight
      ref={ref}
      position={[33, 13, 3]}
      intensity={20}
      distance={0}
      decay={2}
      color="#ffffff"
    />
  );
}

export function Pointer() {
  const viewport = useThree((s) => s.viewport);
  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [5],
    position: [0, 0, 0],
  }));
  useFrame((state) => {
    api.position.set(
      (state.pointer.x * viewport.width) / 2,
      (state.pointer.y * viewport.height) / 2,
      0,
    );
  });
  return null;
}
