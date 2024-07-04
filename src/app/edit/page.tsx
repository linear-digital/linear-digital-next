import Navbar from '@/Components/Bars/Navbar';
import React from 'react';
import SliderEdit from './_UI/SliderEdit';
import ServiceEdit from './_UI/ServiceEdit';

const page = () => {
    return (
        <div>
            <Navbar />
            <SliderEdit />
            <ServiceEdit />
        </div>
    );
};

export default page;