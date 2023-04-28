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
import Main from "./Main";

function Scene() {




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



  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 3] }}>
      <pointLight intensity={0.5} position={[1, 2, 1]} />
      <ambientLight intensity={0.2} />
      <spotLight
        intensity={2}
        angle={0.1}
        penumbra={1}
        position={[10, 10, -4,6]}
      />
      <Environment preset="city" blur={1} />

      <Suspense fallback={null}>
        <Main />
      </Suspense>
    </Canvas>
  );
}

export default Scene;
