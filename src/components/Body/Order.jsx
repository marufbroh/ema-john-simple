import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import OrderSummary from '../Order-Summary/OrderSummary';
import Product from '../Product/Product';
import { Link, useLoaderData } from 'react-router-dom';

const Order = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const { totalProducts } = useLoaderData();

    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pageNumber = [...Array(totalPages).keys()];
    // console.log(pageNumber);

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log({data})
    //             setProducts(data)
    //         })
    // }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);

            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage]);

    useEffect(() => {
        // console.log(products);
        const storedCart = getShoppingCart()
        const ids = Object.keys(storedCart);

        fetch(`http://localhost:5000/productsByIds`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(cartProducts => {
                const savedCart = [];
                for (const id in storedCart) {
                    const addedProducts = cartProducts.find(product => product._id === id)
                    if (addedProducts) {
                        const quantity = storedCart[id]
                        addedProducts.quantity = quantity;
                        savedCart.push(addedProducts)
                    }
                }
                setCart(savedCart)
            })
    }, []);

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

    const options = [6, 12, 18, 24];
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }

    return (
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between'>

            <div className='lg:basis-4/5 lg:m-24'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                    {
                        products.map((product) => <Product product={product} key={product._id} handleAddToCard={handleAddToCard} />)
                    }
                </div>

                {/* pagination */}
                <div className='flex justify-center gap-4 my-12'>
                    {/* <p>current page: {currentPage}</p> */}
                    {
                        pageNumber.map(number => <button className={`btn ${currentPage === number ? 'bg-amber-600' : ''}`} key={number} onClick={() => setCurrentPage(number)}>{number + 1}</button>)
                    }
                    <select value={itemsPerPage} onChange={handleSelectChange}>
                        {options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
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