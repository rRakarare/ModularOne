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
import {
  Box,
  Center,
  Heading,
  Text,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";
import Scene from "./Scene";

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
        minH={"600px"}
        style={{
          zIndex: -1,
          background: grad,
          marginTop: "-65px",
        }}
      >
        <Suspense fallback={null}>
        <Scene />
        </Suspense>
      </Box>
    </Box>
  );
}
