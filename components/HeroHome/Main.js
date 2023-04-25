import React, { useEffect, useRef, useState } from 'react'
import Particles from './Models/Particles'
import MModel from './Models/MModel'
import OneModel from './Models/OneModel'
import House from './Models/HouseModel'
import { useSpring, animated, config } from "@react-spring/three";
import { useAnimationFrame } from './Models/animation'
import { useScrollStore } from '@/lib/store'

function Main() {

    const { scrollStates } = useScrollStore();
    const [active, setActive] = useState(false);

    useEffect(() => {
      setActive(true);
    }, []);
  
    const { scale } = useSpring({ scale: active ? 1 : 0, config: config.gentle });
    const m1ref = useRef();
    const sceneRef = useRef();

    useAnimationFrame((deltaTime, time, lenis) => {
        const progress = lenis.progress
    
        console.log(progress)
    
        if (!scrollStates.aState.active) {
          sceneRef.current.rotation.set(0,progress * 5,0)
          sceneRef.current.position.set(-progress * 8,0,0)
          sceneRef.current.scale.set(1-progress*2,1-progress*2,1-progress*2)
        }
    
      });


  return (
    <animated.group scale={scale}>
    <Particles count={500} />
    <group ref={sceneRef}>
      <group ref={m1ref}>
        <MModel />
        <OneModel />
      </group>
      <House />
    </group>
  </animated.group>
  )
}

export default Main