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
import { useScrollStore } from "@/lib/store";
import Walls from "./Models/HouseModel/Walls";
import House from "./Models/HouseModel";

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
  const m1ref = useRef();
  const sceneRef = useRef();

  const { scrollStates, setStates } = useScrollStore();

  useLenis((lenis) => {
    const scrollKeys = Object.keys(scrollStates);

    scrollKeys.forEach((key) => {
      if (
        scrollStates[key].active === false &&
        lenis.progress > scrollStates[key].value
      ) {
        setStates(key, true);
      }
      if (
        scrollStates[key].active === true &&
        lenis.progress <= scrollStates[key].value
      ) {
        setStates(key, false);
      }
    });
  });

  useAnimationFrame((deltaTime, time, lenis) => {
    const progress = lenis.progress

    console.log(progress)

    if (!scrollStates.aState.active) {
      sceneRef.current.rotation.set(0,progress * 5,0)
      sceneRef.current.position.set(-progress * 8,0,0)
      sceneRef.current.scale.set(1-progress*2,1-progress*2,1-progress*2)
    }

  });

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
          <group ref={sceneRef}>
            <group ref={m1ref}>
              <MModel />
              <OneModel />
            </group>
            <House />
          </group>
        </animated.group>
      </Suspense>
    </Canvas>
  );
}

export default Scene;
