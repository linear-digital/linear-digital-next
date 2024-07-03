import React from 'react';
import './blog.css'
import BlogCard from './_UI/BlogCard';
const page = () => {
    return (
        <div className='blog-page container'>
            <div className="row gap-4">
                <div className="blogs col-lg-8">
                    <BlogCard />
                </div>
                <div className="sidebar col-lg-3">

                </div>
            </div>
        </div>
    );
};

export default page;