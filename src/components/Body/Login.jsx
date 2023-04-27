import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex flex-col justify-center min-h-[calc(100vh-75px)] items-center'>
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8'>
                <form className="flex flex-col mb-4">
                    <div className="mb-4">
                        <h2 className='text-center font-bold text-2xl'>Login</h2>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Login
                        </button>
                    </div>
                    <div className="mb-4 text-center">
                        <small>New to Ema-John? <Link className='text-orange-300 hover:underline' to={"/signup"}>Create New Account</Link></small>
                    </div>
                    <div className="inline-flex items-center justify-center w-full mb-4">
                        <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-400" />
                        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">or</span>
                    </div>
                </form>
                <div>
                    <button className="border hover:bg-slate-100 w-full font-bold py-2 px-4 rounded" type="button">
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;