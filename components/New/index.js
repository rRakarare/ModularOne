import { Box, Heading, VStack } from "@chakra-ui/react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import React from "react";
import HeroHome from "../HeroHome";

function index() {



  return (
    <ReactLenis root options={{  }}>
        <HeroHome />
      <VStack>
        <Box height={"800px"}>
          <Heading>Leck me im arsch</Heading>
        </Box>{" "}
        <Box height={"800px"}>
          <Heading>Leck me im arsch</Heading>
        </Box>{" "}
        <Box height={"800px"}>
          <Heading>Leck me im arsch</Heading>
        </Box>{" "}
        <Box height={"800px"}>
          <Heading>Leck me im arsch</Heading>
        </Box>{" "}
      </VStack>
    </ReactLenis>
  );
}

export default index;
