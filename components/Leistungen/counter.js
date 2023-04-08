import { Box, Center, Text, useColorMode } from "@chakra-ui/react"
import { motion, useViewportScroll} from "framer-motion";

const Counter = ({currentSlide}) => {
    const { scrollYProgress } = useViewportScroll();

    const { colorMode } = useColorMode();

    return <>
    <Box
        zIndex={100}
        position={"sticky"}
        left={{base:'auto','2xl':'70px'}}
        top={{base:'20px','2xl':'100px'}}
        marginLeft={{base:'auto', '2xl':'0'}}
        marginRight={{base:'20px', '2xl':'0'}}
        w={"100px"}
        h={"100px"}
      >
        <Box>
          <Center
            position={"absolute"}
            w={"100px"}
            h={"100px"}
          >
            <Text
              fontWeight={"semibold"}
              fontSize={"5xl"}
              marginBottom={"10px"}
            >
              {currentSlide}
            </Text>
          </Center>
          <svg
            width="100"
            height="100"
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 4.5H93.5C98.7467 4.5 103 8.7533 103 14V93C103 98.2467 98.7467 102.5 93.5 102.5H14.5C9.2533 102.5 5 98.2467 5 93V14C5 8.7533 9.2533 4.5 14.5 4.5Z"
              stroke={colorMode === "dark" ? "#47474741" : "#d6d6d67c"}
              strokeWidth="9"
            />
            <motion.path
              d="M14.5 4.5H93.5C98.7467 4.5 103 8.7533 103 14V93C103 98.2467 98.7467 102.5 93.5 102.5H14.5C9.2533 102.5 5 98.2467 5 93V14C5 8.7533 9.2533 4.5 14.5 4.5Z"
              stroke={colorMode === "dark" ? "white" : "black"}
              strokeWidth="9"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </Box>
      </Box></>
}

export default Counter