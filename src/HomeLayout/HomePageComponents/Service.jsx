import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Service = ({services}) => {
    const {img,price,title} = services;
    return (
        <div className='p-5 border rounded-md font-inter shadow-sm space-y-3'>
            <img className='border rounded-md w-full h-80' src={img} alt="" />
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className='flex justify-between'>
                <h3 className='text-sm text-yellow-700 fobt
                '>Price: <span>${price}</span></h3>
                <NavLink to={`/service/id`}><BiRightArrowAlt className='text-yellow-700'/></NavLink>
            </div>
            
        </div>
    );
};

export default Service;