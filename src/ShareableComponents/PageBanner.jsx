import React from 'react';
import pagebanner from "../assets/images/checkout/checkout.png"

const PageBanner = ({children, title}) => {
    return (
        <div className="w-full h-64 relative mb-10">
            <img className='w-full h-full' src={pagebanner} alt="" />
            <div className='absolute top-0 flex justify-start pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0))] w-full h-full'>
                <h1 className='font-inter font-bold text-white text-3xl'>{children}</h1>
            </div>
            <p className='absolute bottom-0 left-0 right-0 w-fit mx-auto px-4 py-2 bg-yellow-500 text-sm font-inter rounded-t-md text-white'>{title}</p> 
        </div>
    );
};

export default PageBanner;