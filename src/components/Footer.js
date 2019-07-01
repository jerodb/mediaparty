import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import gaEvents from '../config/gaEvents';

class Footer extends React.Component {
  render() {
    const { title, description, former } = this.props;

    const handleGAClick = (ev, action) => {
      const evObj = ev;
      evObj.action = action || ev.action;
      ReactGA.event(evObj);
    };

    return (
      <footer className="event__footer">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 event__footer_cta">
            <img src="../assets/img/mp_logo_mid.png" title="Media Party / 2019" alt="Media Party / 2019" />
            <h3>{ title }</h3>
            <p>
              { description }
              <a href="mailto:production@mediaparty.info" className="event__contact_link">production@mediaparty.info</a>
            </p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p>{ `${ former }: ` }
              <a href="http://lanyrd.com/2013/hhba/" className="event__link" onClick={ () => { handleGAClick(gaEvents.formerEditions[0], '2013'); } }>2013</a>,
              <a href="http://lanyrd.com/2014/hhba/" className="event__link" onClick={ () => { handleGAClick(gaEvents.formerEditions[0], '2014'); } }>2014</a>,
              <a href="https://hackshackersbamediaparty2015.sched.com/" className="event__link" onClick={ () => { handleGAClick(gaEvents.formerEditions[0], '2015'); } }>2015</a>,
              <a href="https://hackshackersbamediaparty2016.sched.com/" className="event__link" onClick={ () => { handleGAClick(gaEvents.formerEditions[0], '2016'); } }>2016</a>,
              <a href="http://sched17.mediaparty.info//" className="event__link" onClick={ () => { handleGAClick(gaEvents.formerEditions[0], '2017'); } }>2017</a>
            </p>
            <p className="event__copyright">Copyright © 2019</p>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  former: PropTypes.string,
};

export default Footer;
