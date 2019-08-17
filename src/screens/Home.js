import React from 'react'
import ReactGA from 'react-ga'
import Quotes from '../components/Quotes'
import About from '../components/About'
import Speakers from '../components/Speakers'
import MoreSpeakers from '../components/Avatars/MoreSpeakers'
import AvatarsList from '../components/AvatarsList'
import Partner from '../components/Avatars/Partner'
import Sponsor from '../components/Avatars/Sponsor'
import Collaborator from '../components/Avatars/Collaborator'
import Recruiter from '../components/Avatars/Recruiter'
import Team from '../components/Avatars/Team'
import gaEvents from '../config/gaEvents'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      mapEvents: 'notAllowEvents',
      featuredSpeakers: [],
      moreSpeakers: [],
      partners: [],
      sponsors: [],
      collaborators: [],
      recruiters: [],
      team: [],
      executiveTeam: [],
    }
    // this.sponsors = '';

    this.allowMapEvents = this.allowMapEvents.bind(this)
  }

  componentDidMount() {
    // const script = document.createElement('script');
    // script.src = 'https://mediaparty2018.sched.com/js/embed.js';
    // script.async = true;
    // this.sponsors.appendChild(script);
    fetch('/api/user/front', {
      method: 'GET',
    })
      .then(res => {
        res.json().then(data => {
          this.setState({
            featuredSpeakers: data.speakers,
            moreSpeakers: data.moreSpeakers,
            partners: data.partners,
            sponsors: data.sponsors,
            collaborators: data.collaborators,
            recruiters: data.recruiters,
            team: data.team,
            executiveTeam: data.executiveTeam,
          })
        })
      })
  }

  allowMapEvents(allow) {
    const state = allow ? 'allowEvents' : 'notAllowEvents'
    this.setState({ mapEvents: state })
  }

  iframeVideo() {
    return {
      __html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-STplo5GrxA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    }
  }

  iframeVideoStreaming(videoId) {
    return {
      __html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?rel=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1" frameborder="0" allowfullscreen></iframe>`,
    }
  }

  iframeMap() {
    return {
      __html: '<iframe name="iframe-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.614888414615!2d-58.41068!3d-34.606596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6dd823092cb367d9!2sCiudad+Cultural+Konex!5e0!3m2!1sen!2sar!4v1498682731427" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen></iframe>',
    }
  }

  render() {
    const {
      registerPre, registerPos, here, register, proposal, day, workshop, talk, fair, award, applyHere, description, venue, where, sponsor, quotes, about, videoId
    } = this.props

    const {
      collaborators, executiveTeam, featuredSpeakers, mapEvents, moreSpeakers,
      partners, recruiters, sponsors, team
    } = this.state

    const handleGAClick = (ev, action) => {
      const evObj = ev
      evObj.action = action || ev.action
      ReactGA.event(evObj)
    }

    return (
      <div>
        {
          videoId
            && (
            <section className="wrapper event__streaming">
              <div className="video-wrapper" dangerouslySetInnerHTML={this.iframeVideoStreaming(videoId)} onClick={() => { handleGAClick(gaEvents.hero[7]) }} />
            </section>
            )
        }
        <div className="event__hero">
          <div className="row event__hero_inner" />
        </div>
        { /* CTAs */ }

        <section className="event__actions">
          <div className="row">
            <div className="col-xs-12 event__meet_up">
              <div className="wrapper">
                <p>{ registerPre }</p>
                { /* <p className="title">&darr;&darr; { register } &darr;&darr;</p>
                <div className="event__meet_up_links">
                  <div className="left_arrow">{here} &rarr; </div>
                  <div className="links_inner">
                    <a href="https://www.meetup.com/es-ES/HacksHackersBA/events/241141911/" onClick={ () => { handleGAClick(gaEvents.hero[0]); } } target="_blank" rel="noopener noreferrer" className="event__meet_up_cta">{ day } 1</a> /
                    <a href="https://www.meetup.com/es-ES/HacksHackersBA/events/241142717/" onClick={ () => { handleGAClick(gaEvents.hero[1]); } } target="_blank" rel="noopener noreferrer" className="event__meet_up_cta">{ day } 2</a> /
                    <a href="https://www.meetup.com/es-ES/HacksHackersBA/events/241142729/" onClick={ () => { handleGAClick(gaEvents.hero[2]); } } target="_blank" rel="noopener noreferrer" className="event__meet_up_cta">{ day } 3</a>
                  </div>
                  <div className="right_arrow"> &larr; {here}</div>
                </div> */}
                <div className="event__meet_up_links">
                  <div className="links_inner">
                    <a href="https://www.meetup.com/es-ES/HacksHackersBA/events/" onClick={() => { handleGAClick(gaEvents.hero[0]) }} target="_blank" rel="noopener noreferrer" className="event__meet_up_cta">{ register }</a>
                  </div>
                </div>
                <p>{ registerPos }</p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper event__proposals">
          <div className="col-sm-12 col-xs-12 event__forms">
            <p>{ proposal }</p>
            <div className="event__forms_links">
              { /* <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2qysTQB0GCYZALBMnf9lPttA8yyl-tUvq0VbpzYSZYrM8gw/viewform" onClick={ () => { handleGAClick(gaEvents.hero[9]); } } target="_blank" rel="noopener noreferrer" className="event__form_cta">{ applyHere }</a> */ }
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdMpxrwWyUYYRzG1mliRBaX342I8ar6I5PuueTKQaSPGNntBQ/viewform?usp=sf_link"
                onClick={() => { handleGAClick(gaEvents.hero[3]) }}
                target="_blank"
                rel="noopener noreferrer"
                className="event__form_cta"
              >
                { workshop }
              </a>
              &nbsp;/&nbsp;
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeSv2HzbdR_mIz_LUUJPzkfJcF_KGIJpkHMTWm--mZjCBNWIw/viewform"
                onClick={() => { handleGAClick(gaEvents.hero[4]) }}
                target="_blank"
                rel="noopener noreferrer"
                className="event__form_cta"
              >
                { talk }
              </a>
              &nbsp;/&nbsp;
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSehECCx60bQxRPkRPUyeJTpjY_cuPQQp9LvADc2LzlrWTzNZQ/viewform?usp=sf_link"
                onClick={() => { handleGAClick(gaEvents.hero[5]) }}
                target="_blank"
                rel="noopener noreferrer"
                className="event__form_cta"
              >
                { fair }
              </a>
            </div>
          </div>
        </section>

        { /* QUOTES */ }
        <section className="wrapper">
          <Quotes quotes={quotes} />
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
                <p dangerouslySetInnerHTML={description} />
                <div className="video-wrapper" dangerouslySetInnerHTML={this.iframeVideo()} onClick={() => { handleGAClick(gaEvents.hero[6]) }} />
              </div>
            </div>
          </div>
        </section>

        { /* TIMELINE */ }
        {
        // <section className="wrapper">
        //  <div className="event__timeline" />
        // </section>
        }
        { /* ABOUT */ }
        <section className="wrapper">
          <About about={about} />
        </section>

        {/* SPEAKERS */}
        <section id="speakers" className="wrapper">
          <Speakers speakers={featuredSpeakers} />
        </section>

        { /* VENUE */ }
        <section id="venue">
          <div className="event__venue_info">
            <h2>{ venue }</h2>
            <p className="event__venue_name">Ciudad Cultural Konex</p>
            <p className="event__venue_address">Sarmiento 3131, Buenos Aires, Argentina</p>
          </div>
          <div className={mapEvents} dangerouslySetInnerHTML={this.iframeMap()} onClick={() => { this.allowMapEvents(true) }} onMouseLeave={() => { this.allowMapEvents(false) }} />
        </section>

        { /* WHERE TO STAY */ }
        <section id="where-to-stay" className="wrapper event__where_to_stay">
          <h2>
            <div className="title-txt">{ where.title }</div>
            <div className="title-line" />
          </h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__where_to_stay_description" dangerouslySetInnerHTML={where.description} />
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__where_to_stay_description">
              <span dangerouslySetInnerHTML={where.description2} />
              <p><a href="http://www.abastohotel.com/" target="_blank" rel="noopener noreferrer" onClick={() => { handleGAClick(gaEvents.whereToStay[0], 'Abasto Hotel') }}>Abasto Hotel</a></p>
              <p><a href="https://www.hotelegipto.com.ar/" target="_blank" rel="noopener noreferrer" onClick={() => { handleGAClick(gaEvents.whereToStay[0], 'Hotel Egipto') }}>Hotel Egipto</a></p>
              <p><a href="http://www.nontuehotel.com.ar/" target="_blank" rel="noopener noreferrer" onClick={() => { handleGAClick(gaEvents.whereToStay[0], 'Hotel N’Ontue') }}>Hotel N’Ontue</a></p>
              <p><a href="https://www.trivago.com.ar/buenos-aires-545952/hotel/abasto-apartments---suites-895991" target="_blank" rel="noopener noreferrer" onClick={() => { handleGAClick(gaEvents.whereToStay[0], 'Abasto Apartments & Suites') }}>Abasto Apartments & Suites</a></p>
            </div>
          </div>
        </section>

        { /* PARTNERS */ }
        { partners[0]
          && (
          <AvatarsList
            list={partners}
            name="PARTNERS"
            type="partners"
            Avatar={Partner}
          />
          )
        }

        { /* SPONSORS */ }
        { sponsors[0]
          && (
          <AvatarsList
            list={sponsors}
            name="SPONSORS"
            type="sponsors"
            Avatar={Sponsor}
          />
          )
        }

        { /* COLLABORATORS */ }
        { collaborators[0]
          && (
          <AvatarsList
            list={collaborators}
            name="COLLABORATORS"
            type="collaborators"
            Avatar={Collaborator}
          />
          )
        }

        { /* RECRUITERS */ }
        { recruiters[0]
          && (
          <AvatarsList
            list={recruiters}
            name="RECRUITERS"
            type="recruiters"
            Avatar={Recruiter}
          />
          )
        }

        { /* EXECUTIVE TEAM */ }
        { executiveTeam[0]
          && (
          <AvatarsList
            list={executiveTeam}
            name="EXECUTIVE TEAM"
            type="team"
            Avatar={Team}
          />
          )
        }

        { /* TEAM */ }
        { team[0]
          && (
          <AvatarsList
            list={team}
            name="TEAM"
            type="team"
            Avatar={Team}
          />
          )
        }

        {/* MORE SPEAKERS */}
        <div id="more-speakers">
          { moreSpeakers[0]
            && (
            <AvatarsList
              list={moreSpeakers}
              name="MORE SPEAKERS"
              type="speakers_full"
              Avatar={MoreSpeakers}
            />
            )
          }
        </div>

        { /* EMBEDDED SPONSORS */ }
        { /*
        <section className="wrapper">
          <div className="titleSection">{ sponsor.title }</div>
          <a id="sched-embed" data-sched-sidebar="no" href="https://mediaparty2018.sched.com/directory/sponsors">
            View the Media Party 2018 mobile app
          </a>
          <div ref={ (ref) => (this.sponsors = ref) } />
        </section>
         */ }
      </div>
    )
  }
}

export default Home
