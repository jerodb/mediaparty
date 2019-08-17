import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import App from '../App'

const Lang = ({ locale, videoId }) => {
  const translations = [
    {
      id: 'spanish',
      path: '/es',
      loc: 'es',
    },
    {
      id: 'english',
      path: '/en',
      loc: 'en',
    },
    {
      id: 'default',
      path: '',
      loc: locale,
    },
  ]

  return (
    <Switch>
      {translations.map(({ id, path, loc }) => (
        <Route
          key={id}
          path={path}
          render={() => (<App locale={loc} videoId={videoId} root={path} />)}
        />
      ))}
    </Switch>
  )
}

Lang.propTypes = {
  locale: PropTypes.string,
  videoId: PropTypes.string,
}

export default Lang
