'use client';

import { fetcher } from '@/util/fetcher';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import PricingCard from './_Ui/PricingCard';
export interface Pricing {
    _id: string;
    name: string;
    price: number;
    category: string;
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
    
    const [category, setCategory] = useState("");
    const [pricing, setPricing] = useState<Pricing[]>([]);
    // const pricing: Pricing[] = data.pricing || [];

    useEffect(() => {
        if (category === "") {
            setPricing(data?.pricing);
        }
        else {
            setPricing(data?.pricing?.filter((item: any) => item.category === category));
        }
    }, [category, data?.pricing]);
    if (!data) {
        return <div className='text-center'>Loading...</div>;
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Update Pricing</h1>
            <div className="d-flex justify-content-center w-full mt-4">
                <select
                    style={{
                        maxWidth: "300px"
                    }}
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                    className="form-select" aria-label="Default select example">
                    <option value={""}>Select Category</option>
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX">UI/UX</option>
                </select>
            </div>
            <h2>{category ? category : "All"}</h2>
            <div className='row mt-5'>
                {
                    pricing?.map((item: any) => <PricingCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default page;