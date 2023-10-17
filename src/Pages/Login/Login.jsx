import React from 'react';
import useAuth from '../../Hooks/UseAuth';
import useFirebase from '../../Hooks/UseFirbase';

const Login = () => {
        const { signInUsingGoogle, user } = useFirebase();
        const handelGoogle = () => {
                signInUsingGoogle();
                console.log(user?.email)
        }
        return (
                <div className='flex flex-col items-center justify-center h-screen '>
                        <p className='text-3xl font-semibold mb-16'>Login with</p>
                        <div className='flex mt-5 mb-3 gap-24 border border-black py-3 rounded-full w-[35%] px-5 cursor-pointer' onClick={handelGoogle}>
                                <div className='w-[35px] flex justify-center items-start'>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                                </div>
                                <div className='flex justify-center items-center'>
                                        <p className='text-xl font-medium'>Continue with Google</p>
                                </div>
                        </div>
                        <p>Don't have account? <span className='text-blue-500 cursor-pointer underline'>Create account</span></p>
                </div>
        );
};

export default Login;