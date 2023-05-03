import { useScrollStore } from "@/lib/store";
import { useColorModeValue, useToken } from "@chakra-ui/react";
import { SpotLight, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

function Lamp(props) {
  const { scrollState } = useScrollStore();

  const [house500, houseDark500, primary100] = useToken("colors", [
    "house.500",
    "houseDark.500",
    "primary.100"
  ]);

  const colors = useColorModeValue(house500, houseDark500);

  const { nodes, materials } = useGLTF("/House/lantern.glb");
  return (
    <group {...props} dispose={null}>
      <group name="lantern1" position={[0.23719631, 0.28324866, 0.9044174]}>
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
        >
          <meshPhongMaterial
            color={colors}
          />
        </mesh>
        <mesh
          name="Cube011_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
        >
          <meshPhongMaterial
            emissive={true}
            emissiveIntensity={100}
            color={primary100}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/House/lantern.glb");

export default Lamp;
