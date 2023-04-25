import React from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import Stair from "./Stair";
import { useScrollStore } from "@/lib/store";

const stairs = [
  {
    name: "stair1",
    position: [-0.32045096, -0.72370702, -0.74720049],
  },
  {
    name: "stair2",
    position: [-0.23033077, -0.63692629, -0.74720049],
  },
  {
    name: "stair3",
    position: [-0.1402106, -0.55014557, -0.74720049],
  },
  {
    name: "stair4",
    position: [-0.05009047, -0.4633649, -0.74720049],
  },
  {
    name: "stair5",
    position: [0.0400297, -0.37658417, -0.74720049],
  },
  {
    name: "stair6",
    position: [0.13014984, -0.28980339, -0.74720049],
  },
  {
    name: "stair7",
    position: [0.22026992, -0.20302266, -0.74720049],
  },
  {
    name: "stair8",
    position: [0.31039008, -0.11624192, -0.74720049],
  },
  {
    name: "stair9",
    position: [0.40051016, -0.02946116, -0.74720049],
  },
  {
    name: "stair10",
    position: [0.4906303, 0.05731957, -0.74720049],
  },
  {
    name: "stair11",
    position: [0.58075052, 0.14410031, -0.74720049],
  },
  {
    name: "stair12",
    position: [0.67087066, 0.23088101, -0.74720049],
  },
  {
    name: "stair13",
    position: [0.76099086, 0.31766176, -0.74720049],
  },
];

function Stairs(props) {
  const { scrollStates } = useScrollStore();

  const { posGrid, posRail, opacity } = useSpring({
    posGrid: scrollStates.bState.active ? [0, 0, 0] : [0, 6, 0],
    posRail: scrollStates.bState.active ? [0, 0, 0] : [0, 6, 0],
    opacity: scrollStates.bState.active ? 1 : 0,

    delay: (key) => {
      switch (key) {
        case "posTop":
          return 600;
        case "opacityTop":
          return 600;
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

  const { nodes, materials } = useGLTF("House/stairs.glb");
  return (
    <group {...props} dispose={null}>
      {stairs.map((item, id) => (
        <Stair
          key={id}
          number={id}
          name={item.name}
          geometry={nodes[item.name].geometry}
          position={item.position}
        />
      ))}

      <animated.group position={posGrid}>
        <mesh
          name="stairGrid"
          castShadow
          receiveShadow
          geometry={nodes.stairGrid.geometry}
          material={materials.acadd2eec1e7}
          position={[0.2320286, -0.25293881, -0.74720037]}
        >
          <animated.meshPhongMaterial opacity={opacity} transparent />
        </mesh>
      </animated.group>
      <animated.group position={posRail}>
        <mesh
          name="rail"
          castShadow
          receiveShadow
          geometry={nodes.rail.geometry}
          material={materials.acadea5e1b17}
          position={[0.21905485, 0.20220998, -0.58876991]}
        >
          <animated.meshPhongMaterial opacity={opacity} transparent />
        </mesh>
      </animated.group>
    </group>
  );
}

useGLTF.preload("House/stairs.glb");

export default Stairs;
