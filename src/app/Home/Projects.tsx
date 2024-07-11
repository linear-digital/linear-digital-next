'use client'
import ProjectCard from '@/Components/Card/ProjectCard';
import api from '@/util/axios';

import axios from 'axios';
import React, { useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Projects = () => {

    const [data, setData] = React.useState([]);
    const categoryes = [
        { name: 'All', id: 'all' },
        { name: 'Website', id: 'web' },
        { name: 'Web App', id: 'web-app' },
    ]
    const [category, setCategory] = React.useState('all');
    useEffect(() => {
        (
            async () => {
                if (category === 'all') {
                    const { data } = await api.get('/portfolio')
                    setData(data)
                }
                else {
                    const { data } = await api.get(`/portfolio/get/${category}`)
                    setData(data)
                }
            }
        )()
    }, [category])

    return (
        <section className="project-area-three" id="projects">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-10">
                        <div className="section-title title-style-two mb-90">
                            <span className="sub-title">Our Project</span>
                            <h2 className="title">Creative work.</h2>
                        </div>
                    </div>
                </div>
                <div className="project-nav-wrap">
                    <div className="row" id="portfolio">
                        <div className="col-xl-2">
                            <div className="project-tab-wrap">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    {
                                        categoryes.map((item, index) => (
                                            <li key={index} className="nav-item" role="presentation">
                                                <button
                                                    className={`nav-link ${item.id === category ? 'active' : ''}`} id="website-tab"
                                                    onClick={() => setCategory(item.id)}
                                                >{item.name}</button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-10">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="website" role="tabpanel" aria-labelledby="website-tab">
                                    <Swiper
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Pagination, Autoplay]}
                                        className="mySwiper"
                                    >
                                        {
                                            data?.map((item: any, index: number) => (
                                                <SwiperSlide key={index}>
                                                    <ProjectCard item={item} />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                                <div className="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
                                    <div className="swiper-container project-active-three">
                                        <div className="swiper-wrapper portfolio-web-app" id="portfolio-web_app-container">
                                            {/* web Apps will render here */}
                                            {/* web Apps will render here */}
                                            <div className="swiper-slide" style={{ display: 'none' }}>
                                            </div>
                                            {/* web Apps will render here */}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="print" role="tabpanel" aria-labelledby="print-tab">
                                    <div className="swiper-container project-active-three">
                                        <div className="swiper-wrapper portfolio-print" id="portfolio-print-container">
                                            {/* print will render here */}
                                            {/* print will render here */}
                                            <div className="swiper-slide" style={{ display: 'none' }}>
                                            </div>
                                            {/* print will render here */}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="editorial" role="tabpanel" aria-labelledby="editorial-tab">
                                    <div className="swiper-container project-active-three">
                                        <div className="swiper-wrapper portfolio-editorial" id="portfolio-print-container">
                                            {/* editorial design will render here */}
                                            {/* editorial design will render here */}
                                            <div className="swiper-slide" style={{ display: 'none' }}>
                                            </div>
                                            {/* editorial design will render here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-shape-wrap-two">
                <img src="/assets/img/images/h3_project_shape.png" alt="" />
            </div>
        </section>

    );
};

export default Projects;