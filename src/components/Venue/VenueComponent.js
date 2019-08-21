import React from 'react'
import PropTypes from 'prop-types'
import NoSsr from '../NoSsr'

const Venue = ({
  allowMapEvents, mapIframe, mapEvents, venue
}) => (
  <section id="venue" className="venue">
    <div className="event__venue_info">
      <h2>{ venue }</h2>
      <p className="event__venue_name">Ciudad Cultural Konex</p>
      <p className="event__venue_address">Sarmiento 3131, Buenos Aires, Argentina</p>
    </div>
    <NoSsr>
      <button
        className={`${mapEvents} map-wrapper interactive-element`}
        dangerouslySetInnerHTML={mapIframe}
        onClick={() => allowMapEvents(true)}
        onMouseLeave={() => allowMapEvents(false)}
        type="button"
      />
    </NoSsr>
  </section>
)

Venue.propTypes = {
  allowMapEvents: PropTypes.func,
  mapIframe: PropTypes.object,
  mapEvents: PropTypes.string,
  venue: PropTypes.string,
}

export default Venue
