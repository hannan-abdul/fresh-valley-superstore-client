import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props.product._id)
    const { imageURL, name, weight, price, _id } = props.product;
    
    return (
        <div className="col-md-4">
            <img style={{ height: '200px' }} src={imageURL} alt="pic" />
            <h3>{name}</h3>
            <button><Link to={"/orders/"+_id}>Buy Now</Link></button>
            <p>{weight}</p>
            <p>${price}</p>
        </div>
    );
};

export default Product;