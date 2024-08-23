'use client';

import api from '@/util/axios';
import { fetcher } from '@/util/fetcher';
import { Button } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';

const CompanySuccess = () => {
    const { data: title } = useSWR('https://ld.mdtamiz.com/api/titles/66c89d5fb31d2cc0b1eccc5a', fetcher);

    const [content, setContent] = React.useState({
        name: "",
        title: "",
        description: ""
    })
    const updateData = async () => {
        try {
            const res = await api.put('/titles/66c89d5fb31d2cc0b1eccc5a', content)
            toast.success("Updated Successfully!")
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }
    React.useEffect(() => {
        setContent((prev) => ({ ...prev, name: title?.name, title: title?.title, description: title?.description }))
    }, [title])
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
                                    <span className="sub-title"

                                    >
                                        <div
                                            contentEditable={true}
                                            suppressContentEditableWarning={true}
                                            onInput={(e: any) => { setContent({ ...content, name: e.target.innerText }) }}
                                        >
                                            {
                                                title?.name
                                            }
                                        </div>
                                    </span>
                                    <h2 className="title"
                                        contentEditable={true}
                                        onInput={(e: any) => { setContent({ ...content, title: e.target.innerText }) }}
                                    >
                                        {title?.title}
                                    </h2>
                                </div>
                                <p
                                    contentEditable={true}
                                    onInput={(e: any) => { setContent({ ...content, description: e.target.innerText }) }}
                                >
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
                                <Button
                                    size='large'
                                    className='mt-3'
                                    type="primary"
                                    onClick={updateData}>Update Section</Button>
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