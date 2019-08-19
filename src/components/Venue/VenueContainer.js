import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Venue from './VenueComponent'

const VenueContainer = ({ venue }) => {
  const [mapEvents, setMapEvents] = useState('notAllowEvents')
  const [mapIframe, setMapIframe] = useState({ __html: '' })

  useEffect(() => {
    setMapIframe({ __html: '<iframe name="iframe-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.614888414615!2d-58.41068!3d-34.606596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6dd823092cb367d9!2sCiudad+Cultural+Konex!5e0!3m2!1sen!2sar!4v1498682731427" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen></iframe>' })
  })

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
