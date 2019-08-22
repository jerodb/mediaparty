import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'whatwg-fetch'

import React, { useEffect } from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { initialize, pageview } from 'react-ga'
import Lang from './navigation/Lang'

import './res/css/bootstrap.css'
import './res/css/style.css'

const gaKey = process.env.GA_TRACKING_ID || ''

initialize(gaKey)
pageview(`${window.location.pathname}${window.location.search}`)

const locale = document.documentElement.getAttribute('lang') || process.env.LANG_DEFAULT
let videoId = document.getElementById('videoId')
videoId = (videoId && videoId.value) || null

const Main = () => {
  useEffect(() => {
    const cssStyles = document.getElementById('ssr-styles')

    if (cssStyles) cssStyles.parentNode.removeChild(cssStyles)
  }, [])

  return (
    <BrowserRouter>
      <Lang locale={locale} videoId={videoId} />
    </BrowserRouter>
  )
}

hydrate(<Main />, document.getElementById('app'))

// https://webpack.js.org/api/hot-module-replacement/
if (module.hot) module.hot.accept()
