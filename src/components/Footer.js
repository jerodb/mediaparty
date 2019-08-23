import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { GAEvents, handleGAClick } from '../lib/GoogleAnalytics'
import { mpLogoMid } from '../res/images'

const Footer = ({ title, description, former }) => (
  <footer className="event__footer">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 event__footer_cta">
        <LazyLoadImage
          src={mpLogoMid}
          alt="Media Party / 2019"
        />
        <h3>{ title }</h3>
        <p>
          { description }
          <a href="mailto:production@mediaparty.info" className="event__contact_link">production@mediaparty.info</a>
        </p>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <p>
          <b>{ `${former}: ` }</b>
          <a href="http://lanyrd.com/2013/hhba/" className="event__link" onClick={() => { handleGAClick(GAEvents.formerEditions[0], '2013') }}>2013</a>
,
          <a href="http://lanyrd.com/2014/hhba/" className="event__link" onClick={() => { handleGAClick(GAEvents.formerEditions[0], '2014') }}>2014</a>
,
          <a href="https://hackshackersbamediaparty2015.sched.com/" className="event__link" onClick={() => { handleGAClick(GAEvents.formerEditions[0], '2015') }}>2015</a>
,
          <a href="https://hackshackersbamediaparty2016.sched.com/" className="event__link" onClick={() => { handleGAClick(GAEvents.formerEditions[0], '2016') }}>2016</a>
,
          <a href="http://sched17.mediaparty.info/" className="event__link" onClick={() => { handleGAClick(GAEvents.formerEditions[0], '2017') }}>2017</a>
,
          <a href="http://sched18.mediaparty.info/" className="event__link" onClick={() => { handleGAClick(GAEvents.formerEditions[0], '2018') }}>2018</a>
        </p>
        <p className="event__copyright">Copyright © 2019</p>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  former: PropTypes.string.isRequired,
}

export default Footer
