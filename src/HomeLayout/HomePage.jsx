import React from 'react';
import Slider from './HomePageComponents/Slider';
import AboutusLayout from '../ShareableComponents/AboutusLayout';
import ServiceLayout from './HomePageComponents/ServiceLayout';

const HomePage = () => {
    return (
        <div>
            <Slider/>
            <AboutusLayout/>
            <ServiceLayout/>
        </div>
    );
};

export default HomePage;