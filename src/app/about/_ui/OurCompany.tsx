'use client';
import { fetcher } from '@/util/fetcher';
import React from 'react';
import useSWR from 'swr';

const OurCompany = () => {
    const { data: title } = useSWR('https://server.lineardigital.co/api/titles/66c8a020b31d2cc0b1eccc5b',
        fetcher);
    const { data: title2 } = useSWR('https://server.lineardigital.co/api/titles/66c8a1f9b31d2cc0b1eccc5c',
        fetcher);

    return (
        <div>
            <section className="history-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title white-title text-center mb-45">
                                <span className="sub-title">{title?.name}</span>
                                <h2 className="title">{title?.title}</h2>
                                <p>
                                    {title?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-inner">
                        <div className="history-img">
                            <img src="/assets/img/images/history_img.jpg" alt="" />
                        </div>
                        <div className="row g-0 justify-content-end">
                            <div className="col-lg-6">
                                <div className="history-content">
                                    <h2 className="title">
                                        {title2?.title}
                                    </h2>
                                    <p>
                                        {title2?.description}
                                    </p>
                                    <ul className="list-wrap">
                                        <li >
                                            <i className="far fa-check" />
                                            {
                                                title2?.others?.options.op1
                                            }
                                        </li>
                                        <li >
                                            <i className="far fa-check" />
                                            {
                                                title2?.others?.options.op2
                                            }
                                        </li>
                                        <li >
                                            <i className="far fa-check" />
                                            {
                                                title2?.others?.options.op3
                                            }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="history-roadmap-wrap">
                        <div className="roadmap-line-shape">
                            <span className="dot-one pulse-one" />
                            <span className="dot-two pulse-two" />
                        </div>
                        <ul className="list-wrap">
                            <li className="wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1.5s">
                                <span className="dot pulse-three" />
                                <div className="content">
                                    <h5 className="title">2020</h5>
                                    <p>January 1 th</p>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                <span className="dot pulse-four" />
                                <div className="content">
                                    <h5 className="title">2021</h5>
                                    <p>March 24 th</p>
                                </div>
                            </li>
                            <li className="wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1.5s">
                                <span className="dot pulse-five" />
                                <div className="content">
                                    <h5 className="title">2022</h5>
                                    <p>February 11 th</p>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                <span className="dot pulse-six" />
                                <div className="content">
                                    <h5 className="title">2023</h5>
                                    <p>January 14 th</p>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                <span className="dot pulse-six" />
                                <div className="content">
                                    <h5 className="title">{new Date().getFullYear()}</h5>
                                    <p>{new Date().getMonth() + 1} - {new Date().getDate()} th</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="history-shape-wrap">
                    <img src="/assets/img/images/history_shape01.png" alt="" />
                    <img src="/assets/img/images/history_shape02.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default OurCompany;