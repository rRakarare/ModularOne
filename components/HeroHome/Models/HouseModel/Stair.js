import React from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { useScrollStore } from "@/lib/store";
import { useColorModeValue, useToken } from "@chakra-ui/react";

function Stair(props) {
  const { scrollState } = useScrollStore();

  const [primary100] = useToken("colors", [
    "primary.100"
  ]);



  const { position, opacity } = useSpring({
    position: scrollState === "bS" || scrollState === "bM" || scrollState === "cS" || scrollState === "cM" ? [0, 0, 0] : [0, 6, 0],
    opacity: scrollState === "bS" || scrollState === "bM" || scrollState === "cS" || scrollState === "cM" ? 1 : 0,

    delay: props.number * 50,

    config: (key) => {
      switch (key) {
        default:
          return {
            mass: 1,
            friction: 20,
            tension: 100,
          };
      }
    },
  });

  return (
    <animated.group position={position}>
      <mesh {...props} castShadow receiveShadow>
        <animated.meshPhongMaterial opacity={opacity} transparent color={primary100} />
      </mesh>
    </animated.group>
  );
}

export default Stair;
