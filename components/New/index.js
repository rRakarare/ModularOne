import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import React from "react";
import HeroHome from "../HeroHome";

function index() {
  return (
    <ReactLenis root options={{}}>
      <HeroHome />
      <VStack px={20} width={"100%"} mt={"100vh"}>
        <Box width={"100%"} height={"800px"}>
          <Heading fontSize={"8rem"}>
            Modular <Text color={"yellow.300"}>One</Text>
          </Heading>
        </Box>
        <Box width={"100%"} height={"800px"} display="flex" alignItems={"space-between"}>
          <Box width={"70%"}></Box>
          <Box width={"30%"}>
            <Heading>
              Bruh iceland iPhone subway tile pitchfork waistcoat. Yr lyft food
              truck try-hard. Fashion axe flexitarian edison bulb narwhal
              iceland shoreditch lo-fi franzen post-ironic cray la croix blog
    
            </Heading>
          </Box>
        </Box>
        <Box height={"800px"}>
          <Heading>:)</Heading>
        </Box>
        <Box height={"800px"}>
          <Heading>:/</Heading>
        </Box>
        <Box height={"800px"}>
          <Heading>:(</Heading>
        </Box>
      </VStack>
    </ReactLenis>
  );
}

export default index;
