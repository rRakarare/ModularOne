import React, { useEffect, useRef } from "react";
import { useAnimationFrame } from "../animation";
import { useSpring, animated, config } from "@react-spring/three";
import * as THREE from "three";
import { useScrollStore } from "@/lib/store";
import { floatMesh, resetRotation } from "../helpers";

function OneCube({
  name,
  material,
  geometry,
  morphTargetDictionary,
  morphTargetInfluences,
  position,
}) {
  const cube = useRef();

  const { scrollStates } = useScrollStore();

  const rand = Math.random()

  const scaleMultiplier = 0.9;
  const positionMultiplier = 2;


  const { positionCube, scaleCube, morphs } = useSpring({
    positionCube: !scrollStates.aState.active
      ? position
      : scrollStates.bState.active
      ? [0,0,0]
      : [
          position[0] * rand * positionMultiplier,
          position[1] * rand * positionMultiplier,
          position[2] * rand * positionMultiplier,
        ],
    scaleCube: !scrollStates.aState.active
      ? [1, 1, 1]
      : scrollStates.bState.active
      ? [0,0,0]
      : [
          rand * scaleMultiplier,
          rand * scaleMultiplier,
          rand * scaleMultiplier,
        ],
    morphs: !scrollStates.aState.active
      ? [0, 0]
      : [1, 0],
    delay: (key) => {
      switch (key) {
        default:
          return 0;
      }
    },

    config: (key) => {
      switch (key) {
        case "scaleCube":
          return config.wobbly;

        default:
          return {
            mass: 1,
            friction: 20,
            tension: 100,
            
          };
      }
    },
  });


  useAnimationFrame((deltaTime, time, lenis) => {
    if (!scrollStates.aState.active && !scrollStates.bState.active) {
      resetRotation(cube);
    }

    if (scrollStates.aState.active && !scrollStates.bState.active) {
      floatMesh({
        mesh: cube,
        time,
        speed: 2,
        rotationIntensity: 3,
        floatIntensity: 0.01,
        floatingRange: [-0.1, 0.1],
        rand,
      });
    }

    if (scrollStates.bState.active) {
      resetRotation(cube)
    }
  });

  return (
    <group>
      <animated.mesh
        castShadow
        scale={scaleCube}
        receiveShadow
        ref={cube}
        position={positionCube}
        name={name}
        material={material}
        geometry={geometry}
        morphTargetDictionary={morphTargetDictionary}
        morphTargetInfluences={morphs}
      />
    </group>
  );
}

export default OneCube;
