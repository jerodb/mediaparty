import React from 'react'
import PropTypes from 'prop-types'
import Speakers from './SpeakersComponent'

const SpeakersContainer = ({ speakers }) => {
  if (speakers.length > 0) {
    return (
      <>
        <h2>
          <div className="title-txt">SPEAKERS</div>
          <div className="title-line" />
        </h2>
        <div className="event__speakers_featured">
          {
          speakers.map((data, k) => {
            const {
              about, avatar, name, url, username
            } = data

            const align = k % 2 ? 'event__speaker event__speaker_even' : 'event__speaker event__speaker_odd'
            const urlLink = url.startsWith('http') ? url : `http://${url}`

            return (
              <Speakers
                about={about}
                align={align}
                name={name}
                imageSrc={avatar}
                url={url}
                urlLink={urlLink}
                username={username}
                key={JSON.stringify(k)}
              />
            )
          })
        }
        </div>
      </>
    )
  }

  return <></>
}

SpeakersContainer.propTypes = {
  speakers: PropTypes.array
}

export default SpeakersContainer
