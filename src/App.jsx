import './App.css'
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { Suspense, useEffect, useState } from 'react'
import DeskModel from './models/DeskModel'
import RackModel from './models/RackModel'
import CameraController from './CameraController'
import Button3D from './components/Button3D'
import Header from './components/header/Header'
import Dialog from './components/dialog/Dialog'
import Footer from './components/footer/Footer'
import ResearchTableModel from './models/ResearchTableModel'
import LoadingScreen from './components/loading/LoadingScreen'

function App() {
  const [cameraTarget, setCameraTarget] = useState(null)
  const [cameraRotation, setCameraRotation] = useState(null)
  const [pcOn, setPcOn] = useState(true)
  const [showDialog, setShowDialog] = useState(false)
  const [showFooter, setShowFooter] = useState(true)
  const [mode, setMode] = useState(0)

  const handleDeskClick = () => {
    if (mode === 1) {
      return
    }
    setMode(1)
    
    setCameraTarget({ x: -0.3, y: 0.1, z: -2.5 })
    setCameraRotation({ x: 0, y: -0.5, z: 0 })
  }
  const handleButtonClick = () => {
    setPcOn(!pcOn)
  }

  const handleRackClick = () => {
    if (mode === 2) {
      return
    }
    setMode(2)

    setCameraTarget({ x: 2, y: 1, z: 0 })
    setCameraRotation({ x: 0.5, y: -2.85, z: 0.18 })
  }

  const handleResearchTableClick = () => {
    if (mode === 3) {
      return
    }
    setMode(3)
    
    setCameraTarget({ x: -1.5, y: 0.4, z: 0.8 })
    setCameraRotation({ x: 0.6, y: -4.0879, z: -0.5 })
  }

  useEffect(() => { setShowDialog(mode === 1 && pcOn ? true : false); }, [pcOn]);

  useEffect(() => {
    if (mode === 0) {
      setShowDialog(false);
      setShowFooter(true);
      window.history.pushState({}, '', '/');
    } else {
      setShowFooter(false);
      let path = '';
      switch(mode) {
        case 1:
          path = 'programming';
          break;
        case 2:
          path = 'cloud';
          break;
        case 3:
          path = 'projects';
          break;
        default:
          path = '';
      }
      window.history.pushState({}, '', `/${path}`);
    }
  }, [mode]);
  

  return (
    <>
      <Header />
      {showDialog && <Dialog mode={mode} />}
      <Canvas camera={{ position: [0, 0, 0], fov: 60 }}>
        <directionalLight intensity={0.4} />
        <ambientLight intensity={0.35} />
        <EffectComposer disableNormalPass>
          <Bloom mipmapBlur luminanceThreshold={1} levels={8} intensity={0.2 * 4} />
          <ToneMapping />
        </EffectComposer>
        <Suspense fallback={<LoadingScreen />}>
          <DeskModel onClick={handleDeskClick} pcOn={pcOn} />
          <RackModel onClick={handleRackClick} />
          <ResearchTableModel onClick={handleResearchTableClick}/>
          <Button3D position={[0.49, -0.025, -3.5]} onClick={handleButtonClick}/>
          <CameraController 
            targetPosition={cameraTarget} 
            targetRotation={cameraRotation} 
            onAnimationComplete={setMode}
            mode={mode}
            showDialog={setShowDialog}
          />
        </Suspense>
      </Canvas>
      {showFooter && <Footer />}
    </>
  )
}

export default App
