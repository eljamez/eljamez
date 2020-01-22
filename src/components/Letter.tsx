import React, { MouseEventHandler, FunctionComponent } from 'react';

type Props = {
    character: string;
    sectionName: string;
    letterClass?: string;
    onClick: MouseEventHandler<HTMLElement>;
};

const Letter: FunctionComponent<Props> = ({ character, sectionName, letterClass, onClick }) => {
    return (
        <button className={`letter ${letterClass}`} data-section={sectionName} name={character} onClick={onClick}>
            {character}
        </button>
    )
}

export default Letter