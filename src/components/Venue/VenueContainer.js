import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Venue from './VenueComponent'

const VenueContainer = ({ venue }) => {
  const [mapEvents, setMapEvents] = useState('notAllowEvents')

  const mapIframe = { __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26271.24433072853!2d-58.410707!3d-34.60655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6dd823092cb367d9!2sCiudad%20Cultural%20Konex!5e0!3m2!1sen!2sar!4v1566945959120!5m2!1sen!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>' }

  const allowMapEvents = allow => {
    const state = allow ? 'allowEvents' : 'notAllowEvents'
    setMapEvents(state)
  }

  return (
    <Venue
      allowMapEvents={allowMapEvents}
      mapIframe={mapIframe}
      mapEvents={mapEvents}
      venue={venue}
    />
  )
}

VenueContainer.propTypes = {
  venue: PropTypes.string,
}

export default VenueContainer
