import React from 'react'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'
import {Grid, GridCol} from 'griz';

export default ({h2Pos}) => {
  const About = styled.section`
    margin: 0px;

    > h2 {
      cursor: pointer;
      transform: translateX(${h2Pos}px);
    }

    > p {
      line-height: auto;
    }
  `
  return (
    <About>
      <h2>About <i class="fas fa-info fa-fw"></i></h2>
      <div>
        <Grid responsiveMd gutterless>
          <GridCol column="60">
            <h3>Welcome to my Homepage</h3>
            <p>In 1996 I built my first website by writing HTML in Notepad. I found the <code>&lt;center&gt;</code> tag especially useful when positioning my copied and pasted webcounter snippet. Frames and Imagemaps were pretty fancy tools as well. I could go on, but enough nostalga for now.</p>
            <p>I decided this would be something I would like to do for the rest of my life, and maybe even for a living. So I went to school and studdied up on things like CSS, JavaScript, and Flash. I landed my first full time job in the field in 2005.</p>
            <p>Flash came and went, and with the help of jQuery JavaScript gained more creedence. Templating tools, libraries and frameworks came into their own, and thankfully we no longer have to support IE6. It's been a wild ride.</p>
            <p>I'm currently working more with React and always trying to learn new things.</p>
            <p>Other Hobbies Include Making Music, Videos, and Cooking Instruction</p>
          </GridCol>
          <GridCol column="40">
            <h3><i class="fab fa-js"></i> JavaScript</h3>
            <ul className="fa-ul">
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>ES6, Babel is my friend</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>I quite enjoy React and Redux</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>Dabbled in AngularJS</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>Much experience in jQuery</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>Mocha and Chai are nice for unit testing</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>Handlebars, Underscore, Lodash, good times</li>
            </ul>
            <h3><i class="fab fa-html5"></i> Front End</h3>
            <ul className="fa-ul">
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>HTML5, some YAML</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>CSS3 SCSS, also a little LESS and Stylus</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>Yeoman has built of a few project for me in the past</li>
            </ul>
            <h3><i class="fas fa-database"></i> Back End</h3>
            <ul className="fa-ul">
              <li><span class="fa-li"><i class="fab fa-wordpress"></i></span>$WordPress = PHP</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>I've enjoyed working with Ruby on Rails</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>A little Node.JS, because it's JS</li>
            </ul>
            <h3><i class="fas fa-code"></i> Tools</h3>
            <ul className="fa-ul">
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>NPM and Yarn</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>Gulp and Grunt</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>Webpack</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>Git and it's hub</li>
              <li><span class="fa-li"><i class="fas fa-bolt"></i></span>Vagrant and VirtualBox</li>
            </ul>
          </GridCol>
        </Grid>
      </div>
    </About>
  )
}
