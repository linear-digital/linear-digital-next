import React, { Dispatch } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { ServiceType } from '../page';
import TextArea from 'antd/es/input/TextArea';
import api from '@/util/axios';
import toast from 'react-hot-toast';


const onFinishFailed: FormProps<ServiceType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const ServiceCard = ({ data, setRefresh }: { data: ServiceType, setRefresh: Dispatch<any> }) => {
    const onFinish: FormProps<ServiceType>['onFinish'] = async (values) => {
        // console.log('Success:', values);
        try {
            const res = await api.put(`/services/${data?._id}`, values)
            setRefresh(Math.random())
            toast.success("Updated Successfully!")
        } catch (error) {
            toast.error("Something went wrong!")
        }
    };
    const deleteData = async () => {
        try {
            const confirm = window.confirm("Are you sure you want to delete this service?")
            if (!confirm) {
                return
            }
            const res = await api.delete(`/services/${data?._id}`)
            setRefresh(Math.random())
            toast.success("Deleted Successfully!")
        } catch (error) {
            toast.error("Something went wrong!")
            console.error(error)
        }
    }
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ name: data?.name, desc: data?.desc }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
        >
            <Form.Item<ServiceType>
                label="Service Name"
                name="name"
                rules={[{ required: true, message: 'Please input Service Name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item<ServiceType>
                label="Service Description"
                name="desc"
                rules={[{ required: true, message: 'Please input Service Description!' }]}
            >
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                <Button type="primary" htmlType="submit">
                    Update
                </Button>
                <Button type="primary" onClick={deleteData} className='ms-3  bg-danger' color="error" >
                    Delete
                </Button>
            </Form.Item>
        </Form>
    );
}

export default ServiceCard;
