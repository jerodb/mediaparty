import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'whatwg-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga'
import Router from './components/Router'

import './res/css/bootstrap.css'
import './res/css/style.css'

const gaKey = process.env.GA_TRACKING_ID || ''

ReactGA.initialize(gaKey)

window.onload = () => {
  const locale = document.documentElement.getAttribute('lang') || process.env.LANG_DEFAULT
  let videoId = document.getElementById('videoId')
  videoId = (videoId && videoId.value) || null

  ReactDOM.render(
    <BrowserRouter>
      <Router locale={ locale } videoId={ videoId } />
    </BrowserRouter>, 
    document.getElementById('app')
  )
}
