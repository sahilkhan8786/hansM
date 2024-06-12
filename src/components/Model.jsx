import React, { useRef } from 'react'
import scene from '../assets/scene_door-lock.glb'
import { useGLTF } from '@react-three/drei';
export default function Model({ setText, setPosition, ...props }) {
    function handlePointerPosition(e) {

        switch (e.object.name) {
            case 'scanner':
                setText("Scanner voor pasjes en bandjes");
                break;
            case 'code_lock':
                setText("Code slot");
                break;
            case 'handle':
                setText("Vingerafdruk scanner");
                break;
            case 'usb_port':
                setText("USB-poort voor noodstroom");
                break;
            case 'port2':
                setText("Sleutelgat");
                break;

        }
    }
    function handlePointerDown(e) {

        switch (e.object.name) {
            case 'scanner':
                setText("Scanner voor pasjes en bandjes");
                break;
            case 'code_lock':
                setText("Code slot");
                break;
            case 'handle':
                setText("Vingerafdruk scanner");
                break;
            case 'usb_port':
                setText("USB-poort voor noodstroom");
                break;
            case 'port2':
                setText("Sleutelgat");
                break;

        }


        console.log(e.object.name)
    }

    const ref = useRef();
    const { nodes, materials } = useGLTF(scene);

    // const modelPosti


    return (
        <group {...props} dispose={null} ref={ref}>
            <group position={[0, -1.686, 0]} scale={17.295}>

                <group scale={0.001}>
                    <group position={[-5.061, -29.495, -45.375]}>
                        {/* TOP BLUE LIGHT */}
                        <mesh
                            geometry={nodes.Door_lock_2.geometry}
                            material={materials['Emissive White #2']}
                            name='scanner'
                            onPointerEnter={handlePointerPosition}
                            onPointerDown={handlePointerDown}
                        />
                        {/* HANDLE */}
                        <mesh
                            geometry={nodes.Door_lock_3.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}
                            name='handle'
                            onPointerEnter={handlePointerPosition}
                            onPointerDown={handlePointerDown}
                        />
                        {/* TOP BOTTOM MIDDLE HANDLES */}
                        <mesh
                            geometry={nodes.Door_lock_4.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}

                            onPointerEnter={handlePointerPosition}
                            onPointerDown={handlePointerDown}
                        />
                        {/* BACKSIDE */}
                        <mesh
                            geometry={nodes.Door_lock_5.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}
                            onPointerEnter={handlePointerPosition}
                            onPointerDown={handlePointerDown}
                        />
                        <mesh
                            geometry={nodes.Door_lock_6.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}
                            name='handle'
                            onPointerEnter={handlePointerPosition}
                            onPointerDown={handlePointerDown}
                        />
                        {/* HANDLE BLUE LIGHT */}
                        <mesh
                            geometry={nodes.Door_lock_7.geometry}
                            material={materials['Emissive White #2']}
                            name='handle'
                            onPointerEnter={handlePointerPosition}
                            onPointerDown={handlePointerDown}
                        />


                        {/* BUTTONS AND LOGO */}
                        <mesh
                            geometry={nodes.Door_lock_8.geometry}
                            material={materials['Clear Shiny Plastic Black #1']}
                            name='code_lock'
                            onPointerEnter={handlePointerPosition}
                            onPointerDown={handlePointerDown}
                        />
                        <mesh
                            geometry={nodes.Door_lock_8.geometry}
                            material={materials['Clear Shiny Plastic Black #1']}
                            name='code_lock'
                            onPointerEnter={handlePointerPosition}
                            onPointerDown={handlePointerDown}
                        />
                        <mesh
                            geometry={nodes.Door_lock_8.geometry}
                            material={materials['Clear Shiny Plastic Black #1']}
                            name='code_lock'
                            onPointerEnter={handlePointerPosition}
                            onPointerDown={handlePointerDown}
                        />
                        <mesh
                            geometry={nodes.Door_lock_9.geometry}
                            material={materials['Anodized Aluminum Rough Black #6']}
                            name='usb_port'
                            onPointerEnter={handlePointerPosition}
                            onPointerDown={handlePointerDown}
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