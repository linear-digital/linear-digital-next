import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { ITeamProps } from '@/app/admin/team/_UI/Team';
import { title } from 'process';
import UploadImage from '@/app/admin/portfolio/_UI/Upload';
import TagSelector from './TagSelector';
import api from '@/util/axios';
import toast from 'react-hot-toast';

type FieldType = {
    name: string;
    title: string;
};


const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const UpateMember: React.FC<{ member: ITeamProps }> = ({ member }) => {
    const [photoUrl, setPhotoUrl] = React.useState(member?.photoUrl);
    const [tags, setTags] = React.useState(member?.details);
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        const newData = { ...values, photoUrl, details: tags }
        try {
            const res = await api.put(`/team/${member?._id}`, newData)
            toast.success("Updated Successfully!")
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
        }
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ name: member?.name, title: member?.title }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
        >
            <Form.Item<FieldType>
                label="Full Name"
                name="name"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input />
            </Form.Item>
            <TagSelector tags={tags} setTags={setTags} />
            <div className="mt-3">

            </div>
            <UploadImage setImageUrl={setPhotoUrl} imageUrl={photoUrl} />
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default UpateMember;