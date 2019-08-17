import React from 'react'
import PropTypes from 'prop-types'
import Router from './navigation/Router'
import Header from './components/Header'
import Footer from './components/Footer'
import lan from './lang'


const App = ({ root, locale, videoId }) => {
  const { langClass, header, footer } = lan.layout[locale]
  const h = Object.assign(header, { root })

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
