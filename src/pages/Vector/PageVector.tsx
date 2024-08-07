import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls, Plane } from '@react-three/drei';
import * as THREE from 'three';

export const PageVector = () => {
  return (
    <div className="w-screen h-screen bg-slate-500">
      <Canvas
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        {/* 정면 모델파일 ? */}
        <Box
          castShadow
          scale={[2, 2, 2]}
          material={
            new THREE.MeshBasicMaterial({
              color: new THREE.Color('#f000'),
              side: THREE.DoubleSide,
            })
          }
        />

        {/* 타겟이 바라볼 구. */}
        {/* 바닥면 */}
        <Plane
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -2, 0]}
          castShadow
          scale={[100, 100, 1.1]}
          material={
            new THREE.MeshBasicMaterial({
              color: new THREE.Color('#8d8b8b'),
              side: THREE.DoubleSide,
              // wireframe: true,
            })
          }
        />
      </Canvas>
    </div>
  );
};
