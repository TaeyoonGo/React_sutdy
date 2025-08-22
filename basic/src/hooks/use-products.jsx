import {useEffect, useState} from "react";

export default function useProducts({salesOnly}){
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState([])
    const [products, setProducts] = useState([])


    useEffect(() => {
        setLoading(true)
        setError(undefined);
        fetch(`/data/${salesOnly ? 'sale_' : ''}products.json`)
            .then(res => res.json())
            .then(data => {
                console.log('데이터가 한번 들어왔어요🔥')
                setLoading(false);
                setProducts(data)})
            .catch(()=> setError('에러가 발생했음'))
            .finally(() => setLoading(false))
        return () => {console.log('데이터가 청소되었습니다🧹')}
    }, [salesOnly]);


    return [loading, error, products]
}
