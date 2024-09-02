import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import UploadImage from './Upload';
import api from '@/util/axios';
import { Button } from 'react-bootstrap';
import { categorys } from '@/app/portfolio/_UI/Portfolios';

function MyVerticallyCenteredModal(props: any) {
    const [imageUrl, setImageUrl] = useState(props?.data?.images[0]);
    const updateData = async (e: any) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        try {
            const res = await api.put(`/portfolio/${props?.data?._id}`, {
                ...data,
                images: [imageUrl]
            })
            props?.setRefesh(Math.random())
            props?.onHide()
        } catch (error) {
            console.error(error)
        }
    }
    const deleteData = async () => {
        try {
            const confirm = window.confirm("Are you sure you want to delete this portfolio?")

            if (confirm) {
                const res = await api.delete(`/portfolio/${props?.data?._id}`)
                props?.setRefesh(Math.random())
                props?.onHide()
            }
        } catch (error) {
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
                    Update This Portfolio
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="" onSubmit={updateData}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Project Name</label>
                        <input name='name' id='name' type="text" className="form-control"
                            defaultValue={props?.data?.name}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Project Category</label>
                        <select required className="form-select col-auto" aria-label="Select Category select example"
                            name='category'
                            defaultValue={props?.data?.category}
                        >
                            <option value={""}>Select Category</option>
                            {
                                categorys?.filter((item: any) => item?.id !== "all").map((item: any) => {
                                    return <option key={item?.id} value={item?.id}>{item?.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="desc" className="form-label">Project Description</label>
                        <textarea name='description' className="form-control" id="desc" rows={3} defaultValue={props?.data?.description} />
                    </div>
                    <UploadImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
                    <button className='btn-search mt-4'>
                        Update Portfolio
                    </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button
                    onClick={deleteData}
                    className='btn-search'
                    style={{
                        backgroundColor: "red",
                    }}
                >
                    Delete Portfolio
                </button>
            </Modal.Footer>
        </Modal>
    );
}

function UpdateModel({ data, setRefesh }: { data: any, setRefesh: any }) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button onClick={() => setModalShow(true)} className='btn-search'>Update Portfolio</button>
            {
                modalShow && <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={data}
                    setRefesh={setRefesh}
                />
            }
        </>
    );
}

export default UpdateModel;