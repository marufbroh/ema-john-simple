import React from 'react';
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between py-4 px-4 lg:px-32 items-center' style={{ backgroundColor: '#1C2B35' }}>
            <Link to={"/"}><img src={logo} alt="" /></Link>
            <div className='text-white flex flex-col lg:flex-row lg:gap-6'>
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-300"
                            : ""
                    }
                >
                    Order
                </NavLink>
                <NavLink
                    to={"/order-review"}
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-300"
                            : ""
                    }
                >
                    Order Review
                </NavLink>
                <NavLink
                    to={"/manage-inventory"}
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-300"
                            : ""
                    }
                >
                    Manage Inventory
                </NavLink>
                <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-300"
                            : ""
                    }
                >
                    Login
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;