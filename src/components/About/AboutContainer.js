import React from 'react'
import PropTypes from 'prop-types'
import About from './AboutComponent'

const AboutContainer = ({ about }) => {
  const colLeftElements = []
  const colRightElements = []

  about.map((item, k) => {
    if (k % 2) colRightElements.push(item)
    else colLeftElements.push(item)
    return <></>
  })

  return (
    <About
      colLeftElements={colLeftElements}
      colRightElements={colRightElements}
    />
  )
}

AboutContainer.propTypes = {
  about: PropTypes.array,
}

export default AboutContainer
