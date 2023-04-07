import React, { useState } from 'react';
import OrderSummary from '../Order-Summary/OrderSummary';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { removeFromDb } from '../../utilities/fakedb';


const OrderReview = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    console.log(cart);
    // handleClearCart={handleClearCart}

    const handleRemoveFromCart = (id) => {
        const remainingCarts = cart.filter(product => product.id !== id)
        setCart(remainingCarts)
        removeFromDb(id)
    }

    return (
        <div className='flex flex-col gap-6 lg:flex-row lg:justify-between container mx-auto lg:py-28'>
            <div className='flex flex-col gap-6 lg:basis-3/5'>
                {
                    cart.map(item => <ReviewItems key={item.id} item={item} handleRemoveFromCart={handleRemoveFromCart} />)
                }
            </div>
            <div className='lg:basis-2/5'>
                <div className='bg-slate-700 text-white rounded-xl p-10'>
                    <OrderSummary cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default OrderReview;