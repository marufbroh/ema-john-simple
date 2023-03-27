import React from 'react';
import Login from '../Navbar/Login';
import ManageInventory from '../Navbar/ManageInventory';
import Order from '../Navbar/Order';
import OrderReview from '../Navbar/OrderReview';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='flex justify-between py-4 lg:px-32 items-center' style={{backgroundColor: '#1C2B35'}}>
            <img src={logo} alt="" />
            <div className='text-white flex gap-6'>
                <Order />
                <OrderReview />
                <ManageInventory />
                <Login />
            </div>

        </nav>
    );
};

export default Header;