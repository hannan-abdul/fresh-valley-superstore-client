import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="col-md-4">
                <img style={{ height: '200px' }} src={product.imageURL} alt="pic" />
                <h3>{product.name}<button >Buy Now</button></h3>
            </div>
    );
};

export default Product;