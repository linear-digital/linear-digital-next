'use client';

import api from '@/util/axios';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const [location, setLocation] = React.useState({})
    const [details, setDetails] = React.useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        subject: ''
    })

    const updateState = (e: any) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        (
            async () => {
                try {
                    const res = await api.get('/location')
                    setLocation(res.data)
                } catch (error) {
                    console.error(error)
                }

            }
        )()
    }, [])
    const sendEmail = async (e: any) => {
        e.preventDefault()
        try {
            const res = await api.post('/mailer/send', details)
            setDetails({
                name: '',
                phone: '',
                email: '',
                message: '',
                subject: ''
            })
            toast.success("Email sent successfully!")
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
        }
    }
    return (
        <div>
            <section className="inner-contact-area">
                <div className="container">
                    <div className="inner-contact-wrap">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10">
                                <div className="section-title title-style-two mb-50">
                                    <h2 className="title">Have a <span>Cool Project?</span> Get in touch!</h2>
                                </div>
                                <div className="inner-contact-form-wrap">
                                    <form id="emailSender" onSubmit={sendEmail}>
                                        <div className="form-grp">
                                            <label htmlFor="name"><i className="fas fa-user" /></label>
                                            <input required name="name" type="text" id="name" placeholder="Name"
                                                value={details.name} onChange={updateState}
                                            />
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="phone"><i className="fas fa-phone" /></label>
                                            <input required name="phone" type="text" id="phone" placeholder="Phone"
                                                value={details.phone}
                                                onChange={updateState}
                                            />
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="email"><i className="fas fa-envelope" /></label>
                                            <input required type="email" name="email" id="email" placeholder="Email Address"
                                                value={details.email} onChange={updateState}
                                            />
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="subject"><i className="fas fa-book-alt" /></label>
                                            <input required type="text" name="subject" id="subject" placeholder="Subject"
                                                value={details.subject} onChange={updateState}
                                            />
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="comment"><i className="fas fa-user-edit" /></label>
                                            <textarea 
                                            required name="message" id="message" placeholder="How can we help you? Feel free to get in touch!"
                                                value={details.message}
                                                onChange={updateState}
                                            />
                                        </div>
                                        <button type="submit" className="btn">Send Message <span /></button>
                                    </form>
                                </div>
                                <div id="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29408.43007778408!2d91.10179889999999!3d22.87447239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1699190509707!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
                                </div>
                                <div className="inner-contact-info">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/loction_icon03.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="title">Address</h6>
                                                    <p>Maijdee Court, Noakhali, Bangladesh</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/mail_icon03.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="title">Email</h6>
                                                    <a href="mailto:tasrif@lineardigital.net">tasrif@lineardigital.net</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/phone_icon03.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h6 className="title">Phone</h6>
                                                    <a href="tel:+8801609814396">+8801609814396</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;