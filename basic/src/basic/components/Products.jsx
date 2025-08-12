import React, {useEffect, useState} from 'react';

export default function Products() {
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState([])
    const [checked , setChecked] = useState(false)
    const handleChange = () => {
        setChecked(show => !show)
    }
    useEffect(() => {
        fetch(`/data/${checked ? 'sale_' : ''}products.json`)
            .then(res => res.json())
            .then(data => {
                console.log('데이터가 한번 들어왔어요🔥')
                setProducts(data)})
        return () => {console.log('데이터가 청소되었습니다🧹')}
    }, [checked]);

    return (
        <div>
            <input type="checkbox" id="checkbox" onChange={handleChange} />
            <label htmlFor="checkbox">Hot Sale 🔥</label>
            <ul>
                {
                    products.map((product,index)=> (
                        <li key={index}>
                            <article>
                                <h3>{product.name}</h3>
                                <h3>{product.price}</h3>
                            </article>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
        </div>
    );
}
