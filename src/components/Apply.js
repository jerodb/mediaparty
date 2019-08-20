import React from 'react'
import PropTypes from 'prop-types'
import { GAEvents, handleGAClick } from '../lib/GoogleAnalytics'

const Apply = ({
  fair, proposal, talk, workshop
}) => (
  <section className="wrapper event__proposals">
    <div className="col-sm-12 col-xs-12 event__forms">
      <p>{ proposal }</p>
      <div className="event__forms_links">
        { /* <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2qysTQB0GCYZALBMnf9lPttA8yyl-tUvq0VbpzYSZYrM8gw/viewform" onClick={ () => { handleGAClick(GAEvents.hero[9]); } } target="_blank" rel="noopener noreferrer" className="event__form_cta">{ applyHere }</a> */ }
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdMpxrwWyUYYRzG1mliRBaX342I8ar6I5PuueTKQaSPGNntBQ/viewform?usp=sf_link"
          onClick={() => { handleGAClick(GAEvents.hero[3]) }}
          target="_blank"
          rel="noopener noreferrer"
          className="event__form_cta"
        >
          { workshop }
        </a>
              &nbsp;/&nbsp;
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeSv2HzbdR_mIz_LUUJPzkfJcF_KGIJpkHMTWm--mZjCBNWIw/viewform"
          onClick={() => { handleGAClick(GAEvents.hero[4]) }}
          target="_blank"
          rel="noopener noreferrer"
          className="event__form_cta"
        >
          { talk }
        </a>
              &nbsp;/&nbsp;
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSehECCx60bQxRPkRPUyeJTpjY_cuPQQp9LvADc2LzlrWTzNZQ/viewform?usp=sf_link"
          onClick={() => { handleGAClick(GAEvents.hero[5]) }}
          target="_blank"
          rel="noopener noreferrer"
          className="event__form_cta"
        >
          { fair }
        </a>
      </div>
    </div>
  </section>
)

Apply.propTypes = {
  fair: PropTypes.string,
  proposal: PropTypes.string,
  talk: PropTypes.string,
  workshop: PropTypes.string,
}

export default Apply
