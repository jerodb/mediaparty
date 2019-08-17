import React from 'react'
import PropTypes from 'prop-types'

const Team = ({ name, pic, username }) => (
  <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 event__team_member">
    <a href={`${process.env.SCHED_URL}/artist/${username}`} target="_blank" rel="noopener noreferrer" className="">
      <img src={pic} alt={`${name} pic`} className="event__team_img" />
      <div className="event__team_name">
        <p>{ name }</p>
      </div>
    </a>
  </div>
)

Team.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
  username: PropTypes.string,
}

export default Team
