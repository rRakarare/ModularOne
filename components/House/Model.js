import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from '@react-spring/three'

const map = [
  { name: "wand_außen_fl", visible:true, mat: {color: "#403c3c", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "wand_innen_fl", visible:true, mat: {color: "#736e6e", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "wand_wire", visible:true, mat: {color: "#363434", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "stairs", visible:true, mat: {color: "#868771", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "treppe_glas", visible:true, mat: {color: "#ffffff", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "treppe_geländer", visible:true, mat: {color: "#ffffff", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "door", visible:true, mat: {color: "#969696", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "og", visible:true, mat: {color: "#ffffff", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "og_fl", visible:true, mat: {color: "#ffffff", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "og_bottom_fl", visible:true, mat: {color: "#ffffff", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "dach_wire", visible:true, mat: {color: "#ffffff", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "dach_innen_fl", visible:true, mat: {color: "#ffffff", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "dach_außen_fl", visible:true, mat: {color: "#454141", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "geländer", visible:true, mat: {color: "#414141", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "geländer_glas", visible:true, mat: {color: "#4d5e76", opacity_default:0, opacity_inactive:1, opacity_active: 1} },
  { name: "säulen", visible:true, mat: {color: "#483e3e", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "window", visible:true, mat: {color: "#817c7c", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "window_glas", visible:true, mat: {color: "#4d5e76", roughness:.1, metallness:1, opacity_default:.5, opacity_inactive:1, opacity_active: 1} },
  { name: "door_wire", visible:true, mat: {color: "#413c3c", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
  { name: "eg", visible:true, mat: {color: "#ffffff", opacity_default:1, opacity_inactive:1, opacity_active: 1} },
];

export default function Model({focus}) {

  const group = useRef();
  const { nodes, materials } = useGLTF("/housev2.glb");


  const arr = Object.values(nodes).filter((item) => item.type == "Mesh").filter(item=>item.name != "geländer_glas").filter(item=>item.name != "wand_innen_fl");


  

  return (
    <group ref={group} dispose={null}>
      {arr.map((item,i) => <Obj focus={focus} key={i} item={item} /> )}
    </group>
  );
}

const Obj = ({item, focus}) => {

  const obj = map.find((elem) => elem.name == item.name);
  const mat = obj.mat

  const wire = focus!=null && !focus.includes(item.name)   ? true : false

  const springs = useSpring({
    opacity: focus!=null && focus.includes(item.name) ? mat.opacity_active : (focus == null ? mat.opacity_default : mat.opacity_inactive),
    color: focus!=null && focus.includes(item.name) ? "#2d2d2d" : (focus == null ? mat.color : "#d7d7d7")
  })


  return (
    <mesh visible={obj.visible} castShadow receiveShadow geometry={item.geometry} >
     <animated.meshPhysicalMaterial color={springs.color} roughness={mat.roughness} depthWrite={true} wireframe={wire} metallness={mat.metallness} transparent opacity={springs.opacity}/>
    </mesh>
  );
};

useGLTF.preload("/housev2.glb");
