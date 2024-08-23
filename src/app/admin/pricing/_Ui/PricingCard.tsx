import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

import { Pricing } from '../page';
import api from '@/util/axios';
import toast from 'react-hot-toast';

type FieldType = {
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
};



const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const PricingCard = ({ item }: { item: Pricing }) => {
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            const res = await api.put(`/pricing/${item?._id}`, values)
            toast.success("Updated Successfully!")
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
        }
    };
    return (
        <div className="col-lg-6 col-md-12">
            <Form
                name="pricing"
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 17 }}
                style={{ maxWidth: 600 }}
                initialValues={{ ...item }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Name"
                    name="name"
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Description"
                    name="description"
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Price"
                    name="price"
                >
                    <Input type='number' />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Service 1"
                    name="service1"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Service 2"
                    name="service2"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Service 3"
                    name="service3"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Service 4"
                    name="service4"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Service 5"
                    name="service5"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Service 6"
                    name="service6"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Service 7"
                    name="service7"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Service 8"
                    name="service8"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Service 9"
                    name="service9"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Service 10"
                    name="service10"
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default PricingCard;


