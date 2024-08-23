import api from '@/util/axios';
import { Button, Input, Popconfirm } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';

interface GenType {
    _id: string;
    title: string;
}

const GenPriCard = ({ item }: { item: GenType }) => {
    const onFinish = async (event: any) => {
        event.preventDefault()
        try {
            const title = event.target.title.value
            const res = await api.put(`/generalprice/${item?._id}`, {
                title
            })
            toast.success("Updated Successfully!")
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Something went wrong!")
        }
    }
    return (
        <form className="" onSubmit={onFinish}>
            <Input name='title' defaultValue={item?.title} />
            <Button htmlType="submit" type="primary" className='mt-2'>Update</Button>
            <Popconfirm
            onConfirm={async () => {
                const res = await api.delete(`/generalprice/${item?._id}`)
                toast.success("Deleted Successfully!")
                window.location.reload()
            }}
            className='ms-2'
                title="Delete the Price"
                description="Are you sure to delete this price item?"
            >
                <Button type="primary" danger>Delete</Button>
            </Popconfirm>
        </form>
    );
};

export default GenPriCard;