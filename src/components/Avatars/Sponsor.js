import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'

const Sponsor = ({ name, imageSrc }) => (
  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 event__sponsor">
    <Image imageSrc={imageSrc} className="event__sponsors_img" altSrc={name} />
    <div className="event__collaborators_name">
      <p>{ name }</p>
    </div>
  </div>
)

Sponsor.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Sponsor
