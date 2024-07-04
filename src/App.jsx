import './App.css'
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function GreenBox() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <boxGeometry />
      <meshStandardMaterial color="lime" />
    </mesh>
  )
}


function RackModel() {
  const { scene, animations, materials } = useGLTF('tf2.glb')
  const mixerRef = useRef()

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
      console.log('Material:', material)
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

  return <primitive object={scene} rotation={[0, 8.7, 0]} position={[7.5, -1.4, -1.25]} />
}

function Rack2Model() {
  const { scene } = useGLTF('ibm.glb')
  return <primitive object={scene} rotation={[0, -Math.PI / 2.6, 0]} position={[200, -50, 0] } />
}


function YellowBox() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={[-10, 0, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}

function DeskModel() {
  const { scene, materials } = useGLTF('desk.glb')

  useEffect(() => {
    // Check and modify the "screens" material if it exists
    const screensMaterial = materials['screens']
    if (screensMaterial) {
      screensMaterial.emissive = new THREE.Color(0x00ff00) // Make emissive green
      screensMaterial.emissiveIntensity = 0.5
    }
  }, [materials])

  return <primitive object={scene} position={[-15, -110, 350]} />
}

// snap
function CameraController() {
  const { camera } = useThree()
  const [targetRotation, setTargetRotation] = useState(0)
  const lerpSpeed = 0.03

  useEffect(() => {
    // camera.rotation.x = Math.PI / 8 // 45 degrees down

    const handleScroll = (event) => {
      setTargetRotation((prevRotation) => {
        const step = Math.PI / 2 // 90 degrees in radians
        if (event.deltaY > 0) {
          return prevRotation - step
        } else {
          return prevRotation + step
        }
      })
    }

    window.addEventListener('wheel', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  useFrame(() => {
    // Interpolate towards the target rotation for smoothness
    camera.rotation.y += (targetRotation - camera.rotation.y) * lerpSpeed
  })

  return null
}

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 45 }}>
      <directionalLight />
      <ambientLight />
      <GreenBox />
      <RackModel />
      <Rack2Model />
      <YellowBox />
      <DeskModel />
      <CameraController />
    </Canvas>
  )
}

export default App
