import Footer from '@/Components/Bars/Footer';
import Navbar from '@/Components/Bars/Navbar';
import Link from 'next/link';
import React from 'react';
import Contact from '../Home/Contact';
import type { Metadata, ResolvingMetadata } from 'next'
export async function generateMetadata(
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
 
    return {
      title: "Linear Digital Limited - Contact Us",
    }
  }
const page = () => {
    return (
        <div>
            <Navbar />
            <section className="breadcrumb-area breadcrumb-area-four pt-175 pb-160">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h1 className="title">Contact Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-shape-wrap-three">
                    <img src="/assets/img/images/breadcrumb_shape04.png" alt="" className="wow zoomIn" data-wow-delay=".2s" />
                    <img src="/assets/img/images/breadcrumb_shape05.png" alt="" className="wow zoomIn" data-wow-delay=".2s" />
                    <img src="/assets/img/images/breadcrumb_shape06.png" alt="" className="wow zoomIn" data-wow-delay=".2s" />
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default page;