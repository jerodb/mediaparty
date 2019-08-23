import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { phSpeakers } from '../res/images'

const Image = ({
  className, imageAlt, imageSrc, scrollPosition
}) => {
  const defaultImg = phSpeakers
  const [src, setSrc] = useState(imageSrc)

  return (
    <LazyLoadImage
      src={src}
      className={className || ''}
      alt={imageAlt || 'image'}
      onError={() => setSrc(defaultImg)}
      scrollPosition={scrollPosition}
    />
  )
}

Image.propTypes = {
  className: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  scrollPosition: PropTypes.object,
}

export default Image
