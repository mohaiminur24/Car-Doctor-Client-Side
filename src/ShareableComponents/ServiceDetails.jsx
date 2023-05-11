import React, { useContext } from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import PageBanner from './PageBanner';
import Facility from './Facility';
import { BiRightArrowAlt } from "react-icons/bi";
import logo from "../assets/logo.svg"
import { AuthContext } from '../AuthContextLayout/AuthContexts';


const ServiceDetails = () => {
    const {sethomedataloading,homedataloading} = useContext(AuthContext);
    const service = useLoaderData();
    const {_id,img,price,title, facility,description} = service;
    const nevigate = useNavigate();

    const handledeleteservice =()=>{
        fetch(`http://localhost:5000/servicedelete/${_id}`, {
            method:"DELETE",
        }).then(res => res.json()).then(data=> {
            if(data.deletedCount){
                sethomedataloading(!homedataloading);
                alert("Your Service is Successfully deleted!");
                nevigate("/");
            }else{
                alert("Something wrong try again!");
            }
        })
    };

    return (
        <div>
            <PageBanner title="Home/Service Details">Service Details</PageBanner>
            <div className='grid grid-cols-3 my-20 gap-10 font-inter'>
                <div className='col-span-2 space-y-5'>
                    <img className='w-full h-96 rounded-md mb-10' src={img} alt="" />
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-sm text-gray-500'>{description}</p>

                    <div className='grid grid-cols-2 gap-5'>
                        {facility && facility.map(facility=> <Facility key={Math.random()*100} facility={facility}/>)}
                    </div>
                    <button onClick={handledeleteservice} className='px-5 py-2 bg-yellow-500 font-bold text-white rounded-md'>Delete Service</button>
                </div>
                <div className='space-y-10'>
                    <div className='font-inter p-10 space-y-4 bg-gray-100 h-fit rounded-md'>
                    <h1 className='text-2xl font-bold mb-5'>Services</h1>

                        <div className='flex justify-between text-sm items-center px-5 py-3 hover:bg-yellow-500 hover:text-white font-bold bg-white rounded-md'>
                            <h1>Full Car Repair</h1>
                            <BiRightArrowAlt className='text-yellow-500'/>
                        </div>
                        <div className='flex justify-between text-sm items-center px-5 py-3 hover:bg-yellow-500 hover:text-white font-bold bg-white rounded-md'>
                            <h1>Engin Repair</h1>
                            <BiRightArrowAlt className='text-yellow-500'/>
                        </div>
                        <div className='flex justify-between items-center px-5 text-sm py-3 hover:bg-yellow-500 hover:text-white font-bold bg-white rounded-md'>
                            <h1>Automatic Services</h1>
                            <BiRightArrowAlt className='text-yellow-500'/>
                        </div>
                        <div className='flex justify-between items-center px-5 py-3 text-sm hover:bg-yellow-500 hover:text-white font-bold bg-white rounded-md'>
                            <h1>Engin Oil change</h1>
                            <BiRightArrowAlt className='text-yellow-500'/>
                        </div>
                        <div className='flex justify-between items-center px-5 py-3 text-sm hover:bg-yellow-500 hover:text-white font-bold bg-white rounded-md'>
                            <h1>Battery Charge</h1>
                            <BiRightArrowAlt className='text-yellow-500'/>
                        </div>
                    </div>

                    <div className='p-20 space-y-4 text-center text-white font-inter rounded-md bg-black'>
                    <img className='w-2/5  mx-auto' src={logo} alt="" />
                    <h1 className='font-bold'>Need Help? We are Here <br /> To Help You</h1>
                    <div className='text-black bg-gray-50 p-10 rounded-md relative'>
                        <h1 className='font-bold'><span className='text-yellow-500'>Car Doctor</span> <span>Special</span><br /> <span className='text-xs'>Save up to <span className='text-yellow-500'>60% off</span></span></h1>
                        <button className='px-4 py-2 bg-yellow-600 rounded-md font-bold text-white absolute -bottom-4 w-fit mx-auto left-0 right-0'>Get a Quote</button>
                    </div>
                    </div>

                    <div className='font-inter'>
                        <h1 className='text-2xl font-bold'>Price: <span>${price}</span></h1>
                        <NavLink to={`/checkout/${_id}`}><button className='w-full py-2 font-bold text-white bg-yellow-500 mt-5 rounded-md shadow-sm'>Proceed Checkout</button></NavLink>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default ServiceDetails;