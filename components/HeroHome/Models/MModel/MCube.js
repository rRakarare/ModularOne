import React, { useEffect, useRef } from "react";
import { useAnimationFrame } from "../animation";
import { Float, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useScrollStore } from "@/lib/store";

const resetRotation = (mesh) => {
  mesh.current.rotation.x = THREE.MathUtils.lerp(
    mesh.current.rotation.x,
    0,
    0.25
  );
  mesh.current.rotation.y = THREE.MathUtils.lerp(
    mesh.current.rotation.y,
    0,
    0.25
  );
  mesh.current.rotation.z = THREE.MathUtils.lerp(
    mesh.current.rotation.z,
    0,
    0.25
  );
};

const floatMesh = ({
  mesh,
  time,
  speed,
  rotationIntensity,
  floatIntensity,
  floatingRange,
  rand,
}) => {
  mesh.current.rotation.x =
    (Math.cos((time / 1000 / 4 + rand * 10) * speed) / 8) * rotationIntensity;
  mesh.current.rotation.y =
    (Math.sin((time / 1000 / 4 + rand * 10) * speed) / 8) * rotationIntensity;
  mesh.current.rotation.z =
    (Math.sin((time / 1000 / 4 + rand * 10) * speed) / 20) * rotationIntensity;

  let yPosition = Math.sin((time / 1000 / 4 + rand * 10) * speed) / 10;
  yPosition = THREE.MathUtils.mapLinear(
    yPosition,
    -0.1,
    0.1,
    floatingRange?.[0] ?? -0.1,
    floatingRange?.[1] ?? 0.1
  );
  mesh.current.position.y += yPosition * floatIntensity;

  mesh.current.updateMatrix();
};

function MCube({
  name,
  material,
  geometry,
  morphTargetDictionary,
  morphTargetInfluences,
  position,
  wallPosition,
  isFront
}) {
  const cube = useRef();

  const { scrollStates } = useScrollStore();

  useEffect(() => {
    console.log(
      scrollStates.aState.active,
      scrollStates.bState.active,
      scrollStates.cState.active
    );
  }, [scrollStates]);

  const rand =
    Math.random() * (scrollStates.bState.value - scrollStates.aState.value -0.2) ;


  const vec = new THREE.Vector3();

  const scaleMultiplier = 3;

  const scaleVec = new THREE.Vector3(
    rand * scaleMultiplier,
    rand * scaleMultiplier,
    rand * scaleMultiplier
  );
  const scaleDef = new THREE.Vector3(1, 1, 1);
  const scaleZero = new THREE.Vector3(0, 0, 0);

  const isWall = wallPosition ? true : false
  const xWall = isFront ? -1.51325  : 1.32221
  const wallPositionVec = isWall ? new THREE.Vector3(xWall, ...wallPosition) : new THREE.Vector3()



  const morphToDefault = (mesh) => {
    mesh.current.morphTargetInfluences = [
      THREE.MathUtils.lerp(mesh.current.morphTargetInfluences[0], 0, 0.05),
      THREE.MathUtils.lerp(mesh.current.morphTargetInfluences[1], 0, 0.05),
    ];
  }

  const morphToCubes = (mesh) => {
    mesh.current.morphTargetInfluences = [
      THREE.MathUtils.lerp(mesh.current.morphTargetInfluences[0], 1, 0.05),
      THREE.MathUtils.lerp(mesh.current.morphTargetInfluences[1], 0, 0.05),
    ];
  }

  const morphToWall = (mesh) => {
    mesh.current.morphTargetInfluences = [
      THREE.MathUtils.lerp(mesh.current.morphTargetInfluences[0], 0, 0.05),
      THREE.MathUtils.lerp(mesh.current.morphTargetInfluences[1], 1, 0.05),
    ];
  }


  const bringToDefault = (mesh, defaultScaleVec, defaultPosVec) => {
    mesh.current.scale.lerp(defaultScaleVec, 0.1);
    morphToDefault(mesh)
    mesh.current.position.lerp(defaultPosVec, 0.1);
    resetRotation(mesh);
  };

  const bringToCubes = (mesh, scaleVec, defaultPosVec, time) => {

    morphToCubes(mesh)

    mesh.current.scale.lerp(scaleVec, 0.1);

    mesh.current.position.lerp(defaultPosVec.multiplyScalar(rand * 30), 0.1);
    floatMesh({
      mesh: mesh,
      time,
      speed: 2,
      rotationIntensity: 3,
      floatIntensity: 0.1,
      floatingRange: [-0.1, 0.1],
      rand,
    });
  };

  useAnimationFrame((deltaTime, time, lenis) => {
    const defaultPos = vec.set(...position);
    const progress = lenis.progress;

    if (!scrollStates.aState.active && !scrollStates.bState.active) {
      bringToDefault(cube, scaleDef, defaultPos);
    }

    if (scrollStates.aState.active && !scrollStates.bState.active) {
      if (progress >= scrollStates.aState.value + rand) {
        bringToCubes(cube, scaleVec, defaultPos, time);
      }
    }

    if (scrollStates.bState.active) {

      if (isWall) {
        morphToWall(cube)
      resetRotation(cube);
      cube.current.scale.lerp(scaleDef, 0.1);
      
      } else {
        cube.current.scale.lerp(scaleZero, 0.1);
      }

      cube.current.position.lerp(wallPositionVec, 0.1);

      
      
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
