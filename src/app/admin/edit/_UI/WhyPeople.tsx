'use client'
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';
async function getData() {
    try {
        const res = await axios.get('https://ld.mdtamiz.com/api/titles/652ed33c185f243a20a18115')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        return res.data
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}
const WhyPeople = () => {
    const { data } = useSWR('https://ld.mdtamiz.com/api/titles/652ed33c185f243a20a18115', async () => getData())
    const [content, setContent] = React.useState({
        title: "",
        description: ""
    });
    const [others, setOthers] = React.useState<any>([]);
    React.useEffect(() => {
        setContent((prev) => ({ ...prev, title: data?.title, description: data?.description }))
        setOthers(data?.others)
    }, [data])

    const updateData = async () => {
        try {
            const res = await axios.put('https://ld.mdtamiz.com/api/titles/652ed33c185f243a20a18115', { ...content, others })
            toast.success("Updated Successfully!")
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }

    if (!data || !others) {
        return <div>Loading...</div>;
    }
    return (
        <section className="counter-area-two pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-0 order-lg-2">
                        <div className="counter-item-wrap-two">
                            <ul className="list-wrap">
                                <li>
                                    <div className="counter-item-two">
                                        <div className="icon">
                                            <img src="/assets/img/icon/counter_icon01.png" alt="" />
                                        </div>
                                        <div className="content center">
                                            <h2 className="count"
                                                contentEditable
                                                onInput={(e: any) => {
                                                    setOthers((prev: any) => ({ ...prev, 0: { ...prev[0], value: e.target.innerText } }))
                                                }}
                                            >
                                                {
                                                    others[0]?.value
                                                }
                                            </h2>
                                            <p
                                                contentEditable
                                                onInput={(e: any) => {
                                                    setOthers((prev: any) => ({ ...prev, 0: { ...prev[0], title: e.target.innerText } }))
                                                }}
                                            >
                                                {
                                                    others[0]?.title
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-item-two">
                                        <div className="icon">
                                            <img src="/assets/img/icon/counter_icon02.png" alt="" />
                                        </div>
                                        <div className="content center">
                                            <span className="count odometer" data-count={6}
                                                contentEditable
                                                onInput={(e: any) => {
                                                    setOthers((prev: any) => ({ ...prev, 1: { ...prev[1], value: e.target.innerText } }))
                                                }}
                                            >{others[1]?.value}</span>
                                            <p
                                                contentEditable
                                                onInput={(e: any) => {
                                                    setOthers((prev: any) => ({ ...prev, 1: { ...prev[1], title: e.target.innerText } }))
                                                }}
                                            >{others[1]?.title}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-item-two">
                                        <div className="icon">
                                            <img src="/assets/img/icon/counter_icon03.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"
                                                contentEditable
                                                onInput={(e: any) => {
                                                    setOthers((prev: any) => ({ ...prev, 2: { ...prev[2], value: e.target.innerText } }))
                                                }}
                                            >
                                                {others[2]?.value}
                                            </h2>
                                            <p
                                                contentEditable
                                                onInput={(e: any) => {
                                                    setOthers((prev: any) => ({ ...prev, 2: { ...prev[2], title: e.target.innerText } }))
                                                }}
                                            >
                                                {others[2]?.title}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-item-two">
                                        <div className="icon">
                                            <img src="/assets/img/icon/counter_icon04.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"
                                                contentEditable
                                                onInput={(e: any) => {
                                                    setOthers((prev: any) => ({ ...prev, 3: { ...prev[3], value: e.target.innerText } }))
                                                }}
                                            >
                                                {others[3]?.value}
                                            </h2>
                                            <p
                                                contentEditable
                                                onInput={(e: any) => {
                                                    setOthers((prev: any) => ({ ...prev, 3: { ...prev[3], title: e.target.innerText } }))
                                                }}
                                            >{others[3]?.title}</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="counter-content">
                            <div className="section-title title-style-two mb-20">
                                <span className="sub-title">Why People’s Like Us</span>
                                <h2 className="title"
                                    contentEditable
                                    onInput={(e: any) => {
                                        setContent((prev) => ({ ...prev, title: e.target.innerText }))
                                    }}
                                >
                                    {data?.title}
                                </h2>
                            </div>
                            <p className="info"
                                contentEditable
                                onInput={(e: any) => {
                                    setContent((prev) => ({ ...prev, description: e.target.innerText }))
                                }}
                            >
                                {data?.description}
                            </p>
                            <button
                                onClick={updateData}
                                className="btn">Update<span /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WhyPeople;