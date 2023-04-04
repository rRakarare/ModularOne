import { Sparkles, useAnimations, useGLTF } from "@react-three/drei";
import { useLenis } from "@studio-freight/react-lenis";
import React, { useEffect, useRef } from "react";
import { getModularProps, mAnimations, oneAnimation } from "./helpers";
import * as THREE from "three";
import M from "./M";
import One from "./One";

function Models() {
  const oneProps = useGLTF("/One.glb");
  const mProps = useGLTF("/M.glb");

  const spark = useRef();

  const groupM = useRef();
  const groupM2 = useRef();

  const groupOne = useRef();
  const groupOne2 = useRef();

  const { actions: oneActions } = useAnimations(oneProps.animations, groupOne);
  const { actions: mActions } = useAnimations(mProps.animations, groupM);

  const modularProps = getModularProps(0.11);
  const modularProps2 = getModularProps(-0.11);
  const modularKeys = Object.keys(modularProps);

  useEffect(() => {
    oneAnimation.forEach((item) => {
      const action = oneActions[item.animation];
      action.play().paused = true;
    });
  }, [oneActions]);

  useEffect(() => {
    modularKeys.forEach((key) => {
      const action = mActions[modularProps[key].animation];
      action.play().paused = true;
    });
  }, [mActions]);

  const lenis = useLenis((state) => {});

  let start, previousTimeStamp;
  let previousOffset = 0;

  let myreq;

  function raf(time) {
    lenis.raf(time);

    if (start === undefined) {
      start = time;
    }
    const elapsed = time - start;
    const delta = isNaN(time - previousTimeStamp)
      ? 0
      : time - previousTimeStamp;

    const offset = lenis.progress;

    const deltaOffset = offset - previousOffset;

    previousOffset = offset;

    oneAnimation.forEach((item) => {
      const action = oneActions[item.animation];
      action.time = THREE.MathUtils.damp(
        action.time,
        action.getClip().duration * offset * 10,
        100,
        delta
      );
    });

    modularKeys.forEach((key) => {
      const action = mActions[modularProps[key].animation];
      action.time = THREE.MathUtils.damp(
        action.time,
        action.getClip().duration * offset * 10,
        100,
        delta
      );
    });

    const allGroups = [
      {refer:groupOne, proper: oneProps},
      {refer:groupOne2, proper: oneProps},
      {refer:groupOne, proper: oneProps},
      {refer:groupOne, proper: oneProps},
    
    ]


    groupOne.current.children.forEach((child, index) => {});
    groupOne2.current.children.forEach((child, index) => {});

    groupM.current.children.forEach((child, index) => {
      const defaultPosition = [
        modularProps[child.name].position[0] *
          Math.abs(Math.cos((Math.PI) * offset)) *
          (1 + offset * modularProps[child.name].move[0]),
        modularProps[child.name].position[1] *
          Math.abs(Math.cos((Math.PI) * offset)) *
          (1 + offset * modularProps[child.name].move[1]),
        modularProps[child.name].position[2] *
          Math.abs(Math.cos((Math.PI) * offset)) *
          (1 + offset * modularProps[child.name].move[2]),
      ];

      child.position.set(...defaultPosition);
    });

    groupM2.current.children.forEach((child, index) => {});

    previousTimeStamp = time;
    myreq = requestAnimationFrame(raf);
  }

  useEffect(() => {
    myreq = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(myreq);
    };
  }, []);

  return (
    <group>
      

      <M mProps={mProps} groupM={groupM} modularProps={modularProps} />
      <M mProps={mProps} groupM={groupM2} modularProps={modularProps2} />

      <One oneProps={oneProps} groupOne={groupOne} position={[0, 0, -0.1]} />
      <One oneProps={oneProps} groupOne={groupOne2} position={[0, 0, 0.1]} />
    </group>
  );
}

useGLTF.preload("/One.glb");
useGLTF.preload("/M.glb");

export default Models;
