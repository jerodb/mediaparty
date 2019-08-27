import React from 'react'
import PropTypes from 'prop-types'
import Speakers from './SpeakersComponent'

const SpeakersContainer = ({ speakers, speakersTitle }) => {
  if (speakers && speakers.length > 0) {
    return (
      <>
        <h2>
          <div className="title-txt">{speakersTitle}</div>
          <div className="title-line" />
        </h2>
        <div className="event__speakers_featured">
          {
          speakers.map((data, k) => {
            const {
              about, avatar, name, url, username
            } = data

            const align = k % 2 ? 'event__speaker event__speaker_even' : 'event__speaker event__speaker_odd'
            let urlLink = ''

            if (url) {
              urlLink = url.startsWith('http') ? url : `http://${url}`
            }

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
  speakers: PropTypes.array,
  speakersTitle: PropTypes.string
}

export default SpeakersContainer
