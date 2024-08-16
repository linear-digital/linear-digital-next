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

const AddService = ({ setRefresh }: { setRefresh: Dispatch<any> }) => {
    const onFinish: FormProps<ServiceType>['onFinish'] = async (values) => {
        // console.log('Success:', values);
        try {
            const res = await api.post(`/services`, values)
            setRefresh(Math.random())
            toast.success("Updated Successfully!")
        } catch (error) {
            toast.error("Something went wrong!")
        }
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
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
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Add Service
                </Button>
                
            </Form.Item>
        </Form>
    );
}

export default AddService;
