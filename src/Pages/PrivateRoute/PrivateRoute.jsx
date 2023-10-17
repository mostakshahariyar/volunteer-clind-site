import React from 'react';
import useAuth from '../../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirbase';

const PrivateRoute = ({ children }) => {
        const { user } = useFirebase();

        const nevigate = useNavigate();
        return (

                (user?.email) ? children : nevigate('/login')

        );
};

export default PrivateRoute;