
import { Image } from 'antd';
import React from 'react';

const ProjectCard = ({ item }: { item: any }) => {

    return (
        <div className="project-item-three">

          
            <div className="project-thumb-three" 
            style={{
                // backgroundImage: `url(${item.images[0]})`,
                height: "320px",
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
            }}

            >
                <Image height={290} src={item.images[0]} alt="" />
            </div>
            {/* <div className="project-details-btn">
                <a href={item.category !== "print" ? item?.url : item.images[0]} className='hover:text-black' target='_blank' rel='noreferrer'>Click To Preview</a>
            </div> */}
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
        </div>
    );
};

export default ProjectCard;