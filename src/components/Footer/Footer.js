import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-20'>
            <hr className='border-2' />
            <footer className="p-6 dark:bg-coolGray-800 dark:text-coolGray-100">
                <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Getting started</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="#">Installation </NavLink>
                            <NavLink to="#">Release Notes </NavLink>
                            <NavLink to="#">Upgrade Guide </NavLink>
                            <NavLink to="#">Using with Preprocessors </NavLink>
                            <NavLink to="#">Optimizing for Production </NavLink>
                            <NavLink to="#">Browser Support </NavLink>
                            <NavLink to="#">IntelliSense </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Core Concepts</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="#">Utility-First </NavLink>
                            <NavLink to="#">Responsive Design </NavLink>
                            <NavLink to="#">Hover, Focus, &amp; Other States </NavLink>
                            <NavLink to="#">Dark Mode </NavLink>
                            <NavLink to="#">Adding Base Styles </NavLink>
                            <NavLink to="#">Extracting Components </NavLink>
                            <NavLink to="#">Adding New Utilities </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Customization</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="#">Configuration </NavLink>
                            <NavLink to="#">Theme Configuration </NavLink>
                            <NavLink to="#">Breakpoints </NavLink>
                            <NavLink to="#">Customizing Colors </NavLink>
                            <NavLink to="#">Customizing Spacing </NavLink>
                            <NavLink to="#">Configuring Variants </NavLink>
                            <NavLink to="#">Plugins </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Community</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="#">GitHub </NavLink>
                            <NavLink to="#">Discord </NavLink>
                            <NavLink to="#">Twitter </NavLink>
                            <NavLink to="#">YouTube </NavLink>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-12 text-sm">
                    <span className="dark:text-coolGray-400">©Melody Music Academy Copyright 2021. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;