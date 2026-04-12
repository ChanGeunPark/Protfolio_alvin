"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useMemo } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { ONE_SPHERE_GEOMETRY, rfs } from "./constants";
import { MUD_LEAF_TEXTURES_POINT_CIRCLE } from "./textures";

export function PointCircle({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
}: {
  mat?: THREE.Matrix4;
  vec?: THREE.Vector3;
}) {
  const [color, roughness, normal] = useLoader(
    TextureLoader,
    [...MUD_LEAF_TEXTURES_POINT_CIRCLE],
  );

  const baubleMaterial = useMemo(() => {
    const m = new THREE.MeshStandardMaterial({
      color: "white",
      roughness: 1,
      envMapIntensity: 1.35,
    });
    m.map = color;
    m.roughnessMap = roughness;
    m.normalMap = normal;
    return m;
  }, [color, roughness, normal]);

  const [ref, api] = useSphere<THREE.InstancedMesh>(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));

  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;
    mesh.getMatrixAt(0, mat);
    api
      .at(0)
      .applyForce(
        vec
          .setFromMatrixPosition(mat)
          .normalize()
          .multiplyScalar(-50)
          .toArray(),
        [0, 0, 0],
      );
  });

  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[undefined, undefined, 1]}
      geometry={ONE_SPHERE_GEOMETRY}
      material={baubleMaterial}
    />
  );
}
