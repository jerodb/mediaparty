import React from 'react'
import PropTypes from 'prop-types'

const Recruiter = ({ name, pic, username }) => (
  <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 event__recruiter">
    <a href={`${process.env.SCHED_URL}/volunteer/${username}`} target="_blank" rel="noopener noreferrer" className="">
      <img src={pic} alt={`${name} pic`} className="event__recruiter_img" />
      <div className="event__recruiters_name">
        <p>{ name }</p>
      </div>
    </a>
  </div>
)

Recruiter.propTypes = {
  name: PropTypes.string,
  pic: PropTypes.string,
  username: PropTypes.string,
}

export default Recruiter
