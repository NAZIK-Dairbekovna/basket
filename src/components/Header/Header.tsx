import React from 'react';
import {basket, newProduct} from "../../store/reducers/ProductSlice";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>

            <nav
                className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0
                border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <span
                            className="self-center text-2xl font-semibold
                                whitespace-nowrap dark:text-white">STORE</span>
                    </a>

                    <div className="items-center justify-items-baseline justify-between hidden w-full md:flex md:w-auto md:order-2"
                         id="navbar-sticky">
                        <ul className="flex flex-col items-baseline p-4 md:p-0 mt-4 font-medium border border-gray-100
                        rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white
                        dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to={`/`}
                                   className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded
                                   md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                   aria-current="page">Store</Link>
                            </li>
                            <li>
                                <Link to={`/basket`}>
                                    <button
                                        onClick={() => newProduct}
                                        type="button"
                                        className="text-white bg-gradient-to-r relative
                                                from-green-400 via-green-500 to-green-600
                                                hover:bg-gradient-to-br focus:ring-4
                                                focus:outline-none focus:ring-green-300
                                                dark:focus:ring-green-800 font-medium rounded-lg
                                                text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    >Basket
                                        <span
                                            className='absolute top-[-13px]  rounded-[50%] bg-amber-400
                                         px-2 py-1 right-[-8px] text-white'>{basket.length}</span>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;