import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'

const Partner = ({ name, imageSrc }) => (
  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 event__partner">
    <Image imageSrc={imageSrc} className="event__partners_img" altSrc={name} />
    <div className="event__partners_name">
      <p>{ name }</p>
    </div>
  </div>
)

Partner.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Partner
