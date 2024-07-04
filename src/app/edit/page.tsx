import Navbar from '@/Components/Bars/Navbar';
import React from 'react';
import SliderEdit from './_UI/SliderEdit';
import ServiceEdit from './_UI/ServiceEdit';
import EditAgency from './_UI/EditAgency';

const page = () => {
    return (
        <div>
            <Navbar />
            <SliderEdit />
            <ServiceEdit />
            <EditAgency />
        </div>
    );
};

export default page;