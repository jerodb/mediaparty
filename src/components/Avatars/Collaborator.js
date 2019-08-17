import React from 'react'
import PropTypes from 'prop-types'

const Collaborator = ({ name, pic }) => (
  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 event__collaborator">
    <img alt={name} src={pic} className="event__collaborators_img" />
    <div className="event__collaborators_name">
      <p>{ name }</p>
    </div>
  </div>
)

Collaborator.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
}

export default Collaborator
