import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import fetch from 'isomorphic-fetch';
import Quotes from './Quotes';
import About from './About';
import CardFeatured from './partials/CardFeatured';
import CardSecondary from './partials/CardSecondary';
import CardA from './partials/CardA';
import CardB from './partials/CardB';
import CardC from './partials/CardC';
import CardD from './partials/CardD';
import CardE from './partials/CardE';
import gaEvents from '../config/gaEvents';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      mapEvents: 'notAllowEvents',
      featuredSpeakers: [],
      secondarySpeakers: [],
      partners: [],
      sponsors: [],
      collaborators: [],
      recruiters: [],
      team: [],
      executiveTeam: [],
    };
    // this.sponsors = '';

    this.allowMapEvents = this.allowMapEvents.bind(this);
  }

  componentDidMount() {
    // const script = document.createElement('script');
    // script.src = 'https://mediaparty2017.sched.com/js/embed.js';
    // script.async = true;
    // this.sponsors.appendChild(script);
    fetch('/api/user/front', {
      method: 'GET',
    })
    .then((res) => {
      res.json().then((data) => {
        this.setState({
          featuredSpeakers: data.speakers,
          secondarySpeakers: data.speakersSec,
          partners: data.partners,
          sponsors: data.sponsors,
          collaborators: data.collaborators,
          recruiters: data.recruiters,
          team: data.team,
          executiveTeam: data.executiveTeam,
        });
      });
    });
  }

  allowMapEvents(allow) {
    const state = allow ? 'allowEvents' : 'notAllowEvents';
    this.setState({ mapEvents: state });
  }

  iframeVideo() {
    return {
      __html: '<iframe name="video" src="https://www.youtube.com/embed/-nIOwew9Crk?rel=0&amp;controls=0&amp;showinfo=0" allowfullscreen></iframe>',
    };
  }

  iframeVideoStreaming() {
    return {
      __html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jUgxMXsMJOI?rel=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1" frameborder="0" allowfullscreen></iframe>',
    };
  }

  iframeMap() {
    return {
      __html: '<iframe name="iframe-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.614888414615!2d-58.41068!3d-34.606596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6dd823092cb367d9!2sCiudad+Cultural+Konex!5e0!3m2!1sen!2sar!4v1498682731427" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen></iframe>',
    };
  }

  render() {
    const { root, registerPre, registerPos, here, register, proposal, day, workshop, talk, fair, description, venue, where, sponsor, quotes, about } = this.props;

    const handleGAClick = (ev, action) => {
      const evObj = ev;
      evObj.action = action || ev.action;
      ReactGA.event(evObj);
    };

    return (
      <div>
        {/*
        <section className="wrapper event__streaming" style={ { display: 'none' } }>
          <div className="video-wrapper" dangerouslySetInnerHTML={ this.iframeVideoStreaming() } onClick={ () => { handleGAClick(gaEvents.hero[7]); } } />
        </section>
        */}
        <div className="event__hero">
          <div className="row event__hero_inner" />
        </div>
        { /* CTAs */ }
        {/*

        <section className="event__actions">
          <div className="row">
            <div className="col-xs-12 event__meet_up">
              <div className="wrapper">
                <p>{ registerPre }</p>
                <p className="title">&darr;&darr; { register } &darr;&darr;</p>
                <div className="event__meet_up_links">
                  <div className="left_arrow">{here} &rarr; </div>
                  <div className="links_inner">
                    <a href="https://www.meetup.com/es-ES/HacksHackersBA/events/241141911/" onClick={ () => { handleGAClick(gaEvents.hero[0]); } } target="_blank" rel="noopener noreferrer" className="event__meet_up_cta">{ day } 1</a> /
                    <a href="https://www.meetup.com/es-ES/HacksHackersBA/events/241142717/" onClick={ () => { handleGAClick(gaEvents.hero[1]); } } target="_blank" rel="noopener noreferrer" className="event__meet_up_cta">{ day } 2</a> /
                    <a href="https://www.meetup.com/es-ES/HacksHackersBA/events/241142729/" onClick={ () => { handleGAClick(gaEvents.hero[2]); } } target="_blank" rel="noopener noreferrer" className="event__meet_up_cta">{ day } 3</a>
                  </div>

                  <div className="right_arrow"> &larr; {here}</div>
                </div>
                <p>{ registerPos }</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__forms">
              <p>{ proposal }</p>
              <div className="event__forms_links">
                <Link to={ '/' } className="event__form_cta disabled" onClick={ () => { handleGAClick(gaEvents.hero[3]); } }>{ workshop }</Link> /
                <Link to={ '/' } className="event__form_cta disabled" onClick={ () => { handleGAClick(gaEvents.hero[4]); } }>{ talk }</Link> /
                <Link to={ '/' } className="event__form_cta disabled" onClick={ () => { handleGAClick(gaEvents.hero[5]); } }>{ fair }</Link>
              </div>
            </div>
          </div>
        </section>
        */}

        { /* QUOTES */ }
        <section className="wrapper">
          <Quotes data={ quotes } />
        </section>

        { /* DESCRIPTION */ }
        <section className="event__description">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__aside">
              <div className="event__hhba_wrapper">
                <p className="event__hhba">Hacks/Hackers Buenos Aires</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__desc_text">
              <div className="event__desc_wrapper">
                <p dangerouslySetInnerHTML={ description } />
                <div className="video-wrapper" dangerouslySetInnerHTML={ this.iframeVideo() } onClick={ () => { handleGAClick(gaEvents.hero[6]); } } />
              </div>
            </div>
          </div>
        </section>

        { /* TIMELINE */ }
        <section className="event__timeline" />

        { /* ABOUT */ }
        <section className="wrapper">
          <About data={ about } />
        </section>

        {/* SPEAKERS */}
        { this.state.featuredSpeakers.length > 0 &&
        <section id="speakers" className="wrapper">
          <h2><div className="title-txt">SPEAKERS 2017</div><div className="title-line" /></h2>
          <div className="event__speakers_featured">
            {
              this.state.featuredSpeakers.map((data, k) => {
                const dataObj = data;
                dataObj.id = k;
                return (<CardFeatured key={ dataObj.id } data={ dataObj } />);
              })
            }
          </div>
        </section>
        }

        { /* VENUE */ }
        <section id="venue">
          <div className="event__venue_info">
            <h2>{ venue }</h2>
            <p className="event__venue_name">Ciudad Cultural Konex</p>
            <p className="event__venue_address">Sarmiento 3131, Buenos Aires, Argentina</p>
          </div>
          <div className={ this.state.mapEvents } dangerouslySetInnerHTML={ this.iframeMap() } onClick={ () => { this.allowMapEvents(true); } } onMouseLeave={ () => { this.allowMapEvents(false); } } />
        </section>

        { /* WHERE TO STAY */ }
        <section id="where-to-stay" className="wrapper event__where_to_stay">
          <h2><div className="title-txt">{ where.title }</div><div className="title-line" /></h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__where_to_stay_description" dangerouslySetInnerHTML={ where.description } />
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__where_to_stay_description">
              <span dangerouslySetInnerHTML={ where.description2 } />
              <p><a href="http://www.abastohotel.com/" target="_blank" onClick={ () => { handleGAClick(gaEvents.whereToStay[0], 'Abasto Hotel'); } }>Abasto Hotel</a></p>
              <p><a href="http://www.hotelegipto.com.ar/" target="_blank" onClick={ () => { handleGAClick(gaEvents.whereToStay[0], 'Hotel Egipto'); } }>Hotel Egipto</a></p>
              <p><a href="http://www.nontuehotel.com.ar/" target="_blank" onClick={ () => { handleGAClick(gaEvents.whereToStay[0], 'Hotel N’Ontue'); } }>Hotel N’Ontue</a></p>
              <p><a href="http://abastoapartsuites.com.ar/" target="_blank" onClick={ () => { handleGAClick(gaEvents.whereToStay[0], 'Abasto Apartments & Suites'); } }>Abasto Apartments & Suites</a></p>
            </div>
          </div>
        </section>

        { /* PARTNERS */ }
        { this.state.partners.length > 0 &&
          <section className="event__partners wrapper">
            <h2><div className="title-txt">PARTNERS</div><div className="title-line" /></h2>
            <div className="row flex-wrapper">
              {
                this.state.partners.map((data, k) => {
                  return (<CardA key={ k } data={ data } />);
                })
              }
            </div>
          </section>
        }

        { /* SPONSORS */ }
        { this.state.sponsors.length > 0 &&
          <section className="event__sponsors wrapper">
            <h2><div className="title-txt">SPONSORS</div><div className="title-line" /></h2>
            <div className="row flex-wrapper">
              {
                this.state.sponsors.map((data, k) => {
                  return (<CardB key={ k } data={ data } />);
                })
              }
            </div>
          </section>
        }

        { /* COLLABORATORS */ }
        { /* this.state.collaborators.length > 0 &&
        <section className="event__collaborators wrapper">
          <h2><div className="title-txt">COLLABORATORS</div><div className="title-line" /></h2>
          <div className="row flex-wrapper">
            {
              this.state.collaborators.map((data, k) => {
                return (<CardC key={ k } data={ data } />);
              })
            }
          </div>
        </section>
        */ }

        { /* RECRUITERS */ }
        { /* this.state.recruiters.length > 0 &&
        <section className="event__recruiters wrapper">
          <h2><div className="title-txt">RECRUITERS</div><div className="title-line" /></h2>
          <div className="row flex-wrapper">
            {
              this.state.recruiters.map((data, k) => {
                return (<CardD key={ k } data={ data } />);
              })
            }
          </div>
        </section>
        */ }

        { /* EXECUTIVE TEAM */ }
        { /* this.state.executiveTeam.length > 0 &&
        <section className="event__team wrapper">
          <h2><div className="title-txt">EXECUTIVE TEAM</div><div className="title-line" /></h2>
          <div className="row flex-wrapper">
            {
              this.state.executiveTeam.map((data, k) => {
                return (<CardE key={ k } data={ data } />);
              })
            }
          </div>
        </section>
        */ }

        { /* TEAM */ }
        { /* this.state.team.length > 0 &&
        <section className="event__team wrapper">
          <h2><div className="title-txt">TEAM</div><div className="title-line" /></h2>
          <div className="row flex-wrapper">
            {
              this.state.team.map((data, k) => {
                return (<CardE key={ k } data={ data } />);
              })
            }
          </div>
        </section>
        */ }

        {/* MORE SPEAKERS */}
        { /* this.state.secondarySpeakers.length > 0 &&
          <section id="more-speakers" className="wrapper">
            <h2><div className="title-txt">MORE SPEAKERS</div><div className="title-line" /></h2>
            <div className="event__speakers_full">
              <div className="row event__speakers_full_inner">
                {
                  this.state.secondarySpeakers.map((data, k) => {
                    return (<CardSecondary key={ k } data={ data } />);
                  })
                }
              </div>
            </div>
          </section>
        */ }

        { /* EMBEDDED SPONSORS */ }
        { /*
        <section className="wrapper">
          <div className="titleSection">{ sponsor.title }</div>
          <a id="sched-embed" data-sched-sidebar="no" href="https://mediaparty2017.sched.com/directory/sponsors">
            View the Media Party 2018 mobile app
          </a>
          <div ref={ (ref) => (this.sponsors = ref) } />
        </section>
         */ }
      </div>
    );
  }
}

export default Home;
