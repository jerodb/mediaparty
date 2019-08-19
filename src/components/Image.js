import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { phSpeakers } from '../res/images'

const Image = ({ imageSrc, imageAlt, className }) => {
  const defaultImg = phSpeakers
  const [src, setSrc] = useState(imageSrc)

  return (
    <img
      src={src}
      className={className || ''}
      alt={imageAlt || 'image'}
      onError={() => setSrc(defaultImg)}
    />
  )
}

Image.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
}

export default Image
