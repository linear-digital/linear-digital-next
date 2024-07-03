'use client';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Review = () => {
    return (
        <section className="testimonial-area-three">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="section-title title-style-two white-title mb-45">
                            <h2 className="title">Some Words From <br /> Our Customers</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial-nav">
                            <button className="swiper-button-prev" />
                            <button className="swiper-button-next" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="swiper-container testimonial-active-three">
                            <div className="swiper-wrapper">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="swiper-wrapper"
                                >
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">jaytradz</h4>
                                                <span>Germany</span>
                                                <p>“Very professional and gave me everything I asked for and more. Gave
                                                    important detail and gave each page a matching stock photo to enhance
                                                    the story on every page. Highly recommend !!!!”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item-three">
                                                <div className="testimonial-thumb-three">
                                                    <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                                </div>
                                                <div className="testimonial-content-three">
                                                    <h4 className="title">jaytradz</h4>
                                                    <span>Germany</span>
                                                    <p>“Very professional and gave me everything I asked for and more. Gave
                                                        important detail and gave each page a matching stock photo to enhance
                                                        the story on every page. Highly recommend !!!!”</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">involve_people</h4>
                                                <span>United Kingdom</span>
                                                <p>“This Flatform was great, very responsive to feedback and change
                                                    requests. The end results was exactly what I needed in terms of quality
                                                    and it was delivered on time. Very satisfied, great job! Thank you.”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">Milfordriddle</h4>
                                                <span>United States</span>
                                                <p>“Linear Digital is top notch, quality work and quick turnaround, easy to
                                                    communicate with. They elevates the work we request from them into
                                                    something even better - look forward to work with for a long time”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="testimonial-swiper-pagination" />
            </div>
            <div className="testimonial-shape-wrap">
                <img src="/assets/img/images/testimonial_shape01.png" alt="" />
                <img src="/assets/img/images/testimonial_shape02.png" alt="" />
                <img src="/assets/img/images/testimonial_shape03.png" alt="" />
                <img src="/assets/img/images/testimonial_shape04.png" alt="" />
            </div>
        </section>

    );
};

export default Review;