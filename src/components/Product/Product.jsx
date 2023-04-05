import React from 'react';

const Product = (props) => {
    // console.log(props.product);
    const { name, price, img, seller, ratings, quantity } = props.product;
    // const handleAddToCard = props.handleAddToCard;
    return (
        <div className="card bg-slate-300 shadow-2xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className='font-semibold text-xl'>Price: ${price}</h4>
                <div className='my-6'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} Star</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-block" style={{ backgroundColor: '#1C2B35' }}>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;