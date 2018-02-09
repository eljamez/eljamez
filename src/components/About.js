import React from 'react'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'

export default ({ h2Pos }) => {
  const About = styled.section`
    margin: 0px;

    > h2 {
      background-color: ${styleHelpers.colors.About};
      cursor: pointer;
      transform: translateX(${h2Pos}px);
    }

    .grid {
      display: grid;
      grid-template-columns: 50% 50%;

      &-left {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      &-right {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      @media (min-width: 700px) {
        &-left {
          grid-column-start: 1;
          grid-column-end: 2;
        }

        &-right {
          grid-column-start: 2;
          grid-column-end: 3;
        }
      }
    }

    > p {
      line-height: auto;
    }
  `

  return (
    <About>
      <h2>
        About <i className="fas fa-info fa-fw" />
      </h2>
      <div className="grid">
        <div className="grid-left">
          <h3>Welcome to my Homepage</h3>
          <p>
            In 1996 I built my first website by writing HTML in Notepad. I found the <code>&lt;center&gt;</code> tag
            especially useful when positioning my copied and pasted webcounter snippet. Frames and Imagemaps were pretty
            fancy tools as well. I could go on, but enough nostalga for now.
          </p>
          <p>
            I decided this would be something I would like to do for the rest of my life, and maybe even for a living.
            So I went to school and studdied up on things like CSS, JavaScript, and Flash. I landed my first full time
            job in the field in 2005.
          </p>
          <p>
            Flash came and went, and with the help of jQuery JavaScript gained more creedence. Templating tools,
            libraries and frameworks came into their own, and thankfully we no longer have to support IE6. It's been a
            wild ride.
          </p>
          <p>I'm currently working more with React and always trying to learn new things.</p>
          <p>Other Hobbies Include Making Music, Videos, and Cooking Instruction</p>
        </div>
        <div className="grid-right">
          <h3>
            <i className="fab fa-js" /> JavaScript
          </h3>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>ES6, Babel is my friend
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>I quite enjoy React and Redux
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>Dabbled in AngularJS
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>Much experience in jQuery
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>Mocha and Chai are nice for unit testing
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>Handlebars, Underscore, Lodash, good times
            </li>
          </ul>
          <h3>
            <i className="fab fa-html5" /> Front End
          </h3>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>HTML5, some YAML
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>CSS3 SCSS, also a little LESS and Stylus
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>Yeoman has built of a few project for me in the past
            </li>
          </ul>
          <h3>
            <i className="fas fa-database" /> Back End
          </h3>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fab fa-wordpress" />
              </span>$WordPress = PHP
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>I've enjoyed working with Ruby on Rails
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>A little Node.JS, because it's JS
            </li>
          </ul>
          <h3>
            <i className="fas fa-code" /> Tools
          </h3>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>NPM and Yarn
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>Gulp and Grunt
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>Webpack
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>Git and it's hub
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-bolt" />
              </span>Vagrant and VirtualBox
            </li>
          </ul>
        </div>
      </div>
    </About>
  )
}
