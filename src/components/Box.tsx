import React, { FunctionComponent } from 'react';

export type LinkType = {
    href: string;
    text: string;
}

export type BoxType = {
    title?: string;
    details?: string;
    link?: LinkType;
    image?: string;
}

const Box: FunctionComponent<BoxType> = ({
    title,
    details,
    link,
    image,
}) => {

    return (
        <div className="box">
            {image && <div className="box-image">
                <img src={image} alt={`${title}`} />
            </div>}
            <div className="box-content">
                <h3>{title}</h3>
                {link && <a href={link.href}>{link.text}</a>}
                <p>
                    {details && details}
                </p>
            </div>
        </div>
    )
}

export default Box;