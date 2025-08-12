import React from 'react';
import {useState} from "react";
import '../App.css'
export default function Counter({total,setCount}) {
    const [number,setNumber] = useState(0);
    return (
        <div className="counter">
            <p className="number">{number} <span>{total}</span></p>
            <button className="button" onClick={() => {
                setNumber((prev)=> prev + 1)
                setCount((prev) => prev + 1)
            }}>ADD +</button>
        </div>
    );
}
