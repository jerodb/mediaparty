import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { pageview } from 'react-ga'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button'
import Router from './navigation/Router'
import Header from './components/Header'
import Footer from './components/Footer'
import lan from './lang'


const App = ({ root, locale, videoId }) => {
  const { langClass, header, footer } = lan.layout[locale]
  const h = Object.assign(header, { root })

  useEffect(() => {
    pageview(`${window.location.pathname}${window.location.search}`)
  }, [])

  return (
    <div className={langClass}>
      <div className="container event">
        <Header {...h} />
        <Router
          root={root}
          locale={locale}
          videoId={videoId}
        />
        <Footer {...footer} />
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={500}
          EasingType="easeOutCubic"
          AnimationDuration={500}
          ContainerClassName="ScrollUpButton__Container"
          TransitionClassName="ScrollUpButton__Toggled"
        />
      </div>
    </div>
  )
}

App.propTypes = {
  locale: PropTypes.string,
  root: PropTypes.string,
  videoId: PropTypes.string,
}

export default App
