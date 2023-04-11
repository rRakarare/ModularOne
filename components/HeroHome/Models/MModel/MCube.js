import React, { useEffect, useRef } from "react";
import { useAnimationFrame } from "../animation";
import { useAnimations } from "@react-three/drei";
import * as THREE from "three";

function MCube({
  animationClip,
  animation,
  name,
  material,
  geometry,
  morphTargetDictionary,
  morphTargetInfluences,
  position
}) {
  const cube = useRef();
  const cubeBack = useRef();



  const rand = Math.random() / 2;
  const rand2= Math.random() / 2;

  const { actions } = useAnimations([animationClip], cube);



  useEffect(() => {
    const action = actions[animation];
    action.play().paused = true;
  }, [actions]);

  useAnimationFrame((deltaTime, time, lenis) => {
    const action = actions[animation];
    const defaultPos = position;
    const progress = lenis.progress;


    if (name === "ModA1") {
      cube.current.morphTargetInfluence = [1]
      console.log(cube.current.morphTargetInfluences)
    }


    if (progress >= rand) {
      action.time = THREE.MathUtils.damp(
        action.time,
        action.getClip().duration * 2 * (progress - rand),
        100,
        deltaTime
      );

      cube.current.position.set(
        ...defaultPos.map((item) => item * (1 + progress - rand))
      );
    } else {
      action.time = THREE.MathUtils.damp(action.time, 0, 100, deltaTime);
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
        position={[...position, 0.1]}
        name={name}
        material={material}
        geometry={geometry}
        morphTargetDictionary={morphTargetDictionary}
        morphTargetInfluences={morphTargetInfluences}
      />
      <mesh
        castShadow
        receiveShadow
        ref={cubeBack}
        position={[...position, -0.1]}
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
