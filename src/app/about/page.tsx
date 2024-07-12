import Navbar from '@/Components/Bars/Navbar';
import React from 'react';
import Counter from '../Home/Counter';
import Review from '../Home/Review';
import Footer from '@/Components/Bars/Footer';
import Team from '../Home/Team';
import type { Metadata, ResolvingMetadata } from 'next'
export async function generateMetadata(
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
 
    return {
      title: "Linear Digital Limited - About Us",
    }
  }
const page = () => {
    return (
        <div>
            <Navbar />
            <section className="breadcrumb-area pt-175 pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h1 className="title">About Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-shape-wrap">
                    <img src="/assets/img/images/breadcrumb_shape01.png" alt="" />
                    <img src="/assets/img/images/breadcrumb_shape02.png" alt="" />
                </div>
            </section>
            <Counter />
            <section className="inner-services-area pt-110 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title title-style-two text-center mb-60">
                                <span className="sub-title">Graphic Service</span>
                                <h2 className="title">Creative &amp; Branding Design</h2>
                            </div>
                        </div>
                    </div>
                    <div className="inner-services-item-wrap">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon01.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title"><a href="services-details.html">Advertising</a></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon02.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title"><a href="services-details.html">Development</a></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon03.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title"><a href="services-details.html">Branding</a></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon04.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title"><a href="services-details.html">Product Design</a></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon05.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title"><a href="services-details.html">Software</a></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon06.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title"><a href="services-details.html">Marketing</a></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon07.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title"><a href="services-details.html">Cinematography</a></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="services-item-four">
                                    <div className="services-icon-four">
                                        <img src="/assets/img/icon/inner_services_icon08.png" alt="" />
                                    </div>
                                    <div className="services-content-four">
                                        <h2 className="title"><a href="services-details.html">Strategy Services</a></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* success Area Start */}
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
                                    <span className="sub-title">Company Success</span>
                                    <h2 className="title">A Company’s Success is An Ongoing Stream of Happiness</h2>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard.</p>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="success-shape-wrap">
                    <img src="/assets/img/images/success_shape01.png" alt="" />
                    <img src="/assets/img/images/success_shape02.png" alt="" />
                </div>
            </section>
            <section className="history-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title white-title text-center mb-45">
                                <span className="sub-title">Our Company</span>
                                <h2 className="title">Company History</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div className="history-inner">
                        <div className="history-img">
                            <img src="/assets/img/images/history_img.jpg" alt="" />
                        </div>
                        <div className="row g-0 justify-content-end">
                            <div className="col-lg-6">
                                <div className="history-content">
                                    <h2 className="title">The Intention was to Establish The Company</h2>
                                    <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed
                                        laoreet, natoque ac eget imperdiet.
                                        Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod
                                        varius mi,</p>
                                    <ul className="list-wrap">
                                        <li><i className="far fa-check" />Everyone can design at low cost</li>
                                        <li><i className="far fa-check" />Designing in a different way</li>
                                        <li><i className="far fa-check" />Our designs sill be world wide best designs</li>
                                    </ul>
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
                                    <p>January 14 th</p>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                <span className="dot pulse-four" />
                                <div className="content">
                                    <h5 className="title">2021</h5>
                                    <p>January 14 th</p>
                                </div>
                            </li>
                            <li className="wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1.5s">
                                <span className="dot pulse-five" />
                                <div className="content">
                                    <h5 className="title">2022</h5>
                                    <p>January 14 th</p>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                <span className="dot pulse-six" />
                                <div className="content">
                                    <h5 className="title">2023</h5>
                                    <p>January 14 th</p>
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
            <div className="mt-100">
                <Team />
            </div>

            <Review />
            <Footer />
        </div>
    );
};

export default page;