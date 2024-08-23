'use client'
import React, { useEffect } from 'react';
import SliderEdit from './_UI/SliderEdit';
import ServiceEdit from './_UI/ServiceEdit';
import EditAgency from './_UI/EditAgency';
import WhyPeople from './_UI/WhyPeople';
import Footer from './_UI/Footer';

const page = () => {
    return (
        <div>
            <SliderEdit />
            <EditAgency />
            <WhyPeople />
            <Footer />
        </div>
    );
};

export default page;