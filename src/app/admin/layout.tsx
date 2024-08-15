'use client'

import React, { useEffect } from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(false);
    const pass = "3848"
    useEffect(() => {
        const nameST = sessionStorage.getItem("access");
        if (!nameST || nameST !== pass) {
            let name = window.prompt("Please enter Password:");
            if (name === pass) {
                sessionStorage.setItem("access", name);
                setOpen(true)
            }
            else {
                sessionStorage.removeItem("access");
                setOpen(false)
            }
        }
        else {
            setOpen(true)
        }
    }, [])
    if (!open) {
        return
    }
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