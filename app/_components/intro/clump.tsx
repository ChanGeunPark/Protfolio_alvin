"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { useMemo } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { rfs } from "./constants";
import type { BoxTextureId } from "./types";
import { CLUMP_TEXTURES } from "./textures";

export function Clump({
  boxTexture,
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
}: {
  boxTexture: BoxTextureId;
  mat?: THREE.Matrix4;
  vec?: THREE.Vector3;
}) {
  const boxGeometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const sphereGeometry = useMemo(
    () => new THREE.SphereGeometry(0.65, 32, 32),
    [],
  );

  const [
    normal,
    roughness,
    color,
    normal2,
    roughness2,
    color2,
    normal3,
    roughness3,
    color3,
  ] = useLoader(TextureLoader, [...CLUMP_TEXTURES]);

  const baubleMaterial = useMemo(() => {
    const m = new THREE.MeshStandardMaterial({
      roughness: 1,
      envMapIntensity: 1.35,
    });
    if (boxTexture === 1) m.color.set("#81cb23");
    else if (boxTexture === 2) m.color.set("#e1e5e9");
    else m.color.set("#5cc5dd");

    if (boxTexture === 1) {
      m.normalMap = normal;
      m.roughnessMap = roughness;
      m.map = color;
    } else if (boxTexture === 2) {
      m.normalMap = normal2;
      m.roughnessMap = roughness2;
      m.map = color2;
    } else {
      m.normalMap = normal3;
      m.roughnessMap = roughness3;
      m.map = color3;
    }
    return m;
  }, [
    boxTexture,
    normal,
    roughness,
    color,
    normal2,
    roughness2,
    color2,
    normal3,
    roughness3,
    color3,
  ]);

  const [ref, api] = useBox<THREE.InstancedMesh>(() => ({
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));

  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;
    for (let i = 0; i < 25; i++) {
      mesh.getMatrixAt(i, mat);
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-50)
            .toArray(),
          [0, 0, 0],
        );
    }
  });

  const geometry =
    boxTexture === 1 || boxTexture === 3 ? boxGeometry : sphereGeometry;

  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[undefined, undefined, 25]}
      geometry={geometry}
      onPointerMove={(e) => e.stopPropagation()}
      material={baubleMaterial}
    />
  );
}
