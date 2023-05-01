import React, { useEffect, useRef, useState } from "react";
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

  const { scrollState, scrollMap } = useScrollStore();

  const [rand] = useState(() => Math.random());

  const scaleMultiplier = 0.9;
  const positionMultiplier = 2;

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
        ? [0, 0, 0]
        : position,

    scaleCube:
    scrollState === "init" || scrollState === "default"
        ? [1, 1, 1] :
      scrollState === "aS" || scrollState === "aM"
        ? [
            rand * scaleMultiplier,
            rand * scaleMultiplier,
            rand * scaleMultiplier,
          ]
        : scrollState === "bS" ||
          scrollState === "bM" ||
          scrollState === "cS" ||
          scrollState === "cM"
        ? [0, 0, 0]
        : [0, 0, 0],
    morphs: scrollState === "aS" || scrollState === "aM" ? [1, 0] : [0, 0],

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
