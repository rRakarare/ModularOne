import { useAnimations, useGLTF } from "@react-three/drei";
import { useLenis } from "@studio-freight/react-lenis";
import React, { useEffect, useRef } from "react";
import { mAnimations, oneAnimation } from "./helpers";
import * as THREE from 'three'
import M from "./M";
import One from "./One";

function rotateAboutPoint(obj, point, axis, theta, pointIsWorld){
  pointIsWorld = (pointIsWorld === undefined)? false : pointIsWorld;

  if(pointIsWorld){
      obj.parent.localToWorld(obj.position); // compensate for world coordinate
  }

  obj.position.sub(point); // remove the offset
  obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
  obj.position.add(point); // re-add the offset

  if(pointIsWorld){
      obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
  }

  // obj.rotateOnAxis(axis, theta); // rotate the OBJECT
  // obj.rotateOnAxis(axis, theta); // rotate the OBJECT

  obj.setRotationFromAxisAngle(axis, theta)

  console.log(obj)
}

function Models() {
  const oneProps = useGLTF("/One.glb");
  const mProps = useGLTF("/M.glb");

  const groupM = useRef();
  const groupOne = useRef();

  const { actions: oneActions } = useAnimations(oneProps.animations, groupOne);
  const { actions: mActions } = useAnimations(mProps.animations, groupM);

  useEffect(() => {
    oneAnimation.forEach((item) => {
      const action = oneActions[item.animation]
      action.play().paused = true;

    });
  }, [oneActions]);

  useEffect(() => {
    mAnimations.forEach((item) => {
      const action = mActions[item.animation]
      action.play().paused = true;
    });
  }, [mActions]);

  const lenis = useLenis((state) => {});


  let start, previousTimeStamp;

  let myreq;

  function raf(time) {
    lenis.raf(time);

    if (start === undefined) {
      start = time;
    }
    const elapsed = time - start;
    const delta = isNaN(time - previousTimeStamp) ? 0 : time - previousTimeStamp;


    const offset = lenis.progress;

    oneAnimation.forEach((item) => {
      const action = oneActions[item.animation];
      action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration) * offset * 10, 100, delta);
    });

    mAnimations.forEach((item) => {
      const action = mActions[item.animation];      
      action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration) * offset * 10, 100, delta);
    });

    // groupOne.current.rotation.y = (Math.sin(offset * 10));

    rotateAboutPoint(groupOne.current, new THREE.Vector3(1, 1, 0), new THREE.Vector3(0, 1, 0), offset, false);

    // groupOne.current.children.forEach((child, index) => {
    //   child.geometry.computeVertexNormals();
    //   child.position.set(...oneAnimation[index].move.map((item) => item * offset));
    //   child.rotation.y =
    //     ((Math.cos(index + elapsed / 200) * Math.PI) / 30) * offset * 0.5;
    //   child.rotation.z =
    //     ((Math.cos(index + elapsed / 200) * Math.PI) / 30) * offset * 0.5;
    //   child.rotation.x =
    //     ((Math.cos(index + elapsed / 200) * Math.PI) / 30) * offset * 0.5;

    //   child.scale.set(1 - offset * 2, 1 - offset * 2, 1 - offset * 2);
    // });

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
      <M mProps={mProps} groupM={groupM} />
      <One oneProps={oneProps} groupOne={groupOne} />
    </group>
  );
}

useGLTF.preload("/One.glb");
useGLTF.preload("/M.glb");

export default Models;
