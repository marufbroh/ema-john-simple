import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import OrderSummary from '../Order-Summary/OrderSummary';
import Product from '../Product/Product';
import { Link, useLoaderData } from 'react-router-dom';

const Order = () => {
    const [products, setProducts] = useState([]);
    // Etar man kivabe change holo unclear
    // console.log(products)
    const [cart, setCart] = useState([]);
    const { totalProducts } = useLoaderData();
    // console.log(totalProducts);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const pageNumber = [...Array(totalPages).keys()];
    console.log(pageNumber);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                // console.log({data})
                setProducts(data)
            })
    }, []);

    useEffect(() => {
        // console.log(products);
        const storedCart = getShoppingCart()
        const savedCart = [];
        for (const id in storedCart) {
            const addedProducts = products.find(product => product._id === id)
            if (addedProducts) {
                const quantity = storedCart[id]
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts)
            }
        }
        setCart(savedCart)
    }, [products]);

    const handleAddToCard = (product) => {
        // console.log(product);
        // ager product er quantity thaika jai
        // console.log(product);
        // let newCart = [...cart, product]
        let newCart = [];
        const exists = cart.find(pd => pd._id === product._id);
        if (exists) {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, exists]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        };


        setCart(newCart)
        // console.log(product._id);
        addToDb(product._id)
    };

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between'>

            <div className='lg:basis-4/5 lg:m-24'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                    {
                        products.slice(0, 12).map((product) => <Product product={product} key={product._id} handleAddToCard={handleAddToCard} />)
                    }
                </div>

                {/* pagination */}
                <div className='flex justify-center gap-4 my-12'>
                    {
                        pageNumber.map(number => <button className='btn' key={number}>{number + 1}</button>)
                    }
                </div>

            </div>


            <div className='lg:basis-1/5 lg:h-screen bg-slate-700 text-white sticky top-0'>
                <OrderSummary cart={cart} handleClearCart={handleClearCart}><Link to="/order-review"><button className='btn btn-warning'>Review Order<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                </button></Link></OrderSummary>
            </div>
        </div>
    );
};

export default Order;