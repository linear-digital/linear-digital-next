'use client';

import React from 'react';
import AddReview from './_UI/AddReview';
import Link from 'next/link';
import api from '@/util/axios';
import { Image } from 'antd';
import UpdateReview from './_UI/UpdateReview';
import Contact from '@/app/Home/Contact';
import Footer from '@/Components/Bars/Footer';

const page = () => {
    const [refesh, setRefesh] = React.useState("");
    const [reviews, setReviews] = React.useState([]);
    React.useEffect(() => {
        (
            async () => {
                try {
                    const res = await api.get('/review');
                    setReviews(res.data)
                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [refesh])
    return (
        <div>
            <div className="container">
                <h2 className='text-center mt-5 mb-5'>Reviews</h2>
                <AddReview setRefesh={setRefesh} />

                <div className="review-grid gap-4 mt-4">
                    {
                        reviews.map((item: any, index) => {
                            return <div key={index} className=" mb-3">
                                <Image src={item.image} className='' alt="" width={'100%'} style={{
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                    overflow: 'hidden'
                                }} />
                                <UpdateReview setRefesh={setRefesh} data={item} />
                            </div>
                        })
                    }
                </div>
            </div>
        
        </div>
    );
};

export default page;