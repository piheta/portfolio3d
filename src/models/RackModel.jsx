import React, { useRef, useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"

function RackModel({ onClick }) {
  const { scene, animations, materials } = useGLTF('spytech.glb')
  const mixerRef = useRef()
  const shadowTexture = useTexture('shadow.png')  // Load the shadow texture

  useEffect(() => {
    if (animations && animations.length) {
      const mixer = new THREE.AnimationMixer(scene)
      animations.forEach((clip) => {
        mixer.clipAction(clip).play()
      })
      mixerRef.current = mixer
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction()
      }
    }
  }, [scene, animations])

  useEffect(() => {
    // Check and adjust material properties
    const material = materials['Server_1']
    if (material) {
      // Ensure textures use correct encoding
      if (material.map) {
        material.map.encoding = THREE.sRGBEncoding
        material.map.needsUpdate = true
      }
      if (material.emissiveMap) {
        material.emissiveMap.encoding = THREE.sRGBEncoding
        material.emissiveMap.needsUpdate = true
      }
      // Ensure material properties are set correctly
      material.color = new THREE.Color(0xffffff)
      material.roughness = 0.4
      material.metalness = 0.5
      material.emissive = new THREE.Color(0x000000)
      material.needsUpdate = true
    }
  }, [materials])

  useFrame((state, delta) => {
    mixerRef.current?.update(delta)
  })

  return (
    <>
      <primitive
        object={scene}
        rotation={[0, Math.PI / 1.4, 0]}
        position={[6.4, -1.25, -0.5]}
        onClick={onClick}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[3.25, -1.25, 2]}>
        <circleGeometry args={[1.4, 32]} />
        <meshBasicMaterial map={shadowTexture} opacity={0.9} transparent={true} />
      </mesh>
    </>
  )
}

export default RackModel
