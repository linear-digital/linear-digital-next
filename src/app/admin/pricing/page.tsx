'use client';

import { fetcher } from '@/util/fetcher';
import React from 'react';
import useSWR from 'swr';
import PricingCard from './_Ui/PricingCard';
export interface Pricing {
    _id: string;
    name: string;
    price: number;
    service1: string;
    service2: string;
    service3: string;
    service4: string;
    service5: string;
    service6: string;
    service7?: string;
    service8?: string;
    service9?: string;
    service10?: string;
    description: string;
}
const page = () => {
    const { data } = useSWR('https://ld.mdtamiz.com/api/pricing', fetcher);
    if (!data) {
        return <div className='text-center'>Loading...</div>;
    }
    const pricing: Pricing[] = data.pricing || [];
    return (
        <div className='container'>
            <h1 className='text-center'>Update Pricing</h1>
            <div className='row mt-5'>
                {
                     pricing?.map((item: any) => <PricingCard key={item._id} item={item}/>)
                 }
            </div>
        </div>
    );
};

export default page;