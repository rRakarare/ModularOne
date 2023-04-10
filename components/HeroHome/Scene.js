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
import React, { Suspense } from "react";
import Model from "./Model";
import M from "./Models/M";
import Models from "./Models/Models";
import One from "./Models/One";
import * as THREE from "three";
import { useAnimationFrame } from "./Models/animation";
import MModel from "./Models/MModel";

function Scene() {


  // useAnimationFrame((deltaTime, lenis) => {
  //   // Pass on a function to the setter of the state
  //   // to make sure we always have the latest state
  //   console.log(lenis.progress)
  // })

  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 3] }}>
      <ambientLight intensity={0.3} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, -5]}
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

      <MModel />
    </Canvas>
  );
}


export default Scene;