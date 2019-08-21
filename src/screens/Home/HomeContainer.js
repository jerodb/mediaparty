import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import Home from './HomeComponent'
import {
  getTeam, getMoreSpeakers, getSpeakers, getSponsors
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

  const [team, setTeam] = useState({
    team: [],
    executiveTeam: [],
  })

  useEffect(() => {
    ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
    (async () => {
      if (speakers === null) {
        const speakersList = await getSpeakers()
        setSpeakers(speakersList)

        const moreSpeakersList = await getMoreSpeakers(speakersList)
        setMoreSpeakers(moreSpeakersList)

        const sponsorsList = await getSponsors()
        setSponsors(sponsorsList)

        const teamList = await getTeam()
        setTeam(teamList)
      }
    })()
  }, [])

  return (
    <Home
      {...props}
      {...team}
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
