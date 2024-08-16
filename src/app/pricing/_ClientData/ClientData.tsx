'use client'

import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import useSWR from 'swr';
import { fetcher } from '@/util/fetcher';

const ClientData = ({ page }: { page: string }) => {
    // const data = await getData()
    // const faq = await getFaq()
    const { data } = useSWR('https://ld.mdtamiz.com/api/generalprice', fetcher)
    const { data: faq } = useSWR('https://ld.mdtamiz.com/api/faq', fetcher)
    return (
        <div className='container'>
            {
                page !== "home" && <section className="general-pricing mt-50">
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
            }
            <section className="mt-120 row">
                <div className="col-lg-5 ">
                    <h1 className="title text-black" style={{ fontSize: 50 }}>
                        Have more <br /> Questions?
                    </h1>
                    <p>
                        See our <a href="">
                            Help Center</a> 
                            or send us a message!
                    </p>
                    <img src="/assets/img/images/service.png" width={"50%"} alt="" className='mt-5' />
                </div>
                <div className="col-lg-7">
                    <Accordion defaultActiveKey="0">
                        {
                            faq?.map((item: any, index: number) => {
                                return (
                                    <Accordion.Item className='mb-3 rounded'
                                     key={index} eventKey={index.toString()}>
                                        <Accordion.Header
                                        className='rounded'
                                        >
                                            {item.title}
                                        </Accordion.Header>
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
                </div>
            </section>
        </div>
    );
};

export default ClientData;