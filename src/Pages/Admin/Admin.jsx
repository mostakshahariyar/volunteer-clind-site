import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Admin = () => {

        const titleRef = useRef('');
        const dateRef = useRef('');
        const descriptionRef = useRef('');
        const imgRef = useRef('');
        const [togules, setTogules] = useState(true);
        const hadnelTogules = (e) => {
                setTogules(e);
        }


        const handelFrom = e => {
                e.preventDefault();
                const title = titleRef.current.value;
                const date = dateRef.current.value;
                const description = descriptionRef.current.value;
                const img = imgRef.current.value;

                const newVolunteer = { title, date, description, img };
                console.log(newVolunteer);

                axios.post('http://localhost:5000/donation_add', {
                        newVolunteer
                })
                        .then(res => {
                                if (res.data.acknowledged) {
                                        alert('Donation Added');
                                        // titleRef.current.reset();       
                                }
                        })

        }
        return (
                <div className="flex mt-24 ">
                        <div className="flex flex-col justify-start items-start pt-8 pl-8 gap-4 h-screen w-[40%] bg-gray-500">
                                <div onClick={() => hadnelTogules(true)} className={(togules) ? 'flex gap-1 justify-center items-center text-blue-700 cursor-pointer' : 'cursor-pointer flex gap-1 justify-center items-center'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                        </svg>

                                        <p className='text-xl'>Volunteer register list</p>
                                </div>
                                <div onClick={() => hadnelTogules(false)} className={(!togules) ? 'flex gap-1 justify-center items-center text-blue-700 cursor-pointer' : 'flex gap-1 justify-center items-center cursor-pointer'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>

                                        <p className='text-xl'>Add events</p>
                                </div>

                        </div>

                        <div className="w-full h-screen flex gap-4 flex-col justify-start">
                                <div className='flex text-xl font-semibold justify-center items-center rounded-br-xl bg-gray-500 py-3 px-6'>
                                        {
                                                togules ? "Volunteer register list" : "Add events"
                                        }</div>
                                <div className='flex items-start ml-8'>
                                        {
                                                (togules) ?
                                                        <table>
                                                                <thead>
                                                                        <th>
                                                                                <td>Name</td>
                                                                                <td>Email ID</td>
                                                                                <td>Events</td>
                                                                                <td>Action</td>
                                                                        </th>
                                                                </thead>
                                                                <tbody>
                                                                        <tr>

                                                                        </tr>
                                                                </tbody>
                                                        </table> :
                                                        <div className='w-full'>
                                                                <form onSubmit={handelFrom} className='grid grid-cols-2 gap-2'>
                                                                        <div className='flex flex-col justify-center items-start gap-2'>
                                                                                <label className='text-lg' htmlFor="title">Event Title</label>
                                                                                <input ref={titleRef} type="text" name="title" id="title" placeholder='Event Title' className='py-2 px-4 border-2 rounded outline-1 border-gray-800 w-full' required />
                                                                        </div>
                                                                        <div className='flex flex-col justify-center items-start gap-2'>
                                                                                <label className='text-lg' htmlFor="date">Event Date</label>
                                                                                <input ref={dateRef} type="date" name="data" id="data" placeholder='Event Date' className='py-2 px-4 border-2 rounded  outline-1 border-gray-800 w-full' required />
                                                                        </div>
                                                                        <div className='flex flex-col justify-center items-start gap-2'>
                                                                                <label className='text-lg' htmlFor="description">Description</label>
                                                                                <textarea ref={descriptionRef} type="text" name="description" id="description" placeholder='Event Description' className='py-2 px-4 border-2 rounded  outline-1 border-gray-800 w-full' required />
                                                                        </div>
                                                                        <div className='flex flex-col justify-center items-start gap-2'>
                                                                                <label className='text-lg' htmlFor="banner">Banner</label>
                                                                                <input ref={imgRef} type="text" name="banner" id="banner" className='py-2 px-4 border-2 rounded  outline-1 border-gray-800 w-full' required />
                                                                        </div>
                                                                        <input type="submit" value="Submit" className='bg-blue-500 py-2 px-4 rounded-md text-white cursor-pointer mt-4 w-[5rem] justify-items-end' />
                                                                </form>
                                                        </div>
                                        }

                                </div>
                        </div>

                </div>
        );
};

export default Admin;