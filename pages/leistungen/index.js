import {
  Box,
  Center,
  HStack,
  SimpleGrid,
  Text,
  useColorMode,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Counter from "../../components/Leistungen/counter";
import FrontText from "../../components/Leistungen/frontText";
import SingleLeistung from "../../components/Leistungen/single";

const Leistungen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  const [ref, inView] = useInView({ threshold: 1 });
  const theme = useTheme()

  const control = useAnimation();

  const changeSlide = (val) => {
    setCurrentSlide(val);
  };

  const arrowVariant = {
    normal: {translateY:0},
    hover: {translateY:"80px"}
  }
  const stickVariant = {
    normal: {scaleY:1, translateY:0, transition: {duration:.15,type:"tween"}},
    hover: {scaleY:2.78, translateY:"50px", transition: {duration:.1,type:"tween"}}
  }

  return (
    <>
      <SimpleGrid columns={{base:1,md:2}} h={"100vh"}>
        <Center justifyContent={"center"} alignItems={"center"}>
          <FrontText />
        </Center>
        <VStack justifyContent={"center"} alignItems={"center"}>
          <Text>Scroll</Text>
          <Box cursor={"pointer"} onMouseEnter={()=>control.start("hover")} onMouseLeave={()=>control.start("normal")}>
            

          
            <VStack justifyContent={"center"} alignItems={"center"}>
              <Box id="stick" as={motion.div} initial="normal" animate={control} variants={stickVariant}>
                <svg
                  width="11"
                  height="56"
                  viewBox="0 0 11 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="5.5"
                    y1="2.40413e-07"
                    x2="5.5"
                    y2="56"
                    stroke={colorMode==="dark" ? "white" : "black"}
                    strokeWidth="11"
                  />
                </svg>
              </Box>
              <Box id="arrow" as={motion.div} initial="normal" animate={control} variants={arrowVariant} marginTop={"-2px!important"}>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 42L0.751293 -4.56773e-06L49.2487 -3.27948e-07L25 42Z"
                    fill={colorMode==="dark" ? "white" : "black"}
                  />
                </svg>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </SimpleGrid>
      <Counter currentSlide={currentSlide} />

      <VStack justifyContent={"center"}>
        <SingleLeistung
          FOR={"Lappens"}
          HEAD="Elo Gainer"
          DESC={
            "Vape shoreditch four loko live-edge, vinyl kogi shaman intelligentsia hashtag hoodie succulents sustainable marfa vegan"
          }
          TEXT={
            "I'm baby deep v mixtape tote bag, listicle salvia quinoa vice +1 freegan. Shaman leggings vape tousled lyft meditation, brooklyn 3 wolf moon."
          }
          Number={1}
          IMG="test"
          IMG_IN="in"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          color={theme.colors.one}
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Elo Gainer"
          DESC={
            "Vape shoreditch four loko live-edge, vinyl kogi shaman intelligentsia hashtag hoodie succulents sustainable marfa vegan"
          }
          TEXT={
            "I'm baby deep v mixtape tote bag, listicle salvia quinoa vice +1 freegan. Shaman leggings vape tousled lyft meditation, brooklyn 3 wolf moon."
          }
          Number={2}
          IMG="test2"
          IMG_IN="in2"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          color={theme.colors.two}
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Elo Gainer"
          DESC={
            "Vape shoreditch four loko live-edge, vinyl kogi shaman intelligentsia hashtag hoodie succulents sustainable marfa vegan"
          }
          TEXT={
            "I'm baby deep v mixtape tote bag, listicle salvia quinoa vice +1 freegan. Shaman leggings vape tousled lyft meditation, brooklyn 3 wolf moon."
          }
          Number={3}
          IMG="test3"
          IMG_IN="in3"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          color={theme.colors.three}
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Elo Gainer"
          DESC={
            "Vape shoreditch four loko live-edge, vinyl kogi shaman intelligentsia hashtag hoodie succulents sustainable marfa vegan"
          }
          TEXT={
            "I'm baby deep v mixtape tote bag, listicle salvia quinoa vice +1 freegan. Shaman leggings vape tousled lyft meditation, brooklyn 3 wolf moon."
          }
          Number={4}
          IMG="test4"
          IMG_IN="in4"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          color={theme.colors.four}
        />
      </VStack>
    </>
  );
};

export default Leistungen;
