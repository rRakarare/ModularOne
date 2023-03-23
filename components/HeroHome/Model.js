import React, { useRef } from "react";
import {
  Box,
  Stars,
  useAnimations,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const genArray = () => {
  return [
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 4,
  ];
};

export default function Model({ url, ...props }) {
  const lenis = useLenis((state) => {});

  const m1group = useRef();
  const { nodes, materials, animations } = useGLTF("/neu4.glb");
  const { nodes: nodesInsta, materials: materialsInsta } = useGLTF("/insta.glb");

  const { actions } = useAnimations(animations, m1group);

  const names = [
    {
      animation: "ma1",
      move: genArray(),
    },
    {
      animation: "ma2",
      move: genArray(),
    },
    {
      animation: "ma3",
      move: genArray(),
    },
    {
      animation: "ma4",
      move: genArray(),
    },
    {
      animation: "ma5",
      move: genArray(),
    },
    {
      animation: "ma6",
      move: genArray(),
    },
    {
      animation: "ma7",
      move: genArray(),
    },
    {
      animation: "ma8",
      move: genArray(),
    },
    {
      animation: "ma9",
      move: genArray(),
    },
    {
      animation: "ma10",
      move: genArray(),
    },
    {
      animation: "ma11",
      move: genArray(),
    },
    {
      animation: "ma12",
      move: genArray(),
    },
    {
      animation: "ma13",
      move: genArray(),
    },
    {
      animation: "ma14",
      move: genArray(),
    },
    {
      animation: "oa1",
      move: genArray(),
    },
    {
      animation: "oa2",
      move: genArray(),
    },
    {
      animation: "oa3",
      move: genArray(),
    },
    {
      animation: "oa4",
      move: genArray(),
    },
    {
      animation: "oa5",
      move: genArray(),
    },
    {
      animation: "oa6",
      move: genArray(),
    },
  ];

  useEffect(() => {
    names.forEach((item) => {
      actions[item.animation].play().paused = true;
    });
  }, [actions]);

  let start, previousTimeStamp;

  let myreq;

  function raf(time) {
    lenis.raf(time);

    if (start === undefined) {
      start = time;
    }
    const elapsed = time - start;
    const delta = time - previousTimeStamp;
    const offset = lenis.progress;

    names.forEach((item) => {
      const action = actions[item.animation];
      action.time = offset * 30;
    });

    m1group.current.children.forEach((child, index) => {
      child.geometry.computeVertexNormals();
      child.position.set(...names[index].move.map((item) => item * offset));
      child.rotation.y =
        ((Math.cos(index + elapsed / 200) * Math.PI) / 30) * offset * 0.5;
      child.rotation.z =
        ((Math.cos(index + elapsed / 200) * Math.PI) / 30) * offset * 0.5;
      child.rotation.x =
        ((Math.cos(index + elapsed / 200) * Math.PI) / 30) * offset * 0.5;

      child.scale.set(1 - offset * 2, 1 - offset * 2, 1 - offset * 2);
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
    <group>
      <group  {...props} dispose={null}>
        <mesh
          geometry={nodesInsta.Plane001.geometry}
          material={materialsInsta["Material.001"]}
          position={[2, 0.15, 0]}
          rotation={[Math.PI/2, 0, 1.1]}
          scale={.4}
        />
      </group>

      <group ref={m1group} {...props} dispose={null}>
        <mesh
          name="OneA5"
          geometry={nodes.OneA5.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA5.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA5.morphTargetInfluences}
        />
        <mesh
          name="OneA1"
          geometry={nodes.OneA1.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA1.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA1.morphTargetInfluences}
        />
        <mesh
          name="OneA2"
          geometry={nodes.OneA2.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA2.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA2.morphTargetInfluences}
        />
        <mesh
          name="OneA3"
          geometry={nodes.OneA3.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA3.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA3.morphTargetInfluences}
        />
        <mesh
          name="OneA4"
          geometry={nodes.OneA4.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA4.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA4.morphTargetInfluences}
        />
        <mesh
          name="OneA6"
          geometry={nodes.OneA6.geometry}
          material={materials["SVGMat.001"]}
          morphTargetDictionary={nodes.OneA6.morphTargetDictionary}
          morphTargetInfluences={nodes.OneA6.morphTargetInfluences}
        />
        <mesh
          name="ModA1"
          geometry={nodes.ModA1.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA1.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA1.morphTargetInfluences}
        />
        <mesh
          name="ModA2"
          geometry={nodes.ModA2.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA2.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA2.morphTargetInfluences}
        />
        <mesh
          name="ModA3"
          geometry={nodes.ModA3.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA3.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA3.morphTargetInfluences}
        />
        <mesh
          name="ModA4"
          geometry={nodes.ModA4.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA4.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA4.morphTargetInfluences}
        />
        <mesh
          name="ModA5"
          geometry={nodes.ModA5.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA5.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA5.morphTargetInfluences}
        />
        <mesh
          name="ModA6"
          geometry={nodes.ModA6.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA6.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA6.morphTargetInfluences}
        />
        <mesh
          name="ModA7"
          geometry={nodes.ModA7.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA7.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA7.morphTargetInfluences}
        />
        <mesh
          name="ModA8"
          geometry={nodes.ModA8.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA8.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA8.morphTargetInfluences}
        />
        <mesh
          name="ModA9"
          geometry={nodes.ModA9.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA9.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA9.morphTargetInfluences}
        />
        <mesh
          name="ModA10"
          geometry={nodes.ModA10.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA10.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA10.morphTargetInfluences}
        />
        <mesh
          name="ModA11"
          geometry={nodes.ModA11.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA11.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA11.morphTargetInfluences}
        />
        <mesh
          name="ModA12"
          geometry={nodes.ModA12.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA12.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA12.morphTargetInfluences}
        />
        <mesh
          name="ModA13"
          geometry={nodes.ModA13.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA13.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA13.morphTargetInfluences}
        />
        <mesh
          name="ModA14"
          geometry={nodes.ModA14.geometry}
          material={materials.SVGMat}
          morphTargetDictionary={nodes.ModA14.morphTargetDictionary}
          morphTargetInfluences={nodes.ModA14.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/neu4.glb");

