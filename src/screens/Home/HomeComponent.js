import React from 'react'
import PropTypes from 'prop-types'
import Quotes from '../../components/Quotes'
import About from '../../components/About'
import Speakers from '../../components/Speakers'
import MoreSpeakers from '../../components/Avatars/MoreSpeakers'
import AvatarsList from '../../components/AvatarsList'
import Partner from '../../components/Avatars/Partner'
import Sponsor from '../../components/Avatars/Sponsor'
import Collaborator from '../../components/Avatars/Collaborator'
import Recruiter from '../../components/Avatars/Recruiter'
import Team from '../../components/Avatars/Team'
import WhereToStay from '../../components/WhereToStay'
import Description from '../../components/Description'
import Venue from '../../components/Venue'
import Apply from '../../components/Apply'
import Register from '../../components/Register'
import LiveStreaming from '../../components/LiveStreaming'
import NoSsr from '../../components/NoSsr'

const HomeComponent = ({
  registerPre, registerPos, register, proposal, workshop, talk, fair, description, venue, where, quotes, about, videoId,
  speakers, moreSpeakers, partners, sponsors, collaborators, recruiters, team, executiveTeam
}) => (
  <div>
    { /* LIVE STREAMING */ }
    <NoSsr>
      <LiveStreaming videoId={videoId} />
    </NoSsr>

    { /* HERO */ }
    { !videoId && (
      <div className="event__hero">
        <div className="row event__hero_inner" />
      </div>
    )}

    { /* REGISTER */ }
    <Register
      register={register}
      registerPos={registerPos}
      registerPre={registerPre}
    />

    { /* APPLY */ }
    <Apply
      fair={fair}
      proposal={proposal}
      talk={talk}
      workshop={workshop}
    />

    { /* QUOTES */ }
    <section className="wrapper">
      <Quotes quotes={quotes} />
    </section>

    { /* DESCRIPTION */ }
    <Description description={description} />

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
      <NoSsr>
        <Speakers speakers={speakers} />
      </NoSsr>
    </section>

    { /* VENUE */ }
    <Venue venue={venue} />

    { /* WHERE TO STAY */ }
    <WhereToStay {...where} />

    <NoSsr>
      { /* PARTNERS */ }
      <AvatarsList
        list={partners}
        name="PARTNERS"
        type="partners"
        Avatar={Partner}
      />

      { /* SPONSORS */ }
      <AvatarsList
        list={sponsors}
        name="SPONSORS"
        type="sponsors"
        Avatar={Sponsor}
      />

      { /* COLLABORATORS */ }
      <AvatarsList
        list={collaborators}
        name="COLLABORATORS"
        type="collaborators"
        Avatar={Collaborator}
      />

      { /* RECRUITERS */ }
      <AvatarsList
        list={recruiters}
        name="RECRUITERS"
        type="recruiters"
        Avatar={Recruiter}
      />

      { /* EXECUTIVE TEAM */ }
      <AvatarsList
        list={executiveTeam}
        name="EXECUTIVE TEAM"
        type="team"
        Avatar={Team}
      />

      { /* TEAM */ }
      <AvatarsList
        list={team}
        name="TEAM"
        type="team"
        Avatar={Team}
      />

      {/* MORE SPEAKERS */}
      <div id="more-speakers">
        <AvatarsList
          list={moreSpeakers}
          name="MORE SPEAKERS"
          type="speakers_full"
          Avatar={MoreSpeakers}
        />
      </div>
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
  executiveTeam: PropTypes.array,
}

export default HomeComponent
