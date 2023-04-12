import React, { useEffect, useRef } from "react";
import { useAnimationFrame } from "../animation";
import { Float, useAnimations } from "@react-three/drei";
import * as THREE from "three";

const resetRotation = (mesh) => {
  mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, 0, 0.25)
  mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, 0, 0.25)
  mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, 0, 0.25)
}

const floatMesh = ({mesh, time, speed ,rotationIntensity, floatIntensity, floatingRange, rand }) => {
  mesh.current.rotation.x = (Math.cos((time / 1000 / 4 + rand*10) * speed) / 8) * rotationIntensity
  mesh.current.rotation.y = (Math.sin((time / 1000 / 4 + rand*10) * speed) / 8) * rotationIntensity
  mesh.current.rotation.z = (Math.sin((time / 1000 / 4 + rand*10) * speed) / 20) * rotationIntensity

  let yPosition = Math.sin((time / 1000 / 4 + rand*10) * speed) / 10
  yPosition = THREE.MathUtils.mapLinear(yPosition, -0.1, 0.1, floatingRange?.[0] ?? -0.1, floatingRange?.[1] ?? 0.1)
  mesh.current.position.y += yPosition * floatIntensity

  mesh.current.updateMatrix()
}

function MCube({
  name,
  material,
  geometry,
  morphTargetDictionary,
  morphTargetInfluences,
  position,
}) {
  const cube = useRef();

  const rand = Math.random() / 2;

  const vec = new THREE.Vector3();

  useAnimationFrame((deltaTime, time, lenis) => {
    const defaultPos = vec.set(...position);
    const progress = lenis.progress;

    

    if (progress >= rand) {
      cube.current.morphTargetInfluences = [
        THREE.MathUtils.lerp(cube.current.morphTargetInfluences[0], 1, 0.25),
      ];


      cube.current.position.lerp(defaultPos.multiplyScalar(rand * 6), 0.1);
      floatMesh({mesh:cube, time, speed:2 ,rotationIntensity:3, floatIntensity:.1, floatingRange: [-0.1, 0.1], rand })
    } else {
      cube.current.morphTargetInfluences = [
        THREE.MathUtils.lerp(cube.current.morphTargetInfluences[0], 0, 0.05),
      ];
      cube.current.position.lerp(defaultPos, 0.1);
      resetRotation(cube)
    }
  });

  return (
    <group>

        <mesh
          castShadow
          receiveShadow
          ref={cube}
          position={position}
          name={name}
          material={material}
          geometry={geometry}
          morphTargetDictionary={morphTargetDictionary}
          morphTargetInfluences={morphTargetInfluences}
        />

    </group>
  );
}

export default MCube;
