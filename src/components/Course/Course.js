import React from 'react';
import { NavLink } from 'react-router-dom';

const Course = (props) => {
    const { name, price, img, id } = props.course;
    return (
        <div className='text-center bg-white rounded-lg p-2'>
            <img className='block ml-auto mr-auto w-96 h-48 ' src={img} alt="" />
            <br />
            <h1 className='font-serif'>{name}</h1>
            <br />
            <h3 className='font-serif'>${price}</h3>
            <br />
            <NavLink to={`/course/${id}`}>
                <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Details</button>
            </NavLink>

        </div>
    );
};

export default Course;