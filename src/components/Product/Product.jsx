import React from 'react';

const Product = (props) => {
    // console.log(props.product);
    const { name, price, img, seller, ratings } = props.product
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className='font-semibold text-xl'>Price: ${price}</h4>
                <div className='my-6'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} Star</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;