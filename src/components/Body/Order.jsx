import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import OrderSummary from '../Order-Summary/OrderSummary';
import Product from '../Product/Product';

const Order = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect( () => {
        const storedCart = getShoppingCart()
        console.log(storedCart)
    }, [])

    const handleAddToCard = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        // console.log(product.id);
        addToDb(product.id)

    }

    return (
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:basis-4/5 lg:m-24'>
                {
                    products.slice(0, 12).map((product) => <Product product={product} key={product.id} handleAddToCard={handleAddToCard} />)
                }
            </div>
            <div className='lg:basis-1/5 h-screen bg-slate-700 text-white sticky top-0'>
                <OrderSummary cart={cart} setCart={setCart} />

            </div>
        </div>
    );
};

export default Order;