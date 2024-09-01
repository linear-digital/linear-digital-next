'use client'
import axios from 'axios';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/util/fetcher';

const Pricing = () => {

    const { data } = useSWR('https://ld.mdtamiz.com/api/pricing', fetcher)
    const [pricing, setPricing] = React.useState([]);
    const [category, setCategory] = React.useState('graphic');

    useEffect(() => {
        if (data) {
            if (category === 'graphic') {
                setPricing(data?.pricing?.slice(0, 3))
            }
            else {
                setPricing(data?.pricing?.slice(3, 6))
            }
        }
    }, [category, data])

    const sendMessageOnwhatsapp = async (data: any) => {
        const message = `Hi, \n\n  I am interested in  your (${data?.category}: ${data?.name}) plan. Can we discuss it together?`
        const url = `https://wa.me/+8801581743206?text=${message}`
        window.open(url, '_blank')

    }
    return (
        <section className="pricing-area pb-90 pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title title-style-two text-center white-title mb-50 ">
                            <h2 className="title text-black">The Right Plan for Your Business</h2>
                            <p >Find the perfect fit! Choose from tiered plans with features tailored to your
                                needs. All at budget-friendly prices.</p>

                        </div>
                    </div>
                </div>
                <div className="pricing-item-wrap">
                    <div className="pricing-tab">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            {
                                [{
                                    name: 'Graphics',
                                    id: 1,
                                    value: 'graphic'
                                },
                                {
                                    name: 'Websites',
                                    id: 2,
                                    value: 'website'
                                }
                                ].map((item, index: any) => (
                                    <li key={index} className="nav-item" role="presentation">
                                        <button className={`nav-link ${category === item.value ? `active${index}` : ''}`}
                                            id="month-tab"
                                            onClick={() => setCategory(item.value)}
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane show active" id="month" role="tabpanel" aria-labelledby="month-tab">
                            <div className="row g-0 align-items-center justify-content-center">
                                {
                                    pricing?.map((item: any, index: any) => (
                                        <div className="col-lg-4 col-md-6" key={index} id={`web-pricing-${index + 1}`}>
                                            <div className={`pricing-item ${index === 1 ? 'active' : ''}`}>
                                                <div className="pricing-icon">
                                                    <img src="/assets/img/icon/pricing_icon01.png" alt="" />
                                                </div>
                                                <div className="pricing-top">
                                                    <h2 className="title">
                                                        {item.name}
                                                    </h2>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </div>

                                                <div className="pricing-list">
                                                    <h4 className="title">Everything in Starter</h4>
                                                    <ul className="list-wrap">
                                                        {
                                                            item.service1 && <li className=""><i className="far fa-check" />{item.service1}</li>
                                                        }
                                                        {
                                                            item.service2 && <li className=""><i className="far fa-check" />{item.service2}</li>
                                                        }
                                                        {
                                                            item.service3 && <li className=""><i className="far fa-check" />{item.service3}</li>
                                                        }
                                                        {
                                                            item.service4 && <li className=""><i className="far fa-check" />{item.service4}</li>
                                                        }
                                                        {
                                                            item.service5 && <li className=""><i className="far fa-check" />{item.service5}</li>
                                                        }
                                                        {
                                                            item.service6 && <li className=""><i className="far fa-check" />{item.service6}</li>
                                                        }
                                                        {
                                                            item.service7 && <li className=""><i className="far fa-check" />{item.service7}</li>
                                                        }
                                                        {
                                                            item.service8 && <li className=""><i className="far fa-check" />{item.service8}</li>
                                                        }
                                                        {
                                                            item.service9 && <li className=""><i className="far fa-check" />{item.service9}</li>
                                                        }
                                                        {
                                                            item.service10 && <li className=""><i className="far fa-check" />{item.service10}</li>
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="pricing-btn">
                                                    <button
                                                        onClick={() => {
                                                            sendMessageOnwhatsapp(item)
                                                        }}
                                                        className="btn">
                                                        Request a Quote
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >

    );
};

export default Pricing;

`

`