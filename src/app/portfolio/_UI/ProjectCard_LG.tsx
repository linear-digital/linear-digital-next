import React from 'react';

interface Props {
    images: string[];
    name: string;
    url: string;
    description: string;
}

const ProjectCard_LG = ({ images, name, url, description }: Props) => {
    return (
        <div className="portfolio-item">
            <div className="image" style={{}}>
                <a target="_blank" href={url}>
                    <img loading="lazy" src={images[0]} alt="" />
                </a>
            </div>
            <div className="portfolio-details">
                <h1>
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