import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function DeskModel({ onClick, pcOn }) {
  const { scene, materials } = useGLTF('desk_mp1.glb')
  const shadowTexture = useTexture('shadow.png')

  useEffect(() => {
    materials['16_-_Default.002'].emissiveIntensity = 1.18

    if (pcOn) {
      materials['PI_Screen'].emissive = new THREE.Color(0, 1, 0)
      materials['PI_Screen'].emissiveIntensity = 4.9
      materials['PI_Screen'].color = new THREE.Color(0.1410743147134781, 1, 0.19989874958992004)
      materials['PI_PC_A.002'].emissiveIntensity = 1
    } else {
      materials['PI_Screen'].emissive = new THREE.Color(0.01, 0.01, 0.01)
      materials['PI_Screen'].emissiveIntensity = 1
      materials['PI_Screen'].color = new THREE.Color(0.05, 0.05, 0.05)
      materials['PI_PC_A.002'].emissiveIntensity = 0
    }

    Object.values(materials).forEach(material => {
      if (material) {
        material.roughness = 0.4;
        // material.metalness = 1.5;

      }
    });
  }, [materials, pcOn]) 

  return (
    <>
      <primitive object={scene} position={[0, -1, -3.5]} onClick={onClick} />
      <spotLight
        position={[-0.28, -0.13, -3.70]}
        intensity={0.1}
        color="#fff8d6"
        angle={1.8}
        penumbra={0.5}
        castShadow={true}
      />
      {/* <pointLight intensity={1} /> */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, -3.5]}>
        <circleGeometry args={[1.6, 32]} />
        <meshBasicMaterial map={shadowTexture} opacity={0.9} transparent={true} />
      </mesh>
    </>
  )
}

export default DeskModel
