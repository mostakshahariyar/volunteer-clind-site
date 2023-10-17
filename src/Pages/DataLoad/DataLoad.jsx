import React, { useEffect, useRef, useState } from 'react';
import Home from '../Home/Home';

const DataLoad = () => {
        const [volunteers, setVolunteers] = useState([]);
        const searchRef = useRef('');
        const handelSearch = e => {
                e.preventDefault();
                // console.log(searchRef.current.value)
        }
        useEffect(() => {
                fetch('http://localhost:5000/volunteer')
                        .then(res => res.json())
                        .then(data => setVolunteers(data))
        }, [])
        return (
                <div className='mt-16 w-[100%] flex flex-col justify-center items-center'>
                        <form onSubmit={handelSearch} className=' flex justify-between items-center border-2 w-[30rem] overflow-hidden rounded mb-16'>
                                <input type="text" ref={searchRef} name="" id="" className='border-none outline-none w-full h-full px-3' placeholder='Enter you donation name' />
                                <input type='submit' value='Search' className='bg-blue-500 text-white text-xl font-normal px-3 py-2 rounded cursor-pointer' />
                        </form>
                        <div className='grid grid-cols-4 gap-4'>
                                {
                                        volunteers.map(volunteer => (
                                                <Home
                                                        key={volunteer._id}
                                                        volunteer={volunteer}
                                                />))
                                }
                        </div>
                </div>
        );
};

export default DataLoad;