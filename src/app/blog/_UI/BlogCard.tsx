import Link from 'next/link';
import React from 'react';

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <h1 className='title'>
                5 Best Paid Traffic Sources For Websites
            </h1>
            <div className='meta'>
                <div className='date'>March 31, 2022</div>
                <div className='author'>By: Admin</div>
                <i className="fas fa-comments"></i>
                <Link href={'/blog'}>Leave a Comment</Link>
            </div>
            <div className="image">
                <img src="https://thejvsblog.com/wp-content/uploads/2022/12/The-Best-Paid-Traffic-Sources.png" alt="" />
            </div>
            <div className="desc">
                Looking for paid traffic sources for your website? It is important to know where your traffic is coming from and how you can leverage paid traffic sources to drive consistent traffic to your website. Here are the 5 best paid traffic sources for … <Link href={'/blog'}>
                [Read more...]
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;