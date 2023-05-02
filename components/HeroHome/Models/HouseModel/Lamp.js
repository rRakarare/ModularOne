import { SpotLight } from "@react-three/drei";
import React from "react";

function Lamp() {
  return (
    <group position={[-1.5, 1, 0.2]}>
      <SpotLight
        position={[0, 0, 0]}
        distance={5}
        angle={0.3}

        attenuation={3}
        anglePower={7} // Diffuse-cone anglePower (default: 5)
      />
      <mesh scale={0.3} name="top" castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial />
      </mesh>
    </group>
  );
}

export default Lamp;
