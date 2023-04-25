import React from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { useScrollStore } from "@/lib/store";

function Stair(props) {
  const { scrollStates } = useScrollStore();

  console.log(props.number)

  const { position, opacity } = useSpring({
    position: scrollStates.bState.active ? [0, 0, 0] : [0, 3, 0],
    opacity: scrollStates.bState.active ? 1 : 0,

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
        <animated.meshPhongMaterial opacity={opacity} transparent />
      </mesh>
    </animated.group>
  );
}

export default Stair;
