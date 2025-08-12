import React, {useState} from 'react';
import './AppXY.css'
export default function AppXY() {
    const [position,setPosition] = useState({x:0,y:0,z:0})
    const handleMove = ({clientX,clientY}) => {
        // setPosition({x:clientX,y:clientY})
        // 만약 수평으로 이동하게 하려면?
        setPosition((prev) => ({...prev, x:clientX}))
    }
    return (
        <div className="container" onMouseMove={handleMove}>
            <div className="pointer" style={{transform: `translate(${position.x}px,${position.y}px)`}}></div>
        </div>
    );
}
