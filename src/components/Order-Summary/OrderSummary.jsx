import React from 'react';

const OrderSummary = ({ cart }) => {
    // console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        totalPrice = (totalPrice + product.price) * product.quantity
        totalShipping = (totalShipping + product.shipping)
        totalQuantity = (totalQuantity + product.quantity)
    }
    const taxTotal = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + taxTotal;
    return (
        <>
            <h2 className='font-bold text-3xl text-center my-6'>Order Summary</h2>
            <div className='ml-6 flex flex-col gap-4'>
                <p>Selected Items: {totalQuantity}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <p>Total Shipping Charge: ${totalShipping.toFixed(2)}</p>
                <p>Tax: ${taxTotal.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
            <div className='my-12 text-center'>
                <button className='btn btn-error mb-6'>Clear Cart <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                </button><br />
                <button className='btn btn-warning'>Review Order <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                </button>
            </div>
        </>
    );
};

export default OrderSummary;