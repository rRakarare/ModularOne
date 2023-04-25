import React from "react";
import { useGLTF } from "@react-three/drei";
import { useScrollStore } from "@/lib/store";
import { useSpring, animated, config } from "@react-spring/three";

function Door(props) {
  const { scrollStates } = useScrollStore();

  const { posFrame, posDoor, posKnots, opacity } = useSpring({
    posFrame: scrollStates.bState.active ? [0, 0, 0] : [0, 0, 3],
    posDoor: scrollStates.bState.active ? [0, 0, 0] : [0, 0, 3],
    posKnots: scrollStates.bState.active ? [0, 0, 0] : [0, 0, 3],
    opacity: scrollStates.bState.active ? 1 : 0,
    
    delay: (key) => {
      switch (key) {
        case "posFrame":
            return 0;
        case "posDoor":
            return 100;
        case "posKnots":
            return 200;
        default:
          return 0;
      }
    },

    config: (key) => {
      switch (key) {
        default:
          return {
            mass: 1,
            friction: 20,
            tension: 100,
          };
      }
    },
  });

  const { nodes, materials } = useGLTF("/House/door.glb");
  return (
    <group {...props} dispose={null}>
      <animated.group position={posFrame}>
        <mesh
          name="frame"
          castShadow
          receiveShadow
          geometry={nodes.frame.geometry}
          material={materials.acadcf890fb4}
          position={[-0.10672451, -0.20594162, 0.70795488]}
        >
          <animated.meshPhongMaterial opacity={opacity} transparent />
        </mesh>
      </animated.group>
      <animated.group position={posKnots}>
        <mesh
          name="knots"
          castShadow
          receiveShadow
          geometry={nodes.knots.geometry}
          material={materials.acad4502a48b}
          position={[-0.2692104, -0.33276075, 0.77695704]}
        >
          <animated.meshPhongMaterial opacity={opacity} transparent />
        </mesh>
      </animated.group>
      <animated.group position={posDoor}>
        <mesh
          name="door"
          castShadow
          receiveShadow
          geometry={nodes.door.geometry}
          material={materials.acad3e7d5096}
          position={[-0.10563101, -0.30556634, 0.77709192]}
        >
          <animated.meshPhongMaterial opacity={opacity} transparent />
        </mesh>
      </animated.group>
    </group>
  );
}

useGLTF.preload("/House/door.glb");

export default Door;
