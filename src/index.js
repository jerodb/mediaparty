import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'whatwg-fetch'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { initialize, pageview } from 'react-ga'
import Lang from './navigation/Lang'

import './res/css/bootstrap.css'
import './res/css/style.css'

const gaKey = process.env.GA_TRACKING_ID || ''

initialize(gaKey)
pageview(`${window.location.pathname}${window.location.search}`)

window.onload = () => {
  const locale = document.documentElement.getAttribute('lang') || process.env.LANG_DEFAULT
  let videoId = document.getElementById('videoId')
  videoId = (videoId && videoId.value) || null

  render(
    <BrowserRouter>
      <Lang locale={locale} videoId={videoId} />
    </BrowserRouter>,
    document.getElementById('app')
  )
}
