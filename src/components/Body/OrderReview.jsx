import React, { useState } from 'react';
import OrderSummary from '../Order-Summary/OrderSummary';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const OrderReview = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    // console.log(cart);
    // handleClearCart={handleClearCart}

    const handleRemoveFromCart = (id) => {
        const remainingCarts = cart.filter(product => product.id !== id)
        setCart(remainingCarts)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='flex flex-col gap-6 lg:flex-row lg:justify-between container lg:mx-auto lg:py-28'>
            <div className='flex flex-col gap-6 lg:basis-3/5'>
                {
                    cart.map(item => <ReviewItems key={item.id} item={item} handleRemoveFromCart={handleRemoveFromCart} />)
                }
            </div>
            <div className='lg:basis-2/5'>
                <div className='bg-slate-700 text-white lg:rounded-xl p-10'>
                    <OrderSummary cart={cart} handleClearCart={handleClearCart}><Link to="/checkout"><button className='btn btn-warning'>Proceed Checkout<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    </button></Link></OrderSummary>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;