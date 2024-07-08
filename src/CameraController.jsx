import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

function CameraController({ targetPosition, targetRotation, onAnimationComplete, mode, showDialog }) {
  const { camera } = useThree();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (targetPosition && targetRotation) {
      if (isAnimating) return;
      const timeline = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          onAnimationComplete(mode);
          showDialog(true)
        },
      });
      setIsAnimating(true);
      timeline
        .to(camera.position, {
          x: targetPosition.x,
          y: targetPosition.y,
          z: targetPosition.z,
          duration: 1,
          ease: 'power2.inOut',
        })
        .to(
          camera.rotation,
          {
            x: targetRotation.x,
            y: targetRotation.y,
            z: targetRotation.z,
            duration: 1,
            ease: 'power2.inOut',
          },
          mode === 2 ? 0 : 0.6 // if mode is 2, run the animation together, "0" does this
        );
    }
  }, [targetPosition, targetRotation, camera]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isAnimating || mode !== 0) return; // wait until animation is done before doing another, dont turn if in a mode
      const step = (2 * Math.PI) / 3; // 120 degrees in radians
      const newRotationY = camera.rotation.y + (event.deltaY > 0 ? -step : step);
      const clampedRotationY = Math.max(-4.18879, Math.min(0, newRotationY));

      setIsAnimating(true);
      gsap.to(camera.rotation, {
        y: clampedRotationY,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => setIsAnimating(false),
      });
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isAnimating, mode]);


  useEffect(() => {
    const handleBack = (event) => {
      if (event.button === 3) { // Mouse button 4 (typically the "back" button)
        if (isAnimating || mode === 0) return;
        setIsAnimating(true);
        showDialog(false)


        let resetRotation = 0;
        if(mode === 2) {
          resetRotation= 2 * -Math.PI / 3
        } else if(mode === 3){
          resetRotation=-4.18879
        } else {
          resetRotation=0
        }

        const timeline = gsap.timeline({
          onComplete: () => {
            setIsAnimating(false);
            onAnimationComplete(0);
          },
        });

        
        timeline.to(camera.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: 'power2.inOut',
        })
        .to(
          camera.rotation,
          {
            x: 0,
            y: resetRotation,
            z: 0,
            duration: 1,
            ease: 'power2.inOut',
          }, 0
        );
      }
    }

    window.addEventListener('mousedown', handleBack)

    return () => {
      window.removeEventListener('mousedown', handleBack)
    }
  }, [mode, isAnimating]);


  return null;
}

export default CameraController;
