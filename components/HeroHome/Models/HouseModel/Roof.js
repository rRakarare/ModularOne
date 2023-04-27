import React from "react";
import { useGLTF } from "@react-three/drei";
import { useScrollStore } from "@/lib/store";
import { useSpring, animated, config } from "@react-spring/three";
import { useColorModeValue, useToken } from "@chakra-ui/react";

function Roof(props) {
  const { scrollStates } = useScrollStore();

  const [house500, houseDark500] = useToken("colors", [
    "house.500",
    "houseDark.500",
  ]);

  const colors = useColorModeValue(houseDark500, house500)

  const { posTop, posLeft, posRight, opacity, opacityTop } = useSpring({
    posTop: scrollStates.bState.active ? [0, 0, 0] : [0, 6, 0],
    posLeft: scrollStates.bState.active ? [0, 0, 0] : [3, 0, 0],
    posRight: scrollStates.bState.active ? [0, 0, 0] : [-3, 0, 0],
    opacity: scrollStates.bState.active ? 1 : 0,
    opacityTop: scrollStates.bState.active ? 1 : 0,

    delay: (key) => {
      switch (key) {
        case "posTop":
          return scrollStates.bState.active ? 600 : 0;
        case "opacityTop":
          return scrollStates.bState.active ? 600 : 0;
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

  const { nodes, materials } = useGLTF("House/roof.glb");
  return (
    <group {...props} dispose={null}>
      <animated.group position={posTop}>
        <mesh
          name="top"
          castShadow
          receiveShadow
          geometry={nodes.top.geometry}
          material={nodes.top.material}
          position={[-0.09240242, 1.0724653, -0.14592123]}
        >
          <animated.meshPhongMaterial opacity={opacityTop} transparent color={colors} />
        </mesh>
      </animated.group>
      <animated.group position={posLeft}>
        <mesh
          name="sideA"
          castShadow
          receiveShadow
          geometry={nodes.sideA.geometry}
          material={nodes.sideA.material}
          position={[1.3222059, 0.97852659, -0.14592113]}
        >
          <animated.meshPhongMaterial opacity={opacity} transparent color={colors} />
        </mesh>
      </animated.group>
      <animated.group position={posRight}>
      <mesh
        name="sideB"
        castShadow
        receiveShadow
        geometry={nodes.sideB.geometry}
        material={nodes.sideB.material}
        position={[-1.51325011, 0.97852659, -0.14592113]}
      >
        <animated.meshPhongMaterial opacity={opacity} transparent color={colors} />
      </mesh>
      </animated.group>
    </group>
  );
}

useGLTF.preload("House/roof.glb");

export default Roof;
