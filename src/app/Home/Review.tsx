
import Footer from '@/Components/Bars/Footer';
import api from '@/util/axios';
import { Image } from 'antd';
import Link from 'next/link';
import React from 'react';
const getallreview = async () => {
    const res = await api.get('/review')
    return res.data
}
const Review = async ({ page }: any) => {
    const review = await getallreview()
    return (
        <section className="testimonial-area-two">
            <div className="container">
                <h1 className='text-center'>
                    What Our Clients Have To Say
                </h1>
                <p className='text-center'>
                    Get it all with Linear Digital. They do.
                </p>
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
                                                overflow: 'hidden'
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
                                                overflow: 'hidden'
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