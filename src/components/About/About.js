import React from 'react';


const About = () => {
    return (
        <div>
            <div className='ml-8 mr-2'>

                <article className='p-10 ml-10'>
                    <h1 className='text-4xl uppercase mt-6 mb-4 font-serif'>About <span className='text-indigo-600 font-serif'>US</span> </h1>



                    <div className="blog p-4">
                        <div id="blog-people" className=" mt-10">
                            {/* <h1 className='text-2xl mb-2'>People</h1> */}
                            <div>
                                <img className='object-none h-60 w-full' src="https://static.alfred.com/callout_images/AlfredCom_Promo_Events_768_50.jpg" alt="" />
                                {/* <img className='h-48 w-100' src="https://scholarship-positions.com/wp-content/uploads/2017/01/Oxford-University-Undergraduate-Scholarships-for-International-Students-in-UK.jpg" alt="" />
                                <img className='h-48 w-100' src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                                <img className='h-48 w-100' src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" /> */}
                            </div>

                        </div>
                        <div id='blog-organization' className=" mt-10">
                            <h1 className='text-2xl mb-2'>Who We Are</h1>
                            Our schools provide quality music and performing arts education to more than two thousand students each week.  To provide the highest quality of education and service to our families, we employ degreed musicians and school administration staff who are fully supported by ongoing academic coordination.  Teachers use well-established curriculum and document progress regularly.
                            Students and families enjoy an exceptional social experience at MTC, collaborating in music classes, rock bands, a cappella singing groups, and musical theater productions, socializing in our schools, and attending social nights and performances in our theaters year-round.
                        </div>

                        <div id="blog-factAndFigures" className=" mt-10">
                            <h1 className='text-2xl mb-2'>Our Mentors</h1>
                            <p>Our teachers hold bachelors, masters, or doctoral degrees, most of which are in in music, theatre, or education.
                                Our teachers are employed by our school (not contractors) with full background checks.
                                Our teachers specialize in teaching children.</p>
                            {/* <div className='mt-10 '>

                                <MyLineChart></MyLineChart>
                            </div> */}
                        </div>



                        <div id="blog-future" className=" mt-10">
                            <h1 className='text-2xl mb-2'>Did You Know ?</h1>
                            <p>86% of aspiring gospel piano players walk away discouraged because of how slowly they're making progress.
                                If you've started trying to learn the piano or are still just thinking about starting lessons, then you can probably relate to this. And if so, continue reading...</p>
                        </div>
                        <div id="blog-career" className=" mt-10">
                            <h1 className='text-2xl mb-2'>We Are Here For You</h1>
                            <p>Imagine, your closest friends leaning in - wide eyed, with an inability to find words to describe how beautifully you are playing.

                                Since the year 2000, we've taken great pride in teaching musicians from all over the world and from all backgrounds and skill levels how to play music by ear.

                                Whether beginners, intermediate, or seasoned musicians, we've shown them how to take their piano skills to levels they've only dreamed of!</p>
                        </div>
                    </div>


                </article>


                {/* <section className='ml-96 border-l-2 p-8 '>
                    <h1 className='text-2xl text-indigo-600'>About</h1>
                    <a href="#blog-organization" className="hover:text-white hover:bg-gray-900 hover:border-white rounded">Organization</a>
                    <br />
                    <a href="#blog-factAndFigures" className="hover:text-white hover:bg-gray-900 hover:border-white rounded">Facts and Figures</a>
                    <br />
                    <a href="#blog-people" className="hover:text-white hover:bg-gray-900 hover:border-white rounded">People</a>
                    <br />
                    <a href="#blog-future" className="hover:text-white hover:bg-gray-900 hover:border-white rounded">Future</a>
                    <br />
                    <a href="#blog-career" className="hover:text-white hover:bg-gray-900 hover:border-white rounded">Career</a>

                </section> */}
            </div>

        </div>
    );
};

export default About;