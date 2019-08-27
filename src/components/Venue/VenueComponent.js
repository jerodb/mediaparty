import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import NoSsr from '../NoSsr'

const Venue = ({
  allowMapEvents, mapIframe, mapEvents, scrollPosition, venue
}) => (
  <section id="venue" className="venue">
    <div className="event__venue_info">
      <div className="event__venue_info_inner">
        <h2>{ venue }</h2>
        <p className="event__venue_name">Ciudad Cultural Konex</p>
        <p className="event__venue_address">Sarmiento 3131, Buenos Aires, Argentina</p>
      </div>
      <LazyLoadComponent
        scrollPosition={scrollPosition}
        threshold={250}
      >
        <div className="event__venue_info_background" />
      </LazyLoadComponent>
    </div>
    <NoSsr>
      <LazyLoadComponent
        scrollPosition={scrollPosition}
        threshold={250}
      >
        <button
          className={`${mapEvents} map-wrapper interactive-element`}
          dangerouslySetInnerHTML={mapIframe}
          onClick={() => allowMapEvents(true)}
          onMouseLeave={() => allowMapEvents(false)}
          type="button"
        />
      </LazyLoadComponent>
    </NoSsr>
  </section>
)

Venue.propTypes = {
  allowMapEvents: PropTypes.func,
  mapIframe: PropTypes.object,
  mapEvents: PropTypes.string,
  scrollPosition: PropTypes.object,
  venue: PropTypes.string,
}

export default Venue
