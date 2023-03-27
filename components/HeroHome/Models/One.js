import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function One({oneProps, groupOne, ...rest}) {


  const {nodes, materials} = oneProps;

  
    

  return (
    <group ref={groupOne} {...rest}>
         <mesh
          name="OneA5"
          castShadow
          receiveShadow
          geometry={nodes.OneA5.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA5.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA5.morphTargetInfluences}
          position={[0.81044978, 0.24635744, -0.10988896]}
        />
        <mesh
          name="OneA1"
          castShadow
          receiveShadow
          geometry={nodes.OneA1.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA1.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA1.morphTargetInfluences}
          position={[0.83631039, -0.82889897, -0.109889]}
        />
        <mesh
          name="OneA2"
          castShadow
          receiveShadow
          geometry={nodes.OneA2.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA2.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA2.morphTargetInfluences}
          position={[0.83631039, -0.54136932, -0.10988899]}
        />
        <mesh
          name="OneA3"
          castShadow
          receiveShadow
          geometry={nodes.OneA3.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA3.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA3.morphTargetInfluences}
          position={[0.83631039, -0.24985904, -0.10988897]}
        />
        <mesh
          name="OneA4"
          castShadow
          receiveShadow
          geometry={nodes.OneA4.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA4.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA4.morphTargetInfluences}
          position={[0.83631039, 0.02339572, -0.10988896]}
        />
        <mesh
          name="OneA6"
          castShadow
          receiveShadow
          geometry={nodes.OneA6.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA6.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA6.morphTargetInfluences}
          position={[0.64090443, 0.28638911, -0.10988895]}
        />
    </group>
  )
}



export default One