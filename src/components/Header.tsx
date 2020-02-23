import React, { FunctionComponent, MouseEventHandler } from 'react';
import Letter from './Letter';
import { LETTERS, SECTION_NAMES } from './../utils/constants';

type Props = {
    onClick: MouseEventHandler<HTMLElement>;
    currentSectionName: string;
    prevSectionName: string;
}

const Header: FunctionComponent<Props> = ({
    onClick,
    currentSectionName,
    prevSectionName,
}) => {

    return (
        <header className="header">
            {LETTERS.map((letter, index) => {
                const isSelected = SECTION_NAMES[index] === currentSectionName;
                const lastSelected = SECTION_NAMES[index] === prevSectionName;
                return (<Letter
                    character={letter}
                    sectionName={SECTION_NAMES[index]}
                    onClick={onClick}
                    selected={isSelected}
                    prevSelected={lastSelected}
                    key={index}
                />)
            })}
        </header>
    )
}

export default Header;