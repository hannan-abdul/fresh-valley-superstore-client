import React from 'react';

const Allproduct = (props) => {
    const {name, weight, price, _id} = props.product;

    const deleteProduct = id =>{
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('product deleted')
        })
    }
    return (
        <div className="col-md-4">
            <h3>{name}</h3>
            <p>{weight}</p>
            <p>{price}</p>
            <button onClick={()=> deleteProduct(_id)}>Delete</button>
        </div>
    );
};

export default Allproduct;