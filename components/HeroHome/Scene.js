import {
  ContactShadows,
  Environment,
  Float,
  Html,
  Plane,
  RandomizedLight,
  Sparkles,
  Stage,
  Stars,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLenis } from "@studio-freight/react-lenis";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useAnimationFrame } from "./Models/animation";
import MModel from "./Models/MModel";
import OneModel from "./Models/OneModel";
import { useControls } from "leva";
import { useSpring, animated, config } from "@react-spring/three";
import Particles from "./Models/Particles";

function Scene() {
  const { intensity, x, y, z } = useControls("SpotLight", {
    intensity: {
      value: 2,
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
      value: 10,
      min: -10,
      max: 10,
      step: 0.1,
    },
    y: {
      value: 10,
      min: -10,
      max: 10,
      step: 0.1,
    },
    z: {
      value: -4.6,
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
  const m1ref = useRef()


  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 3] }}>
      <pointLight intensity={0.5} position={[1, 2, 1]} />
      <ambientLight intensity={0.2} />
      <spotLight
        intensity={intensity}
        angle={0.1}
        penumbra={1}
        position={[x, y, z]}
      />
      <Environment preset="city" blur={1} />

      <Suspense fallback={null}>

      <animated.group scale={scale}>
        <Particles count={500} />
        <group ref={m1ref}>
          <MModel />
          <OneModel />
        </group>
      </animated.group>

      </Suspense>
    </Canvas>
  );
}

export default Scene;
