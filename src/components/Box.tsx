import React, { FunctionComponent, ReactNode } from 'react';

type Link = {
    href: string;
    text: string;
}

export type BoxType = {
    title: string;
    details?: string;
    link?: Link;
    getLink: (arg1: Link) => ReactNode;
    image?: string;
}

const Box: FunctionComponent<BoxType> = ({
    title,
    details,
    link,
    getLink,
    image,
}) => {

    return (
        <div className="box">
            {image && <div className="box-image">
                <img src={image} alt={`${title}`} />
            </div>}
            <div className="box-content">
                <h3>{title}</h3>
                {link && getLink(link)}
                <p>
                    {details && details}
                </p>
            </div>
        </div>
    )
}

export default Box;