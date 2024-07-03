import Footer from '@/Components/Bars/Footer';
import Navbar from '@/Components/Bars/Navbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default layout;