'use client'
import React, { useEffect } from 'react';
import SliderEdit from './_UI/SliderEdit';
import ServiceEdit from './_UI/ServiceEdit';
import EditAgency from './_UI/EditAgency';
import WhyPeople from './_UI/WhyPeople';

const page = () => {
    return (
        <div>
            <SliderEdit />
            <ServiceEdit />
            <EditAgency />
            <WhyPeople />
        </div>
    );
};

export default page;