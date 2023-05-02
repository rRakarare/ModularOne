import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroHome from "../HeroHome";
import CardRow from "./CardRow";
import { useAnimationFrame } from "../HeroHome/Models/animation";
import { useScrollStore } from "@/lib/store";

function New() {
  const { scrollState } = useScrollStore();

  const colors = useColorModeValue("dark.900", "one.100");

  const modVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "-100%" },
  };

  const oneVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "100%" },
  };

  return (
    <ReactLenis
      root
      // options={{
      //   lerp: 1,
      // }}
    >
      <HeroHome />
      <HStack
        spacing={4}
        alignItems={"flex-end"}
        justifyContent={"center"}
        position={"fixed"}
        zIndex={-2}
        width={"100vw"}
        height={"75vh"}
      >
        <Box
          as={motion.div}
          animate={scrollState !== "default" ? "hidden" : "visible"}
          variants={modVariants}
        >
          <Heading>Modular</Heading>
        </Box>
        <Box
          color={colors}
          as={motion.div}
          animate={scrollState !== "default" ? "hidden" : "visible"}
          variants={oneVariants}
        >
          <Heading>One</Heading>
        </Box>
      </HStack>
      <Box height={"200vh"} />
      <Box mx={"10vw"}>
        <Box mb={"90vh"} ml={"auto"} w={"30vw"} textAlign={"left"}>
          <Heading color={colors} mb={4} fontSize={"6xl"}>
            MODULAR
          </Heading>
          <Text fontSize={"2xl"}>
            Bruh iceland iPhone subway tile pitchfork waistcoat. Yr lyft food
            truck try-hard. Fashion axe flexitarian edison bulb narwhal iceland
            shoreditch lo-fi franzen post-ironic cray la croix blog
          </Text>
        </Box>
        <Box mb={"90vh"} mr={"auto"} w={"30vw"} textAlign={"right"}>
          <Heading color={colors} mb={4} fontSize={"6xl"}>
            DIGITALE GEBÄUDE
          </Heading>
          <Text fontSize={"2xl"}>
            Bruh iceland iPhone subway tile pitchfork waistcoat. Yr lyft food
            truck try-hard. Fashion axe flexitarian edison bulb narwhal iceland
            shoreditch lo-fi franzen post-ironic cray la croix blog
          </Text>
        </Box>
        <Box mb={"90vh"} ml={"auto"} w={"30vw"} textAlign={"left"}>
          <Heading color={colors} mb={4} fontSize={"6xl"}>
            NACHHALTIG
          </Heading>
          <Text fontSize={"2xl"}>
            Bruh iceland iPhone subway tile pitchfork waistcoat. Yr lyft food
            truck try-hard. Fashion axe flexitarian edison bulb narwhal iceland
            shoreditch lo-fi franzen post-ironic cray la croix blog
          </Text>
        </Box>
      </Box>
      <HStack mb={"30vh"} spacing={10} justifyContent={"center"}>
        <Box
          cursor={"pointer"}
          border={"2px"}
          p={3}
          rounded={"md"}
          fontSize={"2xl"}
          color={colors}
          as={motion.div}
          animate={scrollState !== "dS" ? "hidden" : "visible"}
          variants={modVariants}
        >
          Leistungen
        </Box>
        <Box
          cursor={"pointer"}
          border={"2px"}
          p={3}
          rounded={"md"}
          fontSize={"2xl"}
          color={colors}
          as={motion.div}
          animate={scrollState !== "dS" ? "hidden" : "visible"}
          variants={oneVariants}
        >
          Kontakt
        </Box>
      </HStack>
    </ReactLenis>
  );
}

export default New;
