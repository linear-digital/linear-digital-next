'use client'
import api from '@/util/axios';
import React, { useEffect } from 'react';
import PortCard from './_UI/PortCard';
import { categorys } from '@/app/portfolio/_UI/Portfolios';
import AddModal from './_UI/AddModal';
const page = () => {
    const [data, setData] = React.useState<any>([]);
    const [category, setCategory] = React.useState("all");
    const [refesh, setRefesh] = React.useState(null)
    useEffect(() => {
        (
            async () => {
                if (category !== "all") {
                    const { data } = await api.get(`/portfolio/get/${category}`)
                    setData(data)
                }
                else {
                    const { data } = await api.get('/portfolio')
                    setData(data)
                }
            }
        )()
    }, [category, refesh])
    const [search, setSearch] = React.useState("");
    return (
        <div className='container'>
            <h2 className='text-center mb-5 mt-3'>Update Portfolios {data?.length}</h2>
            <AddModal setRefesh={setRefesh}/>
            <select className="form-select col-auto" aria-label="Select Category select example"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            >
                {
                    categorys?.filter((item: any) => item?.id !== "all").map((item: any) => {
                        return <option key={item?.id} value={item?.id}>{item?.name}</option>
                    })
                }
                <option value={"web-app"}>Web App</option>
            </select>
            <div className="row mt-20">
                <div className="col-auto">
                    <label htmlFor="inputPassword2" className="visually-hidden">Search</label>
                    <input type="text" className="form-control" style={{
                        width: "300px"
                    }} placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn-search mb-3">Search</button>
                </div>
            </div>

            <div className="row gap-3 mt-5">
                {
                    data?.filter((item: any) => {
                        if (search === "") {
                            return item
                        }
                        else {
                            return item?.name?.toLowerCase().includes(search.toLowerCase())
                        }
                    }).map((item: any) => {
                        return <PortCard key={item?._id} data={item} setRefesh={setRefesh}/>
                    })
                }
            </div>
        </div>
    );
};

export default page;