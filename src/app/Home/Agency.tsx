import api from '@/util/axios';

import React from 'react';
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
const Agency = async () => {
    const data = await getData()
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
                                <h2 className="title" id="about-title">
                                    {data?.title}
                                </h2>
                            </div>
                            <p className="info-one" id="about-desc">
                                {data?.description}
                            </p>
                            <a href="about-us.php" className="btn">Learn More <span /></a>
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

export default Agency;