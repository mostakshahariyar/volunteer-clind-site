import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/UseFirbase';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Events = () => {
        const { id } = useParams();
        const { user } = useFirebase();
        const name = user?.displayName;
        const email = user?.email;
        // console.log(id);
        const [phone, setPhone] = useState();
        const [address, setAddress] = useState();

        const handelPhone = e => {
                setPhone(e.target.value);
        }
        const handelAddress = e => {
                setAddress(e.target.value);
        }
        const handelSubmit = e => {
                const volunteerUser = { name, email, phone, address };
                e.preventDefault();

                axios.post('http://localhost:5000/volunteer/users', {
                        volunteerUser
                })
                        .then(result => console.log(result))
        }
        useEffect(() => {
                // axios.post('http://localhost:5000/volunteer/users')
                //         .then(result => console.log(result))
        }, [])
        return (
                <div className='flex flex-col justify-center items-center h-screen'>
                        <form onSubmit={handelSubmit} className='grid grid-cols-2 gap-4'>
                                <div className='flex flex-col justify-center items-start gap-2'>
                                        <label className='text-lg' htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" placeholder='Enter your name' value={user?.displayName} className='py-2 px-4 border-2 rounded outline-1 border-gray-800 w-full' />
                                </div>
                                <div className='flex flex-col justify-center items-start gap-2'>
                                        <label className='text-lg' htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder='Enter your email' value={user?.email} className='py-2 px-4 border-2 rounded outline-1 border-gray-800 w-full' />
                                </div>
                                <div className='flex flex-col justify-center items-start gap-2'>
                                        <label className='text-lg' htmlFor="phone">Phone Number</label>
                                        <input onChange={handelPhone} type="number" name="phone" id="phone" placeholder='Enter your phone number' className='py-2 px-4 border-2 rounded outline-1 border-gray-800 w-full' />
                                </div>
                                <div className='flex flex-col justify-center items-start gap-2'>
                                        <label className='text-lg' htmlFor="address">Address</label>
                                        <input onChange={handelAddress} type="text" name="address" id="address" placeholder='Enter your address' className='py-2 px-4 border-2 rounded outline-1 border-gray-800 w-full' />
                                </div>
                                <input type="submit" value="Submit" className='bg-blue-500 py-2 px-4 rounded-md text-white cursor-pointer mt-4 w-[5rem] justify-items-end' />
                        </form>
                </div>
        );
};

export default Events;