import React from 'react';
import { NavLink } from 'react-router-dom';



const Certification = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">Be 'Melody Music Certified' Musician</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Get accrediated Globally</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever your background is , wherever you are from , You can take a variety of Courses from us and Get Certified . Not only that , after completing our courses , we will guide you through your career path .</p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 text-justify">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Short Courses</h2>
                            <p className="leading-relaxed text-base mb-4">Most of the Short Courses' duration are between 1.5 to 02 months , and Certificate Awarding Body is 'Melody Music Academy' itself .</p>
                            <NavLink to={`/course/id`}>
                                <button className="text-justify flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Learn More</button>
                            </NavLink>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 text-justify">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Workshops</h2>
                            <p className="leading-relaxed text-base mb-4">All of the workshops' duration are between 01 to 02 days , and Certificate Awarding Body is 'Melody Music Academy' itself .</p>
                            <NavLink to={`/course/id`}>
                                <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Learn More</button>
                            </NavLink>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Six Month Diploma</h2>
                            <p className="leading-relaxed text-base mb-4">Our Short Diplomas' duration are between 05 to 06 months , and Certificate Awarding Bodies are 'Melody Music Academy' and 'Online Music Class,USA' .</p>
                            <NavLink to={`/course/id`}>
                                <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Learn More</button>
                            </NavLink>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Training Session</h2>
                            <p className="leading-relaxed text-base mb-4 text-justify">We arrange a number of Trainning Sessions over the time on different topics . Most of them are internationally Accrediated. </p>
                            <NavLink to={`/course/id`}>
                                <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Learn More</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certification;