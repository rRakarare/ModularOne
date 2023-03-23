import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function M() {


  const groupM = useRef();
  const { nodes, materials, animations } = useGLTF("/M.glb");
  const { actions } = useAnimations(animations, groupM);

  return (
    <group ref={groupM}>
       <mesh
          name="ModA1"
          geometry={nodes.ModA1.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA1.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA1.morphTargetInfluences}
        />
        <mesh
          name="ModA2"
          geometry={nodes.ModA2.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA2.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA2.morphTargetInfluences}
        />
        <mesh
          name="ModA3"
          geometry={nodes.ModA3.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA3.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA3.morphTargetInfluences}
        />
        <mesh
          name="ModA4"
          geometry={nodes.ModA4.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA4.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA4.morphTargetInfluences}
        />
        <mesh
          name="ModA5"
          geometry={nodes.ModA5.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA5.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA5.morphTargetInfluences}
        />
        <mesh
          name="ModA6"
          geometry={nodes.ModA6.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA6.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA6.morphTargetInfluences}
        />
        <mesh
          name="ModA7"
          geometry={nodes.ModA7.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA7.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA7.morphTargetInfluences}
        />
        <mesh
          name="ModA8"
          geometry={nodes.ModA8.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA8.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA8.morphTargetInfluences}
        />
        <mesh
          name="ModA9"
          geometry={nodes.ModA9.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA9.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA9.morphTargetInfluences}
        />
        <mesh
          name="ModA10"
          geometry={nodes.ModA10.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA10.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA10.morphTargetInfluences}
        />
        <mesh
          name="ModA11"
          geometry={nodes.ModA11.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA11.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA11.morphTargetInfluences}
        />
        <mesh
          name="ModA12"
          geometry={nodes.ModA12.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA12.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA12.morphTargetInfluences}
        />
        <mesh
          name="ModA13"
          geometry={nodes.ModA13.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA13.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA13.morphTargetInfluences}
        />
        <mesh
          name="ModA14"
          geometry={nodes.ModA14.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA14.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA14.morphTargetInfluences}
        />
    </group>
  )
}

useGLTF.preload("/M.glb");

export default M