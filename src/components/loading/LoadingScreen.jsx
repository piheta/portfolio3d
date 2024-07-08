import './loading.css'
import { Html, useProgress } from '@react-three/drei'
import Header from '../header/Header'

function LoadingScreen() {
  const { progress } = useProgress()

  return (
    <Html>
      <Header />
        <div className="loading">
            <div className="terminal glitch">
                <div className="scanline"></div>
                <div className="hydra">
                    <div className="hydra_rebooting">
                        <p>&lt; WEBSITE LOADING &gt;</p>
                        <p className="text--sm">PICHETA.DEV VER 2.1</p>
                        <p className="text--sm">PROGRESS: <span className="process-amount">{progress.toFixed(0)}</span>%</p>
                        <p className="loading-bar"></p>
                    </div>
                </div>
            </div>
        </div>
    </Html>
  )
}

export default LoadingScreen
