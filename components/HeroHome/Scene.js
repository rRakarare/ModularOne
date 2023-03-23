import { Float, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLenis } from "@studio-freight/react-lenis";
import React, { Suspense } from "react";
import Model from "./Model";
import M from "./Models/M";
import One from "./Models/One";

function Scene() {
  const lenis = useLenis((state) => {});

  // const { nodes, materials, animations } = useGLTF("/One.glb");

  const { nodes, materials, animations } = useGLTF("@/public/One.glb");

  return (
    
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 200] }}>
        <Stage
          adjustCamera={1.6}
          intensity={0.23}
          environment="city"
          shadows={{
            type: "contact",
            offset: 0.4,
          }}
        >
          {/* <Sparkles count={20} scale={1} size={4000} speed={0.4} /> */}
          <Float speed={2} rotationIntensity={1}>
            {/* <Model position={[1, 1, 0.5]} url="/compressed.glb" />
            <Model position={[1, 1, 0.3]} url="/compressed.glb" /> */}

            <M />
            <One />
          </Float>
        </Stage>
      </Canvas>
  );
}

// useGLTF.preload("/One.glb");

export default Scene;
