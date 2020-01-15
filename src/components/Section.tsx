import React, { FunctionComponent } from 'react';
import { LETTERS, SECTION_NAMES } from './../utils/constants';

type Props = {
    currentSectionName: string;
}



const Section: FunctionComponent<Props> = ({
    currentSectionName,
}) => {

    return (
        <section>
            <h2>{currentSectionName}</h2>
            <p>This is what I do</p>
        </section>
    )
}

export default Section;