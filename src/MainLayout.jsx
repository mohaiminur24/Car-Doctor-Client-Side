import React from 'react';
import Header from './HeaderFooterLayout/Header';
import { Outlet } from 'react-router-dom';
import Footer from './HeaderFooterLayout/Footer';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header/>
            <div className='min-h-[calc(100vh-300px)]'><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default MainLayout;