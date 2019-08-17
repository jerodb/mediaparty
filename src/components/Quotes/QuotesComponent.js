import React from 'react'
import PropTypes from 'prop-types'

const CardQuote = ({ title, text }) => (
  <div className="col-md-4 col-sm-12 card-quote">
    <div className="card-quote-inner">
      <div className="card-quote-title">
        { title }
      </div>
      <div className="card-quote-text">
        { text }
      </div>
    </div>
  </div>
)

CardQuote.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default CardQuote
