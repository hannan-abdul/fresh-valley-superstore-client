import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';

const Order = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({})
    useEffect(()=>{
        fetch('https://morning-reef-31181.herokuapp.com/product/'+ productKey)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <Product product={product}></Product>
        </div>
    );
};

export default Order;