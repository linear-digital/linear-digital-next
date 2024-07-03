import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ item }: { item: any }) => {
    return (
            <div className="project-item-three">
                <div className="project-content-three"
                >
                    <h2 className="title">
                        <a href="project-details.html">
                            {item.name}
                        </a>
                    </h2>
                    <p>
                        {item.description?.slice(0, 70)}
                    </p>
                </div>
                <div className="project-thumb-three" style={{
                    backgroundImage: `url(${item.images[0]})`,
                    height: "270px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}

                >
                    <a href={item.images[0]}>
                        {/* <Image fill src={item.images[0]} alt="" /> */}
                    </a>
                </div>
                <div className="project-details-btn">
                    <a href="project-details.html">View Case Studies</a>
                </div>
            </div>
    );
};

export default ProjectCard;