import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = props => {
        const { title, img, _id } = props.volunteer;
        const navigate = useNavigate();
        const handelClick = id => {
                console.log(id);
                navigate(`/events/${id}`);
        }

        return (
                <div className='mt-16 relative border rounded-md'>
                        <img src={img} alt="" />
                        <p className='bg-yellow-400 py-2 mb-[-30px] absolute inset-x-0 bottom-0 h-20 rounded-b-xl flex flex-col text-xl font-medium'>{title}  <span className='text-medium text-white font-semibold cursor-pointer p    b-4' onClick={() => handelClick(_id)}> Enter the Event</span></p>
                </div>
        );
};

export default Home;