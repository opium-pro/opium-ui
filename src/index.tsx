import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './demo/constructor'
import { Router } from 'opium-nav'


ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))