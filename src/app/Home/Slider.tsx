'use client'

import api from '@/util/axios';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
async function getData() {
    try {
        const res = await api.get('/titles/65240a3908b45b9c479349ff')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        return res.data
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}
const Slider = () => {
    const { data } = useSWR('https://ld.mdtamiz.com/api/titles/65240a3908b45b9c479349ff', async () => await getData())
    return (
        <section className="slider-area">
            <div className="slider-active">
                <div className="single-slider">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-0 order-lg-2">
                                <div className="slider-img text-end" data-animation="fadeInRight" data-delay=".8s">
                                    <img src="/assets/img/slider/slider_img01.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="slider-content">
                                    <div className="section-title title-style-two ">
                                        <span className="sub-title" style={{
                                            fontSize: "30px",
                                        }}>Linear Digital Agency</span>
                                    </div>
                                    <h1 id="hero-title" className="title" data-animation="fadeInUp" data-delay=".2s">
                                        {data?.title || "Graphics & Web  Development Services."}
                                    </h1>
                                    <p id="hero-desc" data-animation="fadeInUp" data-delay=".4s">
                                        {data?.description}
                                    </p>
                                    <div className="slider-btn">
                                        <Link href="/contact" className="btn" data-animation="fadeInLeft" data-delay=".6s">Get
                                            Started <span /></Link>
                                        <a href="#" className="popup-video" data-animation="fadeInRight" data-delay=".6s">See Live
                                            Demo <i className="fas fa-play pulse" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-shape-wrap">
                <img src="/assets/img/slider/slider_shape01.png" alt="" />
                <img src="/assets/img/slider/slider_shape02.png" alt="" />
                <img src="/assets/img/slider/slider_shape03.png" alt="" />
                <img src="/assets/img/slider/slider_shape04.png" alt="" />
                <img src="/assets/img/slider/slider_shape05.png" alt="" />
                <img src="/assets/img/slider/slider_shape06.png" alt="" />
            </div>
        </section>

    );
};

export default Slider;