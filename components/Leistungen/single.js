import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useScrollDirection } from "react-use-scroll-direction";
import SingleText from "./singleText";

const SingleLeistung = ({
  FOR,
  HEAD,
  DESC,
  TEXT,
  Number,
  IMG,
  IMG_IN,
  currentSlide,
  changeSlide,
  color,
  myRef,
}) => {
  const boxVariant = {
    visibleMob: {
      translateY: "0px",
      opacity: 0.2,
      transition: { duration: 0.65 },
    },
    visible: { translateY: "0px", opacity: 1, transition: { duration: 0.65 } },
    hidden: { translateY: "100vh", transition: { duration: 0.65, delay: 0.1 } },
    fadeout: { opacity: 0 },
    fadein: { opacity: 1 },
  };

  const colorize = {
    colorized: { opacity: 1 },
    decolorized: { opacity: 0 },
  };

  const inVariant = {
    colorized: { scale: 1.4 },
    decolorized: { scale: 1 },
    visibleMob: {
      translateY: "0px",
      opacity: 1,
      transition: {
        translateY: { duration: 0.7, delay: 0.1 },
        opacity: { duration: 0.7, delay: 0.3 },
      },
    },
    visible: {
      translateY: "0px",
      opacity: 1,
      transition: {
        translateY: { duration: 0.7, delay: 0.1 },
        opacity: { duration: 0.7, delay: 0.3 },
      },
    },
    hidden: {
      translateY: "100vh",
      opacity: 0,
      transition: {
        translateY: { duration: 0.7, delay: 0 },
        opacity: { duration: 0.4, delay: 0 },
      },
    },
    fadeout: { opacity: 0 },
    fadein: { opacity: 1 },
  };

  const control = useAnimation();
  const controlMob = useAnimation();
  const theme = useTheme();

  const [mediaquery] = useMediaQuery("(min-width: 768px)");

  const [ref, inView, entry] = useInView();
  const [display, setDisplay] = useState(true);
  const [colorized, setColorized] = useState(false);

  const { isScrollingUp } = useScrollDirection();

  useEffect(() => {
    if (inView) {
      if (isScrollingUp) {
      } else {
        changeSlide(Number);
      }
    } else {
      if (isScrollingUp) {
        changeSlide(currentSlide - 1);
      } else {
      }
    }
  }, [inView]);

  useEffect(() => {
    if (currentSlide >= Number) {
      mediaquery ? control.start("visible") : control.start("visibleMob");
    } else {
      control.start("hidden");
    }
  }, [currentSlide, mediaquery]);
  useEffect(() => {
    colorized ? control.start("colorized") : control.start("decolorized");
  }, [colorized]);

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        w={"100%"}
        marginBottom={{ base: "5rem!important", md: "50vh!important" }}
      >
        <Box
          zIndex={"docked"}
          w={"100%"}
          paddingX={{
            base: "1.4rem",
            sm: "3rem",
            md: "4rem",
            lg: "5rem",
            xl: "8rem",
            "2xl": "14rem",
          }}
        >
          <VStack ref={Number === 1 ? myRef : null} align={"flex-start"}>
            <SingleText>
              <Text fontWeight={"medium"} fontSize={"large"}>
                {FOR}
              </Text>
            </SingleText>
            <SingleText>
              <Heading
                marginBottom={"1rem"}
                color={color[100]}
                fontWeight={"bold"}
                fontSize={{
                  base: "3xl",
                  md: "4xl",
                  lg: "4xl",
                  xl: "5xl",
                  "2xl": "7xl",
  
                }}
              >
                {HEAD}
              </Heading>
              <Box ref={ref} />
            </SingleText>
            <SingleText>
              <Text
                marginBottom={"1.4rem"}
                fontWeight={"medium"}
                fontSize={"2xl"}
              >
                {DESC}
              </Text>
            </SingleText>
            <SingleText>
              <Text fontWeight={"medium"} fontSize={"md"}>
                {TEXT}
              </Text>
            </SingleText>
          </VStack>
        </Box>

        <Center
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            display={{
              base: "none",
              md: "block",
            }}
            as={motion.div}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            position={"fixed"}
            right={0}
            top={0}
            height={"100vh"}
            width={"50vw"}
            background={`url(/${IMG}.jpg) no-repeat center center / cover`}
          >
            <Box
              as={motion.div}
              variants={colorize}
              animate={control}
              initial={"decolorized"}
              background={color[100]}
              w={"100%"}
              h={"100%"}
            ></Box>
          </Box>
          <Box
            cursor={"pointer"}
            onHoverStart={() => setColorized(true)}
            onHoverEnd={() => setColorized(false)}
            background={"white"}
            marginTop={{ base: "4rem", md: "0" }}
            p={{ base: "6px", md: "20px" }}
            as={motion.div}
            variants={inVariant}
            initial="hidden"
            animate={control}
            top={{ base: "auto", md: "calc(50vh - 125px)", lg: "calc(50vh - 200px)" }}
            right={{ base: "auto", md: "calc(25vw - 125px)", lg: "calc(25vw - 200px)" }}
            position={{ base: "static", md: "fixed" }}
            w={{ base: "200px", md: "250px", lg: "400px" }}
            h={{ base: "200px", md: "250px", lg: "400px" }}
          >
            <Image
              src={`/${IMG_IN}.jpg`}
              alt="Dan Abramov"
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
            />
          </Box>
        </Center>
      </SimpleGrid>
    </>
  );
};

export default SingleLeistung;
