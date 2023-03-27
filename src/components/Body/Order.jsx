import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Order = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCard = (ppp) => {
        console.log(ppp)
    }
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:basis-4/5 lg:m-24'>
                {
                    products.map((product) => <Product product={product} key={product.id} handleAddToCard={handleAddToCard} />)
                }
            </div>
            <div className='lg:basis-1/5 h-screen bg-slate-700'>

            </div>
        </div>
    );
};

export default Order;