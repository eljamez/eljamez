import React from 'react'
import styled from 'styled-components'
import styleHelpers from 'constants/StyleHelpers'
import { LocalForm, Control } from 'react-redux-form'

export default ({ h2Pos, handleChange, handleSubmit, handleUpdate, renderExtra }) => {
  const Contact = styled.section`
    margin: 0px;

    > h2 {
      background-color: ${styleHelpers.colors.Contact};
      cursor: pointer;
      margin-bottom: 40px;
      transform: translateX(${h2Pos}px);
    }

    > p {
      line-height: auto;
    }

    form {
      margin-bottom: 40px;

      input,
      textarea,
      button {
        border-radius: 3px;
        border: 1px solid ${styleHelpers.colors.Contact};
        box-sizing: border-box;
        font-size: 1.3em;
        margin: 5px 0px 5px 0px;
        padding: 10px;
        position: relative;
        width: calc(100% - 20px);
      }

      input {
        &:first-of-type {
          &::before {
            content: 'name';
            height: 30px;
            left: -50px;
            position: absolute;
            width: 50px;
          }
        }

        &:last-of-type {
          &::before {
            content: 'email';
            position: absolute;
            left: -50px;
          }
        }
      }

      button {
        display: inline-block;
        ${styleHelpers.fonts.videogame};
        padding: 10px 30px;
        transition: all 0.2s ease;
        width: auto;

        &:hover {
          background-color: ${styleHelpers.colors.Contact};
          color: whitesmoke;
          cursor: pointer;
        }
      }
    }
  `

  return (
    <Contact>
      <h2>Contact</h2>
      <div>
        <p>
          <i class="fas fa-envelope" /> Drop me a line...
        </p>
        <LocalForm
          onUpdate={form => handleUpdate(form)}
          onChange={values => handleChange(values)}
          onSubmit={values => handleSubmit(values)}
        >
          <label>Name</label>
          <Control.text model=".name" className="name" />
          <label>Email</label>
          <Control.text model=".email" className="email" />
          <label>Message</label>
          <Control.textarea model=".message" />
          <button>Send</button>
        </LocalForm>
        <p>You can also find me @ the following locations</p>
        <ul>
          <li>
            <a href="http://codepen.io/eljamez/">
              <i className="fab fa-codepen" /> CodePen
            </a>
          </li>
          <li>
            <a href="http://eljamez.github.io/">
              <i className="fab fa-github" /> GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/eljamez">
              <i className="fab fa-twitter" /> Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com/eljamez">
              <i className="fab fa-instagram" /> Instagram
            </a>
          </li>
          <li>
            <a href="http://jaugustus.tumblr.com/">
              <i className="fab fa-tumblr" /> Tumblr
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/eljamez">
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/eljamez">
              <i className="fab fa-soundcloud" /> SoundCloud
            </a>
          </li>
        </ul>
      </div>
    </Contact>
  )
}
