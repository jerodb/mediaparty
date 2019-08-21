import React from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import { GAEvents, handleGAClick } from '../lib/GoogleAnalytics'

const { HOST } = process.env

const Header = ({ lang, nav, root }) => (
  <header className="event__header wrapper-header">
    <div className="row">
      <div className="event__lang">
        <p>
          <a
            href={`${HOST}${lang.to}`}
            title={lang.title}
            onClick={() => { handleGAClick(GAEvents.header[0], lang.description) }}
            className="event__lang_link"
          >
            { lang.description }
          </a>
        </p>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-9 event__nav">
        <div className="title-line" />
        <Link
          to={`${root}/agenda`}
          className="event__menu_item event__agenda"
          onClick={() => { handleGAClick(GAEvents.header[0], 'Agenda') }}
        >
          { nav.agenda }
        </Link>
        <Link
          to={`${root}/#speakers`}
          className="event__menu_item event__speakers"
          onClick={() => { handleGAClick(GAEvents.header[0], 'Speakers') }}
        >
          { nav.speakers }
        </Link>
        <Link
          to={`${root}/#venue`}
          className="event__menu_item event__venue"
          onClick={() => { handleGAClick(GAEvents.header[0], 'Venue') }}
        >
          { nav.venue }
        </Link>
        <Link
          to={`${root}/#where-to-stay`}
          className="event__menu_item event__where"
          onClick={() => { handleGAClick(GAEvents.header[0], 'Where to stay') }}
        >
          { nav.stay }
        </Link>
        <Link
          to={`${root}/#more-speakers`}
          className="event__menu_item"
          onClick={() => { handleGAClick(GAEvents.header[0], 'More Speakers') }}
        >
          { nav.moreSpeakers }
        </Link>
        <a href="https://blog.mediaparty.info" target="_blank" rel="noopener noreferrer" className="event__menu_item event__blog" onClick={() => { handleGAClick(GAEvents.header[0], 'Blog') }}>{ nav.blog }</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  lang: PropTypes.object,
  nav: PropTypes.object,
  root: PropTypes.string,
}

export default Header
