import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    console.log(props.product._id)
    const { imageURL, name, weight, price, _id } = props.product;

    return (
        <div className="col-md-4 col-lg-3 col-8 card product-container">
            <img src={imageURL} alt="pic" />
            <h3>{name}</h3>
            <p>{weight}</p>
            <div className="row justify-content-between bottom-card-fix">
                <h3 className="price-fix">${price}</h3>
                <button className="btn-custom"><Link className="link-fix" to={"/orders/" + _id}>Buy Now</Link></button>
            </div>
        </div>
    );
};

export default Product;