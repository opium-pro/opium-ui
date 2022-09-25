import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './demo/constructor/index.js'
import { Router } from 'opium-nav'


ReactDOM.render((
  <Router saveState>
    <App />
  </Router>
), document.getElementById('root'))