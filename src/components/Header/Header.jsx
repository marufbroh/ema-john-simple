import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext)

    const handleSignout = () => {
        logoutUser()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <nav className='flex justify-between py-4 px-4 lg:px-32 items-center' style={{ backgroundColor: '#1C2B35' }}>
            <Link to={"/"}><img src={logo} alt="" /></Link>
            <div className='text-white flex flex-col lg:flex-row items-center lg:gap-6'>
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
                {!user && <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-300"
                            : ""
                    }
                >
                    Login
                </NavLink>}
                {!user && <NavLink
                    to={"/signup"}
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-300"
                            : ""
                    }
                >
                    Sign Up
                </NavLink>}
                {user && <button onClick={handleSignout} className='btn btn-xs'>Sign Out</button>}
            </div>
        </nav>
    );
};

export default Header;