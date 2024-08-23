'use client';

import api from '@/util/axios';
import { fetcher } from '@/util/fetcher';
import React from 'react';
import useSWR from 'swr';

const CompanySuccess = () => {
    const { data: title } = useSWR('https://ld.mdtamiz.com/api/titles/66c89d5fb31d2cc0b1eccc5a', fetcher);

    return (
        <div>
            <section className="success-area pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="success-img">
                                <img src="/assets/img/images/success_img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="success-content">
                                <div className="section-title title-style-two mb-30">
                                    <span className="sub-title">{
                                        title?.name
                                    }</span>
                                    <h2 className="title">
                                        {title?.title}
                                    </h2>
                                </div>
                                <p>
                                    {title?.description}
                                </p>
                                <div className="success-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="content">
                                                <img src="/assets/img/icon/success_icon01.png" alt="" />
                                                <span>App Design 85%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <img src="/assets/img/icon/success_icon02.png" alt="" />
                                                <span>Website Design 75%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <img src="/assets/img/icon/success_icon03.png" alt="" />
                                                <span>Product Design 95%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <img src="/assets/img/icon/success_icon04.png" alt="" />
                                                <span>Development 99%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="success-shape-wrap">
                    <img src="/assets/img/images/success_shape01.png" alt="" />
                    <img src="/assets/img/images/success_shape02.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default CompanySuccess;