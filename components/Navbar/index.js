import { useEffect, useRef, useState } from "react";
import { Box, Flex, HStack, VStack, Center, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContainerDimensions } from "../../lib/refDimensions";
import {Anker, AnkerMob, Dot} from "./styles"
import DarkModeCheck from "../DarkModeCheck";

const links = [
  { text: "Modular One", href: "/" },
  { text: "Leistungen", href: "/leistungen" },
  { text: "Blog", href: "/blog" },
  { text: "Preise", href: "/preise" },
  { text: "Kontakt", href: "/kontakt" },
];



const MobLinks = ({ router }) => {
  const path = router && router.asPath;
  return (
    <>
      {links.map((link) => (
        <NextLink legacyBehavior href={link.href} key={link.text}>
          <AnkerMob
            className={path == link.href ? "active" : ""}
            key={link.text}
          >
            {link.text}
          </AnkerMob>
        </NextLink>
      ))}
    </>
  );
};

const Links = ({ items, router }) => {
  const path = router && router.asPath;
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      {links.map((link, i) => (
        <NextLink legacyBehavior href={link.href} key={link.text}>
          <Anker
            className={path == link.href ? "active" : ""}
            rotes={i + 1}
            widthParam={items.length > 0 && items[i]}
            key={link.text}
            textcolor = {colorMode === "light" ? "black": "white"}
          >
            {link.text}
          </Anker>
        </NextLink>
      ))}
    </>
  );
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MotionButton = motion(Box);

const BurgerButton = ({ isOpen, onClick }) => {
  return (
    <MotionButton
      _hover={{
        cursor: "pointer",
      }}
      className="menu-button"
      onClick={onClick}
      animate={isOpen ? "open" : "closed"}
      initial={false}
      display={{ base: "block", md: "none" }}
    >
      <svg
        width="23"
        height="23"
        style={{ margin: "4px 0 0 2px" }}
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </MotionButton>
  );
};

const MotionCenter = motion(Center);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode()


  const router = useRouter();

  const ref = useRef();
  const dimensions = useContainerDimensions(ref)



  const slideVerticalAnimation = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        default: { duration: 0.4, type: "spring", mass: 0.5 },
        opacity: { duration: 0.4 },
      },
      display: "block",
    },
    close: {
      y: -200,
      opacity: 0,
      transition: {
        default: { duration: 0.3 },
        opacity: { duration: 0.3 },
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      <Box
        position={"absolute"}
        top={"70px"}
        display={{
          base: "block",
          md: "none",
        }}
        width={"100%"}
      >
        <MotionCenter
          zIndex={10}
          position="relative"
          initial="close"
          animate={isOpen ? "open" : "close"}
          variants={slideVerticalAnimation}
          mx={["2rem", "5rem"]}
          border={"3px solid black"}
          bg={"dark"}
        >
          <VStack as={"nav"}>
            <MobLinks router={router} />
          </VStack>
        </MotionCenter>
      </Box>
      <Box
        style={{ zIndex: 10, position: "relative" }}
        px={{ base: "5", md: "40" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <HStack spacing={8} alignItems={"center"}>
            <Box style={{ cursor: "pointer" }}>
              <NextLink legacyBehavior href={"/"}>
                <svg
                  height="40"
                  viewBox="0 0 122 122"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60.4993 47.7395L85.6896 22.5394H98.4596V32.8693H89.9696L60.4993 62.3396L32.859 34.6993V98.4604H22.5389V22.5405H35.3089L60.4993 47.7395Z"
                    fill={colorMode === "light" ? "#263238" : "white"}
                  />
                  <path
                    d="M88.4302 41.6696L79.67 50.4298V56.5697H88.14V98.4585H98.46V41.6669L88.4302 41.6696Z"
                    fill="#F7D147"
                  />
                  <path
                    d="M117.178 3.83282H3.83289V117.178H117.178V3.83282Z"
                    stroke={colorMode === "light" ? "#263238" : "white"}
                    strokeWidth="3.99197"
                    strokeLinecap="round"
                  />
                </svg>
              </NextLink>
            </Box>
            <HStack
              ref={ref}
              as={"nav"}
              spacing={0}
              display={{ base: "none", md: "flex" }}
            >
              <Links router={router} items={dimensions} />
              <Dot dims={15}></Dot>
            </HStack>
            <DarkModeCheck/>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
