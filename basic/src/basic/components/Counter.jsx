import React, {useState} from 'react';
import '../../App.css'

export default function Counter({total,handleClick}) {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div className="container">
            <div className="counter">
                <span className="number">{count}/ {total}</span>
                <button className="button"
                        onClick={()=>{
                            increment();
                            handleClick();
                        } }
                >Add +</button>
            </div>
        </div>
    );
}
