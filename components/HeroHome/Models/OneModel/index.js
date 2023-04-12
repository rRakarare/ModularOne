import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import OneCube from "./OneCube";

const cubes = [
  { name: "OneA1", animation: "oa1", position: [0.83631039, -0.82889897] },
  { name: "OneA2", animation: "oa2", position: [0.83631039, -0.54136932] },
  { name: "OneA3", animation: "oa3", position: [0.83631039, -0.249859047] },
  { name: "OneA4", animation: "oa4", position: [0.83631039, 0.02339572] },
  { name: "OneA5", animation: "oa5", position: [0.81044978, 0.24635744] },
  { name: "OneA6", animation: "oa6", position: [0.64090443, 0.28638911] },
];

function OneModel() {
  const props = useGLTF("/One.glb");

  const mCubeFront = useRef();
  const mCubeBack = useRef();

  return (
    <group>
      <group ref={mCubeFront}>
        {cubes.map((cube, id) => (
          <OneCube
            key={id}
            name={cube.name}
            position={[...cube.position, 0.1]}
            material={
              new THREE.MeshPhongMaterial({ color: new THREE.Color("#f7d147") })
            }
            geometry={props.nodes[cube.name].geometry}
            morphTargetDictionary={props.nodes[cube.name].morphTargetDictionary}
            morphTargetInfluences={props.nodes[cube.name].morphTargetInfluences}
          />
        ))}
      </group>
      <group ref={mCubeBack}>
        {cubes.map((cube, id) => (
          <OneCube
            key={id}
            name={cube.name}
            position={[...cube.position, -0.1]}
            material={
              new THREE.MeshPhongMaterial({ color: new THREE.Color("#f7d147") })
            }
            geometry={props.nodes[cube.name].geometry}
            morphTargetDictionary={props.nodes[cube.name].morphTargetDictionary}
            morphTargetInfluences={props.nodes[cube.name].morphTargetInfluences}
          />
        ))}
      </group>
    </group>
  );
}

export default OneModel;
