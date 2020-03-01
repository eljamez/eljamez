import React, { FunctionComponent } from 'react';
import Box, { BoxType } from './Box';
import { SECTIONS } from './../utils/constants';

type Props = {
    currentSectionName: string;
    isFading: boolean;
}

type Link = {
    href: string;
    text: string;
}

const Section: FunctionComponent<Props> = ({
    currentSectionName,
    isFading,
}) => {
    const sectionClasses = isFading ? 'sectionFading' : 'sectionEnter';

    const section = SECTIONS.find((section) => section.name === currentSectionName);

    // @ts-ignorets-ignore
    const { content } = section;

    const getLink = (link: Link) => (<a href={link?.href}>{link?.text}</a>);
    const isContentList = section?.contentType === 'list';

    return (
        <section className={sectionClasses}>
            <h2>{section?.name}</h2>
            <p>{section?.description}</p>
            {isContentList && <ul>
                {content.map((cont: BoxType) => {
                    return (<li key={cont.title}>{cont.title}</li>)
                })}
            </ul>
            }
            {content && !isContentList && <div className="contentContainer">
                {content.map((cont: BoxType) => {
                    return (<Box
                        title={cont.title}
                        details={cont.details}
                        link={cont.link}
                        getLink={getLink}
                        image={cont.image}
                        key={cont.title}
                    />)
                })}
            </div>}
            {section?.link && getLink(section?.link)}
        </section>
    )
}

export default Section;