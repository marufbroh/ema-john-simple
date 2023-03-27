import React from 'react';
import Login from '../Body/Login';
import ManageInventory from '../Body/ManageInventory';
import Order from '../Body/Order';
import OrderReview from '../Body/OrderReview';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='flex justify-between py-4 lg:px-32 items-center' style={{ backgroundColor: '#1C2B35' }}>
            <img src={logo} alt="" />
            <div className='text-white flex gap-6'>
                <a href='/order'>Order</a>
                <a href='/order-review'>Order Review</a>
                <a href='/manage-inventory'>Manage Inventory</a>
                <a href='/login'>Login</a>
            </div>

        </nav>
    );
};

export default Header;