
'use client'
import { fetcher } from '@/util/fetcher';
import React from 'react';
import useSWR from 'swr';

const Footer = () => {
    const { data } = useSWR('https://server.lineardigital.co/api/titles/66c8ad9ab31d2cc0b1eccc5e', fetcher);
    return (
        <footer>
            <div className="footer-area-two footer-area-three">
                <div className="container">
                    <div className="footer-top-two">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="footer-content-two text-center">
                                    <div className="logo">
                                        <a href="/"><img src="/assets/img/logo/logo.png" alt="" /></a>
                                    </div>
                                    <p>
                                        {data?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-two">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="copyright-text">
                                    <p>© 2024, Linear Digital Agency.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-social-two">
                                    <ul className="list-wrap">
                                        <li className="title">Follow us</li>
                                        <li><a target="_blank" href="https://www.facebook.com/lineardigitalbd"><img src="/assets/img/icon/new/facebook.png" width={32} alt="" /></a></li>
                                        <li className='ms-2'>
                                            <a href="https://www.linkedin.com/company/lineardigital" target="_blank">
                                                <img src="/assets/img/icon/new/in.png" width={32} alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;