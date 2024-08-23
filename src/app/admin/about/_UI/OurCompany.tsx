'use client';
import api from '@/util/axios';
import { fetcher } from '@/util/fetcher';
import { Button } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';

interface Others {
    options: Object; // Update the type to string[]
}

interface State {
    name: string;
    title: string;
    description: string;
    others: Others;
}

const OurCompany = () => {
    const { data: title } = useSWR('https://ld.mdtamiz.com/api/titles/66c8a020b31d2cc0b1eccc5b',
        fetcher);
    const { data: title2 } = useSWR('https://ld.mdtamiz.com/api/titles/66c8a1f9b31d2cc0b1eccc5c',
        fetcher);
    const [content, setContent] = React.useState({
        name: "",
        title: "",
        description: ""
    })
    const [content2, setContent2] = React.useState<State>({
        name: "",
        title: "",
        description: "",
        others: {
            options: {}
        }
    })
    const updateData = async () => {
        try {
            const res = await api.put('/titles/66c8a020b31d2cc0b1eccc5b', content)
            toast.success("Updated Successfully!")
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }
    const updateData2 = async () => {
        try {
            const res = await api.put('/titles/66c8a1f9b31d2cc0b1eccc5c', content2)
            // console.log(content2);
            toast.success("Updated Successfully!")
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }
    React.useEffect(() => {
        setContent((prev) => ({ ...prev, name: title?.name, title: title?.title, description: title?.description }))
        // set content 2
        setContent2((prev) => ({ ...prev, name: title2?.name, title: title2?.title, description: title2?.description, others: title2?.others }))
    }, [title, title2])
    return (
        <div>
            <section className="history-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title white-title text-center mb-45">
                                <span className="sub-title"

                                >
                                    <div contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        onInput={(e) => {
                                            const text = e.currentTarget?.innerText || "";
                                            setContent((prev) => ({ ...prev, name: text }));
                                        }}
                                    >
                                        {title?.name}
                                    </div>

                                </span>
                                <h2 className="title"
                                    contentEditable={true}
                                    suppressContentEditableWarning={true}
                                    onInput={(e) => {
                                        const text = e.currentTarget?.innerText || "";
                                        setContent((prev) => ({ ...prev, title: text }));
                                    }}
                                >
                                    {title?.title}</h2>
                                <p
                                    contentEditable={true}
                                    suppressContentEditableWarning={true}
                                    onInput={(e) => {
                                        const text = e.currentTarget?.innerText || "";
                                        setContent((prev) => ({ ...prev, description: text }));
                                    }}
                                >
                                    {title?.description}
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <Button type="primary" onClick={updateData}
                            >Update Section</Button>
                        </div>
                    </div>
                    <div className="history-inner">
                        <div className="history-img">
                            <img src="/assets/img/images/history_img.jpg" alt="" />
                        </div>
                        <div className="row g-0 justify-content-end">
                            <div className="col-lg-6">
                                <div className="history-content">
                                    <h2 className="title"
                                        contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        onInput={(e) => {
                                            const text = e.currentTarget?.innerText || "";
                                            setContent2((prev) => ({ ...prev, title: text }));
                                        }}
                                    >
                                        {title2?.title}
                                    </h2>
                                    <p
                                        contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        onInput={(e) => {
                                            const text = e.currentTarget?.innerText || "";
                                            setContent2((prev) => ({ ...prev, description: text }));
                                        }}
                                    >
                                        {title2?.description}
                                    </p>
                                    <ul className="list-wrap">
                                        {/* {
                                            title2?.others?.options?.map((item: any, index: number) => (
                                               
                                            ))
                                        } */}
                                        <li ><i className="far fa-check" />
                                            <div
                                                contentEditable={true}
                                                suppressContentEditableWarning={true}
                                                onInput={(e) => {
                                                    const text = e.currentTarget?.innerText || "";
                                                    setContent2((prev) => ({ ...prev, others: { ...prev.others, options: { ...prev.others.options, op1: text } } }));
                                                }}
                                            >
                                                {title2?.others?.options.op1}
                                            </div>
                                        </li>
                                        <li ><i className="far fa-check" />
                                            <div
                                                contentEditable={true}
                                                suppressContentEditableWarning={true}
                                                onInput={(e) => {
                                                    const text = e.currentTarget?.innerText || "";
                                                    setContent2((prev) => ({ ...prev, others: { ...prev.others, options: { ...prev.others.options, op2: text } } }));
                                                }}
                                            >
                                                {title2?.others?.options.op2}
                                            </div>
                                        </li>
                                        <li ><i className="far fa-check" />
                                            <div
                                                contentEditable={true}
                                                suppressContentEditableWarning={true}
                                                onInput={(e) => {
                                                    const text = e.currentTarget?.innerText || "";
                                                    setContent2((prev) => ({ ...prev, others: { ...prev.others, options: { ...prev.others.options, op3: text } } }));
                                                }}
                                            >
                                                {title2?.others?.options.op3}
                                            </div>
                                        </li>
                                    </ul>
                                    <Button type="primary" className='mt-4' onClick={updateData2}>Update Section</Button>
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