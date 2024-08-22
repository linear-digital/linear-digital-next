import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const BlankDialog: React.FC<{ children: React.ReactNode, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> , title: string}> = ({ children, open, setOpen , title}) => {



    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Modal title={title} okButtonProps={{ style: { display: 'none' } }} open={open}  onCancel={handleCancel}>
               {children}
            </Modal>
        </>
    );
};

export default BlankDialog;