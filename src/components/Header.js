import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { HashLink as Link } from'react-router-hash-link';
import gaEvents from '../config/gaEvents';

class Header extends React.Component {
  render() {
    const { lang, nav, root } = this.props;
    const handleGAClick = (ev, action) => {
      ev.action = action || ev.action;
      ReactGA.event(ev);
    };

    return (
      <header className="event__header wrapper-header">
        <div className="row">
          <div className="event__lang">
            <p>
              <Link
                to={ lang.to }
                title={ lang.title }
                onClick={ () => { handleGAClick(gaEvents.header[0], lang.description); } }
                className="event__lang_link"
              >
                { lang.description }
              </Link>
            </p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-9 event__nav">
            <div className="title-line" />
            <a href="http://sched17.mediaparty.info/" target="_blank" rel="noopener noreferrer" className="event__menu_item event__agenda" onClick={ () => { handleGAClick(gaEvents.header[0], 'Agenda'); } }>{ nav.agenda }</a>
            <Link
              to={ `${ root }/#speakers` }
              className="event__menu_item event__speakers"
              onClick={ () => { handleGAClick(gaEvents.header[0], 'Speakers'); } }
            >
              { nav.speakers }
            </Link>
            <Link
              to={ `${ root }/#venue` }
              className="event__menu_item event__venue"
              onClick={ () => { handleGAClick(gaEvents.header[0], 'Venue'); } }
            >
              { nav.venue }
            </Link>
            <Link
              to={ `${ root }/#where-to-stay` }
              className="event__menu_item event__where"
              onClick={ () => { handleGAClick(gaEvents.header[0], 'Where to stay'); } }
            >
              { nav.stay }
            </Link>
            <Link
              to={ `${ root }/#more-speakers` }
              className="event__menu_item"
              onClick={ () => { handleGAClick(gaEvents.header[0], 'More Speakers'); } }
            >
              { nav.moreSpeakers }
            </Link>
            <a href="http://blog.mediaparty.info" target="_blank" rel="noopener noreferrer" className="event__menu_item event__blog" onClick={ () => { handleGAClick(gaEvents.header[0], 'Blog'); } }>{ nav.blog }</a>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  lang: PropTypes.object,
  nav: PropTypes.object,
};

export default Header;
