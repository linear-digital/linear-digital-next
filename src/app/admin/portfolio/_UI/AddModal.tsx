import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import UploadImage from './Upload';
import api from '@/util/axios';
import { categorys } from '@/app/portfolio/_UI/Portfolios';
import { Button } from 'react-bootstrap';

function MyVerticallyCenteredModal(props: any) {
    const [imageUrl, setImageUrl] = useState("");
    const updateData = async (e: any) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        try {
            if (!imageUrl) {
                return console.error("Please Upload Image")
            }
            const res = await api.post(`/portfolio`, {
                ...data,
                images: [imageUrl],
                cover: imageUrl,
                funtrionalitys: "N/A",
                languages: ["N/A"],
                smDesc: "N/A",
                client: "N/A",
                user: {
                    name: "N/A",
                }
            })
            props?.setRefesh(Math.random())
            props?.onHide()
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
                    Add New Portfolio
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="" onSubmit={updateData}>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Project Category</label>
                        <select required className="form-select col-auto" aria-label="Select Category select example"
                            name='category'
                        >
                            <option value={""}>Select Category</option>
                            {
                                categorys?.filter((item: any) => item?.id !== "all").map((item: any) => {
                                    return <option key={item?.id} value={item?.id}>{item?.name}</option>
                                })
                            }
                            <option value={"web-app"}>Web App</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Project URL</label>
                        <input required name='url' id='name' type="text" className="form-control"
                            placeholder='Project URL'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Project Name</label>
                        <input required name='name' id='name' type="text" className="form-control"
                            placeholder='Project Name'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="desc" className="form-label">Project Description</label>
                        <textarea name='description' className="form-control" id="desc" rows={3}
                            placeholder='Project Description'
                        />
                    </div>
                    <UploadImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
                    <button className='btn-search mt-4'>
                        Update Portfolio
                    </button>
                </form>
            </Modal.Body>
            
        </Modal>
    );
}

function AddModal({ setRefesh }: { setRefesh: any }) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button onClick={() => setModalShow(true)} className='btn-search mb-4'>Add New Portfolio</button>
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

export default AddModal;