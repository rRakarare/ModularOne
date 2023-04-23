import {
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroHome from "../HeroHome";
import CardRow from "./CardRow";
import { useAnimationFrame } from "../HeroHome/Models/animation";

function New() {

  

  return (
    <ReactLenis
      root
      // options={{
      //   lerp: 1,
      // }}
    >
      <HeroHome />
      <Box height={"100vh"} />
      <Box mx={"300px"}>
        <VStack
          width={"-webkit-fit-content"}
          position={"sticky"}
          top={"35vh"}
          alignItems={"flex-start"}
        >
          <Heading fontSize={"9xl"}>Modular</Heading>{" "}
          <Heading fontSize={"9xl"} color={"yellow.300"}>
            One
          </Heading>
        </VStack>
        <Heading></Heading>

        <HStack mt={"100vh"} justifyContent={"space-between"}>
          <Box width={"50vw"} />
          <VStack spacing={600} width={"50vw"}>
            <Box>
              <Heading color={"one.100"} mb={4} fontSize={"6xl"}>
                ALDER VERWALTER UND SOWAS
              </Heading>
              <Text fontSize={"2xl"}>
                Bruh iceland iPhone subway tile pitchfork waistcoat. Yr lyft
                food truck try-hard. Fashion axe flexitarian edison bulb narwhal
                iceland shoreditch lo-fi franzen post-ironic cray la croix blog
              </Text>
            </Box>
            <Box>
              <Heading color={"one.100"} mb={4} fontSize={"6xl"}>
                ALDER VERWALTER UND SOWAS
              </Heading>
              <Text fontSize={"2xl"}>
                Bruh iceland iPhone subway tile pitchfork waistcoat. Yr lyft
                food truck try-hard. Fashion axe flexitarian edison bulb narwhal
                iceland shoreditch lo-fi franzen post-ironic cray la croix blog
              </Text>
            </Box>
          </VStack>
        </HStack>

        <VStack px={20} width={"100%"}>
          <Box
            width={"100%"}
            height={"800px"}
            display="flex"
            alignItems={"space-between"}
          >
            <Box width={"70%"}></Box>
            <Box width={"30%"}></Box>
          </Box>
          <Box height={"800px"}>
            <Heading>:)</Heading>
          </Box>
        </VStack>
      </Box>
    </ReactLenis>
  );
}

export default New;
