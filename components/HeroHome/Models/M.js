import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function M({mProps, groupM, modularProps, z, ...rest}) {

  const { nodes, materials } = mProps;



  return (
    <group ref={groupM} {...rest}>
        <mesh
          name="ModA1"
          castShadow
          receiveShadow
          geometry={nodes.ModA1.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA1.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA1.morphTargetInfluences}
          position={modularProps['ModA1'].position}
        />
        <mesh
          name="ModA2"
          castShadow
          receiveShadow
          geometry={nodes.ModA2.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA2.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA2.morphTargetInfluences}
          position={modularProps['ModA2'].position}
        />
        <mesh
          name="ModA3"
          castShadow
          receiveShadow
          geometry={nodes.ModA3.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA3.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA3.morphTargetInfluences}
          position={modularProps['ModA3'].position}
        />
        <mesh
          name="ModA4"
          castShadow
          receiveShadow
          geometry={nodes.ModA4.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA4.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA4.morphTargetInfluences}
          position={modularProps['ModA4'].position}
        />
        <mesh
          name="ModA5"
          castShadow
          receiveShadow
          geometry={nodes.ModA5.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA5.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA5.morphTargetInfluences}
          position={modularProps['ModA5'].position}
        />
        <mesh
          name="ModA6"
          castShadow
          receiveShadow
          geometry={nodes.ModA6.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA6.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA6.morphTargetInfluences}
          position={modularProps['ModA6'].position}
        />
        <mesh
          name="ModA7"
          castShadow
          receiveShadow
          geometry={nodes.ModA7.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA7.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA7.morphTargetInfluences}
          position={modularProps['ModA7'].position}
        />
        <mesh
          name="ModA8"
          castShadow
          receiveShadow
          geometry={nodes.ModA8.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA8.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA8.morphTargetInfluences}
          position={modularProps['ModA8'].position}
        />
        <mesh
          name="ModA9"
          castShadow
          receiveShadow
          geometry={nodes.ModA9.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA9.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA9.morphTargetInfluences}
          position={modularProps['ModA9'].position}
        />
        <mesh
          name="ModA10"
          castShadow
          receiveShadow
          geometry={nodes.ModA10.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA10.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA10.morphTargetInfluences}
          position={modularProps['ModA10'].position}
        />
        <mesh
          name="ModA11"
          castShadow
          receiveShadow
          geometry={nodes.ModA11.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA11.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA11.morphTargetInfluences}
          position={modularProps['ModA11'].position}
        />
        <mesh
          name="ModA12"
          castShadow
          receiveShadow
          geometry={nodes.ModA12.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA12.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA12.morphTargetInfluences}
          position={modularProps['ModA12'].position}
        />
        <mesh
          name="ModA13"
          castShadow
          receiveShadow
          geometry={nodes.ModA13.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA13.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA13.morphTargetInfluences}
          position={modularProps['ModA13'].position}
        />
        <mesh
          name="ModA14"
          castShadow
          receiveShadow
          geometry={nodes.ModA14.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA14.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA14.morphTargetInfluences}
          position={modularProps['ModA14'].position}
        />
    </group>
  )
}



export default M