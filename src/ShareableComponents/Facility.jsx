import React from 'react';

const Facility = ({facility}) => {
    const {name, details} = facility;
    return (
        <div className='p-5 rounded-md space-y-2 bg-gray-100 border-t-4 border-yellow-500'>
            <h1 className='font-bold text-lg'>{name}</h1>
            <p className='text-sm text-gray-500'>{details}</p>
        </div>
    );
};

export default Facility;