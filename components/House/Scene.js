import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Environment,
  OrbitControls,
  SpotLight,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Model from "./Model";
import { FaHome } from "react-icons/fa";
import { GiBrickWall, GiStairs } from "react-icons/gi";
import { MdRoofing } from "react-icons/md";
import { motion } from "framer-motion";

export default function Scene(props) {
  const [focus, setFocus] = useState(null);
  const [state, setState] = useState(null);

  const variants = {
    open: { opacity: 1 , y:0},
    closed: { opacity: 0 , y:"30px"},
  };

  const ref = useRef();
  return (
    <SimpleGrid  columns={[1, 1, 1,2]} spacing={10}>
      <Box
        justifyContent={"center"}
        display={"flex"}
        position={"relative"}
        w={"100%"}
        h={700}
      >
        <Box position={"absolute"} top={10} zIndex={10}>
          <HStack>
            <Button onClick={() => {setFocus(null), setState(null)}}>
              <Icon as={FaHome} />
            </Button>
            <Button onClick={() => {setFocus(["dach_außen_fl", "dach_wire"]), setState(1)}}>
              <Icon as={MdRoofing} />
            </Button>
            <Button onClick={() => {setFocus(["wand_außen_fl"]),setState(2)}}>
              <Icon as={GiBrickWall} />
            </Button>
            <Button onClick={() => {setFocus(["og_fl", "og", "eg"]), setState(3)}}>
              <Icon as={GiStairs} />
            </Button>
          </HStack>
        </Box>
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [10, 6, 10] }}
          style={{ positon: "absolute" }}
        >
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <ambientLight />
            <Environment preset="sunset" />
            <Model focus={focus} />
          </Suspense>
          <OrbitControls enableZoom={false} maxPolarAngle={2} rotateSpeed={.4} autoRotateSpeed={.6} autoRotate ref={ref} />
        </Canvas>
      </Box>
      <Box>
        <Box h={300} position={"relative"}>
          <Box
            position={"absolute"}
            as={motion.div}
            variants={variants}
            animate={state === null ? "open" : "closed"}
          >
            <VStack spacing={4} align="stretch" p={10}>
              <Box h="40px">
                <Heading>M1 App</Heading>
              </Box>
              <Text color="gray.500">
                Ganz klasse. Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. in the graphic, print, and publishing industries
                for previewing layouts and visual mockups.
              </Text>
            </VStack>
          </Box>
          <Box
            position={"absolute"}
            as={motion.div}
            variants={variants}
            animate={state === 1 ? "open" : "closed"}
          >
            <VStack spacing={4} align="stretch" p={10}>
              <Box h="40px">
                <Heading>Dachflächen</Heading>
              </Box>
              <Text color="gray.500">
                Strom Sonne für die Dach un so. Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. in the graphic, print, and publishing industries
                for previewing layouts and visual mockups.
              </Text>
            </VStack>
          </Box>
          <Box
            position={"absolute"}
            as={motion.div}
            variants={variants}
            animate={state === 2 ? "open" : "closed"}
          >
            <VStack spacing={4} align="stretch" p={10}>
              <Box h="40px">
                <Heading>Außenwand</Heading>
              </Box>
              <Text color="gray.500">
                Putz neu und das alles Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. in the graphic, print, and publishing industries
                for previewing layouts and visual mockups.
              </Text>
            </VStack>
          </Box>
          <Box
            position={"absolute"}
            as={motion.div}
            variants={variants}
            animate={state === 3 ? "open" : "closed"}
          >
            <VStack spacing={4} align="stretch" p={10}>
              <Box h="40px">
                <Heading>Boden OG</Heading>
              </Box>
              <Text color="gray.500">
                Neue Fließen Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. in the graphic, print, and publishing industries
                for previewing layouts and visual mockups.
              </Text>
            </VStack>
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
}
