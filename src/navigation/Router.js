import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import lan from '../lang'
import routes from './routes'

const Router = ({ root, locale, videoId }) => (
  <Switch>
    { routes.map(({
      path, Component, state, exact
    }) => {
      const cLang = Object.assign(lan[state][locale], { root }, { locale })
      return (
        <Route
          key={state}
          path={root + path}
          exact={exact}
          render={() => (
            <Component {...cLang} videoId={videoId} />
          )}
        />
      )
    })}
  </Switch>
)

Router.propTypes = {
  root: PropTypes.string,
  locale: PropTypes.string,
  videoId: PropTypes.string,
}

export default Router
