import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import React, { useState } from "react";

function CardRow() {

    const [x, setX] = useState(0);

    const lenis = useLenis((state, a, b, c) => {
      // console.log(state.progress);
      setX(-state.progress*2000);
    });

  return (
    <Box position={"sticky"} top={"40vh"}>
      <Box overflow={"hidden"} width={"90vw"} position={"relative"} display={"block"} height={"400px"}>
        <Card
          animate={{ x }}
          as={motion.div}
          position={"absolute"}
          left={"100vw"}
          width={300}
          height={600}
        >
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
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
