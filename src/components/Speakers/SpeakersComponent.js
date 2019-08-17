import React from 'react'
import PropTypes from 'prop-types'

const SpeakersComponent = ({
  about, align, name, pic, url, username
}) => (
  <div className={align}>
    <img src={pic} alt={`${name} pic`} className="event__speaker_img" />
    <div className="event__speaker_info">
      <a href={`${process.env.SCHED_URL}/speaker/${username}`} target="_blank" rel="noopener noreferrer" className="event__speaker_info_link">
        <div className="event__speaker_name">
          <p>{ name }</p>
        </div>
      </a>
      <div className="event__speaker_tw">
        <a href={url} target="_blank" rel="noopener noreferrer" className="event__speaker_tw_link">{ url }</a>
      </div>
      <div className="event__speaker_desc userDescWrapper">
        <p className="userDescription">{ about }</p>
        <div className="readMore">
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
  pic: PropTypes.string,
  url: PropTypes.string,
  username: PropTypes.string,
}

export default SpeakersComponent
