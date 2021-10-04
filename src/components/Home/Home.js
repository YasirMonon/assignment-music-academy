// import React, { useState } from 'react';
import useCourses from '../../hooks/useCourses';
import KeyCourse from '../KeyCourse/KeyCourse';

const Home = () => {
    const [keyCourses] = useCourses();
    console.log(keyCourses);

    return (
        <div>

            <section>
                <div className='grid grid-cols-2 gap-6 mt-10 ml-10'>
                    <div className='p-4 ml-4'>
                        <h2 className='text-4xl uppercase text-center font-serif'> Welcome To</h2>
                        <br />
                        <h2 className='text-4xl uppercase text-center font-serif'> <span className='text-indigo-600 font-serif'>Melody Music Academy</span></h2>
                        <br />
                        <h2 className='text-2xl font-serif'>Where we've created some <span className='text-indigo-600 font-serif'>Greatest</span> and <span className='text-indigo-600 font-serif'>Marvelous </span>Music Artists of Industries . From Classical to Jazz, Western to Instrumental, We have a variety of Choices for you .
                        </h2>
                        <br />
                        <h2 className='text-2xl font-serif'>Since the year 2000, we've taken great pride in teaching musicians from all over the world and from all backgrounds and skill levels how to play music by ear.
                        </h2>
                    </div>
                    <div className='ml-5'>
                        <img src="https://i.ibb.co/8DP9Jb9/HD-wallpaper-butterfly-piano-concerto-ii-colorful-keys-music-bright-butterflies-abstract-piano.jpg" alt="" srcSet="" />
                    </div>
                </div>

            </section>

            <section>
                <div className='mt-20'>
                    <h1 className='text-center text-4xl uppercase mb-3 font-serif'>Some of our <span className='text-indigo-600'>Featured Courses </span></h1>
                    <br />
                </div>
                <div className='grid grid-cols-4 gap-10 p-8 m-4 bg-indigo-100'>
                    {
                        keyCourses.slice(0, 4).map(keyCourse => <KeyCourse
                            key={keyCourse.id}
                            keyCourse={keyCourse}

                        >

                        </KeyCourse>)
                    }
                </div>
            </section>
            <div className='mt-20'>
                <h1 className='text-center text-4xl uppercase mb-3 font-serif'>Explore through Our <span className='text-indigo-600'> Channel </span></h1>
                <br />
            </div>
            <section>
                <div className='grid grid-cols-2 gap-6 mt-10 ml-10'>
                    <div className='ml-5'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ALXZ_hKMuhg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='p-4 ml-4'>
                        <br />
                        <h2 className='text-4xl uppercase text-center font-serif'> Musics Created By <span className='text-indigo-600 font-serif'>Our Students</span></h2>
                        <br />
                        <h2 className='text-2xl font-serif'>Where we've created some <span className='text-indigo-600 font-serif'>Greatest</span> and <span className='text-indigo-600 font-serif'>Marvelous </span>Music Artists of Industries . From Classical to Jazz, Western to Instrumental, We have a variety of Choices for you .
                        </h2>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;