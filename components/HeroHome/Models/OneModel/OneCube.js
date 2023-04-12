import React, { useEffect, useRef } from "react";
import { useAnimationFrame } from "../animation";
import { useAnimations } from "@react-three/drei";
import * as THREE from "three";

function OneCube({
  name,
  material,
  geometry,
  morphTargetDictionary,
  morphTargetInfluences,
  position,
}) {
  const cube = useRef();

  const rand = Math.random() / 2;

  const vec = new THREE.Vector3();

  useAnimationFrame((deltaTime, time, lenis) => {
    const defaultPos = vec.set(...position);
    const progress = lenis.progress;

    if (name === "ModA1") {
    }

    if (progress >= rand) {
      cube.current.morphTargetInfluences = [
        THREE.MathUtils.lerp(cube.current.morphTargetInfluences[0], 1, 0.25),
      ];

      cube.current.position.lerp(defaultPos.multiplyScalar(rand*6), 0.1);
    } else {
      cube.current.morphTargetInfluences = [
        THREE.MathUtils.lerp(cube.current.morphTargetInfluences[0], 0, 0.25),
      ];
      cube.current.position.lerp(defaultPos, 0.1);
    }
  });

  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        ref={cube}
        position={position}
        name={name}
        material={material}
        geometry={geometry}
        morphTargetDictionary={morphTargetDictionary}
        morphTargetInfluences={morphTargetInfluences}
      />
    </group>
  );
}

export default OneCube;
