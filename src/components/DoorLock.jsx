import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react'
import scene from '../assets/scene_door-lock.glb'
import { Canvas } from '@react-three/fiber';
export default function DoorLock() {
    const ref = useRef();
    const model = useGLTF(scene, true);

    return (
        <Canvas className="w-full h-full flex items-center justify-center bg-red-300">
            <pointLight intensity={2} position={[0, 0, 1]} />
            <ambientLight intensity={5} />
            <mesh>
                <primitive object={model.scene} ref={ref} />
            </mesh>
        </Canvas>

    )
}
