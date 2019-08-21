import React from 'react'
import PropTypes from 'prop-types'

const NoSsr = ({ children }) => {
  if (typeof window !== 'undefined') return <>{children}</>

  return <></>
}

NoSsr.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ])
}
export default NoSsr
