import {
  ContactShadows,
  Environment,
  Float,
  Html,
  Plane,
  Sparkles,
  Stage,
  Stars,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLenis } from "@studio-freight/react-lenis";
import React, { Suspense, useEffect, useState } from "react";
import { useAnimationFrame } from "./Models/animation";
import MModel from "./Models/MModel";
import OneModel from "./Models/OneModel";
import { useControls } from "leva";
import { useSpring, animated, config } from "@react-spring/three";

function Scene() {
  const { intensity, x, y, z } = useControls("SpotLight", {
    intensity: {
      value: 0.1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    angle: {
      value: 0.1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    x: {
      value: 0.1,
      min: -10,
      max: 10,
      step: 0.1,
    },
    y: {
      value: 0.1,
      min: -10,
      max: 10,
      step: 0.1,
    },
    z: {
      value: 0.1,
      min: -10,
      max: 10,
      step: 0.1,
    },
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const { scale } = useSpring({ scale: active ? 1 : 0, config: config.gentle });

  // useAnimationFrame((deltaTime, lenis) => {
  //   // Pass on a function to the setter of the state
  //   // to make sure we always have the latest state
  //   console.log(lenis.progress)
  // })

  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 3] }}>
      <ambientLight intensity={0.4} />
      <spotLight
        intensity={intensity}
        angle={0.1}
        penumbra={1}
        position={[x, y, z]}
        castShadow
      />
      <Environment preset="city" blur={1} />
      <ContactShadows
        resolution={512}
        position={[0, -1.3, 0]}
        opacity={2}
        scale={10}
        blur={1}
        far={1.9}
      />

      <animated.group scale={scale}>
        <MModel />
        <OneModel />
      </animated.group>
    </Canvas>
  );
}

export default Scene;
