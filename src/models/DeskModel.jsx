import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function DeskModel({ onClick, pcOn }) {
  const { scene, materials } = useGLTF('desk.glb')
  const shadowTexture = useTexture('shadow.png')

  useEffect(() => {
    if (pcOn) {
      materials['PI_Screen'].emissive = new THREE.Color(0, 1, 0)
      materials['PI_Screen'].emissiveIntensity = 32
      materials['PI_PC_A.002'].emissiveIntensity = 1
    } else {
      materials['PI_Screen'].emissive = new THREE.Color(0.01, 0.01, 0.01)
      materials['PI_Screen'].emissiveIntensity = 1
      materials['PI_Screen'].color = new THREE.Color(0.05, 0.05, 0.05)
      materials['PI_PC_A.002'].emissiveIntensity = 0
    }
  }, [materials, pcOn]) 

  return (
    <>
      <primitive object={scene} position={[0, -1, -3.5]} onClick={onClick} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, -3.5]}>
        <circleGeometry args={[1.6, 32]} />
        <meshBasicMaterial map={shadowTexture} opacity={0.9} transparent={true} />
      </mesh>
    </>
  )
}

export default DeskModel
