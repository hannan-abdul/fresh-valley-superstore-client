import React from 'react';

const Allproduct = (props) => {
    const { name, weight, price, _id } = props.product;

    const deleteProduct = id => {
        console.log(id)
        fetch(`https://morning-reef-31181.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('product deleted')
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h4>{name}</h4>
                </div>
                <div className="col-md-3">
                    <h5>{weight}</h5>
                </div>
                <div className="col-md-3">
                    <h5>{price}</h5>
                </div>
                <div className="col-md-3">
                    <button onClick={() => deleteProduct(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Allproduct;