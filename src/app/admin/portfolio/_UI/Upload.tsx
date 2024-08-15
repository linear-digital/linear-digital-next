import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Flex, message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    return  isLt2M;
};

const UploadImage = ({ imageUrl, setImageUrl }: { imageUrl: string, setImageUrl: any }) => {
    const [loading, setLoading] = useState(false);


    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        console.log(info);
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            setImageUrl(info.file.response.url);
            setLoading(false);
        }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <Flex gap="middle" wrap >
            <Upload
                name="image"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://ld.mdtamiz.com/api/upload"
                onChange={handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        </Flex>
    );
};

export default UploadImage;