import React from 'react';
import Review from '../Home/Review';
import Navbar from '@/Components/Bars/Navbar';
import Footer from '@/Components/Bars/Footer';

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-130"></div>
            <Review page={"main"}/>
            <Footer />
        </div>
    );
};

export default page;