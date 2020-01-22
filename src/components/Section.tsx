import React, { FunctionComponent } from 'react';
import Box, { BoxType, LinkType } from './Box';

type Section = {
    name: string;
    letterIndex: number;
    description?: string;
    link?: LinkType;
    content: BoxType[];
}

type Props = {
    currentSectionData: Section;
    isFading: boolean;
}

const Section: FunctionComponent<Props> = ({
    currentSectionData,
    isFading,
}) => {
    const sectionClasses = isFading ? 'sectionFading' : 'sectionEnter';

    const { content } = currentSectionData;

    return (
        <section className={sectionClasses}>
            <h2>{currentSectionData.name}</h2>
            {currentSectionData.link && <a href={currentSectionData.link.href}>{currentSectionData.link.text}</a>}
            <p>{currentSectionData.description}</p>
            {content && <div className="contentContainer">
                {content.map((cont: BoxType) => {
                    return (<Box
                        title={cont.title}
                        details={cont.details}
                        link={cont.link}
                        image={cont.image}
                        key={cont.title}
                    />)
                })}
            </div>}
        </section>
    )
}

export default Section;