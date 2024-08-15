'use client';

import React, { useEffect } from 'react';
import ProjectCard_LG from './ProjectCard_LG';
import Link from 'next/link';

const Portfolios = ({ data }: { data: any }) => {
    // const params = new URLSearchParams(window.location.search);
    // const categor = params.get("category");
    const [category, setCategory] = React.useState("");
    const [projects, setProjects] = React.useState<any>([]);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const categor = params.get("category");
        if (categor) {
            setCategory(categor);
        }
        else {
            setCategory("all");
        }
    }, [])
    const categorys = [
        {
            name: "Featured",
            id: "all"
        },
        {
            name: "Banner & Ads",
            id: "banner-ads"
        },
        {
            name: "Prints",
            id: "prints"
        },
        {
            name: "Presentations",
            id: "presentations"
        },
        {
            name: "Website",
            id: "web"
        }
    ]
    useEffect(() => {
        if (category === "all") {
            setProjects(data)
        }
        else if (category === "web") {
            const dataNew = data?.filter((item: any) => {
                return item?.category === "web" || item?.category === "web"
            })
            setProjects(dataNew)
        }
        else if (category === "banner-ads") {
            const dataNew = data?.filter((item: any) => {
                return item?.category === "banner-ads"
            })
            setProjects(dataNew)
        }
        else if (category === "prints") {
            const dataNew = data?.filter((item: any) => {
                return item?.category === "print"
            })
            setProjects(dataNew)
        }
        else {
            setProjects(null)
        }
    }, [category, data])
    return (
        <section className=''>
            <div className='d-flex justify-content-center align-items-center flex-wrap w-full gap-2 mb-5'>
                {
                    categorys?.map((item: any) => {
                        return (
                            <button
                                key={item.id}
                                style={{
                                    border: "none",
                                    outline: "none",
                                    backgroundColor: "transparent",
                                }}
                                onClick={() => setCategory(item.id)}
                            >
                                <Link href={`/portfolio?category=${item.id}`}
                                    key={item.id} className="category-btn">
                                    {item.name}
                                </Link>
                            </button>
                        )
                    })
                }
            </div>
            <div className="portfolio-section">
                {
                    projects?.map((item: any) => {
                        return (
                            <ProjectCard_LG key={item._id} images={item.images} name={item.name} url={item.url} description={item.description} category={item.category} />
                        )
                    }
                    )
                }
            </div>
        </section>
    );
};

export default Portfolios;