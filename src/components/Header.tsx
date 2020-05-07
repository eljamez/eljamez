import React, { FunctionComponent } from 'react';

type Props = {
    children: FunctionComponent;
}

const Header: FunctionComponent<Props> = ({
    children
}) => {
    return (
        <header className="header">
            {children}
        </header>
    )
}

export default Header;