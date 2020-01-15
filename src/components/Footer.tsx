import React, { FunctionComponent } from 'react';
import { LETTERS, SECTION_NAMES } from './../utils/constants';

type Props = {
    currentSectionName: string;
}

const Footer: FunctionComponent<Props> = ({
    currentSectionName,
}) => {

    return (
        <footer>
            <nav>
                <a href="http://codepen.io/eljamez/">
                    <i className="fab fa-codepen" />
                </a>
                <a href="http://eljamez.github.io/">
                    <i className="fab fa-github" />
                </a>
                <a href="https://twitter.com/eljamez">
                    <i className="fab fa-twitter" />
                </a>
                <a href="https://instagram.com/eljamez">
                    <i className="fab fa-instagram" />
                </a>
                <a href="http://jaugustus.tumblr.com/">
                    <i className="fab fa-tumblr" />
                </a>
                <a href="http://www.linkedin.com/in/eljamez">
                    <i className="fab fa-linkedin" />
                </a>
                <a href="https://soundcloud.com/eljamez">
                    <i className="fab fa-soundcloud" />
                </a>
            </nav>

            <p>
                <i className="fas fa-copyright" /> eljamez.com 2020
      </p>
        </footer>
    )
}

export default Footer;