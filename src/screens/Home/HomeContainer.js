import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import Home from './HomeComponent'
import {
  getSchedData, getMoreSpeakers, getSpeakers, getSponsors
} from '../../services'

const HomeContainer = props => {
  const [speakers, setSpeakers] = useState(null)

  const [moreSpeakers, setMoreSpeakers] = useState([])

  const [sponsors, setSponsors] = useState({
    partners: [],
    sponsors: [],
    collaborators: [],
    recruiters: [],
  })

  const [schedData, setSchedData] = useState({
    team: [],
    executiveTeam: [],
  })

  useEffect(() => {
    (async () => {
      if (speakers === null) {
        const speakersList = await getSpeakers()
        setSpeakers(speakersList)

        const moreSpeakersList = await getMoreSpeakers(speakersList)
        setMoreSpeakers(moreSpeakersList)

        const sponsorsList = await getSponsors()
        setSponsors(sponsorsList)

        const data = await getSchedData()
        setSchedData(data)
      }
    })()

    ReactGA.pageview(`${window.location.pathname}${window.location.search}`)
  }, [])

  return (
    <Home
      {...props}
      {...schedData}
      {...sponsors}
      speakers={speakers}
      moreSpeakers={moreSpeakers}
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
