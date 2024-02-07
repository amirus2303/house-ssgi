import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import useGetTexture from "./hooks/useGetTexture";
import configTexture from "../utils/configuretextture";
import { useControls } from "leva";

const Building = (props) => {
  const { nodes } = useGLTF("./building/building.glb");

  const { envmapIntensity } = useControls("Environment", {
    envmapIntensity: {
      value: 0.3,
      min: 0,
      max: 30,
      step: 0.001,
    },
  });

  const {
    background,
    bois,
    cadres,
    fenetres,
    luminaire,
    murs,
    poutres,
    rideaux,
    sofa,
    sol,
    table,
    tapis,
    toit,
  } = useGetTexture();

  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const meshRef4 = useRef();
  const meshRef5 = useRef();
  const meshRef6 = useRef();
  const meshRef7 = useRef();
  const meshRef8 = useRef();
  const meshRef9 = useRef();
  const meshRef10 = useRef();
  const meshRef11 = useRef();
  const meshRef12 = useRef();
  const meshRef13 = useRef();
  const meshRef14 = useRef();
  const meshRef15 = useRef();

  useEffect(() => {
    configTexture(meshRef1);
    configTexture(meshRef2);
    configTexture(meshRef3);
    configTexture(meshRef4);
    configTexture(meshRef5);
    configTexture(meshRef6);
    configTexture(meshRef7);
    configTexture(meshRef8);
    configTexture(meshRef9);
    configTexture(meshRef10);
    configTexture(meshRef11);
    configTexture(meshRef13);
    configTexture(meshRef14);
    configTexture(meshRef15);
  }, []);
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="mur"
          castShadow
          receiveShadow
          geometry={nodes.mur.geometry}
          material={nodes.mur.material}
          position={[-0.064, 0, -0.108]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef1}
            {...murs}
          />
        </mesh>
        <mesh
          name="fenetres"
          castShadow
          receiveShadow
          geometry={nodes.fenetres.geometry}
          material={nodes.fenetres.material}
          position={[-2.564, 1.5, -2.017]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef2}
            {...fenetres}
          />
        </mesh>
        <mesh
          name="sofa"
          castShadow
          receiveShadow
          geometry={nodes.sofa.geometry}
          material={nodes.sofa.material}
          position={[-1.944, 0.582, 1.802]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef3}
            {...sofa}
          />
        </mesh>
        <mesh
          name="toit"
          castShadow
          receiveShadow
          geometry={nodes.toit.geometry}
          material={nodes.toit.material}
          position={[0.752, 3.633, 1.646]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef4}
            {...toit}
          />
        </mesh>
        <mesh
          name="tapis"
          castShadow
          receiveShadow
          geometry={nodes.tapis.geometry}
          material={nodes.tapis.material}
          position={[-0.219, 0.003, 1.896]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef5}
            {...tapis}
          />
        </mesh>
        <mesh
          name="cadre"
          castShadow
          receiveShadow
          geometry={nodes.cadre.geometry}
          material={nodes.cadre.material}
          position={[2.907, 0.018, -0.792]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef6}
            {...cadres}
          />
        </mesh>
        <mesh
          name="rideau"
          castShadow
          receiveShadow
          geometry={nodes.rideau.geometry}
          material={nodes.rideau.material}
          position={[4.04, 1.401, 5.108]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef7}
            {...rideaux}
          />
        </mesh>
        <mesh
          name="table"
          castShadow
          receiveShadow
          geometry={nodes.table.geometry}
          material={nodes.table.material}
          position={[-0.22, 0.323, 1.822]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef8}
            {...table}
          />
        </mesh>
        <mesh
          name="sol"
          castShadow
          receiveShadow
          geometry={nodes.sol.geometry}
          material={nodes.sol.material}
          position={[-0.064, 0.153, -0.234]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef9}
            {...sol}
          />
        </mesh>
        <mesh
          name="bois"
          castShadow
          receiveShadow
          geometry={nodes.bois.geometry}
          material={nodes.bois.material}
          position={[0.983, 0.25, -1.109]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef10}
            {...bois}
          />
        </mesh>
        <mesh
          name="luminaire"
          castShadow
          receiveShadow
          geometry={nodes.luminaire.geometry}
          material={nodes.luminaire.material}
          position={[-2.363, 1.309, -0.871]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef11}
            {...luminaire}
          />
        </mesh>
        <mesh
          name="lampe_plafond"
          castShadow
          receiveShadow
          geometry={nodes.lampe_plafond.geometry}
          material={nodes.lampe_plafond.material}
          position={[-2.363, 1.309, -0.871]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef12}
            {...luminaire}
          />
        </mesh>
        <mesh
          name="lampe_salon"
          castShadow
          receiveShadow
          geometry={nodes.lampe_salon.geometry}
          material={nodes.lampe_salon.material}
          position={[-2.363, 1.309, -0.871]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef13}
            {...luminaire}
          />
        </mesh>
        <mesh
          name="poutre"
          castShadow
          receiveShadow
          geometry={nodes.poutre.geometry}
          material={nodes.poutre.material}
          position={[-2.384, 3.484, 1.646]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef14}
            {...poutres}
          />
        </mesh>
        <mesh
          name="background"
          geometry={nodes.background.geometry}
          material={nodes.background.material}
          position={[-9.389, 0, -3.353]}
        >
          <meshPhysicalMaterial
            envMapIntensity={envmapIntensity}
            ref={meshRef15}
            {...background}
          />
        </mesh>
      </group>
    </group>
  );
};

export default Building;
