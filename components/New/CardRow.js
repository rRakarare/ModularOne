import {
  background,
  Box,
  Card,
  CardBody,
  chakra,
  shouldForwardProp,
  Text,
} from "@chakra-ui/react";
import { useLenis } from "@studio-freight/react-lenis";
import { isValidMotionProp, motion } from "framer-motion";
import React, { useState } from "react";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function CardRow() {
  const [x, setX] = useState(0);

  const lenis = useLenis((state, a, b, c) => {
    // console.log(state.progress);
    setX(-state.progress * 2000);
  });

  return (
    <Box position={"sticky"} top={"40vh"}>
      <Box
        overflow={"hidden"}
        width={"90vw"}
        position={"relative"}
        display={"block"}
        height={"400px"}
      >
        <ChakraBox
          animate={{ x }}
          style={{
            left: "100vw",
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "red",
          }}
          transition={{ type: "tween", duration:.001 }}
        >
          aScxwqeqw
        </ChakraBox>
        {/* <Card
          animate={{ x }}
          as={ChakraBox}
          position={"absolute"}
          transition={{ from: 90, duration: 2 }}
          left={"100vw"}
          width={300}
          height={600}
        >
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card> */}
        <Card position={"absolute"} left={"100vw"} width={300} height={600}>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
        <Card position={"absolute"} left={1000} width={300} height={600}>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
        <Card position={"absolute"} left={1500} width={300} height={600}>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}

export default CardRow;
