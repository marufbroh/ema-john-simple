import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Order = () => {
    const [products, useProducts] = useState([]);
    useEffect(() => {
        fetch('/public/products.json')
            .then(res => res.json())
            .then(data => useProducts(data))
    }, [])
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between lg:mx-12 gap-12'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:basis-4/5 lg:my-24'>
                {
                    products.map((product) => <Product product={product} key={product.id} />)
                }
            </div>
            <div className='lg:basis-1/5'>
                
            </div>
        </div>
    );
};

export default Order;