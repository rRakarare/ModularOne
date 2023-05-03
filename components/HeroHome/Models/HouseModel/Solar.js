import React from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import { useScrollStore } from "@/lib/store";

function Solar(props) {
  const { scrollState } = useScrollStore();

  const { pos, opacity } = useSpring({
    pos: scrollState === "cS" || scrollState === "cM" ? [0, 0, 0] : [0, 5, 0],

    opacity: scrollState === "cS" || scrollState === "cM" ? 1 : 0,

    config: (key) => {
      switch (key) {
        case "posFront":
          return {
            mass: 1,
            friction: 20,
            tension: 100,
          };

        default:
          return {
            mass: 1,
            friction: 20,
            tension: 100,
          };
      }
    },
  });

  const { nodes, materials } = useGLTF("/House/solar.glb");
  return (
    <animated.group {...props} position={pos} dispose={null}>
      <group name="Solar1" position={[0.63665634, 1.15732753, 0.37988049]}>
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          
          material={materials.Material}
        />
        <mesh
          name="Cube_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </animated.group>
  );
}

useGLTF.preload("/House/solar.glb");

export default Solar;
