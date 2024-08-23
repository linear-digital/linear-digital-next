import Navbar from '@/Components/Bars/Navbar';
import React from 'react';
import Counter from '../Home/Counter';
import Review from '../Home/Review';
import Footer from '@/Components/Bars/Footer';
import Team from '../Home/Team';
import type { Metadata, } from 'next'
import Services_Ab from './_ui/Services_Ab';
import CompanySuccess from './_ui/CompanySuccess';
import OurCompany from './_ui/OurCompany';
export async function generateMetadata(
): Promise<Metadata> {
    // read route params

    return {
        title: "Linear Digital Limited - About Us",
    }
}
const page = () => {
    return (
        <div>
            <Navbar />
            <section className="breadcrumb-area pt-175 pb-140">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title title-style-two text-center white-title">
                                <h2 className="title text-black">About Us</h2>
                                <p className='mt-3'>Find the perfect fit! Choose from tiered plans with features tailored to your
                                    needs. All at budget-friendly prices.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-shape-wrap">
                    <img src="/assets/img/images/breadcrumb_shape01.png" alt="" />
                    <img src="/assets/img/images/breadcrumb_shape02.png" alt="" />
                </div>
            </section>
            <Counter />
            {/* <Services_Ab /> */}
            {/* success Area Start */}
            <CompanySuccess />
            <OurCompany />
            <div className="mt-100">
                <Team />
            </div>

            {/* <Review /> */}
            <Footer />
        </div>
    );
};

export default page;