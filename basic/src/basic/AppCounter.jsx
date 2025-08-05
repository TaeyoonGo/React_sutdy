import React, {useState} from 'react';
import Counter from "./components/Counter.jsx";

export default function AppCounter() {
    const [total, setTotal] = useState(0)
    const handleClick = () => {
        setTotal(prev => prev + 1)
    }
    return (
        <div className="container">
            <div className="banner">
            Total Count : {total} {total > 10 ? '🔥' : '❄️'}
            </div>
            <div>
                <Counter total={total} handleClick={handleClick} />
                <Counter total={total} handleClick={handleClick} />
            </div>
        </div>
    );
}
