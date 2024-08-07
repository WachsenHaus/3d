import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane } from '@react-three/drei';
import * as THREE from 'three';

export const PageVector = () => {
  return (
    <div className="w-screen h-screen bg-slate-500">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          stencil: false,
          depth: false,
          powerPreference: 'high-performance',
          premultipliedAlpha: false,
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false,
        }}
      >
        <directionalLight position={[0, 0, 5]} />
        <OrbitControls />
        {/*  */}
        <Plane
          rotation={[Math.PI / 4, 0, 0]}
          castShadow
          material={
            new THREE.MeshBasicMaterial({
              color: new THREE.Color('white'),
              side: THREE.DoubleSide,
            })
          }
        />
      </Canvas>
    </div>
  );
};
