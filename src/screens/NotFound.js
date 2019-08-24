import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NotFound = ({ back, msg, root }) => (
  <div className="not-found">
    <h1>404</h1>
    <h2>{ msg }</h2>
    <p>
      <Link to={root}>{ back }</Link>
    </p>
  </div>
)

NotFound.propTypes = {
  back: PropTypes.string,
  msg: PropTypes.string,
  root: PropTypes.string,
}

export default NotFound
