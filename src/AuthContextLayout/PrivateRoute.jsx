import React, { useContext } from 'react';
import { AuthContext } from './AuthContexts';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <div className='w-full h-[calc(100vh-200px)] flex justify-center items-center'>
            <div className='w-20 h-20 border-yellow-500 border-8 rounded-full border-dashed animate-spin'></div>
        </div>
    }

    if(user){
        return children;
    };

    return (
        <Navigate to="/login" replace={true}/>
    );
};

export default PrivateRoute;