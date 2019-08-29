import React from 'react'
import PropTypes from 'prop-types'
import { GAEvents, handleGAClick } from '../lib/GoogleAnalytics'

const Register = ({ register, registerPos, registerPre }) => (
  <section className="event__actions">
    <div className="row">
      <div className="col-xs-12 event__meet_up">
        <div className="wrapper">
          <p>{ registerPre }</p>
          <div className="event__meet_up_links">
            <div className="links_inner">
              <a
                href="https://www.meetup.com/es-ES/HacksHackersBA/events/"
                onClick={() => { handleGAClick(GAEvents.hero[0]) }}
                target="_blank"
                rel="noopener noreferrer"
                className="action_button"
              >
                { register }
              </a>
            </div>
          </div>
          <p>{ registerPos }</p>
        </div>
      </div>
    </div>
  </section>
)

Register.propTypes = {
  register: PropTypes.string,
  registerPos: PropTypes.string,
  registerPre: PropTypes.string,
}

export default Register
