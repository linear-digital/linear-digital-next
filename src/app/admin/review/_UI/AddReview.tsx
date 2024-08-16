import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import api from '@/util/axios';
import { categorys } from '@/app/portfolio/_UI/Portfolios';
import { Button } from 'react-bootstrap';
import UploadImage from '../../portfolio/_UI/Upload';
import toast from 'react-hot-toast';

function MyVerticallyCenteredModal(props: any) {
    const [imageUrl, setImageUrl] = useState("");
    const updateData = async (e: any) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        try {
            if (!imageUrl) {
                return console.error("Please Upload Image")
            }
            const res = await api.post(`/review`, {
                image: imageUrl,
            })
            props?.setRefesh(Math.random())
            props?.onHide()
            toast.success("Added Successfully!")
        } catch (error) {
           toast.error("Something went wrong!")
           console.error(error)
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Review
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="" onSubmit={updateData}>
                    <UploadImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
                    <button className='btn-search mt-4'>
                        Add Review
                    </button>
                </form>
            </Modal.Body>

        </Modal>
    );
}

function AddReview({ setRefesh }: { setRefesh: any }) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button onClick={() => setModalShow(true)} className='btn-search mb-4'>Add New Review</button>
            {
                modalShow && <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setRefesh={setRefesh}
                />
            }
        </>
    );
}

export default AddReview;