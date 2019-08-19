import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'


const MoreSpeakers = ({
  about, name, imageSrc, url, urlLink, username
}) => (
  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 event__speaker">
    <a href={`${process.env.SCHED_URL}/speaker/${username}`} target="_blank" rel="noopener noreferrer" className="event__speaker_info_link">
      <Image imageSrc={imageSrc} imageAlt={`${name} image`} className="event__speaker_img" altSrc={name} />
      <div className="event__speaker_name">
        <p>{ name }</p>
      </div>
    </a>
    <div className="event__speaker_tw">
      <a href={urlLink} target="_blank" rel="noopener noreferrer" className="event__speaker_tw_link">{ url }</a>
    </div>
    <div className="event__speaker_desc" style={{ position: 'relative' }}>
      <p>{ about }</p>
      <div className="read-more">
        <a style={{ color: '#333333' }} href={`${process.env.SCHED_URL}/speaker/${username}`} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  </div>
)

MoreSpeakers.propTypes = {
  about: PropTypes.string,
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  url: PropTypes.string,
  urlLink: PropTypes.string,
  username: PropTypes.string,
}

export default MoreSpeakers
