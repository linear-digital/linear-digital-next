import React from 'react';
import Review from '../Home/Review';
import Navbar from '@/Components/Bars/Navbar';
import Footer from '@/Components/Bars/Footer';
import Contact from '../Home/Contact';

const page = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-200'>

            </div>
            <Review page={"main"}/>
            <div className="mt-120"></div>
            <Contact />
            <Footer />
        </div>
    );
};

export default page;