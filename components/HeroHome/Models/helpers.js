import * as THREE from "three";


export const resetRotation = (mesh) => {
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

export const floatMesh = ({
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

  let yPosition = Math.sin((time * speed / 1000 / 4 + rand * 50)   ) / 15;
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