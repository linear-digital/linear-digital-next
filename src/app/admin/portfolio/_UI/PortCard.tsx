import React from 'react';
import UpdateModel from './UpdateModel';

const PortCard = ({ data , setRefesh }: any) => {
    return (
        <div className='port-card-edit col-5 d-flex gap-4 align-items-center'>
            <img src={data?.images[0]} alt="" height={100} />
            <div>
                <h4 style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    color: "#000000",
                }}
                >
                    {data?.name}
                </h4>
                <p style={{ fontSize: "12px",  color: "#000000" }}>{data?.description}</p>
                <UpdateModel data={data} setRefesh={setRefesh}/>
            </div>

        </div>
    );
};

export default PortCard;