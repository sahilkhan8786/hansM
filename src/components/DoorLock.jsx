import { Html, OrbitControls } from '@react-three/drei';
import React, { lazy, Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber';
const Model = lazy(() => import('./Model'))
export default function DoorLock({ setText }) {
    const [scale, setScale] = useState([2.5, 2.5, 2.5]);


    useEffect(() => {
        const updateScale = () => {
            if (window.innerWidth > 768) {
                setScale([2.5, 2.5, 2.5]);
            } else {
                setScale([1.5, 1.5, 1.5]);  // Adjust the scale for smaller screens if needed
            }
        };

        updateScale(); // Set the initial scale
        window.addEventListener('resize', updateScale);

        return () => {
            window.removeEventListener('resize', updateScale);
        };
    }, []);

    return (
        <Canvas className="w-full h-full flex items-center justify-center z-10 mt-8 sm:mt-0">

            <Suspense fallback={<Html><span>Loading Model...</span></Html>}>

                {/* Directional light */}
                <directionalLight intensity={2.5} position={[0, 5, 5]} />
                <Model scale={scale} setText={setText} />
            </Suspense>
            <OrbitControls enablePan={false} />
        </Canvas >

    )
}

