
'use client'
import api from '@/util/axios';
import { fetcher } from '@/util/fetcher';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';

const EditAgency = () => {
    const { data, isLoading } = useSWR('https://ld.mdtamiz.com/api/titles/65240a3908b45b9c479349ff', fetcher)
    const [content, setContent] = React.useState({
        title: "",
        description: ""
    })

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
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <section className="agency-area pt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="agency-img text-center">
                            <img src="/assets/img/images/agency_img.png" alt="" loading="lazy" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="agency-content">
                            <div className="section-title title-style-two mb-20">
                                <span className="sub-title">Our Agency</span>
                                <h2 className="title" id="about-title"
                                    contentEditable={true}
                                    suppressContentEditableWarning={true}
                                    onInput={(e: any) => setContent({ ...content, title: e.target.innerText })}
                                >
                                    {data?.title}
                                </h2>
                            </div>
                            <p className="info-one" id="about-desc"
                                contentEditable={true}
                                suppressContentEditableWarning={true}
                                onInput={(e: any) => setContent({ ...content, description: e.target.innerText })}
                            >
                                {data?.description}
                            </p>
                            <button onClick={updateData} className="btn">Learn More <span /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="agency-shape-wrap">
                <img src="/assets/img/images/agency_shape01.png" alt="" />
                <img src="/assets/img/images/agency_shape02.png" alt="" />
                <img src="/assets/img/images/agency_shape03.png" alt="" />
                <img src="/assets/img/images/agency_shape04.png" alt="" />
            </div>
        </section>

    );
};

export default EditAgency;