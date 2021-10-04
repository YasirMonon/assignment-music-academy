import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        backgroundColor: "#4F46E5",
        color: 'white'
    }
    return (
        <div>
            <div >

                <nav className="bg-white py-2 md:py-4">
                    <div className="container px-4 mx-auto md:flex md:items-center">

                        <div className="flex justify-between items-center">
                            <NavLink to="#" className="font-bold text-xl text-indigo-600 font-serif">Melody <i className="fas fa-guitar"></i>  Music </NavLink>
                            <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>

                        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                            <NavLink to="/home" activeStyle={activeStyle} className="p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Home</NavLink>

                            <NavLink to="/courses" activeStyle={activeStyle} className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Courses</NavLink>

                            <NavLink to="/about" activeStyle={activeStyle} className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</NavLink>

                            <NavLink to="/certification" activeStyle={activeStyle} className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Certification</NavLink>

                            <NavLink to="/trial" activeStyle={activeStyle} className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Free Class</NavLink>

                            <NavLink to="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</NavLink>

                            <NavLink to="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</NavLink>
                        </div>
                    </div>
                </nav>


            </div>





        </div>

    );
};

export default Header;