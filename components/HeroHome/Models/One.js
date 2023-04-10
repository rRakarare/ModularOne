import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function One({oneProps, groupOne, einsProps, ...rest}) {


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
          position={einsProps['OneA5'].position}
        />
        <mesh
          name="OneA1"
          castShadow
          receiveShadow
          geometry={nodes.OneA1.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA1.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA1.morphTargetInfluences}
          position={einsProps['OneA1'].position}
        />
        <mesh
          name="OneA2"
          castShadow
          receiveShadow
          geometry={nodes.OneA2.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA2.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA2.morphTargetInfluences}
          position={einsProps['OneA2'].position}
        />
        <mesh
          name="OneA3"
          castShadow
          receiveShadow
          geometry={nodes.OneA3.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA3.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA3.morphTargetInfluences}
          position={einsProps['OneA3'].position}
        />
        <mesh
          name="OneA4"
          castShadow
          receiveShadow
          geometry={nodes.OneA4.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA4.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA4.morphTargetInfluences}
          position={einsProps['OneA4'].position}
        />
        <mesh
          name="OneA6"
          castShadow
          receiveShadow
          geometry={nodes.OneA6.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA6.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA6.morphTargetInfluences}
          position={einsProps['OneA6'].position}
        />
    </group>
  )
}



export default One