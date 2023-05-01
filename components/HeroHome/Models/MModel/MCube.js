import React, { useEffect, useRef, useState } from "react";
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

  const store = useScrollStore();

  const scrollState = store.scrollState;
  const scrollMap = store.scrollMap;

  const [rand] = useState(() => Math.random());

  const vec = new THREE.Vector3();

  const scaleMultiplier = 0.9;
  const positionMultiplier = 2;

  const isWall = wallPosition ? true : false;
  const xWall = isFront ? -1.51325 : 1.32221;
  const wallPositionVec = isWall ? [xWall, ...wallPosition] : [0, 0, 0];
  const wallScale = isWall ? [1, 1, 1] : [0, 0, 0];

  const { positionCube, scaleCube, morphs } = useSpring({
    positionCube:
      scrollState === "init" || scrollState === "default"
        ? position
        : scrollState === "aS" || scrollState === "aM"
        ? [
            position[0] * rand * positionMultiplier,
            position[1] * rand * positionMultiplier,
            position[2] * rand * positionMultiplier,
          ]
        : scrollState === "bS" ||
          scrollState === "bM" ||
          scrollState === "cS" ||
          scrollState === "cM"
        ? wallPositionVec
        : [0, 0, 0],

    scaleCube:
      scrollState === "init" || scrollState === "default"
        ? [1, 1, 1]
        : scrollState === "aS" || scrollState === "aM"
        ? [
            rand * scaleMultiplier,
            rand * scaleMultiplier,
            rand * scaleMultiplier,
          ]
        : scrollState === "bS" ||
          scrollState === "bM" ||
          scrollState === "cS" ||
          scrollState === "cM"
        ? wallScale
        : [0, 0, 0],
    morphs:
      scrollState === "init" || scrollState === "default"
        ? [0, 0]
        : scrollState === "aS" || scrollState === "aM"
        ? [1, 0]
        : scrollState === "bS" ||
          scrollState === "bM" ||
          scrollState === "cS" ||
          scrollState === "cM"
        ? [0, 1]
        : [0, 0],

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
