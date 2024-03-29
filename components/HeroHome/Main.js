import React, { useEffect, useRef, useState } from "react";
import Particles from "./Models/Particles";
import MModel from "./Models/MModel";
import OneModel from "./Models/OneModel";
import House from "./Models/HouseModel";
import { useSpring, animated, config } from "@react-spring/three";
import { useAnimationFrame } from "./Models/animation";
import { useScrollStore } from "@/lib/store";
import { useLenis } from "@studio-freight/react-lenis";
import Lamp from "./Models/HouseModel/Lamp";

function Main() {
  const { scrollState, setMap, scrollMap } = useScrollStore();
  const [active, setActive] = useState(false);

  const map = {
    default: 0,
    init: 0.01,

    aS: 0.25,
    aM: 0.38,

    bS: 0.5,
    bM: 0.6,

    cS: 0.8,
    cM: 0.9,

    dS: 0.95,
  };

  const scrollKeys = Object.keys(scrollMap);

  useEffect(() => {
    setActive(true);

    setMap(map);
  }, []);

  const { scale } = useSpring({ scale: active ? 1 : 0, config: config.gentle });
  const m1ref = useRef();
  const sceneRef = useRef();

  const posM = 2;
  const scaleM = 1 / 2;

  const rot1 = Math.PI / 3
  const rot2 = Math.PI
  const rot3 = Math.PI / 3
  const rot4 = Math.PI / 3
  const rot5 = Math.PI / 6
  const rot6 = Math.PI / 6
  const rot7 = Math.PI / 6


  const rotA = Math.PI / 3;
  const rotB = (Math.PI * 2) / 3;
  const rotC = (-Math.PI * 1) / 9;

  const calcBar = (c, n, progress) => (progress - c) / (n - c);

  useLenis((lenis) => {
    const progress = lenis.progress;

    const cBar =
      scrollState === "init" || scrollState === "default"
        ? scrollMap.aS
        : scrollMap[scrollState];
    const nBar =
      scrollState === "dS"
        ? 1
        : scrollMap[
            scrollKeys[scrollKeys.findIndex((key) => key === scrollState) + 1]
          ];

    const cProgress = calcBar(cBar, nBar, progress);

    if (scrollState === "default" || scrollState === "init") {
      sceneRef.current.position.set((-progress / cBar) * posM, 0, 0);
      sceneRef.current.rotation.set(0, (progress / cBar) * rot1, 0);
      sceneRef.current.scale.set(
        1 - (progress / cBar) * (1 - scaleM),
        1 - (progress / cBar) * (1 - scaleM),
        1 - (progress / cBar) * (1 - scaleM)
      );
    } else if (scrollState === "aS") {
      sceneRef.current.rotation.set(0, rot1 + cProgress * rot2, 0);
      sceneRef.current.position.set(-posM, 0, 0);
    } else if (scrollState === "aM") {
      sceneRef.current.position.set(-posM + cProgress * posM * 2, 0, 0);
      sceneRef.current.rotation.set(0, rot1 + rot2 + cProgress * rot3, 0);
    } else if (scrollState === "bS") {
      sceneRef.current.position.set(posM, 0, 0);
      sceneRef.current.rotation.set(0, rot1 + rot2 + rot3 + cProgress * rot4, 0);
    } else if (scrollState === "bM") {
      sceneRef.current.position.set(posM - cProgress * posM * 2, 0, 0);
      sceneRef.current.rotation.set(0, rot1 + rot2 + rot3 + rot4 + cProgress * rot5, 0);
    } else if (scrollState === "cS") {
      sceneRef.current.position.set(-posM, 0, 0);
      sceneRef.current.rotation.set(0, rot1 + rot2 + rot3 + rot4 + rot5 + cProgress * rot6, 0);
    } else if (scrollState === "cM") {
      sceneRef.current.position.set(-posM + cProgress * posM, 0, 0);
      sceneRef.current.rotation.set(0, rot1 + rot2 + rot3 + rot4 + rot5 + rot6+ cProgress * rot7, 0);
    } 
    
  });

  useAnimationFrame((deltaTime, time, lenis) => {});

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
  );
}

export default Main;
