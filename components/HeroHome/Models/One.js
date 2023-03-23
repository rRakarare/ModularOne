import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function One() {

    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/One.glb");
    const { actions } = useAnimations(animations, group);

  return (
    <group>
        <mesh
          name="OneA5"
          geometry={nodes.OneA5.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA5.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA5.morphTargetInfluences}
        />
        <mesh
          name="OneA1"
          geometry={nodes.OneA1.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA1.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA1.morphTargetInfluences}
        />
        <mesh
          name="OneA2"
          geometry={nodes.OneA2.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA2.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA2.morphTargetInfluences}
        />
        <mesh
          name="OneA3"
          geometry={nodes.OneA3.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA3.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA3.morphTargetInfluences}
        />
        <mesh
          name="OneA4"
          geometry={nodes.OneA4.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA4.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA4.morphTargetInfluences}
        />
        <mesh
          name="OneA6"
          geometry={nodes.OneA6.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA6.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA6.morphTargetInfluences}
        />
    </group>
  )
}

useGLTF.preload("/One.glb");

export default One