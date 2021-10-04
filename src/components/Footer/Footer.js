import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-20'>
            <hr className='border-2' />
            <footer className="p-6 dark:bg-coolGray-800 dark:text-coolGray-100">
                <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-yellow-600">Courses <i className="fas fa-book-open"></i> </h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="/courses">Fundamentals of Music </NavLink>
                            <NavLink to="/courses">Music Production </NavLink>
                            <NavLink to="/courses">Song Writing, Arranging </NavLink>
                            <NavLink to="/courses">Introduction to Classical Music </NavLink>
                            <NavLink to="/courses">Art of Artist </NavLink>
                            <NavLink to="/courses">Learn Music Theories </NavLink>
                            <NavLink to="/courses">History of Rock </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-yellow-600">About US <i className="fas fa-globe"></i> </h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="/about">About Academy </NavLink>
                            <NavLink to="/about">History </NavLink>
                            <NavLink to="/about">Background </NavLink>
                            <NavLink to="/about">Board of Directors </NavLink>
                            <NavLink to="/about">Faculty </NavLink>
                            <NavLink to="/about">Extra Curricular </NavLink>
                            <NavLink to="/about">Mission and Vision </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-yellow-600">Certification <i className="fas fa-graduation-cap"></i> </h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="/certification">Basic </NavLink>
                            <NavLink to="/certification">Training </NavLink>
                            <NavLink to="/certification">Workshops </NavLink>
                            <NavLink to="/certification">Short Course </NavLink>
                            <NavLink to="/certification">Short Diploma </NavLink>
                            <NavLink to="/certification">Six Month Diploma </NavLink>
                            <NavLink to="/certification">Vendor Course </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-yellow-600">Social <i className="fas fa-users"></i> </h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="#">Youtube </NavLink>
                            <NavLink to="#">Facebook </NavLink>
                            <NavLink to="#">Twitter </NavLink>
                            <NavLink to="#">Instagram </NavLink>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-12 text-sm">
                    <span className="text-yellow-600">©Melody Music Academy Copyright 2021. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;