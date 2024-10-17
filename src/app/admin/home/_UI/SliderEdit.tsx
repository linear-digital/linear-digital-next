'use client'

import api from '@/util/axios';
import { fetcher } from '@/util/fetcher';
import axios from 'axios';

import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';

const SliderEdit = () => {
    const { data } = useSWR('https://server.lineardigital.co/api/titles/65240a3908b45b9c479349ff', fetcher)
    const [content, setContent] = React.useState({
        title: data?.title,
        description: data?.description
    });

    React.useEffect(() => {
        setContent((prev) => ({ ...prev, title: data?.title, description: data?.description }))
    }, [data])

    const updateData = async () => {
        try {
            const res = await api.put('/titles/65240a3908b45b9c479349ff', content)
            toast.success("Updated Successfully!")
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }
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
                                    <h2 id="hero-title" className="title" data-animation="fadeInUp" data-delay=".2s"
                                        contentEditable
                                        onInput={(e: any) => {
                                            setContent((prev) => ({ ...prev, title: e.target.innerText }))
                                        }}
                                    >
                                        {data?.title}
                                    </h2>
                                    <p id="hero-desc" data-animation="fadeInUp" data-delay=".4s"
                                        contentEditable
                                        onInput={(e: any) => {
                                            setContent((prev) => ({ ...prev, description: e.target.innerText }))
                                        }}
                                    >
                                        {data?.description}
                                    </p>
                                    <div className="slider-btn">
                                        <button
                                            onClick={updateData}
                                            className="btn" data-animation="fadeInLeft" data-delay=".6s">
                                                Update
                                        </button>
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

export default SliderEdit;