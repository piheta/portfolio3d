import React, { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function ResearchTableModel({ onClick }) {
  const { scene, materials } = useGLTF('research.glb');
  const shadowTexture = useTexture('shadow.png');

  useEffect(() => {
    materials['Tex_0010_11.dds'].color = new THREE.Color(0.3, 0.3, 0.27)
  }, [scene]);

  return (
    <>
      <primitive
        object={scene}
        rotation={[0, 2.1, 0]}
        position={[-2.8, -1.2, 1.6]}
        onClick={onClick}
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-3.3, -1.4, 1.8]}>
        <circleGeometry args={[1.3, 32]} />
        <meshBasicMaterial map={shadowTexture} opacity={0.9} transparent={true} />
      </mesh>
    </>
  );
}

export default ResearchTableModel;
