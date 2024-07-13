'use client'

import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="flex gap-5">
                {/* <Sidebar /> */}
                {children}
            </div>
        </div>
    );
};

export default layout;