'use client'

import Navbar from '@/Components/Bars/Navbar';
import React from 'react';
import Sidebar from './_UI/Sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="flex gap-5">
                <Sidebar />
                {children}
            </div>
        </div>
    );
};

export default layout;