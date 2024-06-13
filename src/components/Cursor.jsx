import React, { useEffect, useState } from 'react'

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <span className='size-6 rounded-full bg-red-400 absolute z-40 border-primary bg-white/50 border-2'
            style={{ top: `${position.y - 20}px`, left: `${position.x - 20}px`, }}
        ></span>
    )
}
