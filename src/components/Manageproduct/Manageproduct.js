import React, { useEffect, useState } from 'react';
import Allproduct from '../Allproduct/Allproduct';

const Manageproduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://morning-reef-31181.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="row">
                {
                    products.map(product => <Allproduct product={product}></Allproduct>)
                }
            </div>
        </div>
    );
};

export default Manageproduct;