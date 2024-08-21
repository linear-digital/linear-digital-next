'use client'

import Navbar from '@/Components/Bars/Navbar';
import api from '@/util/axios';

import React from 'react';
const getData = async () => {
    const res = await api.get('/portfolio')
    return res.data
}
import Portfolios from './_UI/Portfolios';
import Footer from '@/Components/Bars/Footer';
import useSWR from 'swr';

const page =  () => {
    // get category from search params
    const { data } = useSWR('/portfolio', async () => await getData())
    return (
        <div>
            <Navbar />
            <div className="container">

                <section className="breadcrumb-area breadcrumb-area-four pt-200 pb-60">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="section-title title-style-two text-center white-title">
                                    <h2 className="title text-black">Our Portfolio</h2>
                                    <p className='mt-3'>Find the perfect fit! Choose from tiered plans with features tailored to your
                                        needs. All at budget-friendly prices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Portfolios data={data} />
            </div>
            <Footer />
        </div>
    );
};

export default page;