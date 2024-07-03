import axios from 'axios';
import React from 'react';
async function getData() {
    try {
        const res = await axios.get('https://ld.mdtamiz.com/api/pricing')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
        return res.data.pricing
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}
const Pricing = async () => {
    const data = await getData()

    return (
        <section className="pricing-area pb-90 pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title title-style-two text-center white-title mb-50 ">
                            <h2 className="title text-black">The Right Plan for Your Business</h2>
                            <p >Find the perfect fit! Choose from tiered plans with features tailored to your
                                needs. All at budget-friendly prices.</p>
                        </div>
                    </div>
                </div>
                <div className="pricing-item-wrap">
                    <div className="pricing-tab">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="month-tab" data-bs-toggle="tab" data-bs-target="#month" type="button" role="tab" aria-controls="month" aria-selected="true">Graphic</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="year-tab" data-bs-toggle="tab" data-bs-target="#year" type="button" role="tab" aria-controls="year" aria-selected="false">Website</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane show active" id="month" role="tabpanel" aria-labelledby="month-tab">
                            <div className="row g-0 align-items-center justify-content-center">
                                {
                                    data.length && data?.slice(0, 3).map((item: any, index: any) => (
                                        <div className="col-lg-4 col-md-6" key={index} id={`web-pricing-${index + 1}`}>
                                            <div className={`pricing-item ${index === 1 ? 'active' : ''}`}>
                                                <div className="pricing-icon">
                                                    <img src="/assets/img/icon/pricing_icon01.png" alt="" />
                                                </div>
                                                <div className="pricing-top">
                                                    <h2 className="title">
                                                        {item.name}
                                                    </h2>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="pricing-price">
                                                    <h2 className="price"><span>$</span>${item.price}<strong /></h2>
                                                </div>
                                                <div className="pricing-list">
                                                    <h4 className="title">Everything in Starter</h4>
                                                    <ul className="list-wrap">
                                                        {
                                                            item.service1 && <li className=""><i className="far fa-check" />{item.service1}</li>
                                                        }
                                                        {
                                                            item.service2 && <li className=""><i className="far fa-check" />{item.service2}</li>
                                                        }
                                                        {
                                                            item.service3 && <li className=""><i className="far fa-check" />{item.service3}</li>
                                                        }
                                                        {
                                                            item.service4 && <li className=""><i className="far fa-check" />{item.service4}</li>
                                                        }
                                                        {
                                                            item.service5 && <li className=""><i className="far fa-check" />{item.service5}</li>
                                                        }
                                                        {
                                                            item.service6 && <li className=""><i className="far fa-check" />{item.service6}</li>
                                                        }
                                                        {
                                                            item.service7 && <li className=""><i className="far fa-check" />{item.service7}</li>
                                                        }
                                                        {
                                                            item.service8 && <li className=""><i className="far fa-check" />{item.service8}</li>
                                                        }
                                                        {
                                                            item.service9 && <li className=""><i className="far fa-check" />{item.service9}</li>
                                                        }
                                                        {
                                                            item.service10 && <li className=""><i className="far fa-check" />{item.service10}</li>
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="pricing-btn">
                                                    <a href="#" className="btn">Select This Plan</a>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                                <div className="col-lg-4 col-md-6" id="graphic-pricing-1">
                                    {/* Graphic Pricing 1 */}
                                    {/* Graphic Pricing 1 */}
                                    {/* Graphic Pricing 1 */}
                                </div>
                                <div className="col-lg-4 col-md-6 " id="graphic-pricing-2">
                                    {/* Graphic Pricing 2 */}
                                    {/* Graphic Pricing 2 */}
                                    {/* Graphic Pricing 2 */}
                                </div>
                                <div className="col-lg-4 col-md-6" id="graphic-pricing-3">
                                    {/* Graphic Pricing 3 */}
                                    {/* Graphic Pricing 3 */}
                                    {/* Graphic Pricing 3 */}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="year" role="tabpanel" aria-labelledby="year-tab">
                            <div className="row g-0 align-items-center justify-content-center">
                                <div className="col-lg-4 col-md-6" id="web-pricing-1">
                                    {/* web Price 1 */}
                                    {/* web Price 1 */}
                                    {/* web Price 1 */}
                                </div>
                                <div className="col-lg-4 col-md-6" id="web-pricing-2">
                                    {/* web price 2 */}
                                    {/* web price 2 */}
                                    {/* web price 2 */}
                                </div>
                                <div className="col-lg-4 col-md-6" id="web-pricing-3">
                                    {/* web price 3  */}
                                    {/* web price 3  */}
                                    {/* web price 3  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );
};

export default Pricing;

`

`