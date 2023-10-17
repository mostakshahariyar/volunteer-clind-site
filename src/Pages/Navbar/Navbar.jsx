import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/logos/site.png'
import useFirebase from '../../Hooks/UseFirbase';

const Navbar = () => {
        const { user, logOut } = useFirebase();
        const handelSignOut = () => {
                logOut();
                alert('LogOut successfully')
        }

        return (
                <div className='flex justify-between items-center mb-16 absolute'>
                        <div className='w-[15%]'>
                                <Link to='/home'>
                                        <img className='w-100% cursor-pointer' src={img} alt="" />
                                </Link>
                        </div>
                        <div className='relative'>
                                <ul className='flex gap-10 justify-center items-center relative'>
                                        <Link to='/home' className='text-xl font-normal cursor-pointer hover:text-blue-800'>
                                                Home
                                        </Link>
                                        <Link to='/donation' className='text-xl font-normal cursor-pointer hover:text-blue-800'>
                                                Donation
                                        </Link>
                                        <Link to='/events' className='text-xl font-normal cursor-pointer hover:text-blue-800'>
                                                Events
                                        </Link>
                                        <Link to='/blog' className='text-xl font-normal cursor-pointer hover:text-blue-800'>
                                                Blog
                                        </Link>

                                        {(user?.email) ?
                                                <div className='flex flex-around items-center justify-center gap-4'>
                                                        <p className='text-xl font-medium hover:text-blue-800'>{user?.displayName}
                                                        </p>
                                                        <svg onClick={handelSignOut} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" className='cursor-pointer' />
                                                        </svg>
                                                </div> :
                                                <div className='flex gap-10 justify-center items-center'>
                                                        <Link to='/register' className='text-xl font-normal cursor-pointer'>
                                                                <p className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:text-blue-800 hover:border-blue-500 hover:border hover:bg-white duration-300'>
                                                                        Register
                                                                </p>
                                                        </Link>
                                                        <Link to='/admin' className='text-xl font-normal cursor-pointer'>
                                                                <p className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:text-blue-800 hover:border-blue-500 hover:border hover:bg-white duration-300'>Admin</p>
                                                        </Link>
                                                </div>}

                                </ul>
                        </div>
                </div>
        );
};

export default Navbar;