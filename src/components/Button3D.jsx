import React, { useRef } from 'react'

function Button3D({ position, onClick }) {
  const meshRef = useRef()

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      <boxGeometry args={[0.04, 0.04, 0.04]} />
      <meshStandardMaterial transparent={true} opacity={0} />
    </mesh>
  )
}

export default Button3D
