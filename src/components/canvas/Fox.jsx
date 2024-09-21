import React, { useRef, Suspense, useEffect, useState } from 'react';
import { useGLTF, useAnimations, OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';

// Fox Component
const Fox = ({ isMobile }) => {
    const group = useRef();
    const { scene, animations } = useGLTF('./fox/fox.glb'); // Load the GLTF model
    const { actions } = useAnimations(animations, group); // Access the animations

    useEffect(() => {
        // Play the walking animation
        if (actions && actions['hit']) {
            actions['hit'].play();
        }
      }, [actions]);

  return (
    <group ref={group}>
        <primitive
            object={scene}
            scale={isMobile ? 0.7 : 0.75}
            position={isMobile ? [0, -1, -2.2] : [0, 0, -1.5]}
            rotation={[0, 0.6, 0]}      
        />
    </group>

  );
};

// FoxCanvas Component
const FoxCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 10], fov: 75, near: 0.8, far: 1000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={1.0} />
      <directionalLight intensity={2.5} position={[0,0,10]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Fox isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default FoxCanvas;