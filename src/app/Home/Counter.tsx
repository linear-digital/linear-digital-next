import api from '@/util/axios';
import React from 'react';
async function getData() {
    try {
        const res = await api.get('/titles/652ed33c185f243a20a18115')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        return res.data
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}
const Counter = async () => {
    const data = await getData()
    return (
        <section className="counter-area-two  pb-120">
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
                                            <h2 className="count"><span className="odometer" data-count={5} />5+</h2>
                                            <p>Years Online</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-item-two">
                                        <div className="icon">
                                            <img src="/assets/img/icon/counter_icon02.png" alt="" />
                                        </div>
                                        <div className="content center">
                                            <span className="count odometer" data-count={6} >6</span>
                                            <p>Workers</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-item-two">
                                        <div className="icon">
                                            <img src="/assets/img/icon/counter_icon03.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"><span className="odometer" data-count={430} />430+</h2>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-item-two">
                                        <div className="icon">
                                            <img src="/assets/img/icon/counter_icon04.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"><span className="odometer" data-count={500} />500+</h2>
                                            <p>Projects</p>
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
                                <h2 className="title" >
                                    {data?.title}
                                </h2>
                            </div>
                            <p className="info" >
                                {data?.description}
                            </p>
                            <button className="btn">Start a trial <span /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Counter;