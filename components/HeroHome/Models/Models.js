import { Sparkles, useAnimations, useGLTF } from "@react-three/drei";
import { useLenis } from "@studio-freight/react-lenis";
import React, { useEffect, useRef } from "react";
import { getModularProps, getOneProps, mAnimations, oneAnimation } from "./helpers";
import * as THREE from "three";
import M from "./M";
import One from "./One";

function Models() {
  const oneProps = useGLTF("/One.glb");
  const mProps = useGLTF("/M.glb");

  console.log(mProps)

  const parentRef = useRef();

  const groupM = useRef();
  const groupM2 = useRef();

  const groupOne = useRef();
  const groupOne2 = useRef();

  const { actions: oneActions } = useAnimations(oneProps.animations, groupOne);
  const { actions: mActions } = useAnimations(mProps.animations, groupM);

  const modularProps = getModularProps(0.11);
  const modularProps2 = getModularProps(-0.11);
  const einsProps = getOneProps(0.11);
  const einsProps2 = getOneProps(-0.11);
  const modularKeys = Object.keys(modularProps);
  const oneKeys = Object.keys(einsProps);

  useEffect(() => {
    oneKeys.forEach((key) => {
      const action = oneActions[einsProps[key].animation];
      action.play().paused = true;
    });
  }, [oneActions]);

  useEffect(() => {
    modularKeys.forEach((key) => {
      const action = mActions[modularProps[key].animation];
      action.play().paused = true;
    });
  }, [mActions]);

  const lenis = useLenis((state) => {
    console.log(state)
  });

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

    // modularKeys.forEach((key) => {
    //   const action = mActions[modularProps[key].animation];
    //   action.time = THREE.MathUtils.damp(
    //     action.time,
    //     action.getClip().duration * offset * 10,
    //     100,
    //     delta
    //   );
    // });



    parentRef.current.rotation.set(0, offset * 2 * Math.PI, 0);
    parentRef.current.position.set(0, 0, -offset * 2);



    groupM.current.children.forEach((child, index) => {

      const action = mActions[modularProps[child.name].animation];

      action.time = THREE.MathUtils.damp(
        action.time,
        action.getClip().duration * offset * 10,
        100,
        delta
      );


      child.scale.set(
        Math.abs(Math.cos(Math.PI * offset)),
        Math.abs(Math.cos(Math.PI * offset)),
        Math.abs(Math.cos(Math.PI * offset))
      );

      const defaultPosition = [
        modularProps[child.name].position[0] *
          Math.abs(Math.cos(Math.PI * offset)) *
          (1 + offset * modularProps[child.name].move[0]),
        modularProps[child.name].position[1] *
          Math.abs(Math.cos(Math.PI * offset)) *
          (1 + offset * modularProps[child.name].move[1]),
        modularProps[child.name].position[2] *
          Math.abs(Math.cos(Math.PI * offset)) *
          (1 + offset * modularProps[child.name].move[2]),
      ];

      child.position.set(...defaultPosition);
    });

    

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
    <group ref={parentRef}>
      <M mProps={mProps} groupM={groupM} modularProps={modularProps} />
      <M mProps={mProps} groupM={groupM2} modularProps={modularProps2} />

      <One oneProps={oneProps} groupOne={groupOne} einsProps={einsProps}  />
      <One oneProps={oneProps} groupOne={groupOne2} einsProps={einsProps2}  />
    </group>
  );
}

useGLTF.preload("/One.glb");
useGLTF.preload("/M.glb");

export default Models;
