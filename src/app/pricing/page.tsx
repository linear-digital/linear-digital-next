'use client'

import Navbar from '@/Components/Bars/Navbar';
import React from 'react';
import Pricing from '../Home/Pricing';
import axios from 'axios';
import Footer from '@/Components/Bars/Footer';
import Accordion from 'react-bootstrap/Accordion';
import useSWR from 'swr';
import { fetcher } from '@/util/fetcher';

const page = () => {
    // const data = await getData()
    // const faq = await getFaq()
    const { data } = useSWR('https://ld.mdtamiz.com/api/generalprice', fetcher)
    const { data: faq } = useSWR('https://ld.mdtamiz.com/api/faq', fetcher)
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
            <section className="mt-100">
                <div className="section-title title-style-two text-center white-title mb-50 ">
                    <h2 className="title text-black">Frequently asked questions</h2>
                </div>
                <Accordion defaultActiveKey="0">
                    {
                        faq?.map((item: any, index: number) => {
                            return (
                                <Accordion.Item key={index} eventKey={index.toString()}>
                                    <Accordion.Header>{item.title}</Accordion.Header>
                                    <Accordion.Body>
                                       {
                                           item.desc
                                       }
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </section>

            <Footer />
        </div>
    );
};

export default page;