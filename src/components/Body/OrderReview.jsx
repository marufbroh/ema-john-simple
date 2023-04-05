import React from 'react';
import OrderSummary from '../Order-Summary/OrderSummary';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';


const OrderReview = () => {
    const cart = useLoaderData();
    // console.log(cart);
    // handleClearCart={handleClearCart}
    return (
        <div className='flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center container mx-auto lg:py-28'>
            <div className='flex flex-col gap-6 lg:basis-3/5'>
                {
                    cart.map(item => <ReviewItems key={item.id} item={item} />)
                }
            </div>
            <div className='lg:basis-2/5 bg-slate-700 text-white rounded-xl'>
                <OrderSummary cart={cart} />

            </div>
        </div>
    );
};

export default OrderReview;