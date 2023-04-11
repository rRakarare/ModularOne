import React, { useEffect, useRef } from "react";
import { useAnimationFrame } from "../animation";
import { useAnimations } from "@react-three/drei";

function MCube(props) {

  const cube = useRef();

  const { actions } = useAnimations([props.animationClip], cube);


  useEffect(() => {
    const action = actions[props.animation]
    action.play().paused = true;
  }, [actions]);



    useAnimationFrame((deltaTime, lenis) => {

      const action = actions[props.animation]
      action.time = lenis.progress * 100
    
  })

  return <mesh ref={cube} {...props} />;
}

export default MCube;
