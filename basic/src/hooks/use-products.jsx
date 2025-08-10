import {useEffect, useState} from "react";

export default function useProducts({salesOnly}){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        setLoading(true);
        setError(undefined);
        fetch(`data/${salesOnly ? 'sale_': ''}products.json`)
            .then(res => res.json())
            .then(data => {
                console.log('🔥데이터 확인했어요')
                setProducts(data)
            }).catch(e => setError('에러가 발생했음!')).finally(setLoading(false))


        return () => {
            console.log('🧹 데이터 청소 완료')
        }
    }, [salesOnly]);
    return [loading, error, products]
}
