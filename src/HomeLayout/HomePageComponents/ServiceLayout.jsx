import React, { useContext, useEffect, useState } from 'react';
import Service from './Service';
import { AuthContext } from '../../AuthContextLayout/AuthContexts';

const ServiceLayout = () => {
    const [services, setService] = useState(null);
    const {homedataloading} = useContext(AuthContext);
    
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=> res.json())
        .then(data => setService(data));
    },[homedataloading])

    return (
        <div className='my-20'>
            <div className='w-full text-center font-inter space-y-2'>
                <h1 className='font-bold text-yellow-600'>Service</h1>
                <h2 className='text-3xl font-bold'>Our Service Area</h2>
                <p className='w-2/5 mx-auto text-xs'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-3 gap-5 my-10'>
                {
                    services && services.map(service=> <Service key={service.id} services={service}/>)
                }
            </div>
        </div>
    );
};

export default ServiceLayout;