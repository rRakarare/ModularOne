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

  animateLenis;

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
        <Canvas>
          <Suspense fallback={null}>
            <Stage
              adjustCamera={1.5}
              intensity={0.23}
              shadows="contact"
              environment="city"
            >
                <Sparkles count={50} scale={1} size={1} speed={0.4} />
              <Float speed={3} rotationIntensity={1}>
                <Model url="/compressed.glb" />
              </Float>
            </Stage>
          </Suspense>
        </Canvas>
        {/* <Loader /> */}
      </Box>
    </Box>
  );
}
