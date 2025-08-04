import React, {useEffect, useState} from 'react';

export default function Products() {
    const [products, setProducts] = useState([])
    const [checked, setChecked] = useState(false);
    const handleChange = () => {setChecked(prev => !prev)}
    useEffect(() => {
        fetch(`data/${checked ? 'sale_': ''}products.json`)
            .then(res => res.json())
            .then(data => {
                console.log('🔥데이터 확인했어요')
                setProducts(data)
            })


        return () => {
            console.log('🧹 데이터 청소 완료')
        }
    }, [checked]);

    return (
        <div>
            <input id="checkbox" type="checkbox" onChange={handleChange}/>
            <label htmlFor="checkbox">세일목록만 찾아보기</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}
