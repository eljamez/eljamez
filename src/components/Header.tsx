import React, { FunctionComponent, MouseEventHandler } from 'react';
import Letter from './Letter';
import { LETTERS, SECTION_NAMES } from './../utils/constants';

type Props = {
    onClick: MouseEventHandler<HTMLElement>;
    currentSectionName: string;
}

const Header: FunctionComponent<Props> = ({
    onClick,
    currentSectionName,
}) => {
    let letterClass = 'fadeIn';
    return (
        <header className="header">
            {LETTERS.map((letter, index) => {
                const unselectedClass = letterClass !== 'fadeIn'
                    ? 'unselected'
                    : '';
                letterClass = SECTION_NAMES[index] === currentSectionName
                    ? 'selected'
                    : unselectedClass;
                return (<Letter
                    character={letter}
                    sectionName={SECTION_NAMES[index]}
                    onClick={onClick}
                    letterClass={letterClass}
                    key={index}
                />)
            })}
        </header>
    )
}

export default Header;