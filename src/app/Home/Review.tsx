'use client'
import Footer from '@/Components/Bars/Footer';
import api from '@/util/axios';
import { Image } from 'antd';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
const getallreview = async () => {
    const res = await api.get('/review')
    return res.data
}
const Review = ({ page }: any) => {
    const { data: review } = useSWR('https://ld.mdtamiz.com/api/review', async () => await getallreview())
    return (
        <section className="testimonial-area-two">
            <div className="container">
                <div className="row justify-content-center mt-120">
                    <div className="col-lg-10">
                        <div className="section-title title-style-two text-center white-title mb-50 ">
                            <h2 className="title text-black">
                                What Our Clients Say
                            </h2>
                            <p className='mt-3'>
                                Get it all with Linear Digital. They do.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        boxShadow: 'whitesmoke 0px 5px 5px',
                        borderRadius: '20px',
                        backgroundColor: 'white'
                    }}
                    className='px-lg-5 px-sm-4 pt-2 pb-5 '
                >
                    <div className="review-grid gap-4 justify-content-center" >
                        {
                            page === "main" ?
                                review?.map((item: any, index: number) => {
                                    return (
                                        <div key={index} className="rounded overflow-hidden ">
                                            <Image src={item.image} className='' alt="" width={'100%'} style={{
                                                objectFit: 'cover',
                                                borderRadius: '5px',
                                                overflow: 'hidden',
                                                padding: '8px',
                                                backgroundColor: '#010901'
                                            }} />
                                        </div>
                                    )
                                })
                                :
                                review?.slice(0, 9).map((item: any, index: number) => {
                                    return (
                                        <div key={index} className="rounded overflow-hidden">
                                            <Image src={item.image} className='' alt="" width={'100%'} style={{
                                                objectFit: 'cover',
                                                borderRadius: '5px',
                                                overflow: 'hidden',
                                                padding: '8px',
                                                backgroundColor: '#010901'
                                            }} />
                                        </div>
                                    )
                                })
                        }
                    </div>
                    {
                        page !== "main" &&
                        <div className="d-flex justify-content-center mt-4">
                            <Link href={'/review'} className='btn-search px-5 py-3 ' style={{
                                fontSize: '16px',
                                borderRadius: '10px',
                            }}>View All</Link>
                        </div>
                    }

                </div>

            </div>
        </section>

    );
};

export default Review;