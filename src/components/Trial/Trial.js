import React from 'react';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { NavLink } from 'react-router-dom';



const Trial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Grab Your Free Classes</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You can apply here for your Trial Class . Just select your favourite class and Apply for Trial</p>
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Module</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Length</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Trial Class</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Mentor</th>
                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-3">Basic Piano</td>
                                    <td className="px-4 py-3">04 Months</td>
                                    <td className="px-4 py-3">03</td>
                                    <td className="px-4 py-3 text-lg text-gray-900">Mr.Odumbe</td>
                                    <td className="w-10 text-center">
                                        <FormCheckInput name="plan" type="radio"></FormCheckInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">Basic Guitar</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">03 Months</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">02</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">Mr. Jack</td>
                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                        <FormCheckInput name="plan" type="radio"></FormCheckInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">Music Theories</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">03 Months</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">02</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">Ms. Anjelina</td>
                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                        <FormCheckInput name="plan" type="radio"></FormCheckInput>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Music Production</td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">06 Months</td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">03</td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">Ms. Patricia</td>
                                    <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                        <FormCheckInput name="plan" type="radio"></FormCheckInput>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <NavLink to={`/course/id`}>
                            <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Apply</button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Trial;