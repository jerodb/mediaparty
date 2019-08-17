import React from 'react'
import PropTypes from 'prop-types'

const Partner = ({ name, pic }) => (
  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 event__partner">
    <img alt={name} src={pic} className="event__partners_img" />
    <div className="event__partners_name">
      <p>{ name }</p>
    </div>
  </div>
)

Partner.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
}

export default Partner
