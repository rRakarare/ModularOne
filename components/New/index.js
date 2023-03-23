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

function New() {


  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
      }}
    >
      <HeroHome />
      <Box height={"100vh"} />
      <Box mx={40}>
        <Heading position={"sticky"} top={"40vh"} fontSize={"8rem"}>
          Modular <Text color={"yellow.300"}>One</Text>
        </Heading>
        <VStack px={20} width={"100%"} mt={"100vh"}>
          <Box
            width={"100%"}
            height={"800px"}
            display="flex"
            alignItems={"space-between"}
          >
            <Box width={"70%"}></Box>
            <Box width={"30%"}>
              <Heading>
                Bruh iceland iPhone subway tile pitchfork waistcoat. Yr lyft
                food truck try-hard. Fashion axe flexitarian edison bulb narwhal
                iceland shoreditch lo-fi franzen post-ironic cray la croix blog
              </Heading>
            </Box>
          </Box>
          <Box height={"800px"}>
            <Heading>:)</Heading>
          </Box>
          <CardRow />
          <Box height={"3400px"}></Box>
        </VStack>
      </Box>
    </ReactLenis>
  );
}

export default New;
