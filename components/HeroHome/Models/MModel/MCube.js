import React, { useEffect, useRef } from "react";
import { useAnimationFrame } from "../animation";
import { useAnimations } from "@react-three/drei";
import * as THREE from "three";

function MCube({
  name,
  material,
  geometry,
  morphTargetDictionary,
  morphTargetInfluences,
  position,
}) {
  const cube = useRef();

  const rand = Math.random() / 2;

  useAnimationFrame((deltaTime, time, lenis) => {
    const defaultPos = position;
    const progress = lenis.progress;

    if (name === "ModA1") {
    }

    if (progress >= rand) {
      cube.current.morphTargetInfluences = [1];

      cube.current.position.set(
        ...defaultPos.map((item) => item * (1 + progress - rand))
      );
    } else {
      cube.current.morphTargetInfluences = [0];
      cube.current.position.lerp(
        new THREE.Vector3(defaultPos[0], defaultPos[1], defaultPos[2]),
        0.1
      );
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

export default MCube;
