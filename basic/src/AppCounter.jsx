import React, {useState} from 'react';
import Counter from "./components/counter.jsx";

export default function AppCounter() {
    const [count,setCount] = useState(0)

    return (
        <div className="container">
            <div className="banner">
                Total Count : {count} {count > 10 ? '🔥' : '❄️'}
            </div>
            <Counter total={count} setCount={setCount}/>
            <Counter total={count} setCount={setCount}/>
        </div>
    );
    }
