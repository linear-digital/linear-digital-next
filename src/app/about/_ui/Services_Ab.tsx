'use client';

import { ServiceType } from '@/app/admin/service/page';
import { fetcher } from '@/util/fetcher';
import React from 'react';
import useSWR from 'swr';

const Services_Ab = () => {
    const { data } = useSWR('https://ld.mdtamiz.com/api/services', fetcher);
    const services: ServiceType[] = data || [];
    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div id='services'>
            <section className="inner-services-area pt-110 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title title-style-two text-center mb-60">
                                <span className="sub-title">
                                    What We Do
                                </span>
                                <h2 className="title">
                                    On-Demand Graphic
                                    & Web Design
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="inner-services-item-wrap">
                        <div className="row service-items-container justify-content-center">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon03.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title">
                                            {services[2].name}
                                        </h2>
                                        <p>
                                            {services[2].desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon05.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title">
                                            {services[4].name}
                                        </h2>
                                        <p>
                                            {services[4].desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon02.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title">
                                            {services[1].name}
                                        </h2>
                                        <p>{services[1].desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon01.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title">
                                            {services[0].name}
                                        </h2>
                                        <p>
                                            {services[0].desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/presentation.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title">
                                            {services[3].name}
                                        </h2>
                                        <p>
                                            {services[3].desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/new/print-materials.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title">
                                            {services[5].name}
                                        </h2>
                                        <p>
                                            {services[5].desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services_Ab;