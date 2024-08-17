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
        else if (category === "presentations") {
            const dataNew = data?.filter((item: any) => {
                return item?.category === "presentations"
            })
            setProjects(dataNew)
        }
        else if (category === "print") {
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
            <div className='d-flex justify-content-center align-items-center flex-wrap w-full gap-3 gap-lg-0'
                style={{
                    marginBottom: "60px",
                }}
            >
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
                                    key={item.id} className={`${item.id === category ? "category-btn-active" : "category-btn"}`}>
                                    {item.name}
                                </Link>
                            </button>
                        )
                    })
                }
            </div>
            {
                projects?.length > 0 ?
                    <div className="portfolio-section">
                        {
                            projects?.map((item: any, index: number) => {
                                return (
                                    <ProjectCard_LG delay={index * 0.5} key={item._id} images={item.images} name={item.name} url={item.url} description={item.description} category={item.category} />
                                )
                            }
                            )
                        }
                    </div>
                    :
                    <h2 className="text-center">No projects found</h2>
            }
        </section>
    );
};

export default Portfolios;

export const categorys = [
    {
        name: "Featured",
        id: "all"
    },
    {
        name: "Logos",
        id: "logos"
    },
    {
        name: "Banner & Ads",
        id: "banner-ads"
    },
    {
        name: "Prints & Publications",
        id: "print"
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