'use client'
import { fetcher } from '@/util/fetcher';
import React from 'react';
import useSWR from 'swr';
import GenPriCard from './_Ui/GenPriCard';
import api from '@/util/axios';
import toast from 'react-hot-toast';
import { Button, Input } from 'antd';

const page = () => {
    const { data } = useSWR('https://ld.mdtamiz.com/api/generalprice', fetcher);
    const onFinish = async (event: any) => {
        event.preventDefault()
        try {
            const title = event.target.title.value
            const res = await api.post(`/generalprice`, {
                title
            })
            toast.success("Added Successfully!")
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Something went wrong!")
        }
    }
    if (!data) {
        return <div className='text-center'>Loading...</div>;
    }
    return (
        <div className='container py-4'>
            <h1 className='text-center'>Update General Pricing</h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                marginTop: "40px",
            }}>
                <form className="" onSubmit={onFinish}>
                    <Input name='title' placeholder='Enter Pricing Details'/>
                    <Button htmlType="submit" type="primary" className='mt-2'>Add New Price</Button>
                </form>
                {
                    data?.map((item: any) => <GenPriCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default page;