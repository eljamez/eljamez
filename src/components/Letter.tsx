import React, { MouseEventHandler, FunctionComponent } from 'react';

type Props = {
    character: string;
    sectionName: string;
    onClick: MouseEventHandler<HTMLElement>;
    selected: boolean;
    prevSelected: boolean;
};

const Letter: FunctionComponent<Props> = ({ character, sectionName, onClick, selected, prevSelected }) => {
    const className = 'letter';
    const selectedClass = selected
        ? 'selected'
        : '';
    const unselectedClass = prevSelected
        ? 'unselected'
        : '';
    return (
        <button className={`${className} ${selectedClass} ${unselectedClass}`} data-section={sectionName} name={character} onClick={onClick}>
            {character}
        </button>
    )
}

export default Letter