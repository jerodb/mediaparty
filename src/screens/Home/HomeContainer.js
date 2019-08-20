import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Home from './HomeComponent'
import { getSchedData, getSpeakers } from '../../services'

const HomeContainer = props => {
  const [speakers, setSpeakers] = useState(null)
  const [schedData, setSchedData] = useState({
    moreSpeakers: [],
    partners: [],
    sponsors: [],
    collaborators: [],
    recruiters: [],
    team: [],
    executiveTeam: [],
  })

  useEffect(() => {
    (async () => {
      if (speakers === null) {
        const speakersList = await getSpeakers()
        setSpeakers(speakersList)

        const data = await getSchedData(speakersList)
        setSchedData(data)
      }
    })()
  })

  return (
    <Home
      {...props}
      {...schedData}
      speakers={speakers}
    />
  )
}

HomeContainer.propTypes = {
  about: PropTypes.array,
  description: PropTypes.object,
  fair: PropTypes.string,
  proposal: PropTypes.string,
  quotes: PropTypes.array,
  register: PropTypes.string,
  registerPos: PropTypes.string,
  registerPre: PropTypes.string,
  talk: PropTypes.string,
  workshop: PropTypes.string,
  venue: PropTypes.string,
  videoId: PropTypes.string,
  where: PropTypes.object,
}

export default HomeContainer
