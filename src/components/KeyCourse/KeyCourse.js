import React from 'react';
import { useHistory } from 'react-router';

const KeyCourse = (props) => {
    const { name, price, img, id } = props.keyCourse;

    const history = useHistory();

    const handleDetails = () => {
        history.push(`/course/${id}`)
    }

    return (
        <div className='text-center bg-white rounded-lg p-2'>
            <img className='block ml-auto mr-auto w-96 h-48' src={img} alt="" />
            <br />
            <h1>Course Title : {name}</h1>
            <br />
            <h2>Price : ${price}</h2>
            <button className="flex mx-auto mt-10 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Details</button>
        </div>
    );
};

export default KeyCourse;