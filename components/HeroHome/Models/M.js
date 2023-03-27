import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function M({mProps, groupM, ...rest}) {

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
          position={[-0.84173274, -0.82683408, -0.11065874]}
        />
        <mesh
          name="ModA2"
          castShadow
          receiveShadow
          geometry={nodes.ModA2.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA2.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA2.morphTargetInfluences}
          position={[-0.84173274, -0.53931117, -0.11065874]}
        />
        <mesh
          name="ModA3"
          castShadow
          receiveShadow
          geometry={nodes.ModA3.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA3.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA3.morphTargetInfluences}
          position={[-0.84173274, -0.24812414, -0.11065872]}
        />
        <mesh
          name="ModA4"
          castShadow
          receiveShadow
          geometry={nodes.ModA4.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA4.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA4.morphTargetInfluences}
          position={[-0.84173274, 0.0533159, -0.11065871]}
        />
        <mesh
          name="ModA5"
          castShadow
          receiveShadow
          geometry={nodes.ModA5.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA5.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA5.morphTargetInfluences}
          position={[-0.84173274, 0.35680649, -0.1106587]}
        />
        <mesh
          name="ModA6"
          castShadow
          receiveShadow
          geometry={nodes.ModA6.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA6.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA6.morphTargetInfluences}
          position={[-0.86745083, 0.72289407, -0.1106587]}
        />
        <mesh
          name="ModA7"
          castShadow
          receiveShadow
          geometry={nodes.ModA7.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA7.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA7.morphTargetInfluences}
          position={[-0.68387389, 0.7686131, -0.11065871]}
        />
        <mesh
          name="ModA8"
          castShadow
          receiveShadow
          geometry={nodes.ModA8.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA8.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA8.morphTargetInfluences}
          position={[-0.43746042, 0.5764001, -0.11065871]}
        />
        <mesh
          name="ModA9"
          castShadow
          receiveShadow
          geometry={nodes.ModA9.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA9.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA9.morphTargetInfluences}
          position={[-0.22819176, 0.36713916, -0.11065871]}
        />
        <mesh
          name="ModA10"
          castShadow
          receiveShadow
          geometry={nodes.ModA10.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA10.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA10.morphTargetInfluences}
          position={[-0.00335005, 0.21566018, -0.11065871]}
        />
        <mesh
          name="ModA11"
          castShadow
          receiveShadow
          geometry={nodes.ModA11.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA11.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA11.morphTargetInfluences}
          position={[0.22186945, 0.3662512, -0.11065871]}
        />
        <mesh
          name="ModA12"
          castShadow
          receiveShadow
          geometry={nodes.ModA12.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA12.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA12.morphTargetInfluences}
          position={[0.44498059, 0.5893572, -0.11065871]}
        />
        <mesh
          name="ModA13"
          castShadow
          receiveShadow
          geometry={nodes.ModA13.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA13.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA13.morphTargetInfluences}
          position={[0.66323662, 0.7931447, -0.11065871]}
        />
        <mesh
          name="ModA14"
          castShadow
          receiveShadow
          geometry={nodes.ModA14.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA14.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA14.morphTargetInfluences}
          position={[0.85404348, 0.84076309, -0.11065869]}
        />
    </group>
  )
}



export default M