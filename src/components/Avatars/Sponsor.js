import React from 'react'
import PropTypes from 'prop-types'

const Sponsor = ({ name, pic }) => (
  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 event__sponsor">
    <img alt={name} src={pic} className="event__sponsors_img" />
    <div className="event__collaborators_name">
      <p>{ name }</p>
    </div>
  </div>
)

Sponsor.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
}

export default Sponsor
