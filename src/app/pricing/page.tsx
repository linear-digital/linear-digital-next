import Navbar from '@/Components/Bars/Navbar';
import React from 'react';
import Pricing from '../Home/Pricing';
import axios from 'axios';
async function getData() {
    try {
        const res = await axios.get('https://ld.mdtamiz.com/api/generalprice')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        return res.data
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}
const page = async () => {
    const data = await getData()

    return (
        <div className='container'>
            <Navbar />
            <Pricing />
            <section className="general-pricing mt-50">
                <div className="section-title title-style-two text-center white-title mb-50 ">
                    <h2 className="title text-black">General Pricing Sheet</h2>
                    <p >Professional design agency to provide print and web graphics solutions</p>
                </div>

                <div className="general-price-container" id="general-container">
                    {
                        data?.map((item: any) => {
                            return (
                                <div key={item._id} className="d-flex align-items-center price-car">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 20, height: 20 }} className="text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <span className="ms-1">{item.title}</span>
                                </div>

                            )
                        })
                    }
                </div>
            </section>

        </div>
    );
};

export default page;