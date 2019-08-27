import React from 'react'
import PropTypes from 'prop-types'
import Description from './DescriptionComponent'

const DescriptionContainer = ({ description }) => {
  const videoIframe = { __html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oUz5IPkV3kA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }

  return <Description description={description} video={videoIframe} />
}

DescriptionContainer.propTypes = {
  description: PropTypes.object,
}

export default DescriptionContainer
