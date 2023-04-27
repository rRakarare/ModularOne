import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import MCube from "./MCube";
import * as THREE from "three";
import { useColorModeValue, useToken } from "@chakra-ui/react";

const cubes = [
  {
    name: "ModA1",
    animation: "ma1",
    position: [-0.84173274, -0.82683408],
  },
  {
    name: "ModA2",
    animation: "ma2",
    position: [-0.84173274, -0.53931117],
  },
  {
    name: "ModA3",
    animation: "ma3",
    position: [-0.84173274, -0.24812414],
  },
  {
    name: "ModA4",
    animation: "ma4",
    position: [-0.84173274, 0.0533159],
  },
  {
    name: "ModA5",
    animation: "ma5",
    position: [-0.84173274, 0.35680649],
  },
  {
    name: "ModA6",
    animation: "ma6",
    position: [-0.86745083, 0.72289407],
  },
  {
    name: "ModA7",
    animation: "ma7",
    position: [-0.68387389, 0.7686131],
  },
  {
    name: "ModA8",
    animation: "ma8",
    position: [-0.43746042, 0.5764001],
  },
  {
    name: "ModA9",
    animation: "ma9",
    position: [-0.22819176, 0.36713916],
  },
  {
    name: "ModA10",
    animation: "ma10",
    position: [-0.00335005, 0.21566018],
  },
  {
    name: "ModA11",
    animation: "ma11",
    position: [0.22186945, 0.3662512],
  },
  {
    name: "ModA12",
    animation: "ma12",
    position: [0.44498059, 0.5893572],
  },
  {
    name: "ModA13",
    animation: "ma13",
    position: [0.66323662, 0.7931447],
  },
  {
    name: "ModA14",
    animation: "ma14",
    position: [0.85404348, 0.84076309],
  },
];

const wallPositions = {
  ModA1: [0.35895288, 0.24625991],
  ModA2: [0.35895288, -0.5381],
  ModA3: [-0.41362715, 0.24625991],
  ModA4: [-0.41362715, -0.5381],
}



function MModel() {
  const props = useGLTF("/M2.glb");

  const [house500, houseDark500] = useToken("colors", [
    "house.500",
    "houseDark.500",
  ]);

  const colors = useColorModeValue(houseDark500, house500)

  const mCubeFront = useRef();
  const mCubeBack = useRef();

  return (
    <group>
      <group ref={mCubeFront}>
        {cubes.map((cube, id) => (
          <MCube
            key={id}
            name={cube.name}
            position={[...cube.position, 0.1]}
            material={
              new THREE.MeshPhongMaterial({ color: new THREE.Color(colors) })
            }
            geometry={props.nodes[cube.name].geometry}
            morphTargetDictionary={props.nodes[cube.name].morphTargetDictionary}
            morphTargetInfluences={props.nodes[cube.name].morphTargetInfluences}
            wallPosition={wallPositions[cube.name]}
            isFront={true}
          />
        ))}
      </group>
      <group ref={mCubeBack}>
        {cubes.map((cube, id) => (
          <MCube
            key={id}
            name={cube.name}
            position={[...cube.position, -0.1]}
            material={
              new THREE.MeshPhongMaterial({ color: new THREE.Color(colors) })
            }
            geometry={props.nodes[cube.name].geometry}
            morphTargetDictionary={props.nodes[cube.name].morphTargetDictionary}
            morphTargetInfluences={props.nodes[cube.name].morphTargetInfluences}
            wallPosition={wallPositions[cube.name]}
            isFront={false}
          />
        ))}
      </group>
    </group>
  );
}

export default MModel;
