import React from 'react'
import PropTypes from 'prop-types'
import Quote from './QuotesComponent'

const Quotes = ({ quotes }) => (
  <div id="quotes" className="event__quotes row">
    {
      quotes.map((item, k) => <Quote key={JSON.stringify(k)} {...item} />)
    }
  </div>
)

Quotes.propTypes = {
  quotes: PropTypes.array,
}

export default Quotes
