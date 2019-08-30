import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadComponent, trackWindowScroll } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import Quotes from '../../components/Quotes'
import About from '../../components/About'
import Speakers from '../../components/Speakers'
import MoreSpeakers from '../../components/Avatars/MoreSpeakers'
import AvatarsList from '../../components/AvatarsList'
// import Partner from '../../components/Avatars/Partner'
import Sponsor from '../../components/Avatars/Sponsor'
// import Collaborator from '../../components/Avatars/Collaborator'
// import Recruiter from '../../components/Avatars/Recruiter'
import Team from '../../components/Avatars/Team'
import WhereToStay from '../../components/WhereToStay'
import Description from '../../components/Description'
import Venue from '../../components/Venue'
// import Apply from '../../components/Apply'
import Register from '../../components/Register'
import LiveStreaming from '../../components/LiveStreaming'
import NoSsr from '../../components/NoSsr'
import Space from '../../components/Space'
import { GAEvents, handleGAClick } from '../../lib/GoogleAnalytics'

const HomeComponent = ({
  registerPre, registerPos, register, description, venue, where, quotes, about, videoId,
  speakers, moreSpeakers, sponsors, team, hosts, root, goToAgenda, speakersTitle, sponsorsTitle, hostsTitle, teamTitle, moreSpeakersTitle, voteText, vote, participate, participateText, participateText2
}) => ( // collaborators, recruiters, partners, proposal, workshop, talk, fair,
  <div>
    { /* LIVE STREAMING */ }
    <NoSsr>
      <LiveStreaming videoId={videoId} />
    </NoSsr>

    { /* HERO */ }
    { !videoId && (
      <div className="event__hero">
        <LazyLoadComponent>
          <div className="row event__hero_inner" />
        </LazyLoadComponent>
      </div>
    )}

    { /* REGISTER */ }
    <Register
      register={register}
      registerPos={registerPos}
      registerPre={registerPre}
    />

    { /* APPLY */ }
    { /*
    <Apply
      fair={fair}
      proposal={proposal}
      talk={talk}
      workshop={workshop}
    />
    */ }

    <section className="wrapper event__extra">
      <div className="event__extra_text">{voteText}</div>
      <div className="event__extra_btn">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfPZs8UY70QvuD-DWrzlUGFvQlWiyMtY3sla7lFKA5pYs3mNA/viewform?usp=sf_link"
          onClick={() => { handleGAClick(GAEvents.home[1]) }}
          target="_blank"
          rel="noopener noreferrer"
          className="action_button"
        >
          { vote }
        </a>
      </div>
    </section>

    <section className="wrapper event__extra">
      <div className="event__extra_text">{participateText}</div>
      <div className="event__extra_btn">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfGjzeIxeWgt9LrjC0JQsM97vk4rMLL6LEXI2D4TDEssQ1Aow/viewform "
          onClick={() => { handleGAClick(GAEvents.home[2]) }}
          target="_blank"
          rel="noopener noreferrer"
          className="action_button"
        >
          { participate }
        </a>
      </div>
    </section>

    <section className="wrapper event__extra">
      <div className="event__extra_text">{participateText2}</div>
      <div className="event__extra_btn">
        <a
          href="https://hackdash.org/dashboards/mp2019"
          onClick={() => { handleGAClick(GAEvents.home[3]) }}
          target="_blank"
          rel="noopener noreferrer"
          className="action_button"
        >
          { participate }
        </a>
      </div>
    </section>

    <section className="wrapper event__proposals">
      <div className="col-sm-12 col-xs-12 event__forms">
        <div className="event__forms_links">
          <Link
            to={`${root}/agenda`}
            onClick={() => { handleGAClick(GAEvents.home[0]) }}
            className="event__form_btn_link"
          >
            { goToAgenda }
          </Link>
        </div>
      </div>
    </section>


    { /* QUOTES */ }
    <section className="wrapper">
      <Quotes quotes={quotes} />
    </section>

    { /* DESCRIPTION */ }
    <Description description={description} />

    { /* TIMELINE */ }
    {
      // <section className="wrapper">
      //   <LazyLoadComponent>
      //     <div className="event__timeline" />
      //   </LazyLoadComponent>
      // </section>
    }

    { /* AGENDA WEB */ }
    <section className="wrapper">
      <LazyLoadComponent threshold={250}>
        <div className="event__agenda_web" />
      </LazyLoadComponent>
    </section>

    { /* ABOUT */ }
    <section className="wrapper">
      <About about={about} />
    </section>

    <Space />

    <NoSsr>
      {/* SPEAKERS */}
      <section id="speakers" className="wrapper">
        <Speakers speakers={speakers} speakersTitle={speakersTitle} />
      </section>

      <Space />

      <LazyLoadComponent
        threshold={0}
      >
        { /* SPONSORS */ }
        <AvatarsList
          list={sponsors}
          name={sponsorsTitle}
          type="sponsors"
          Avatar={Sponsor}
        />
      </LazyLoadComponent>

      <Space />

      <LazyLoadComponent
        threshold={0}
      >
        { /* HOSTS */ }
        <AvatarsList
          list={hosts}
          name={hostsTitle}
          type="team"
          Avatar={Team}
        />
      </LazyLoadComponent>

      <Space />

      <LazyLoadComponent
        threshold={0}
      >
        { /* TEAM */ }
        <AvatarsList
          list={team}
          name={teamTitle}
          type="team"
          Avatar={Team}
        />
      </LazyLoadComponent>

      <Space />

      {/* MORE SPEAKERS */}
      <div id="more-speakers">

        <LazyLoadComponent
          threshold={0}
        >
          <AvatarsList
            list={moreSpeakers}
            name={moreSpeakersTitle}
            type="speakers_full"
            Avatar={MoreSpeakers}
          />
        </LazyLoadComponent>
      </div>

      <Space />

      { /* VENUE */ }
      <Venue venue={venue} />

      <Space />

      { /* WHERE TO STAY */ }
      <WhereToStay {...where} />


      { /* PARTNERS */ }
      {/*
      <AvatarsList
        list={partners}
        name="PARTNERS"
        type="partners"
        Avatar={Partner}
      />
      */}

      { /* COLLABORATORS */ }
      {/*
      <LazyLoadComponent>
        <AvatarsList
          list={collaborators}
          name="COLLABORATORS"
          type="collaborators"
          Avatar={Collaborator}
        />
      </LazyLoadComponent>
      */}

      { /* RECRUITERS */ }
      {/*
      <LazyLoadComponent>
        <AvatarsList
          list={recruiters}
          name="RECRUITERS"
          type="recruiters"
          Avatar={Recruiter}
        />
      </LazyLoadComponent>
      */}

    </NoSsr>
  </div>
)

HomeComponent.propTypes = {
  about: PropTypes.array,
  description: PropTypes.object,
  fair: PropTypes.string,
  proposal: PropTypes.string,
  quotes: PropTypes.array,
  register: PropTypes.string,
  registerPos: PropTypes.string,
  registerPre: PropTypes.string,
  talk: PropTypes.string,
  workshop: PropTypes.string,
  venue: PropTypes.string,
  videoId: PropTypes.string,
  where: PropTypes.object,
  speakers: PropTypes.array,
  moreSpeakers: PropTypes.array,
  partners: PropTypes.array,
  sponsors: PropTypes.array,
  collaborators: PropTypes.array,
  recruiters: PropTypes.array,
  team: PropTypes.array,
  hosts: PropTypes.array,
  root: PropTypes.string,
  goToAgenda: PropTypes.string,
  speakersTitle: PropTypes.string,
  sponsorsTitle: PropTypes.string,
  hostsTitle: PropTypes.string,
  teamTitle: PropTypes.string,
  moreSpeakersTitle: PropTypes.string,
  vote: PropTypes.string,
  voteText: PropTypes.string,
  participate: PropTypes.string,
  participateText: PropTypes.string,
  participateText2: PropTypes.string
}

export default trackWindowScroll(HomeComponent)
