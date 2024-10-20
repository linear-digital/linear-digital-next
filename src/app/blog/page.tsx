import React from 'react';
import './blog.css'
import BlogCard from './_UI/BlogCard';
import BlogCard_SM from './_UI/BlogCard_SM';

import type { Metadata } from 'next'
export async function generateMetadata(
): Promise<Metadata> {
    // read route params

    return {
        title: "Linear Digital Limited - Blog",
    }
}
const page = () => {
    return (
        <div className='blog-page container'>
            <div className="row gap-3">
                <div className="blogs col-lg-8">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className="sidebar col-lg-3 ">
                    <BlogCard_SM />
                    <BlogCard_SM />
                    <BlogCard_SM />
                    <BlogCard_SM />
                    <BlogCard_SM />
                </div>
            </div>
        </div>
    );
};

export default page;