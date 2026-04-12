import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/** 루트(텍스트) 메시 톤을 살짝 어둡게 */
const ROOT_DARKEN = 0.88;

function NameModel() {
  const { nodes } = useGLTF("/model/character/name.glb");

  const name = useMemo(() => {
    const root = nodes.텍스트.clone(true);
    root.scale.set(1, 1, 1);
    root.rotation.x = Math.PI * 0.3;
    root.position.set(-0.9, 1.4, 1.35);
    root.castShadow = true;

    root.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) {
        if ("color" in mat && mat.color instanceof THREE.Color) {
          mat.color.multiplyScalar(ROOT_DARKEN);
        }
      }
    });

    return root;
  }, [nodes]);

  return <primitive object={name} />;
}

export default NameModel;
