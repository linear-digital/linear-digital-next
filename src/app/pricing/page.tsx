
import Navbar from '@/Components/Bars/Navbar';
import React from 'react';
import Pricing from '../Home/Pricing';

import Footer from '@/Components/Bars/Footer';
import Contact from '../Home/Contact';
import ClientData from './_ClientData/ClientData';
import type { Metadata } from 'next'
export async function generateMetadata(
  ): Promise<Metadata> {
    // read route params
 
    return {
      title: "Linear Digital Limited - Pricing Page",
    }
  }
const page = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='mt-100'>

            </div>
            <Pricing />
            <ClientData page='pricing'/>
            <div className="pt-100">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default page;