import Navbar from '@/Components/Bars/Navbar';
import api from '@/util/axios';
import Link from 'next/link';
import React from 'react';
import ProjectCard_LG from './_UI/ProjectCard_LG';
const getData = async () => {
    const res = await api.get('/portfolio')
    return res.data
}
import type { Metadata } from 'next'
import Portfolios from './_UI/Portfolios';
import Footer from '@/Components/Bars/Footer';
export async function generateMetadata(
  ): Promise<Metadata> {
    // read route params
 
    return {
      title: "Linear Digital Limited - Our Portfolio",
    }
  }
const page = async () => {
    // get category from search params
    const data = await getData()
    return (
        <div>
            <Navbar />
            <div className="container">
                <section className="breadcrumb-area breadcrumb-area-four pt-140 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content">
                                    <h1 className="title">Our Portfolio</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Portfolios data={data}/>
            </div>
            <Footer />
        </div>
    );
};

export default page;