import * as React from "react";
import { useRef } from "react";
import { isValidMotionProp, motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Container, chakra, shouldForwardProp } from "@chakra-ui/react";
import { ChakraBox, ChakraNav } from "../chakraFramer";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 30px 30px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNav = () => {
  //   const [isOpen, toggleOpen] = useCycle(false, true);
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <><MenuToggle toggle={onToggle} />
    <ChakraBox position={"relative"}  display={{ base: "block", md: "none" }}>
      
      <ChakraNav
        position={"fixed"}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <ChakraBox
          
          background={"white"}
          top={0}
          left={0}
          bottom={0}
          width={"100vw"}
          height={"100vh"}
          variants={sidebar}
        />
        <Navigation />
        
      </ChakraNav>
      
    </ChakraBox>
    </>
  );
};
