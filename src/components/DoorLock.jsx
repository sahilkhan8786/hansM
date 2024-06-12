import { Html, OrbitControls, Text } from '@react-three/drei';
import React, { lazy, Suspense } from 'react'

import { Canvas } from '@react-three/fiber';
const Model = lazy(() => import('./Model'))
export default function DoorLock() {


    return (
        <Canvas className="w-full h-full flex items-center justify-center bg-red-300">

            <Suspense fallback={<Html><span>Loading Model...</span></Html>}>

                {/* Directional light */}
                <directionalLight intensity={2.5} position={[0, 5, 5]} />
                <Model scale={[2.5, 2.5, 2.5]} />
                <Html position={[1, 1, 1]}>
                    <span className='bg-white '>
                        Hello&nbsp;world
                    </span>
                </Html>
            </Suspense>
            <OrbitControls />
        </Canvas>

    )
}

