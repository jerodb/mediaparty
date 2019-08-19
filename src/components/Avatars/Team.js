import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'

const Team = ({ name, imageSrc, username }) => (
  <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 event__team_member">
    <a href={`${process.env.SCHED_URL}/artist/${username}`} target="_blank" rel="noopener noreferrer">
      <Image imageSrc={imageSrc} className="event__team_img" altSrc={name} />
      <div className="event__team_name">
        <p>{ name }</p>
      </div>
    </a>
  </div>
)

Team.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  username: PropTypes.string,
}

export default Team
