import React, { useRef } from 'react'
import scene from '../assets/scene_door-lock.glb'
import { Text, useGLTF } from '@react-three/drei';
export default function Model({ ...props }) {
    const ref = useRef();
    const { nodes, materials } = useGLTF(scene)
    return (
        <group {...props} dispose={null} ref={ref}>
            <group position={[0, -1.686, 0]} scale={17.295}>

                <group scale={0.001}>
                    <group position={[-5.061, -29.495, -45.375]}>
                        {/* TOP BLUE LIGHT */}
                        <mesh
                            geometry={nodes.Door_lock_2.geometry}
                            material={materials['Emissive White #2']}
                        />
                        {/* HANDLE */}
                        <mesh
                            geometry={nodes.Door_lock_3.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}
                        />
                        {/* TOP BOTTOM MIDDLE HANDLES */}
                        <mesh
                            geometry={nodes.Door_lock_4.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}
                        />
                        {/* BACKSIDE */}
                        <mesh
                            geometry={nodes.Door_lock_5.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}
                        />
                        <mesh
                            geometry={nodes.Door_lock_6.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}
                        />
                        {/* HANDLE BLUE LIGHT */}
                        <mesh
                            geometry={nodes.Door_lock_7.geometry}
                            material={materials['Emissive White #2']}
                        />

                        Handle Blue Light

                        {/* BUTTONS AND LOGO */}
                        <mesh
                            geometry={nodes.Door_lock_8.geometry}
                            material={materials['Clear Shiny Plastic Black #1']}
                        />
                        <mesh
                            geometry={nodes.Door_lock_9.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}
                        />
                        <mesh
                            geometry={nodes.Door_lock_10.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}
                        />
                    </group>
                </group>
            </group>
        </group >
    )
}
useGLTF.preload(scene)