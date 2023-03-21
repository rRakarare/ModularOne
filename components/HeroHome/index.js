import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Float,
  Html,
  OrbitControls,
  Scroll,
  ScrollControls,
  Sparkles,
  Stage,
  Stars,
} from "@react-three/drei";
import { Loader } from "@react-three/drei";
import Model from "./Model";
import {
  Box,
  Center,
  Heading,
  Text,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";

export default function HeroHome({ animateLenis }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const grad =
    colorMode === "light"
      ? "linear-gradient(90deg, #ffffff 20%, #a5a3a3)"
      : `linear-gradient(60deg, ${theme.colors.dark2} 50%, #848484)`;

  return (
    <Box
      w={"100%"}
      h={"100vh"}
      position={"fixed"}
      style={{
        zIndex: -1,
      }}
    >
      <Box
        w={"100%"}
        h={"100vh"}
        style={{
          zIndex: -1,
          background: grad,
          marginTop: "-65px",
        }}
      >
        <Box width={"100%"} position={"fixed"}></Box>
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 200] }}
        >
          <Suspense fallback={null}>
            <Stage
              adjustCamera={1.6}
              intensity={0.23}
              environment="city"
              shadows={{
                type: "contact",
                offset: 0.4,
              }}
            >
              {/* <Sparkles count={20} scale={1} size={4000} speed={0.4} /> */}
              <Float speed={2} rotationIntensity={1}>
                <Model position={[1, 1, 0.5]} url="/compressed.glb" />
                <Model position={[1, 1, 0.3]} url="/compressed.glb" />
              </Float>
            </Stage>
          </Suspense>
        </Canvas>
        {/* <Loader /> */}
      </Box>
    </Box>
  );
}
