import React from 'react'
import ReactDOM from 'react-dom'
import { HeaderContainer } from 'containers'

it('should render without crashing', () => {
  const div = document.createElement('section')
  ReactDOM.render(<HeaderContainer />, div)
})
