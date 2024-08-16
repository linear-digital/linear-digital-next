import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import api from '@/util/axios';
import { categorys } from '@/app/portfolio/_UI/Portfolios';
import { Button } from 'react-bootstrap';
import UploadImage from '../../portfolio/_UI/Upload';
import toast from 'react-hot-toast';

function MyVerticallyCenteredModal(props: any) {
    const [imageUrl, setImageUrl] = useState(props?.data?.image);
    const updateData = async (e: any) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        try {
            if (!imageUrl) {
                return console.error("Please Upload Image")
            }
            const res = await api.put(`/review/${props?.data?._id}`, {
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
    const deleteData = async () => {
        try {
            const confirm = window.confirm("Are you sure you want to delete this review?")
            if (!confirm) {
                return
            }
            const res = await api.delete(`/review/${props?.data?._id}`)
            props?.setRefesh(Math.random())
            props?.onHide()
            toast.success("Deleted Successfully!")
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
                        Update
                    </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={deleteData} className='btn-search bg-danger'>Delete Review</button>
            </Modal.Footer>
        </Modal>
    );
}

function UpdateReview({ setRefesh, data }: { setRefesh: any, data: any }) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button onClick={() => setModalShow(true)} className='btn-search mt-3'>Update Review</button>
            {
                modalShow && <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setRefesh={setRefesh}
                    data={data}
                />
            }
        </>
    );
}

export default UpdateReview;