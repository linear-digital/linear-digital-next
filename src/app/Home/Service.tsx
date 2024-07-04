import axios from 'axios';
import React from 'react';
async function getData() {
    try {
        const res = await axios.get('https://ld.mdtamiz.com/api/services')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        return res.data
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}
async function getTitle() {
    try {
        const res = await axios.get('https://ld.mdtamiz.com/api/titles/65240ab608b45b9c47934a08')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        return res.data
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}
const Service = async () => {
    const data = await getData()
    const content = await getTitle()
    return (
        <section className="services-area-three" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="section-title title-style-two text-center mb-45">
                            <span className="sub-title">What We Do</span>
                            <h2 className="title" id="service-title" dangerouslySetInnerHTML={{ __html: content?.title }}>
                                {/* service Title  */}
                            </h2>
                            <p id="service-desc" dangerouslySetInnerHTML={{ __html: content?.description }}>
                            </p>
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
                                    <h3 className="title">
                                        <a id="service1-name" href="#">
                                            {data[0].name}
                                        </a>
                                    </h3>
                                    <p id="service1-desc">
                                        {data[0].desc}
                                    </p>
                                    <a href="#" className="link-btn">Learn More <i className="fal fa-long-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-item-three">
                                <div className="services-icon-three">
                                    <img style={{ height: '55px !important' }} src="/assets/img/icon/new/programming.png" alt="" />
                                </div>
                                <div className="services-content-three">
                                    <h3 className="title">
                                        <a id="service2-name" href="#">
                                            {data[1].name}
                                        </a>
                                    </h3>
                                    <p id="service2-desc">
                                        {data[1].desc}
                                    </p>
                                    <a href="#" className="link-btn">Learn More <i className="fal fa-long-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-item-three">
                                <div className="services-icon-three">
                                    <img src="/assets/img/icon/new/web-app.png" alt="" />
                                </div>
                                <div className="services-content-three">
                                    <h3 className="title">
                                        <a id="service3-name" href="#">
                                            {data[2].name}
                                        </a>
                                    </h3>
                                    <p id="service3-desc">
                                        {data[2].desc}
                                    </p>
                                    <a href="#" className="link-btn">Learn More <i className="fal fa-long-arrow-right" /></a>
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

export default Service;