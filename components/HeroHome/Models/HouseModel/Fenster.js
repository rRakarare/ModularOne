import { useScrollStore } from "@/lib/store";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import React from "react";
import { useColorModeValue, useToken } from "@chakra-ui/react";

function Fenster(props) {
  const { scrollStates } = useScrollStore();

  const [house500, houseDark500, primary100] = useToken("colors", [
    "house.500",
    "houseDark.500",
    "primary.100"
  ]);

  const colors = useColorModeValue(houseDark500, house500)

  const { posFrame, posGlas, posBanc, posFrameInner, posCross, opacity, opacityGlas } = useSpring({
    posFrame: scrollStates.bState.active ? [0, 0, 0] : [0, 0, 3],
    posGlas: scrollStates.bState.active ? [0, 0, 0] : [0, 0, 3],
    posFrameInner: scrollStates.bState.active ? [0, 0, 0] : [0, 0, 3],
    posCross: scrollStates.bState.active ? [0, 0, 0] : [0, 0, 3],
    posBanc: scrollStates.bState.active ? [0, 0, 0] : [0, 0, 3],
    opacity: scrollStates.bState.active ? 1 : 0,
    opacityGlas: scrollStates.bState.active ? 0.7 : 0,
    delay: (key) => {
      switch (key) {
        case "posFrame":
          return 100;
        case "posGlas":
          return 200;
        case "posCross":
          return 300;

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

  const { nodes, materials } = useGLTF("/House/window.glb");
  return (
    <group {...props} dispose={null}>
      <animated.group position={posBanc}>
      <mesh
        name="banc"
        castShadow
        receiveShadow
        geometry={nodes.banc.geometry}
        material={materials.acad3e7d5096}
        position={[props.xVal, -0.36815202, 0.72844642]}
      >
        <animated.meshPhongMaterial opacity={opacity} transparent color={colors} />
      </mesh>
      </animated.group>
      <animated.group position={posFrame}>
        <mesh
          name="frame001"
          castShadow
          receiveShadow
          geometry={nodes.frame001.geometry}
          material={materials.acad3e7d5096}
          position={[props.xVal, 0.02402735, 0.72844642]}
        >
          <animated.meshPhongMaterial opacity={opacity} transparent color={colors} />
        </mesh>
        <mesh
        name="frameInner"
        castShadow
        receiveShadow
        geometry={nodes.frameInner.geometry}
        material={materials.acad3e7d5096}
        position={[props.xVal, 0.02402738, 0.7199741]}
      >
        <animated.meshPhongMaterial opacity={opacity} transparent color={colors} />
      </mesh>
      </animated.group>
      <animated.group position={posCross}>
      <mesh
        name="cross"
        castShadow
        receiveShadow
        geometry={nodes.cross.geometry}
        material={materials.acad3e7d5096}
        position={[props.xVal, 0.02402736, 0.721093]}
      >
        <animated.meshPhongMaterial opacity={opacity} transparent color={colors} />
      </mesh>
      </animated.group>

      <animated.group position={posGlas}>
        <mesh
          name="glas"
          castShadow
          receiveShadow
          geometry={nodes.glas.geometry}
          material={materials.acad5a2ee16c}
          position={[props.xVal, 0.02402735, 0.721093]}
        >
          <animated.meshPhongMaterial
            color={primary100}
            opacity={opacityGlas}
            transparent
          />
        </mesh>
      </animated.group>
    </group>
  );
}

export default Fenster;
