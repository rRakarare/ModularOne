import React, { useEffect, useRef } from "react";
import { useAnimationFrame } from "../animation";
import { useSpring, animated, config } from "@react-spring/three";
import * as THREE from "three";
import { useScrollStore } from "@/lib/store";
import { floatMesh, resetRotation } from "../helpers";



function MCube({
  name,
  material,
  geometry,
  morphTargetDictionary,
  morphTargetInfluences,
  position,
  wallPosition,
  isFront,
}) {
  const cube = useRef();

  const { scrollStates } = useScrollStore();

  useEffect(() => {
    console.log(
      scrollStates.aState.active,
      scrollStates.bState.active,
      scrollStates.cState.active
    );
  }, [scrollStates]);

  const rand = Math.random()

  const vec = new THREE.Vector3();

  const scaleMultiplier = 0.9;
  const positionMultiplier = 2;



  const isWall = wallPosition ? true : false;
  const xWall = isFront ? -1.51325 : 1.32221;
  const wallPositionVec = isWall ? [xWall, ...wallPosition] : [0, 0, 0];
  const wallScale = isWall ? [1,1,1] : [0, 0, 0];

  const { positionCube, scaleCube, morphs } = useSpring({
    positionCube: !scrollStates.aState.active
      ? position
      : scrollStates.bState.active
      ? wallPositionVec
      : [
          position[0] * rand * positionMultiplier,
          position[1] * rand * positionMultiplier,
          position[2] * rand * positionMultiplier,
        ],
    scaleCube: !scrollStates.aState.active
      ? [1, 1, 1]
      : scrollStates.bState.active
      ? wallScale
      : [
          rand * scaleMultiplier,
          rand * scaleMultiplier,
          rand * scaleMultiplier,
        ],
    morphs: !scrollStates.aState.active
      ? [0, 0]
      : scrollStates.bState.active
      ? [0, 1]
      : [1, 0],
    delay: (key) => {
      switch (key) {
        default:
          return 0;
      }
    },

    config: (key) => {
      switch (key) {
        case "positionCube":
          return config.gentle;
        case "scaleCube":
          return config.gentle;

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
        scale={scaleCube}
        castShadow
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

export default MCube;
