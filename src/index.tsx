import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from '3p5-hooks'
import {App} from './storybook/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)