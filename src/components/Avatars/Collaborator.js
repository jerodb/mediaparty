import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'

const Collaborator = ({ name, imageSrc }) => (
  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 event__collaborator">
    <Image imageSrc={imageSrc} className="event__collaborators_img" altSrc={name} />
    <div className="event__collaborators_name">
      <p>{ name }</p>
    </div>
  </div>
)

Collaborator.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Collaborator
