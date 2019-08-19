import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'

const SpeakersComponent = ({
  about, align, name, imageSrc, url, urlLink, username
}) => (
  <div className={align}>
    <Image imageSrc={imageSrc} imageAlt={`${name} image`} className="event__speaker_img" />
    <div className="event__speaker_info">
      <a href={`${process.env.SCHED_URL}/speaker/${username}`} target="_blank" rel="noopener noreferrer" className="event__speaker_info_link">
        <div className="event__speaker_name">
          <p>{ name }</p>
        </div>
      </a>
      <div className="event__speaker_tw">
        <a href={urlLink} target="_blank" rel="noopener noreferrer" className="event__speaker_tw_link">{ url }</a>
      </div>
      <div className="event__speaker_desc userDescWrapper">
        <p className="userDescription">{ about }</p>
        <div className="read-more">
          <a
            href={`${process.env.SCHED_URL}/speaker/${username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
                Read more
          </a>
        </div>
      </div>
    </div>
  </div>
)

SpeakersComponent.propTypes = {
  about: PropTypes.string,
  align: PropTypes.string,
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  url: PropTypes.string,
  urlLink: PropTypes.string,
  username: PropTypes.string,
}

export default SpeakersComponent
