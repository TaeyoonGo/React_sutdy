import React, {useEffect, useState} from 'react';
import useProducts from "../../hooks/use-products.jsx";

export default function Products() {
    const [checked , setChecked] = useState(false)
    const [loading,error,products] = useProducts({salesOnly : checked})
    const handleChange = () => {
        setChecked(show => !show)
    }

    if(loading) return <p>Loading...</p>

   if(error) return <p>{error}</p>

    return (
        <div>
            <input type="checkbox" id="checkbox" onChange={handleChange} />
            <label htmlFor="checkbox">Hot Sale 🔥</label>
            <ul>
                {products.map((product,index)=> (
                <li key={index}>
                    <article>
                        <h3>{product.name}</h3>
                        <h3>{product.price}</h3>
                    </article>
                </li>
                ))}

            </ul>
        </div>
    );
}
