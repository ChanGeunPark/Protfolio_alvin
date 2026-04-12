import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

function Character() {
  const { scene } = useGLTF("/model/character/scene.gltf");

  const character = useMemo(() => {
    const root = scene.clone(true);
    root.scale.set(3, 3, 3);
    root.castShadow = true;
    root.receiveShadow = true;

    return root;
  }, [scene]);

  return <primitive object={character} />;
}

export default Character;
