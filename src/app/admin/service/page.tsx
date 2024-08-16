'use client'

import api from '@/util/axios';
import React from 'react';
import ServiceCard from './_Ui/ServiceCard';
import AddService from './_Ui/AddService';

export type ServiceType = {
    name: string,
    desc: string,
    _id: string
}

const page = () => {
    const [refesh, setRefesh] = React.useState<any>(0);
    const [services, setServices] = React.useState<ServiceType[]>([]);
    React.useEffect(() => {
        (
            async () => {
                try {
                    const res = await api.get('/services');
                    setServices(res.data)
                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [refesh])
    return (
        <div className='container py-5'>
            <h2 className='text-center'>Services</h2>
            <div className="row mt-5">
                <AddService setRefresh={setRefesh}/>
                {
                    services.map((item: ServiceType, index) => {
                        return <ServiceCard key={index} data={item} setRefresh={setRefesh} />
                    })
                }
            </div>
        </div>
    );
};

export default page;