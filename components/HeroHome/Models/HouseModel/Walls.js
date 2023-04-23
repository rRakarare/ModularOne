import React from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import { useScrollStore } from "@/lib/store";

function Walls(props) {
  const { scrollStates } = useScrollStore();

  const { nodes, materials } = useGLTF("/House/walls.glb");

  const { rotat, posGround, posFront, scale, opacity } = useSpring({
    rotat: scrollStates.bState.active ? [0, 0, 0] : [0, -8, 0],
    posGround: scrollStates.bState.active ? [0, 0, 0] : [0, -3, 0],
    posFront: scrollStates.bState.active ? [0, 0, 0] : [0, 0, 3],
    scale: scrollStates.bState.active ? 1 : 0.7,
    opacity: scrollStates.bState.active ? 1 : 0,
    delay: (key) => {
      switch (key) {

        default:
          return 0;
      }
    },

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

  return (
    <animated.group {...props} dispose={null} scale={scale}>
      <animated.group position={posGround} rotation={rotat}>
        <mesh
          name="ground"
          castShadow
          receiveShadow
          geometry={nodes.ground.geometry}
          material={nodes.ground.material}
          position={[-0.09329593, -0.83304822, -0.1005407]}
        >
          <animated.meshPhongMaterial opacity={opacity} transparent />
        </mesh>
      </animated.group>
      <mesh
        name="level"
        castShadow
        receiveShadow
        geometry={nodes.level.geometry}
        material={nodes.level.material}
        position={[-0.19614783, 0.43771583, -0.06015918]}
      >
        <animated.meshPhongMaterial opacity={opacity} transparent />
      </mesh>
      <mesh
        name="back"
        castShadow
        receiveShadow
        geometry={nodes.back.geometry}
        material={nodes.back.material}
        position={[-0.09552248, -0.02733513, -0.97930229]}
      >
        <animated.meshPhongMaterial opacity={opacity} transparent />
      </mesh>
      <animated.group position={posFront}>
        <mesh
          name="front"
          castShadow
          receiveShadow
          geometry={nodes.front.geometry}
          material={nodes.front.material}
          position={[-0.08853891, 0.00512398, 0.68745989]}
        >
          <animated.meshPhongMaterial opacity={opacity} transparent />
        </mesh>
      </animated.group>
    </animated.group>
  );
}

useGLTF.preload("/walls.glb");

export default Walls;
