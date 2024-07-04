'use client'
import { fetcher } from '@/util/fetcher';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useSWR from 'swr';

const ServiceEdit = () => {
    const { data, isLoading } = useSWR('https://ld.mdtamiz.com/api/services', fetcher)
    const { data: service, isLoading: isLoadingService } = useSWR('https://ld.mdtamiz.com/api/titles/65240ab608b45b9c47934a08', fetcher)

    const [services, setServices] = useState([
        {
            _id: null,
            title: "",
            description: ""
        },
        {
            _id: null,
            title: "",
            description: ""
        },
        {
            _id: null,
            title: "",
            description: ""
        }
    ]);
    useEffect(() => {
        if (data?.length > 0) {
            setServices([
                {
                    _id: data?.[0]._id,
                    title: data?.[0].title,
                    description: data?.[0].description
                },
                {
                    _id: data?.[1]._id,
                    title: data?.[1].title,
                    description: data?.[1].description
                },
                {
                    _id: data?.[2]._id,
                    title: data?.[2].title,
                    description: data?.[2].description
                }
            ])
        }
    }, [data])
    const updateService = async (service: string) => {
        try {
            if (service === "service1") {
                await axios.put(`https://ld.mdtamiz.com/api/services/${services[0]._id}`, services[0])
                toast.success("Updated Successfully!")
            }
            if (service === "service2") {
                await axios.put(`https://ld.mdtamiz.com/api/services/${services[1]._id}`, services[1])
                toast.success("Updated Successfully!")
            }
            if (service === "service3") {
                await axios.put(`https://ld.mdtamiz.com/api/services/${services[2]._id}`, services[2])
                toast.success("Updated Successfully!")
            }
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }
    const [content, setContent] = React.useState({
        title: "",
        description: ""
    })
    const updateData = async () => {
        try {
            await axios.put('https://ld.mdtamiz.com/api/titles/65240ab608b45b9c47934a08', content)
            toast.success("Updated Successfully!")
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }
    useEffect(() => {
        setContent((prev) => ({ ...prev, title: service?.title, description: service?.description }))
    }, [services])
    if (isLoading || isLoadingService) {
        return <div>Loading...</div>;
    }
    return (
        <section className="services-area-three" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="section-title title-style-two text-center mb-45">
                            <span className="sub-title">What We Do</span>
                            <h2 className="title" id="service-title"
                                contentEditable={true}
                                suppressContentEditableWarning={true}
                                onInput={(e: any) => { setContent({ ...content, title: e.target.innerText }) }}
                                dangerouslySetInnerHTML={{ __html: service?.title }}
                            >
                            </h2>
                            <p id="service-desc"
                                contentEditable={true}
                                suppressContentEditableWarning={true}
                                onInput={(e: any) => { setContent({ ...content, description: e.target.innerText }) }}
                            >
                                {/* service Descricption */}
                                {/* We understand the importance of a strong online presence. Our team of skilled designers &amp; developers create visually stunning and highly professional design and functional websites tailored to your unique business needs. */}
                                {service?.description}
                            </p>
                            <div
                                onClick={() => updateData()}
                                className="link-btn">Update</div>
                        </div>

                    </div>
                </div>
                <div className="services-item-wrap">
                    <div className="row services-active">
                        <div className="col-lg-4">
                            <div className="services-item-three">
                                <div className="services-icon-three">
                                    <img src="/assets/img/icon/new/print.png" alt="" />
                                </div>
                                <div className="services-content-three">
                                    <h3 className="title"
                                        contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        onInput={(e: any) => {
                                            setServices((prev) => ({ ...prev, [0]: { ...prev[0], name: e.target.innerText } }))
                                        }}
                                    >
                                        {data[0].name}
                                    </h3>
                                    <p id="service1-desc"
                                        contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        onInput={(e: any) => {
                                            setServices((prev) => ({ ...prev, [0]: { ...prev[0], desc: e.target.innerText } }))
                                        }}
                                    >
                                        {data[0].desc}
                                    </p>
                                    <div
                                        onClick={() => updateService("service1")}
                                        className="link-btn">Update</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-item-three">
                                <div className="services-icon-three">
                                    <img style={{ height: '55px !important' }} src="/assets/img/icon/new/programming.png" alt="" />
                                </div>
                                <div className="services-content-three">
                                    <h3 className="title"
                                        contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        onInput={(e: any) => {
                                            setServices((prev) => ({ ...prev, [1]: { ...prev[1], name: e.target.innerText } }))
                                        }}
                                    >
                                        {data[1].name}
                                    </h3>
                                    <p id="service2-desc"
                                        contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        onInput={(e: any) => {
                                            setServices((prev) => ({ ...prev, [1]: { ...prev[1], desc: e.target.innerText } }))
                                        }}
                                    >
                                        {data[1].desc}
                                    </p>
                                    <div onClick={() => updateService("service2")} className="link-btn">Update</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-item-three">
                                <div className="services-icon-three">
                                    <img src="/assets/img/icon/new/web-app.png" alt="" />
                                </div>
                                <div className="services-content-three">
                                    <h3 className="title"
                                        contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        onInput={(e: any) => {
                                            setServices((prev) => ({ ...prev, [2]: { ...prev[2], name: e.target.innerText } }))
                                        }}
                                    >
                                        {data[2].name}
                                    </h3>
                                    <p id="service3-desc"
                                        contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        onInput={(e: any) => {
                                            setServices((prev) => ({ ...prev, [2]: { ...prev[2], desc: e.target.innerText } }))
                                        }}
                                    >
                                        {data[2].desc}
                                    </p>
                                    <div onClick={() => updateService("service3")} className="link-btn">Update</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-shape">
                <img src="/assets/img/images/h3_services_shape.png" alt="" />
            </div>
        </section>

    );
};

export default ServiceEdit;