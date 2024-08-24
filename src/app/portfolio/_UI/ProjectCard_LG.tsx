import { Image } from 'antd';
import React from 'react';

interface Props {
    images: string[];
    name: string;
    url: string;
    description: string;
    category: string;
    delay: number;
}

const ProjectCard_LG = ({ images, name, url, description, category, delay }: Props) => {

    return (
        <div className="portfolio-item"
            style={{
                animationDelay: `${delay}s`,
                animationFillMode: "forwards",
                animation: `${1.5}s ease-in alternate forwards running fadeInDown`,
            }}
        >
            <div className="image" style={{}}>
                <Image loading="lazy" src={images[0]} alt="" />
                {
                    (category === "web" || category === "web-app") && <a href={url} target="_blank" className="overlay">
                        <div className='a'>
                            Visit Website <i className="fas fa-plus"></i>
                        </div>
                    </a>
                }
            </div>
            <div className="portfolio-details">
                <h1 >
                    {name}
                </h1>
                <p>
                    {description}
                </p>
            </div>
        </div>

    );
};

export default ProjectCard_LG;