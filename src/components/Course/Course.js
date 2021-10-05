import React from 'react';
import './Course.css';
import { NavLink } from 'react-router-dom';

const Course = (props) => {
    const { name, price, img, id, star, starCount } = props.course;
    return (
        <div className='text-center bg-white rounded-lg p-2 card-background'>
            <img className='block ml-auto mr-auto w-96 h-48 ' src={img} alt="" />
            <br />
            <h1 className='font-serif'><strong>Course Title : {name}</strong></h1>
            <br />
            <div>
                <h3 className='font-serif'><strong>Price : $ {price}</strong></h3>

                <h3 className='font-serif'>Rating: <span><i className="fas fa-star" style={{ color: "#ff8b1d" }}></i> {star}</span></h3>
                <h3 className='font-serif'>Completed : <span><i className="fas fa-user-alt" style={{ color: "#ff8b1d" }}></i> {starCount}</span></h3>
            </div>
            <div className="button">
                <NavLink to={`/course/${id}`}>
                    <button className="btn flex mx-auto mt-5 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Details</button>
                </NavLink>
            </div>

        </div>
    );
};

export default Course;