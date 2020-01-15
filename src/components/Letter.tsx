import React, { MouseEventHandler, FunctionComponent } from 'react';

type Props = {
    character: string;
    sectionName: string;
    onClick: MouseEventHandler<HTMLElement>;
    selected: boolean;
};

const Letter: FunctionComponent<Props> = ({ character, sectionName, onClick, selected }) => {
    const className = 'letter';
    const selectedClass = selected
        ? 'selected'
        : '';
    return (
        <button className={`${className} ${selectedClass}`} data-section={sectionName} name={character} onClick={onClick}>
            {character}
        </button>
    )
}

export default Letter