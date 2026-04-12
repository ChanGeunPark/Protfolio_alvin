import * as THREE from "three";

export const rfs = THREE.MathUtils.randFloatSpread;

export const ONE_SPHERE_GEOMETRY = new THREE.SphereGeometry(0.6, 32, 32);

export const INTRO_CAMERA = {
  position: [0, 1, 20] as [number, number, number],
  fov: 35,
  near: 10,
  far: 1000,
};

export function preventWebglContextLost(gl: {
  domElement: HTMLCanvasElement;
}) {
  gl.domElement.addEventListener(
    "webglcontextlost",
    (e) => {
      e.preventDefault();
    },
    false,
  );
}
