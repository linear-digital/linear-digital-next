import React from 'react';

const Footer = () => {
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
                                        We craft stunning designs &amp; build powerful applications. From concept to launch, we
                                        bring your vision to life.
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